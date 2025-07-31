import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface SplashScreenProps {
  onFinish?: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const { colors } = useTheme();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      onFinish?.();
    }, 2000); // Show splash for 2 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <LinearGradient 
      colors={colors.gradients.background} 
      style={styles.container}
    >
      <View style={[styles.logoContainer, { backgroundColor: colors.primary }]}>
        <Ionicons 
          name="document-text" 
          size={60} 
          color="#ffffff" 
        />
      </View>
      <Text style={[styles.appName, { color: colors.text }]}>
        TodoApp
      </Text>
      <Text style={[styles.tagline, { color: colors.textMuted }]}>
        Organize your life, one task at a time
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});

export default SplashScreen; 