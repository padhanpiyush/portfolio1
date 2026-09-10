import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';
import { Colors } from '../theme/colors';

const PROJECTS_DATA = [
  {
    title: 'Project Title 1 — Python',
    path: '~/projects/python-project',
    desc: 'Replace with a real project: what it does, the problem it solves, and one concrete result or metric.',
    tags: ['Python', 'API'],
    demo: 'https://github.com/padhanpiyush',
    repo: 'https://github.com/padhanpiyush',
    placeholder: true,
  },
  {
    title: 'Project Title 2 — Android',
    path: '~/projects/android-project',
    desc: 'Replace with a real Android app: core feature, what you built it in, and what makes it worth a recruiter\'s time.',
    tags: ['Kotlin', 'Android Studio'],
    demo: 'https://github.com/padhanpiyush',
    repo: 'https://github.com/padhanpiyush',
    placeholder: true,
  },
];

export default function ProjectsSection() {
  const handleOpenLink = async (url) => {
    if (!url || url === '#') {
      Alert.alert('Notice', 'Demo link is currently a placeholder.');
      return;
    }
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Error', `Cannot open URL: ${url}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>03 // PROJECTS</Text>
      <Text style={styles.sectionTitle}>Selected Work</Text>
      <Text style={styles.sectionSub}>
        Placeholder entries below — swap these for your real projects before publishing. This section does the most convincing, so it's worth the detail.
      </Text>

      <View style={styles.projectsList}>
        {PROJECTS_DATA.map((project, index) => (
          <View key={index} style={styles.projectCard}>
            {/* Terminal Titlebar with Window Control Dots */}
            <View style={styles.titleBar}>
              <View style={styles.windowDots}>
                <View style={[styles.dot, { backgroundColor: Colors.magenta }]} />
                <View style={[styles.dot, { backgroundColor: Colors.cyan }]} />
                <View style={[styles.dot, { backgroundColor: Colors.orange }]} />
              </View>
              <Text style={styles.terminalPath}>{project.path}</Text>
            </View>

            {/* Project Content */}
            <View style={styles.cardBody}>
              <Text style={styles.projectHeading}>{project.title}</Text>
              <Text style={styles.projectDesc}>{project.desc}</Text>

              {/* Tags */}
              <View style={styles.tagRow}>
                {project.tags.map((t, tIdx) => (
                  <View key={tIdx} style={styles.tagBadge}>
                    <Text style={styles.tagBadgeText}>{t}</Text>
                  </View>
                ))}
              </View>

              {/* Action Links */}
              <View style={styles.linksRow}>
                <TouchableOpacity
                  onPress={() => handleOpenLink(project.demo)}
                  style={styles.linkButton}
                >
                  <Text style={styles.linkText}>Live Demo →</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => handleOpenLink(project.repo)}
                  style={styles.linkButton}
                >
                  <Text style={styles.linkText}>Source Code →</Text>
                </TouchableOpacity>
              </View>

              {project.placeholder && (
                <View style={styles.placeholderBanner}>
                  <Text style={styles.placeholderText}>
                    ⚠ placeholder — replace before publishing
                  </Text>
                </View>
              )}
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
  projectsList: {
    gap: 24,
  },
  projectCard: {
    borderWidth: 2,
    borderColor: Colors.cyan,
    backgroundColor: 'rgba(10, 5, 25, 0.9)',
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 255, 255, 0.08)',
    borderBottomWidth: 1,
    borderBottomColor: Colors.cyan,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  windowDots: {
    flexDirection: 'row',
    gap: 6,
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
  },
  terminalPath: {
    fontFamily: 'ShareTechMono_400Regular',
    fontSize: 11,
    color: Colors.fg,
    opacity: 0.6,
  },
  cardBody: {
    padding: 18,
  },
  projectHeading: {
    fontFamily: 'Orbitron_700Bold',
    fontSize: 18,
    color: Colors.cyan,
    marginBottom: 10,
  },
  projectDesc: {
    fontFamily: 'ShareTechMono_400Regular',
    fontSize: 13,
    lineHeight: 21,
    color: Colors.fg,
    opacity: 0.8,
    marginBottom: 16,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  tagBadge: {
    borderWidth: 1,
    borderColor: 'rgba(255, 153, 0, 0.4)',
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  tagBadgeText: {
    fontFamily: 'ShareTechMono_400Regular',
    fontSize: 11,
    color: Colors.orange,
  },
  linksRow: {
    flexDirection: 'row',
    gap: 20,
  },
  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.magenta,
    paddingBottom: 2,
  },
  linkText: {
    fontFamily: 'ShareTechMono_400Regular',
    fontSize: 13,
    color: Colors.magenta,
    fontWeight: 'bold',
  },
  placeholderBanner: {
    marginTop: 14,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 153, 0, 0.2)',
  },
  placeholderText: {
    fontFamily: 'ShareTechMono_400Regular',
    fontSize: 11,
    color: Colors.orange,
    opacity: 0.85,
  },
});
