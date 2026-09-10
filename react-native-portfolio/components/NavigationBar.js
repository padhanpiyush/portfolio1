import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '../theme/colors';

const NAV_ITEMS = [
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'achievements', label: 'ACHIEVEMENTS' },
  { id: 'contact', label: 'CONTACT' },
];

export default function NavigationBar({ activeSection, onSelectSection }) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.topRow}>
        <Text style={styles.logo}>PP://</Text>
        <View style={styles.onlineBadge}>
          <View style={styles.onlineDot} />
          <Text style={styles.onlineText}>ONLINE</Text>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.navChipsScroll}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => onSelectSection(item.id)}
              activeOpacity={0.7}
              style={[styles.navChip, isActive && styles.navChipActive]}
            >
              <Text style={[styles.navChipText, isActive && styles.navChipTextActive]}>
                {item.label}
              </Text>
              {isActive && <View style={styles.activeBar} />}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'rgba(9, 0, 20, 0.92)',
    borderBottomWidth: 1.5,
    borderBottomColor: Colors.border,
    paddingTop: 12,
    paddingBottom: 8,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  logo: {
    fontFamily: 'Orbitron_900Black',
    fontSize: 18,
    color: Colors.cyan,
    letterSpacing: 2.5,
  },
  onlineBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 255, 255, 0.08)',
    borderColor: Colors.cyan,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  onlineDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.cyan,
    marginRight: 6,
  },
  onlineText: {
    fontFamily: 'ShareTechMono_400Regular',
    fontSize: 10,
    color: Colors.cyan,
    letterSpacing: 1.2,
  },
  navChipsScroll: {
    paddingHorizontal: 16,
    gap: 8,
  },
  navChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    position: 'relative',
  },
  navChipActive: {
    backgroundColor: 'rgba(0, 255, 255, 0.08)',
  },
  navChipText: {
    fontFamily: 'ShareTechMono_400Regular',
    fontSize: 12,
    color: Colors.fg,
    opacity: 0.7,
    letterSpacing: 1.5,
  },
  navChipTextActive: {
    color: Colors.cyan,
    opacity: 1,
    fontWeight: 'bold',
  },
  activeBar: {
    position: 'absolute',
    bottom: 0,
    left: 12,
    right: 12,
    height: 2,
    backgroundColor: Colors.cyan,
  },
});
