import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { useRoute } from '@react-navigation/native';

const Details = () => {
  const route = useRoute();
  const { data } = route.params;
  return (
    <SafeAreaView>
      <ScrollView>
        <Image source={{ uri: data.image }} style={styles.image} />
        <Text style={styles.text_name}>Name: {data.name}</Text>
        <Text style={styles.text_price}>Price: {data.price}</Text>
        <Text style={styles.text_description}>
          Description: {data.description}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 300,
  },
  text_name: {},
  text_price: {},
  text_description: {},
});

export default Details;
