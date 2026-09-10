import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

const STATS = [
  { num: '8.2', label: 'CGPA — B.TECH SEM 2' },
  { num: '81%', label: 'INTERMEDIATE SCORE' },
  { num: '2+', label: 'ONLINE INTERNSHIPS COMPLETED' },
];

export default function AboutSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>01 // ABOUT</Text>
      <Text style={styles.sectionTitle}>Who I Am</Text>

      <Text style={styles.bodyP}>
        I'm a developer working across Python and Android, with hands-on experience gained through a series of online internships. I like taking a concept from a rough idea to a working build — whether that's a script that automates something tedious or an app someone can actually use.
      </Text>

      <Text style={styles.bodyP}>
        I'm currently in my 2nd year (3rd semester) of B.Tech, still building out my portfolio — right now I'm focused on turning what I've learned in internships into projects I can point to, and picking up the tools that go with real production work.
      </Text>

      {/* Metric Stat Boxes */}
      <View style={styles.statsContainer}>
        {STATS.map((stat, i) => (
          <View key={i} style={styles.statBox}>
            <Text style={styles.statNum}>{stat.num}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
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
    marginBottom: 20,
    letterSpacing: 1,
  },
  bodyP: {
    fontFamily: 'ShareTechMono_400Regular',
    fontSize: 13,
    lineHeight: 22,
    color: Colors.fg,
    opacity: 0.85,
    marginBottom: 16,
  },
  statsContainer: {
    marginTop: 12,
    gap: 12,
  },
  statBox: {
    backgroundColor: Colors.cardTranslucent,
    borderWidth: 1,
    borderColor: Colors.borderNeon,
    borderTopWidth: 2,
    borderTopColor: Colors.cyan,
    padding: 18,
  },
  statNum: {
    fontFamily: 'Orbitron_900Black',
    fontSize: 26,
    color: Colors.cyan,
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: 'ShareTechMono_400Regular',
    fontSize: 10,
    color: Colors.fg,
    opacity: 0.7,
    letterSpacing: 1.2,
  },
});
