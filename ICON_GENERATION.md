# App Icon Generation Guide

## Overview
This guide explains how to generate the app icons for your TodoApp.

## Files Created
- `assets/images/icon.svg` - Main app icon
- `assets/images/splash-icon.svg` - Splash screen icon
- `components/SplashScreen.tsx` - Dynamic splash screen component
- `components/IconGenerator.tsx` - React Native icon generator component

## Converting SVG to PNG

### Option 1: Online Converter
1. Go to https://convertio.co/svg-png/ or similar online converter
2. Upload the SVG files
3. Download as PNG
4. Replace the existing icon files in `assets/images/`

### Option 2: Using Inkscape (Free)
1. Install Inkscape: https://inkscape.org/
2. Open the SVG files
3. File → Export PNG Image
4. Set size to 1024x1024
5. Export and replace existing files

### Option 3: Using Command Line (if you have ImageMagick)
```bash
# Install ImageMagick
# macOS: brew install imagemagick
# Ubuntu: sudo apt-get install imagemagick

# Convert SVG to PNG
convert assets/images/icon.svg assets/images/icon.png
convert assets/images/splash-icon.svg assets/images/splash-icon.png
```

## Icon Design
- **Background**: Primary blue color (#3b82f6)
- **Circle**: White circular background
- **Icon**: Document-text icon in primary blue
- **Style**: Clean, modern, and matches your app's theme

## Splash Screen Features
- **Dynamic theming**: Adapts to light/dark mode
- **Smooth animation**: 2-second display with fade transition
- **Consistent branding**: Uses the same document-text icon
- **Professional look**: Gradient background with centered logo

## App Configuration
The `app.json` has been updated to use:
- Primary blue background for splash screen
- Document-text icon in tab bar
- Consistent theming throughout

## Testing
1. Run `npx expo start`
2. The splash screen will appear for 2 seconds
3. The tab bar will show the document-text icon
4. Theme changes will update the splash screen colors

## Customization
You can modify:
- Colors in `hooks/useTheme.tsx`
- Icon size in `components/SplashScreen.tsx`
- Display duration in the `setTimeout` call
- App name and tagline in the splash screen component 