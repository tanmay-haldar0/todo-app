import React from 'react';
import { StyleSheet, View } from 'react-native';

const IconGenerator: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Background */}
      <View style={styles.background} />
      
      {/* Circular white background */}
      <View style={styles.circle} />
      
      {/* Document icon */}
      <View style={styles.document}>
        {/* Document lines */}
        <View style={[styles.line, { width: 120 }]} />
        <View style={[styles.line, { width: 100 }]} />
        <View style={[styles.line, { width: 110 }]} />
        <View style={[styles.line, { width: 90 }]} />
        <View style={[styles.line, { width: 105 }]} />
        <View style={[styles.line, { width: 95 }]} />
        <View style={[styles.line, { width: 115 }]} />
        <View style={[styles.line, { width: 85 }]} />
        <View style={[styles.line, { width: 100 }]} />
        <View style={[styles.line, { width: 110 }]} />
        <View style={[styles.line, { width: 95 }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 1024,
    height: 1024,
    backgroundColor: '#3b82f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#3b82f6',
  },
  circle: {
    width: 800,
    height: 800,
    borderRadius: 400,
    backgroundColor: '#ffffff',
  },
  document: {
    position: 'absolute',
    width: 160,
    height: 200,
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  line: {
    height: 4,
    backgroundColor: '#ffffff',
    borderRadius: 2,
  },
});

export default IconGenerator; 