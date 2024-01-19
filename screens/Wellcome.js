import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Wellcome = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView>
      {/* Header */}
      <View className="flex-row pt-3 pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View>
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold tex-xl">Current Location</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Wellcome;
