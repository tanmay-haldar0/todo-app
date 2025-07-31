import { createHomeStyles } from '@/assets/styles/home.styles'
import useTheme from '@/hooks/useTheme'
import { LinearGradient } from 'expo-linear-gradient'
import { View, ActivityIndicator, Text } from 'react-native';

const LoadingSpinner = () => {
    const { colors } = useTheme();
    const styles = createHomeStyles(colors);

    return (
        <LinearGradient colors={colors.gradients.background} style={styles.container}>
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={colors.primary} />
                <Text style={styles.loadingText}>Loading Your Todos....</Text>
            </View>
        </LinearGradient>
    )
}

export default LoadingSpinner;