import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import React from 'react';
import {
  bgColor,
  accentColor,
  textColor,
  switchOffColorGrad1,
} from '../../styles/Colors';
import Heading from '../../components/Heading';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

const SelectHome = () => {
  const selectExploreItems = useSelector((state) => state.selectExplore);

  const renderData = ({ item }) => (
    <View style={styles.exploreElement}>
      <View style={styles.exploreImageTextChechBoxContainer}>
        <View style={styles.exploreImageTextContainer}>
          <Image
            style={styles.exploreElementImage}
            source={{ uri: item.images[0] }}
          />
          <View style={styles.exploreNameEmailContainer}>
            <Text style={textStyles.exploreElementTitleText}>
              {item.user.name}
            </Text>
            <Text style={textStyles.exploreElementText}>
              {item.user.name.split(' ').join('') + '@gmail.com'}
            </Text>
          </View>
        </View>
      </View>
      <Text style={textStyles.exploreElementText}>{item.descriptions}</Text>
      <View style={styles.exploreDateTimeContainer}>
        <Icons name="clock-time-five" color="grey" size={26} />
        <Text style={textStyles.exploreElementDateTime}>
          28/10/2024 10:00 AM
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <Heading />
      <View style={styles.selectExploreContainer}>
        <Icons
          name="rectangle"
          color={accentColor}
          size={38}
          style={{ width: 12 }}
        />
        <Text style={textStyles.selectExploreContainerText}>
          Selected Explore
        </Text>
      </View>
      <FlatList data={selectExploreItems} renderItem={renderData} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: bgColor,
  },
  selectExploreContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 6,
    margin: 6,
  },
  exploreElement: {
    borderRadius: 12,
    backgroundColor: switchOffColorGrad1,
    paddingVertical: 8,
    paddingHorizontal: 8,
    margin: 12,
  },
  exploreElementImage: {
    height: 36,
    width: 36,
    borderRadius: 20,
  },
  exploreImageTextChechBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exploreImageTextContainer: {
    flexDirection: 'row',
  },
  exploreDateTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  exploreNameEmailContainer: {},
});
const textStyles = StyleSheet.create({
  selectExploreContainerText: {
    fontSize: 20,
    color: textColor,
    marginLeft: 8,
  },
  exploreElementTitleText: {
    fontSize: 16,
    color: textColor,
    marginLeft: 8,
  },
  exploreElementText: {
    fontSize: 12,
    color: textColor,
    marginLeft: 8,
    marginTop: 4,
  },
  exploreElementDateTime: {
    fontSize: 12,
    color: textColor,
    marginLeft: 4,
  },
});
export default SelectHome;
