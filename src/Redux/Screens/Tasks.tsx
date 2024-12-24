/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Alert,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tasks = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [task, setTask] = useState<string>('');
  const [taskList, setTaskList] = useState<string[]>(['']);

  const saveTask = () => {
    if (task.trim()) {
      console.log('Task Saved:', task);
      setTaskList([...taskList, task]);
      setTask('');
      setModalVisible(false);
    } else {
      Alert.alert('Please enter a task');
    }
  };
  const renderTask = (item: string) => {
    if (!item) {
      return null;
    }
    return (
      <View style={styles.taskList}>
        <View style={{flex: 1, padding: 5, justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              fontFamily: 'serif',
              flexWrap: 'wrap',
            }}>
            {item}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={[
              styles.taskbtn,
              {
                backgroundColor: '#f2fff3',
                borderColor: 'black',
                borderWidth: 0.5,
                elevation: 2,
                height: 40,
              },
            ]}>
            <Icon
              name="lead-pencil"
              size={15}
              color="black"
              style={{paddingHorizontal: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.taskbtn,
              {
                backgroundColor: '#fff2f2',
                borderColor: 'black',
                borderWidth: 0.5,
                elevation: 2,
                height: 40,
              },
            ]}>
            <Icon
              name="delete"
              size={15}
              color="black"
              style={{paddingHorizontal: 10}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setModalVisible(true)}>
        <Icon name="plus" size={30} color="black" />
      </TouchableOpacity>
      <FlatList data={taskList} renderItem={({item}) => renderTask(item)} />
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <KeyboardAvoidingView
          style={styles.modalBackground}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.modalContainer}>
            <TextInput
              placeholder="Enter your task"
              value={task}
              onChangeText={setTask}
              style={styles.input}
              placeholderTextColor="gray"
            />
            <View style={styles.modalBtnContainer}>
              <TouchableOpacity
                style={[styles.modalBtn, {backgroundColor: '#f2fff3'}]}
                onPress={saveTask}>
                <Text style={styles.text}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={[styles.modalBtn, {backgroundColor: '#fff2f2'}]}>
                <Text style={styles.text}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 50,
    backgroundColor: 'white',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },
  modalBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalBtn: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  taskList: {
    margin: 10,
    padding: 10,
    width: '95%',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: 'black',
  },
  taskbtn: {
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 5,
  },
});
