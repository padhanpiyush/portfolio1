import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

const EDU_DATA = [
  {
    level: 'B.Tech (2nd Year, 3rd Sem) — In Progress',
    institution: 'Engineering College',
    score: 'Sem 1: 7.9 CGPA · Sem 2: 8.2 CGPA',
  },
  {
    level: 'Intermediate (Higher Secondary)',
    institution: 'Yuvodaya, Balangir',
    score: '484 / 600 — 81%',
  },
  {
    level: 'Matriculation (Secondary)',
    institution: 'S.S.V.M Loisingha',
    score: '482 / 600 — 81%',
  },
];

export default function EducationSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>04 // EDUCATION</Text>
      <Text style={styles.sectionTitle}>Academic Background</Text>

      <View style={styles.cardList}>
        {EDU_DATA.map((item, index) => (
          <View key={index} style={styles.eduCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.levelText}>{item.level}</Text>
            </View>
            <View style={styles.cardBody}>
              <View style={styles.row}>
                <Text style={styles.fieldLabel}>INSTITUTION:</Text>
                <Text style={styles.fieldValue}>{item.institution}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.fieldLabel}>SCORE / CGPA:</Text>
                <Text style={styles.fieldScore}>{item.score}</Text>
              </View>
            </View>
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
  },
  cardList: {
    gap: 16,
  },
  eduCard: {
    backgroundColor: 'rgba(26, 16, 60, 0.65)',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  cardHeader: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    backgroundColor: 'rgba(0, 255, 255, 0.04)',
  },
  levelText: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 13,
    color: Colors.cyan,
  },
  cardBody: {
    padding: 16,
    gap: 8,
  },
  row: {
    flexDirection: 'column',
    gap: 2,
  },
  fieldLabel: {
    fontFamily: 'ShareTechMono_400Regular',
    fontSize: 10,
    color: Colors.fg,
    opacity: 0.5,
    letterSpacing: 1.2,
  },
  fieldValue: {
    fontFamily: 'ShareTechMono_400Regular',
    fontSize: 13,
    color: Colors.fg,
  },
  fieldScore: {
    fontFamily: 'ShareTechMono_400Regular',
    fontSize: 13,
    color: Colors.orange,
    fontWeight: 'bold',
  },
});
