import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { createHomeStyles } from '@/assets/styles/home.styles'
import useTheme from '@/hooks/useTheme'
import { useMutation, useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'

const TodoInput = () => {
    const { colors } = useTheme();
    const styles = createHomeStyles(colors);
    // const todos = useQuery(api.todos.getTodos);

    const [newTodo, setNewTodo] = useState("");
    const addTodo = useMutation(api.todos.addTodos);

    const handleAddTodo = async () => {
        if(newTodo.trim()){
            try {
                await addTodo({text: newTodo.trim()});
                setNewTodo("");
            } catch (error) {
                console.log("Error,adding todo,", error);
                Alert.alert("Error, You failed to add task!");
            }
        }
    }

    return (
        <View style={styles.inputSection}>
            <View style={styles.inputWrapper}>
                <TextInput style={styles.input} placeholder='What needs to be done?' value={newTodo} onChangeText={setNewTodo} onSubmitEditing={handleAddTodo} multiline placeholderTextColor={colors.textMuted} />
                <TouchableOpacity onPress={handleAddTodo} activeOpacity={0.8} disabled={!newTodo.trim()}>
                    <LinearGradient colors={newTodo.trim() ? colors.gradients.primary : colors.gradients.muted} style={[styles.addButton, !newTodo.trim() && styles.addButtonDisabled]}>
                        <Ionicons name='add' size={28} color={"#fff"} />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TodoInput