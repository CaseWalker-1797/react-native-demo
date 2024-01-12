import { Image, StyleSheet, Text, View, Switch } from 'react-native';
import React from 'react';
import { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  accentColor,
  bgColor,
  switchOffColorGrad1,
  switchOnColorGrad1,
  switchOnColorGrad2,
  textColor,
} from '../styles/Colors';

const Heading = () => {
  const [switchOn, setBgColor] = useState(false);
  const toggle = () => setBgColor((previousState) => !previousState);

  return (
    <View style={{ margin: 6, padding: 6 }}>
      <View>
        <Text style={textStyles.heading}>Let's make today count</Text>
      </View>
      <View style={styles.userContainer}>
        <View>
          <Text style={textStyles.headingDate}>June 30th,2022</Text>
          <Text style={textStyles.containerText}>Welcome Back</Text>
        </View>
        <View style={{ marginLeft: 8 }}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: 'https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png',
            }}
          />
        </View>
      </View>
      <LinearGradient
        style={styles.userDetailContainer}
        colors={
          switchOn
            ? [switchOnColorGrad1, switchOnColorGrad2]
            : [switchOffColorGrad1, switchOffColorGrad1]
        }
      >
        <View style={{ alignContent: 'flex-start' }}>
          <Text style={textStyles.containerTextHeading}>
            Cameron Williamson
          </Text>
          <Text style={textStyles.containerText}>+91 9876543210</Text>
          <Text style={textStyles.containerTextAmt}>Rs. 10,000.00</Text>
        </View>
        <View>
          <Switch
            trackColor={{ false: bgColor, true: accentColor }}
            thumbColor={textColor}
            onValueChange={toggle}
            value={switchOn}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 12,
  },
  userDetailContainer: {
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingRight: 18,
    paddingLeft: 16,
  },
  imageStyle: {
    height: 50,
    width: 50,
    alignContent: 'flex-end',
  },
});

const textStyles = StyleSheet.create({
  heading: {
    fontSize: 48,
    color: textColor,
    fontWeight: 'bold',
    paddingBottom: 8,
  },
  headingDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: textColor,
    paddingBottom: 8,
  },
  containerTextHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  containerText: {
    fontSize: 16,
    fontWeight: '600',
    color: textColor,
    marginTop: 10,
  },
  containerTextAmt: {
    fontSize: 16,
    fontWeight: '600',
    color: accentColor,
    marginTop: 10,
  },
});
