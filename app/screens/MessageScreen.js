import React, { useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const originalMessage = [
  {
    id: 1,
    title: "t1",
    description: "d1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "t2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "t3",
    description: "d3",
    image: require("../assets/mosh.jpg"),
  },
];

const MessageScreen = () => {
  const [message, setMessage] = useState(originalMessage);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (id) => {
    setMessage(message.filter((m) => m.id !== id));
  };
  return (
    <Screen>
      <FlatList
        data={message}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            showChevrons
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("tapped")}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessage([
            {
              id: 3,
              title: "t3",
              description: "d3",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

export default MessageScreen;
