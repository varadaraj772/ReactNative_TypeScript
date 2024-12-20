import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {todoType} from '../types/todoType';

const TodoComponet: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [todoList, setTodoList] = useState<todoType[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleSubmit = (): void => {
    if (!text) {
      return;
    }
    const todo: todoType = {
      id: Date.now().toString(),
      title: text,
      completed: false,
    };
    setTodoList([...todoList, todo]);
    setText('');
  };

  const handleDelete = (id: string): void => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  const handleEdit = (id: string): void => {
    const todoToEdit = todoList.find(todo => todo.id === id);
    if (todoToEdit) {
      setText(todoToEdit.title);
      setEditingId(id);
    }
  };

  const handleComplete = (id: string): void => {
    setTodoList(
      todoList.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <Text>TODO</Text>
      <View style={styles.header}>
        <TextInput
          style={styles.textInput}
          placeholder="Type here"
          value={text}
          onChangeText={setText}
        />
        <Button
          title={editingId ? 'Update' : 'Submit'}
          onPress={handleSubmit}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        {todoList.map(todo => (
          <View key={todo.id} style={styles.todoList}>
            {editingId === todo.id ? (
              <TextInput
                style={styles.textInput}
                value={text}
                onChangeText={setText}
                onBlur={() => {
                  setTodoList(
                    todoList.map(t =>
                      t.id === todo.id ? {...t, title: text} : t,
                    ),
                  );
                  setEditingId(null);
                  setText('');
                }}
              />
            ) : (
              <Text
                style={{
                  color: todo.completed ? 'green' : 'red',
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginHorizontal: 10,
                }}>
                {todo.title}
              </Text>
            )}
            <Button title="Delete" onPress={() => handleDelete(todo.id)} />
            <Button title="Edit" onPress={() => handleEdit(todo.id)} />
            <Button
              title={todo.completed ? 'Undo' : 'Complete'}
              onPress={() => handleComplete(todo.id)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TodoComponet;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  scroll: {
    alignItems: 'center',
  },
  todoList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
});
