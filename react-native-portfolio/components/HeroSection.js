import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Colors } from '../theme/colors';

const BOOT_TEXT = "SYSTEM ONLINE — LOADING PROFILE: PIYUSH PADHAN";

export default function HeroSection({ onProjectsPress, onContactPress }) {
  const [typedText, setTypedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= BOOT_TEXT.length) {
        setTypedText(BOOT_TEXT.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 28);

    return () => clearInterval(interval);
  }, []);

  // Cursor blink
  useEffect(() => {
    const blink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <View style={styles.container}>
      {/* Terminal Boot Line */}
      <View style={styles.terminalRow}>
        <Text style={styles.terminalText}>
          &gt; {typedText}
          {cursorVisible && <Text style={styles.cursor}>█</Text>}
        </Text>
      </View>

      {/* Main Big Name */}
      <Text style={styles.nameFirst}>PIYUSH</Text>
      <Text style={styles.nameSecond}>PADHAN</Text>

      {/* Subtitle / Role */}
      <Text style={styles.roleText}>
        SOFTWARE DEVELOPER <Text style={{ color: Colors.cyan }}>// PYTHON &amp; ANDROID</Text>
      </Text>

      <Text style={styles.blurb}>
        Building software across the stack — from Python backends to native Android apps — and learning something new with every project.
      </Text>

      {/* Skewed Action Buttons */}
      <View style={styles.actionsRow}>
        <Pressable
          onPress={onProjectsPress}
          style={({ pressed }) => [
            styles.btnSkew,
            styles.btnPrimary,
            pressed && styles.btnPressed,
          ]}
        >
          <View style={styles.btnContentUnskew}>
            <Text style={styles.btnPrimaryText}>VIEW PROJECTS</Text>
          </View>
        </Pressable>

        <Pressable
          onPress={onContactPress}
          style={({ pressed }) => [
            styles.btnSkew,
            styles.btnSecondary,
            pressed && styles.btnPressed,
          ]}
        >
          <View style={styles.btnContentUnskew}>
            <Text style={styles.btnSecondaryText}>GET IN TOUCH</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  terminalRow: {
    minHeight: 24,
    marginBottom: 20,
  },
  terminalText: {
    fontFamily: 'ShareTechMono_400Regular',
    fontSize: 12,
    color: Colors.cyan,
    letterSpacing: 1.2,
  },
  cursor: {
    color: Colors.cyan,
  },
  nameFirst: {
    fontFamily: 'Orbitron_900Black',
    fontSize: 42,
    lineHeight: 46,
    color: Colors.orange,
    letterSpacing: 2,
  },
  nameSecond: {
    fontFamily: 'Orbitron_900Black',
    fontSize: 42,
    lineHeight: 48,
    color: Colors.cyan,
    letterSpacing: 2,
    marginBottom: 16,
  },
  roleText: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 13,
    color: Colors.fg,
    letterSpacing: 1.5,
    marginBottom: 16,
  },
  blurb: {
    fontFamily: 'ShareTechMono_400Regular',
    fontSize: 14,
    lineHeight: 22,
    color: Colors.fg,
    opacity: 0.8,
    marginBottom: 32,
  },
  actionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  btnSkew: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    transform: [{ skewX: '-12deg' }],
  },
  btnContentUnskew: {
    transform: [{ skewX: '12deg' }],
  },
  btnPrimary: {
    borderWidth: 2,
    borderColor: Colors.cyan,
    backgroundColor: 'rgba(0, 255, 255, 0.08)',
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
});
