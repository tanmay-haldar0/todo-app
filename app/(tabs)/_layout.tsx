import useTheme from '@/hooks/useTheme'
import { Ionicons } from "@expo/vector-icons"
import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
    const {colors} = useTheme();
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor:colors.primary,
                tabBarInactiveTintColor:colors.textMuted,
                tabBarStyle:{
                    backgroundColor:colors.bg,
                    borderTopWidth:0.5,
                    borderTopColor:colors.border,
                    height:70,
                    paddingBottom:20,
                    paddingTop:10,
                    elevation: 0,
                    shadowOpacity: 0,
                },
                tabBarLabelStyle:{
                    fontSize:12,
                    fontWeight:600
                },
                headerShown:false,
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tabs.Screen name='index' options={{
                title: "Todos",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name='document-text' size={size} color={color}/>
                )
            }}  />
            <Tabs.Screen name='settings' options={{
                title: "Settings",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name='settings' size={size} color={color}/>
                )
            }}  />
        </Tabs>
    )
}

export default TabsLayout