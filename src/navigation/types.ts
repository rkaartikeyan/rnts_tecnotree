import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootNavigationParamList = {
  Home: undefined;
  Detail: undefined;
};

export type RootNavigationProps =
  NativeStackNavigationProp<RootNavigationParamList>;
