import SplashScreen from "@/components/SplashScreen";
import useTheme, { ThemeProvider } from "@/hooks/useTheme";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
import * as SystemUI from 'expo-system-ui';
import React from 'react';
import { StatusBar, View } from "react-native";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});


function StatusBarWrapper() {
  const { colors } = useTheme();
  
  return (
    <StatusBar 
      barStyle={colors.statusBarStyle}
      backgroundColor="transparent"
      translucent={true}
    />
  );
}

function RootLayoutWrapper() {
  const { colors } = useTheme();
  const [showSplash, setShowSplash] = React.useState(false); // Set to false for Expo Go testing
  
  // Set the system UI background color
  React.useEffect(() => {
    SystemUI.setBackgroundColorAsync(colors.bg);
  }, [colors.bg]);
  
  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }
  
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <StatusBarWrapper />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </View>
  );
}

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <ThemeProvider>
        <RootLayoutWrapper />
      </ThemeProvider>
    </ConvexProvider>
  );
}
