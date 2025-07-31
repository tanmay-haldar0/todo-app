# TodoApp 📝

A modern, cross-platform todo application built with React Native, Expo, and Convex. This app allows users to create, edit, complete, and delete todos with a beautiful, responsive interface that supports both light and dark themes.

## ✨ Features

- **📱 Cross-platform**: Works on iOS, Android, and Web
- **🎨 Theme Support**: Automatic light/dark theme switching
- **✨ Real-time Sync**: Todos sync across all devices using Convex backend
- **🔄 CRUD Operations**: Create, Read, Update, Delete todos
- **✅ Task Completion**: Mark todos as complete/incomplete
- **✏️ Inline Editing**: Edit todos directly in the list
- **🗑️ Delete Confirmation**: Safe deletion with confirmation dialogs
- **🎯 Empty State**: Beautiful empty state when no todos exist
- **⚡ Performance**: Optimized with React Native Reanimated

## 🛠️ Tech Stack

- **Frontend**: React Native with Expo
- **Backend**: Convex (real-time database)
- **Navigation**: Expo Router with file-based routing
- **UI Components**: Custom components with gradient backgrounds
- **State Management**: Convex React hooks
- **Styling**: Custom theme system with TypeScript
- **Icons**: Expo Vector Icons

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- Convex account (for backend)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tanmay-haldar0/todo-app.git
   cd todoapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Convex backend**
   ```bash
   npx convex dev
   ```
   This will start the Convex development server and provide you with a deployment URL.

4. **Configure environment variables**
   Create a `.env` file in the root directory and add your Convex deployment URL:
   ```
   CONVEX_URL=your_convex_deployment_url
   ```

5. **Start the development server**
   ```bash
   npx expo start
   ```

## 📱 Running the App

### Development Options

- **iOS Simulator**: Press `i` in the terminal or scan QR code with Expo Go
- **Android Emulator**: Press `a` in the terminal
- **Web Browser**: Press `w` in the terminal
- **Physical Device**: Scan the QR code with Expo Go app

### Build Commands

```bash
# Start development server
npm start

# Run on specific platforms
npm run android
npm run ios
npm run web

# Lint the code
npm run lint
```

## 🌐 Live Deployment Options

### 1. Expo Go (Instant Sharing)
The easiest way to share your app:

```bash
# Start the development server
npx expo start

# Share the QR code or web link that appears
```

Anyone with the Expo Go app can scan the QR code and run your app immediately.

### 2. Web Deployment (Free)
Deploy your app to the web:

```bash
# Start web development server
npx expo start --web

# Or build for production web
npx expo export --platform web
```

### 3. EAS Build (Free Tier)
Create installable builds for sharing:

```bash
# Install EAS CLI
npm install -g @expo/eas-cli

# Login to Expo
eas login

# Configure EAS
eas build:configure

# Build for development sharing
eas build --profile development --platform all

# Build for preview
eas build --profile preview --platform all
```

### 4. Expo Application Services
Deploy with EAS for internal distribution:

```bash
# Build and deploy
eas build --profile preview --platform all

# Submit for internal testing
eas submit --platform all
```

**Note**: EAS provides free builds per month, perfect for sharing with friends, clients, or for testing purposes.

## 🏗️ Project Structure

```
todoapp/
├── app/                    # Expo Router app directory
│   ├── (tabs)/           # Tab-based navigation
│   │   ├── index.tsx     # Main todos screen
│   │   └── settings.tsx  # Settings screen
│   └── _layout.tsx       # Root layout
├── components/            # Reusable UI components
│   ├── EmptyState.tsx    # Empty state component
│   ├── Header.tsx        # App header
│   ├── LoadingSpinner.tsx # Loading indicator
│   └── TodoInput.tsx     # Todo input component
├── convex/               # Convex backend
│   ├── schema.ts         # Database schema
│   ├── todos.ts          # Todo CRUD operations
│   └── _generated/       # Auto-generated types
├── assets/               # Static assets
│   ├── images/           # App icons and images
│   └── styles/           # Theme and styling
├── hooks/                # Custom React hooks
│   └── useTheme.tsx      # Theme management
└── package.json          # Dependencies and scripts
```

## 🎨 Customization

### Themes
The app uses a custom theme system located in `hooks/useTheme.tsx`. You can modify colors, gradients, and styling by updating the theme configuration.

### Styling
Custom styles are organized in the `assets/styles/` directory:
- `home.styles.ts` - Main screen styles
- `settings.style.ts` - Settings screen styles

## 🔧 Development

### Adding New Features

1. **Backend Changes**: Modify files in `convex/` directory
2. **Frontend Changes**: Update components in `app/` and `components/` directories
3. **Styling**: Add new styles to the appropriate style files

### Database Schema

The app uses a simple todo schema:
```typescript
{
  text: string,        // Todo text content
  isCompleted: boolean // Completion status
}
```

## 📦 Dependencies

### Core Dependencies
- `expo`: React Native framework
- `convex`: Real-time backend
- `react-native-reanimated`: Performance animations
- `expo-router`: File-based routing
- `@expo/vector-icons`: Icon library

### Development Dependencies
- `typescript`: Type safety
- `eslint`: Code linting
- `@types/react`: React type definitions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev)
- Backend powered by [Convex](https://convex.dev)
- Icons from [Expo Vector Icons](https://icons.expo.fyi)

---

**Happy coding! 🚀**
