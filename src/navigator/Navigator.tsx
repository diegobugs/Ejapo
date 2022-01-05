import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  CalendarScreen,
  SettingsScreen,
  TasksScreen,
  TutorialScreen,
} from "@screens";

export type MainStackParamList = {
  Home: undefined;
  Tutorial: undefined;
};

export type TabParamList = {
  Tasks: undefined;
  Calendar: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tasks" component={TasksScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tutorial" component={TutorialScreen} />
      <Stack.Screen name="Home" component={HomeTab} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
