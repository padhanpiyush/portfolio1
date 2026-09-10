import React from 'react';
import { View, Text, StyleSheet, Pressable, Linking, Alert } from 'react-native';
import { Colors } from '../theme/colors';

export default function ContactSection() {
  const handleEmail = async () => {
    const url = 'mailto:iampiyushpadhan@gmail.com';
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Email', 'iampiyushpadhan@gmail.com');
    }
  };

  const handleGitHub = async () => {
    const url = 'https://github.com/padhanpiyush';
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert('GitHub', url);
    }
  };

  return (
    <View style={styles.container}>
      {/* Contact Neon Card Box */}
      <View style={styles.contactBox}>
        <Text style={styles.title}>Let's Talk</Text>
        <Text style={styles.blurb}>
          Open to internship and entry-level opportunities in Python and Android development.
        </Text>

        <View style={styles.actionsRow}>
          <Pressable
            onPress={handleEmail}
            style={({ pressed }) => [
              styles.btnSkew,
              styles.btnPrimary,
              pressed && styles.btnPressed,
            ]}
          >
            <View style={styles.btnContentUnskew}>
              <Text style={styles.btnPrimaryText}>EMAIL ME</Text>
            </View>
          </Pressable>

          <Pressable
            onPress={handleGitHub}
            style={({ pressed }) => [
              styles.btnSkew,
              styles.btnSecondary,
              pressed && styles.btnPressed,
            ]}
          >
            <View style={styles.btnContentUnskew}>
              <Text style={styles.btnSecondaryText}>GITHUB</Text>
            </View>
          </Pressable>
        </View>
      </View>

      {/* Global Terminal Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          &gt; SYSTEM.PORTFOLIO — PIYUSH PADHAN — BUILT 2026
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 36,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  contactBox: {
    borderWidth: 2,
    borderColor: Colors.magenta,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    paddingVertical: 36,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontFamily: 'Orbitron_900Black',
    fontSize: 26,
    color: Colors.fg,
    marginBottom: 12,
    textAlign: 'center',
  },
  blurb: {
    fontFamily: 'ShareTechMono_400Regular',
    fontSize: 13,
    lineHeight: 20,
    color: Colors.fg,
    opacity: 0.75,
    textAlign: 'center',
    marginBottom: 28,
    maxWidth: 320,
  },
  actionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },
  btnSkew: {
    paddingVertical: 14,
    paddingHorizontal: 26,
    transform: [{ skewX: '-12deg' }],
  },
  btnContentUnskew: {
    transform: [{ skewX: '12deg' }],
  },
  btnPrimary: {
    borderWidth: 2,
    borderColor: Colors.cyan,
    backgroundColor: 'transparent',
  },
  btnPrimaryText: {
    fontFamily: 'ShareTechMono_400Regular',
    fontSize: 12,
    color: Colors.cyan,
    letterSpacing: 1.5,
    fontWeight: 'bold',
  },
  btnSecondary: {
    backgroundColor: Colors.magenta,
    borderWidth: 2,
    borderColor: Colors.magenta,
  },
  btnSecondaryText: {
    fontFamily: 'ShareTechMono_400Regular',
    fontSize: 12,
    color: '#000',
    letterSpacing: 1.5,
    fontWeight: 'bold',
  },
  btnPressed: {
    opacity: 0.7,
    transform: [{ skewX: '-6deg' }, { scale: 0.98 }],
  },
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(45, 27, 78, 0.4)',
  },
  footerText: {
    fontFamily: 'ShareTechMono_400Regular',
    fontSize: 10,
    color: Colors.fg,
    opacity: 0.4,
    letterSpacing: 1.5,
  },
});
