import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'
import useTheme from '@/hooks/useTheme';
import { createSettingsStyles } from '@/assets/styles/settings.style';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const Preferences = () => {
    const [autoSync, isAutoSync] = useState(true);
    const [notificationEnabaled, setNotificationEnabaled] = useState(true);
    const { colors, toggleDarkMode, isDarkMode } = useTheme();
    const settingsStyle = createSettingsStyles(colors);
    return (
        <LinearGradient colors={colors.gradients.surface} style={settingsStyle.section}>
            <Text style={settingsStyle.sectionTitle}>Preferences</Text>

            <View style={settingsStyle.settingItem} >
                <View style={settingsStyle.settingLeft} >
                    <LinearGradient colors={colors.gradients.primary} style={settingsStyle.settingIcon}>
                        <Ionicons name='moon' size={18} color={"#fff"} />
                    </LinearGradient>
                    <Text style={settingsStyle.settingText}>Dark Mode</Text>
                </View>
                <Switch value={isDarkMode} onValueChange={toggleDarkMode} thumbColor={"#fff"} trackColor={{ false: colors.border, true: colors.primary }} />
            </View>
            <View style={settingsStyle.settingItem} >
                <View style={settingsStyle.settingLeft} >
                    <LinearGradient colors={colors.gradients.warning} style={settingsStyle.settingIcon}>
                        <Ionicons name='notifications' size={18} color={"#fff"} />
                    </LinearGradient>
                    <Text style={settingsStyle.settingText}>Notification</Text>
                </View>
                <Switch value={notificationEnabaled} onValueChange={() => setNotificationEnabaled(!notificationEnabaled)} thumbColor={"#fff"} trackColor={{ false: colors.border, true: colors.warning }} />
            </View>
            <View style={settingsStyle.settingItem} >
                <View style={settingsStyle.settingLeft} >
                    <LinearGradient colors={colors.gradients.success} style={settingsStyle.settingIcon}>
                        <Ionicons name='sync' size={18} color={"#fff"} />
                    </LinearGradient>
                    <Text style={settingsStyle.settingText}>Dark Mode</Text>
                </View>
                <Switch value={isDarkMode} onValueChange={toggleDarkMode} thumbColor={"#fff"} trackColor={{ false: colors.border, true: colors.success }} />
            </View>
        </LinearGradient>
    )
}

export default Preferences