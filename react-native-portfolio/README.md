# Piyush Padhan — Cyberpunk Portfolio (React Native / Expo)

A mobile cross-platform version of the **Piyush Padhan Cyberpunk Developer Portfolio**, rebuilt using **React Native** and **Expo**.

---

## Features
- **Cross-Platform**: Seamless support for Android and iOS.
- **Cyberpunk / Synthwave UI**:
  - Outrun 3D horizon lines and warm radial sun bloom (`CyberBackground.js`).
  - Terminal boot typewriter animation (`HeroSection.js`).
  - Parallelogram skewed buttons (`transform: [{ skewX: '-12deg' }]`).
  - Terminal IDE cards with macOS/UNIX window control dots (`ProjectsSection.js`).
  - Sticky top header with `PP://` logo and quick-navigation chips (`NavigationBar.js`).
- **Dynamic Data Models**: Easily edit projects, skills, education, and achievements by modifying arrays in the respective components.
- **Native Linking**: One-tap email composition (`mailto:iampiyushpadhan@gmail.com`) and GitHub navigation via `Linking.openURL()`.

---

## Getting Started

### 1. Prerequisites
- **Node.js** (v18 or higher recommended): [Download from nodejs.org](https://nodejs.org)
- **Expo Go App** (Free):
  - [Install for Android (Google Play Store)](https://play.google.com/store/apps/details?id=host.exp.exponent)
  - [Install for iOS (Apple App Store)](https://apps.apple.com/app/expo-go/id982107779)

### 2. Installation
Open your terminal in this directory:
```bash
cd react-native-portfolio
npm install
```

### 3. Launch the App
Start the Expo development server:
```bash
npx expo start
```

### 4. Test on Your Phone
1. Open the **Expo Go** app on your phone.
2. Scan the **QR Code** displayed in your terminal.
3. The portfolio will immediately build and run on your physical device with live reload enabled!

---

## Directory Structure
```
react-native-portfolio/
├── App.js                   # Root component with font loader and scroll manager
├── app.json                 # Expo app configuration (dark theme, orientation)
├── package.json             # Project dependencies
├── theme/
│   └── colors.js            # Centralized color tokens (--bg, --cyan, --magenta, etc.)
└── components/
    ├── CyberBackground.js   # Outrun horizon lines and sun bloom
    ├── NavigationBar.js     # Top sticky navigation bar with section chips
    ├── HeroSection.js       # Typewriter boot sequence & skewed buttons
    ├── AboutSection.js      # Bio summary & metric stat boxes
    ├── SkillsSection.js     # Categorized skill tags
    ├── ProjectsSection.js   # Terminal-styled project cards with external links
    ├── EducationSection.js  # Academic record cards
    ├── AchievementsSection.js # Internship certificates
    └── ContactSection.js    # Contact box with Email & GitHub actions
```
