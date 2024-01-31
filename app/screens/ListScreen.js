import React, { useState } from "react";
import { FlatList, View } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const initialList = [
  {
    id: 1,
    title: "Red jacket for sale",
    subtitle: "$100",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    subtitle: "$1000",
    image: require("../assets/couch.jpg"),
  },
];
const ListScreen = () => {
  const [list, setList] = useState(initialList);
  const [refreshing, setRefreshing] = useState(false);
  return (
    <Screen extraStyle={{ backgroundColor: colors.light, padding: 20 }}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ width: "100%", height: 20 }} />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setMessage([
            {
              id: 2,
              title: "Couch in great condition",
              subtitle: "$1000",
              image: require("../assets/couch.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

export default ListScreen;
