import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

const ACHIEVEMENTS_DATA = [
  {
    title: 'Python Development — Internship Certificate',
    meta: 'REPLACE WITH ISSUER & DATE',
  },
  {
    title: 'Android Development — Internship Certificate',
    meta: 'REPLACE WITH ISSUER & DATE',
  },
];

export default function AchievementsSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>05 // ACHIEVEMENTS</Text>
      <Text style={styles.sectionTitle}>Certifications &amp; Recognition</Text>
      <Text style={styles.sectionSub}>
        Only real, verifiable ones belong here. Replace the placeholders below with your actual internship completion certificates and any awards.
      </Text>

      <View style={styles.achList}>
        {ACHIEVEMENTS_DATA.map((item, index) => (
          <View key={index} style={styles.achCard}>
            <Text style={styles.achTitle}>{item.title}</Text>
            <Text style={styles.achMeta}>{item.meta}</Text>
          </View>
        ))}
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
  eyebrow: {
    fontFamily: 'ShareTechMono_400Regular',
    fontSize: 12,
    color: Colors.magenta,
    letterSpacing: 2.5,
    marginBottom: 8,
  },
  sectionTitle: {
    fontFamily: 'Orbitron_900Black',
    fontSize: 26,
    color: Colors.fg,
    marginBottom: 8,
  },
  sectionSub: {
    fontFamily: 'ShareTechMono_400Regular',
    fontSize: 13,
    lineHeight: 20,
    color: Colors.fg,
    opacity: 0.65,
    marginBottom: 20,
  },
  achList: {
    gap: 16,
  },
  achCard: {
    backgroundColor: Colors.cardTranslucent,
    borderWidth: 1,
    borderColor: Colors.borderNeon,
    borderTopWidth: 2,
    borderTopColor: Colors.orange,
    padding: 18,
  },
  achTitle: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 14,
    color: Colors.fg,
    marginBottom: 8,
    lineHeight: 20,
  },
  achMeta: {
    fontFamily: 'ShareTechMono_400Regular',
    fontSize: 11,
    color: Colors.orange,
    opacity: 0.9,
    letterSpacing: 1,
  },
});
