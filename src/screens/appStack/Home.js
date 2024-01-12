import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Heading from '../../components/Heading';
import {
  accentColor,
  bgColor,
  checkboxFillColor,
  switchOffColorGrad1,
  textColor,
} from '../../styles/Colors';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { selectItem,removeItem } from '../../redux/SelectExploreSlice';

const Home = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    Axios.get('https://unikwork.com/instagram/api/get_data.php')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
        <BouncyCheckbox
          fillColor={checkboxFillColor}
          onPress={(isChecked) => {
            if (isChecked) dispatch(selectItem(item));
            else dispatch(removeItem(item));
          }}
          iconStyle={{
            borderColor: checkboxFillColor,
            borderRadius: 4,
            borderWidth: 2,
          }}
          innerIconStyle={{ borderWidth: 0 }}
        />
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
    <SafeAreaView style={[styles.backgroundContainer]}>
      <Heading />
      <View style={styles.exploreContainer}>
        <Icons
          name="rectangle"
          color={accentColor}
          size={38}
          style={{ width: 12 }}
        />
        <Text style={textStyles.exploreContainerText}>Explore</Text>
      </View>
      <FlatList data={users} renderItem={renderData} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: bgColor,
  },
  exploreContainer: {
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
  exploreContainerText: {
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

export default Home;
