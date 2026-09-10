import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Text,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Orbitron_400Regular,
  Orbitron_700Bold,
  Orbitron_900Black,
} from '@expo-google-fonts/orbitron';
import {
  ShareTechMono_400Regular,
} from '@expo-google-fonts/share-tech-mono';

import { Colors } from './theme/colors';
import CyberBackground from './components/CyberBackground';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [fontsLoaded] = useFonts({
    Orbitron_400Regular,
    Orbitron_700Bold,
    Orbitron_900Black,
    ShareTechMono_400Regular,
  });

  const scrollViewRef = useRef(null);
  const [activeSection, setActiveSection] = useState('about');
  const sectionPositions = useRef({});

  // Capture vertical layout position of each section for smooth scrolling
  const handleLayout = (sectionId, event) => {
    const layout = event.nativeEvent.layout;
    sectionPositions.current[sectionId] = layout.y;
  };

  // Programmatic scroll to section
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const targetY = sectionPositions.current[sectionId];
    if (targetY !== undefined && scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: Math.max(0, targetY - 70), // offset for sticky header
        animated: true,
      });
    }
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.cyan} />
        <Text style={styles.loadingText}>INITIALIZING CYBER TERMINAL...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" backgroundColor={Colors.bg} />

      {/* Cyberpunk Optical Background */}
      <CyberBackground />

      {/* Sticky Navigation Bar */}
      <NavigationBar
        activeSection={activeSection}
        onSelectSection={scrollToSection}
      />

      {/* Scrollable Content Hierarchy */}
      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <HeroSection
          onProjectsPress={() => scrollToSection('projects')}
          onContactPress={() => scrollToSection('contact')}
        />

        <View onLayout={(e) => handleLayout('about', e)}>
          <AboutSection />
        </View>

        <View onLayout={(e) => handleLayout('skills', e)}>
          <SkillsSection />
        </View>

        <View onLayout={(e) => handleLayout('projects', e)}>
          <ProjectsSection />
        </View>

        <View onLayout={(e) => handleLayout('education', e)}>
          <EducationSection />
        </View>

        <View onLayout={(e) => handleLayout('achievements', e)}>
          <AchievementsSection />
        </View>

        <View onLayout={(e) => handleLayout('contact', e)}>
          <ContactSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: Colors.bg,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  loadingText: {
    fontFamily: 'monospace',
    color: Colors.cyan,
    fontSize: 12,
    letterSpacing: 2,
  },
});
