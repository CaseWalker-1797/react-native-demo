import { StyleSheet, View, Text, FlatList } from 'react-native';
import React from 'react';
import {
  bgColor,
  textColor,
  accentColor,
  checkboxFillColor,
} from '../../styles/Colors';
import Heading from '../../components/Heading';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const Todo = () => {
  const todos = useSelector((state) => state.todos);

  const renderData = ({ item, index }) => (
    <View style={styles.todoElementContainer}>
      <Text style={textStyles.todoElementText} key={index}>
        {item.text}
      </Text>
      <Text style={textStyles.todoElementText} key={index}>
        {item.description}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <Heading />
      <View style={styles.todoContainer}>
        <Icons
          name="rectangle"
          color={accentColor}
          size={38}
          style={{ width: 12 }}
        />
        <Text style={textStyles.todoContainerText}>
          Todo's
        </Text>
      </View>
      <FlatList data={todos} renderItem={renderData} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: bgColor,
  },
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 6,
    margin: 6,
  },
  todoElementContainer: {
    margin: 8,
    padding: 12,
    borderRadius: 8,
    borderColor: checkboxFillColor,
    borderWidth: 1,
    backgroundColor: bgColor,
  },
});

const textStyles = StyleSheet.create({
  todoContainerText: {
    fontSize: 20,
    color: textColor,
    marginLeft: 8,
  },
  todoElementText: {
    fontSize: 14,
    color: textColor,
    margin: 2,
  },
});

export default Todo;
