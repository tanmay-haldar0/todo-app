import { createHomeStyles } from "@/assets/styles/home.styles";
import EmptyState from "@/components/EmptyState";
import Header from "@/components/header";
import LoadingSpinner from "@/components/LoadingSpinner";
import TodoInput from "@/components/TodoInput";
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
type Todo = Doc<"todos">

export default function Index() {

  const { colors, toggleDarkMode } = useTheme();
  const styles = createHomeStyles(colors);

  const [edittingId, setEdittingId] = useState<Id<"todos"> | null>(null);
  const [editText, setEditText] = useState("");
  // const [isEditing, setIsEditing] = useState("");
  const todos = useQuery(api.todos.getTodos);
  const toggleTodos = useMutation(api.todos.toggleTodos);
  const deleteTodos = useMutation(api.todos.deleteTodos);
  const editTodos = useMutation(api.todos.updateTodos);

  const handleDelete = async (id: Id<"todos">) => {
    Alert.alert("Delete", "Are you sure u want to delete?", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: () => deleteTodos({ id }) }
    ])
  }

  const handleEdit = (todo: Todo) => {
    setEditText(todo.text);
    setEdittingId(todo._id);
  }
  const handleEditSave = async () => {
    if (edittingId) {
      try {
        await editTodos({ id: edittingId, text: editText });
        setEditText("");
        setEdittingId(null);
      } catch (error) {
        console.log("Error,", error);
        Alert.alert("Error! failed to update!");
      }
    }
  }
  const handleEditCancel = () => {
    setEditText("");
    setEdittingId(null);
  }

  const handelToggleTodo = async (id: Id<"todos">) => {
    try {
      await toggleTodos({ id });

    } catch (error) {
      console.log("Error toggling todo,", error);
      Alert.alert("Error, failed to toggle todo! ");
    }
  }
  // console.log(todos);
  const isLoading = todos === undefined;
  if (isLoading) return <LoadingSpinner />

  const renderTodoItem = ({ item }: { item: Todo }) => {
    const isEditting = edittingId === item._id;
    return (
      <View style={styles.todoItemWrapper}>
        <LinearGradient colors={colors.gradients.surface} style={styles.todoItem} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
          <TouchableOpacity style={styles.checkbox} onPress={() => { handelToggleTodo(item._id) }} activeOpacity={0.7}>
            <LinearGradient colors={item.isCompleted ? colors.gradients.success : colors.gradients.surface} style={[styles.checkboxInner, { borderColor: item.isCompleted ? "transparent" : colors.border }]}>
              {item.isCompleted && <Ionicons name="checkmark" size={18} color={"#fff"} />}
            </LinearGradient>
          </TouchableOpacity>

          {isEditting ? (
            <View style={styles.editContainer}>
              <TextInput
                style={styles.editInput}
                value={editText}
                onChangeText={setEditText}
                multiline
                placeholder="Edit your todo.."
                placeholderTextColor={colors.textMuted}
              />

              <View style={styles.editButtons}>
                <TouchableOpacity onPress={handleEditSave} activeOpacity={0.8}>
                  <LinearGradient colors={colors.gradients.success} style={styles.editButton}>
                    <Ionicons name="checkmark" size={12} color={"#fff"} />
                    <Text style={styles.editButtonText}>Save</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleEditCancel} activeOpacity={0.8}>
                  <LinearGradient colors={colors.gradients.muted} style={styles.editButton}>
                    <Ionicons name="close" size={12} color={"#fff"} />
                    <Text style={styles.editButtonText}>Cancel</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.todoTextContainer}>
              <Text style={[
                styles.todoText, item.isCompleted && { textDecorationLine: "line-through", color: colors.textMuted, opacity: 0.6 }
              ]}>{item.text}</Text>


              <View style={styles.todoActions}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => handleEdit(item)}>
                  <LinearGradient colors={colors.gradients.warning} style={styles.actionButton}>
                    <Ionicons name="pencil" size={14} color={"#fff"} />
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={() => handleDelete(item._id)}>
                  <LinearGradient colors={colors.gradients.danger} style={styles.actionButton}>
                    <Ionicons name="trash" size={14} color={"#fff"} />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </LinearGradient>
      </View>
    )
  }

  return (
    <LinearGradient colors={colors.gradients.background} style={styles.container}>
      <SafeAreaView edges={['top', 'left', 'right']} style={styles.safeArea}>
        <Header />
        <TodoInput />

        <FlatList
          data={todos}
          renderItem={renderTodoItem}
          keyExtractor={(item) => item._id}
          style={styles.todoList}
          contentContainerStyle={styles.todoListContent}
          ListEmptyComponent={<EmptyState />}
        />

      </SafeAreaView>
    </LinearGradient>
  );
}
