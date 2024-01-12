import {Dimensions, Platform} from 'react-native';

export const DEVICE_HEIGTH = Dimensions.get('window').height;
export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_TYPE = Platform.OS;
