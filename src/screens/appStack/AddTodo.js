import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Heading from '../../components/Heading';
import {
  accentColor,
  bgColor,
  checkboxFillColor,
  switchOffColorGrad1,
  textColor,
} from '../../styles/Colors';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { addTodoItem } from '../../redux/TodoSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AddTodo = () => {
  const [isTitle, setIsTitle] = useState('');
  const [isDescription, setIsDescription] = useState('');
  const dispatch = useDispatch();

  const onClickListener = () => {
    dispatch(addTodoItem({ isTitle, isDescription }));
    setIsTitle('');
    setIsDescription('');
  };

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <Heading />
      <View style={styles.addTodoContainer}>
        <Icons
          name="rectangle"
          color={accentColor}
          size={38}
          style={{ width: 12 }}
        />
        <Text style={textStyles.addTodoContainerText}>Add Todo's</Text>
      </View>
      <KeyboardAwareScrollView>
        <View style={{ margin: 6, padding: 6 }}>
          <Text style={textStyles.textDisplay}>Title</Text>
          <TextInput
            style={styles.textInputContainer}
            value={isTitle}
            onChangeText={setIsTitle}
            placeholder="Enter Title"
            placeholderTextColor={checkboxFillColor}
          />
          <Text style={textStyles.textDisplay}>Description</Text>
          <TextInput
            style={styles.textInputContainer}
            value={isDescription}
            onChangeText={setIsDescription}
            placeholder="Enter Description"
            placeholderTextColor={checkboxFillColor}
          />
          <TouchableOpacity
            style={styles.btnAddContainer}
            onPress={onClickListener}
          >
            <Text style={textStyles.btnText}>ADD</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: bgColor,
  },
  addTodoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 6,
    margin: 6,
  },
  textInputContainer: {
    color: textColor,
    borderRadius: 6,
    borderColor: checkboxFillColor,
    borderWidth: 1,
    backgroundColor: switchOffColorGrad1,
    marginTop: 16,
    padding: 16,
  },
  btnAddContainer: {
    alignItems: 'center',
    backgroundColor: accentColor,
    borderRadius: 4,
    marginTop: 16,
    padding: 16,
  },
});

const textStyles = StyleSheet.create({
  addTodoContainerText: {
    fontSize: 20,
    color: textColor,
    marginLeft: 8,
  },
  textDisplay: {
    fontSize: 16,
    color: textColor,
    marginTop: 6,
    padding: 6,
  },
  btnText: {
    color: textColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddTodo;
