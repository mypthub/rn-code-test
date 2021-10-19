import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, Dimensions, Animated, View, Text } from 'react-native';
import customData from './data.json';
import Product from '../../components/Product/Product';


const Market = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    setData(customData.data)
  });


  const width = Dimensions.get('window').width - 100;
  return (
    <SafeAreaView>
      <FlatList
        style={{ marginTop: 20, }}
        data={data}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text style={{ fontSize: 16, marginHorizontal: 25, marginTop: 10 }}>{item.category_name}</Text>
            <Animated.FlatList
              style={{ marginHorizontal: 10, marginBottom: 30 }}
              data={item.list}
              keyExtractor={(item, index) => item.id}
              renderItem={({ item }) => (
                <Product item={item} width={width} />
              )
              }
              horizontal={true}
            />
          </View>
        )}
      />
    </SafeAreaView>
  )



}


export default Market;
