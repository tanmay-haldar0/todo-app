import { View, Text } from 'react-native'
import React from 'react'
import { createHomeStyles } from '@/assets/styles/home.styles'
import useTheme from '@/hooks/useTheme'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'

const Header = () => {
    const { colors } = useTheme();
    const styles = createHomeStyles(colors);
    const todos = useQuery(api.todos.getTodos);

    // const completedCount = 4;
    const completedCount = todos ? todos.filter((todo) => todo.isCompleted).length : 0;
    const totalCounts = todos ? todos.length : 0;
    //  const totalCounts = 5;
    const progressPersentage = totalCounts > 0 ? (completedCount / totalCounts) * 100 : 0;


    return (
        <View style={styles.header}>
            <View style={styles.titleContainer}>
                <LinearGradient colors={colors.gradients.primary} style={styles.iconContainer}>
                    <Ionicons name='document-text' size={28} color={"#fff"} />
                </LinearGradient>

                <View style={styles.titleTextContainer}>
                    <Text style={styles.title}>Today's Tasks</Text>
                    <Text style={styles.subtitle}>{completedCount} of {totalCounts} tasks completed</Text>
                </View>
            </View>


            {totalCounts > 0 && (
                <View style={styles.progressContainer}>
                    <View style={styles.progressBarContainer}>
                        <View style={styles.progressBar}>
                            <LinearGradient colors={colors.gradients.success} style={[styles.progressFill, { width: `${progressPersentage}%` }]} />
                        </View>
                        <Text style={styles.progressText}>{Math.round(progressPersentage)}%</Text>
                    </View>
                </View>
            )}
        </View>
    )
}

export default Header