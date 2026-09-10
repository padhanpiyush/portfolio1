import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

const SKILLS_DATA = [
  {
    group: 'Languages',
    items: ['Python', 'Java', 'Kotlin', 'JavaScript'],
  },
  {
    group: 'Android Dev',
    items: ['Android Studio', 'XML Layouts', 'SQLite', 'Jetpack Basics'],
  },
  {
    group: 'Tools & Practices',
    items: ['Git', 'GitHub', 'VS Code', 'Problem Solving', 'Self-Directed Learning'],
  },
];

export default function SkillsSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>02 // SKILLS</Text>
      <Text style={styles.sectionTitle}>What I Work With</Text>
      <Text style={styles.sectionSub}>
        A scan-friendly view of the languages, tools, and habits I bring to a project.
      </Text>

      <View style={styles.groupsWrapper}>
        {SKILLS_DATA.map((group, index) => (
          <View key={index} style={styles.skillGroup}>
            <Text style={styles.groupTitle}>// {group.group.toUpperCase()}</Text>
            <View style={styles.tagList}>
              {group.items.map((item, itemIdx) => (
                <View key={itemIdx} style={styles.tag}>
                  <Text style={styles.tagText}>{item}</Text>
                </View>
              ))}
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
    marginBottom: 8,
  },
  sectionSub: {
    fontFamily: 'ShareTechMono_400Regular',
    fontSize: 13,
    lineHeight: 20,
    color: Colors.fg,
    opacity: 0.65,
    marginBottom: 24,
  },
  groupsWrapper: {
    gap: 24,
  },
  skillGroup: {
    backgroundColor: 'rgba(26, 16, 60, 0.5)',
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 18,
  },
  groupTitle: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 13,
    color: Colors.cyan,
    letterSpacing: 1.2,
    marginBottom: 14,
  },
  tagList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: 'rgba(45, 27, 78, 0.4)',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  tagText: {
    fontFamily: 'ShareTechMono_400Regular',
    fontSize: 12,
    color: Colors.fg,
  },
});
