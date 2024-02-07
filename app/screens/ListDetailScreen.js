import React from "react";
import Card from "../components/Card";
import { View } from "react-native";

import ListItem from "../components/lists/ListItem";

const ListDetailScreen = ({ route }) => {
  const listing = route.params;
  return (
    <View>
      <Card
        title={listing.title}
        subtitle={`$ ${listing.price}`}
        imageUrl={listing.images[0].url}
        extraStyle={{ overflow: "visible", height: "60%" }}
      />

      <ListItem
        image={require("../assets/mosh.jpg")}
        title="Mosh"
        subTitle="5 Listing"
        showChevrons
      />
    </View>
  );
};

export default ListDetailScreen;
