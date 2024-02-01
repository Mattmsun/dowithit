import React from "react";
import Card from "../components/Card";
import { View } from "react-native";

import ListItem from "../components/lists/ListItem";
const ListDetailScreen = () => {
  return (
    <View>
      <Card
        title="Red jacket for sale!"
        subtitle="$100"
        image={require("../assets/jacket.jpg")}
        extraStyle={{ overflow: "visible" }}
      />

      <ListItem
        image={require("../assets/mosh.jpg")}
        title="Mosh"
        subTitle="5 Listing"
      />
    </View>
  );
};

export default ListDetailScreen;
