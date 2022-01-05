import { TabParamList } from "@navigator";
import { NavigationProp, useTheme } from "@react-navigation/native";
import { ThemeType } from "@utils";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

interface CalendarScreenProps {
  navigation: NavigationProp<TabParamList, "Calendar">;
}

const CalendarScreen = ({ navigation }: CalendarScreenProps) => {
  const theme = useTheme() as ThemeType;

  return (
    <SafeAreaView style={styles.container(theme)}>
      <View
        style={{
          marginBottom: 10,
        }}
      >
        <Text>Template App</Text>
      </View>
    </SafeAreaView>
  );
};

export default CalendarScreen;