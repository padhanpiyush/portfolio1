module.exports = async(req, res) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Origin, X-Requested-With, Accept',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
    };

    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Origin, X-Requested-With, Accept');
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        res.status(405).json({ success: false, error: 'Only POST requests are allowed.' });
        return;
    }

    let body = {};

    try {
        body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    } catch (error) {
        res.status(400).json({ success: false, error: 'Invalid JSON body.' });
        return;
    }

    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
        res.status(400).json({
            success: false,
            error: 'Name, email, and message are required.'
        });
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        res.status(400).json({ success: false, error: 'Please provide a valid email address.' });
        return;
    }

    const webhookUrl = process.env.MAKE_WEBHOOK_URL;

    if (!webhookUrl) {
        res.status(500).json({
            success: false,
            error: 'Make webhook is not configured yet. Add MAKE_WEBHOOK_URL in Vercel project settings.'
        });
        return;
    }

    try {
        const makeResponse = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                subject: subject || 'Portfolio Contact',
                message,
                sentAt: new Date().toISOString()
            })
        });

        const makeText = await makeResponse.text();

        if (!makeResponse.ok) {
            console.error('Make webhook failed:', makeText);
            res.status(502).json({
                success: false,
                error: 'The message was not accepted by the automation service.'
            });
            return;
        }

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json({
            success: true,
            message: 'Message sent successfully.'
        });
    } catch (error) {
        console.error('Contact handler error:', error);
        res.status(500).json({
            success: false,
            error: 'Something went wrong while sending the message.'
        });
    }
};