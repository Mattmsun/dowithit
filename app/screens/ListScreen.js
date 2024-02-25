import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingApi from "../api/listing";
import AppText from "../components/AppText";
import Button from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

const ListScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const {
    data: listings,
    loading,
    error,
    request: loadListings,
  } = useApi(listingApi.getListings);
  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen extraStyle={{ backgroundColor: colors.light, padding: 20 }}>
        {error && (
          <>
            <AppText>We are facing a problem...</AppText>
            <Button title="Retry" onPress={loadListings} />
          </>
        )}
        <FlatList
          data={listings}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              title={item.title}
              subtitle={item.price}
              imageUrl={item.images[0].url}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
          ItemSeparatorComponent={() => (
            <View style={{ width: "100%", height: 20 }} />
          )}
          // refreshing={refreshing}
          // onRefresh={loadListings}
        />
      </Screen>
    </>
  );
};

export default ListScreen;
