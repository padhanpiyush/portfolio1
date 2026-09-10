import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../theme/colors';

const { width, height } = Dimensions.get('window');

export default function CyberBackground() {
  return (
    <View style={StyleSheet.absoluteFillObject} pointerEvents="none">
      {/* Base Deep Obsidian Canvas */}
      <View style={[StyleSheet.absoluteFillObject, { backgroundColor: Colors.bg }]} />

      {/* Ambient Sun Horizon Bloom */}
      <LinearGradient
        colors={['rgba(255, 153, 0, 0.22)', 'rgba(255, 0, 255, 0.16)', 'transparent']}
        style={styles.sunBloom}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />

      {/* 3D Horizon Grid Lines (Synthetic Outrun ground effect) */}
      <View style={styles.gridContainer}>
        {[...Array(12)].map((_, idx) => (
          <View
            key={`grid-h-${idx}`}
            style={[
              styles.gridLineH,
              {
                top: idx * 45,
                opacity: (idx + 1) * 0.05,
                borderBottomColor: Colors.magenta,
              },
            ]}
          />
        ))}
      </View>

      {/* Top Edge Vignette */}
      <LinearGradient
        colors={['rgba(0, 255, 255, 0.05)', 'transparent']}
        style={styles.vignetteTop}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sunBloom: {
    position: 'absolute',
    top: -120,
    left: width * 0.1,
    width: width * 0.8,
    height: 380,
    borderRadius: (width * 0.8) / 2,
    transform: [{ scaleX: 1.4 }],
  },
  gridContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 360,
    overflow: 'hidden',
  },
  gridLineH: {
    position: 'absolute',
    left: 0,
    right: 0,
    borderBottomWidth: 1,
  },
  vignetteTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 90,
  },
});
