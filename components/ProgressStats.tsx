import { View, Text } from 'react-native'
import React from 'react'
import useTheme from '@/hooks/useTheme'
import { createSettingsStyles } from '@/assets/styles/settings.style';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const ProgressStats = () => {
    const { colors } = useTheme();
    const settingsStyle = createSettingsStyles(colors);
    const todos = useQuery(api.todos.getTodos);
    const completedCount = todos ? todos.filter((todo) => todo.isCompleted).length : 0;
    const totalCounts = todos ? todos.length : 0;
    const activeTodos = totalCounts - completedCount;

    return (
        <LinearGradient colors={colors.gradients.surface} style={settingsStyle.section}>
            <Text style={settingsStyle.sectionTitle}>Progress Stats</Text>
            <View style={settingsStyle.statsContainer}>
                <LinearGradient colors={colors.gradients.background} style={[settingsStyle.statCard, { borderLeftColor: colors.primary }]}>
                    <View style={settingsStyle.statIconContainer}>
                        <LinearGradient colors={colors.gradients.primary} style={settingsStyle.statIcon}>
                            <Ionicons name='list' size={20} color={"#fff"} />
                        </LinearGradient>

                    </View>

                    <View>
                        <Text style={settingsStyle.statNumber}>{totalCounts}</Text>
                        <Text style={settingsStyle.statLabel}>Total todos</Text>
                    </View>

                </LinearGradient>
                <LinearGradient colors={colors.gradients.background} style={[settingsStyle.statCard, { borderLeftColor: colors.success }]}>
                    <View style={settingsStyle.statIconContainer}>
                        <LinearGradient colors={colors.gradients.success} style={settingsStyle.statIcon}>
                            <Ionicons name='checkmark-circle' size={20} color={"#fff"} />
                        </LinearGradient>

                    </View>

                    <View>
                        <Text style={settingsStyle.statNumber}>{completedCount}</Text>
                        <Text style={settingsStyle.statLabel}>Completed</Text>
                    </View>

                </LinearGradient>
                <LinearGradient colors={colors.gradients.background} style={[settingsStyle.statCard, { borderLeftColor: colors.warning }]}>
                    <View style={settingsStyle.statIconContainer}>
                        <LinearGradient colors={colors.gradients.warning} style={settingsStyle.statIcon}>
                            <Ionicons name='time' size={20} color={"#fff"} />
                        </LinearGradient>

                    </View>

                    <View>
                        <Text style={settingsStyle.statNumber}>{activeTodos}</Text>
                        <Text style={settingsStyle.statLabel}>Active todos</Text>
                    </View>

                </LinearGradient>
            </View>

        </LinearGradient>

    )
}

export default ProgressStats