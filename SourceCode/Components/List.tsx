import * as React from "react";
import { Text, View, StyleSheet, Animated, Dimensions } from "react-native";
import { Avatar, Surface } from "react-native-paper";
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
const { height } = Dimensions.get("screen");

interface Data {
  name: string;
  email: string;
  job_title: string;
  key: string;
  avatar: string;
}

export default function List({ data }: { data: Data[] }) {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          //Normal Animation
          const inputRange = [
            -1,
            0,
            (height * 0.1 + 15) * index,
            (height * 0.1 + 15) * (index + 3),
          ];
          const scale = 1;
          const opacity = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });
          const Offset = scrollY.interpolate({
            inputRange,
            outputRange: [0, 0, 0, 500],
          });

          return (
            <Animated.View
              style={{
                transform: [{ scale: scale }, { translateX: Offset }],
                opacity: opacity,
              }}
              key={item.id}
            >
              <Surface style={styles.surface}>
                <View style={{ flex: 0.2, justifyContent: "center",alignItems:'center' }}>
                    <FontAwesome style={{color:(item.type=='Income'?"green":"red"),fontSize:30}} icon={(item.type=='Income'?SolidIcons.sortAmountUp:SolidIcons.sortAmountDownAlt)} />
                </View>
                <View
                  style={{
                    flex: 0.6,
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  
                  <View style={{height:'50%',justifyContent: "center"}}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" ,color:(item.type=='Income'?"green":"red")}}>
                        {item.title} : Food
                    </Text>
                    </View>
                  <View style={{height:'50%',display:'flex',flexDirection: 'row',justifyContent: "center",alignItems: "center"}}>
                  
                        <View style={{width:'50%'}}>
                            <Text style={{ fontSize: 14 }}>100,000 $</Text>
                        </View>
                        <View style={{width:'50%'}}>
                            <Text style={{ fontSize: 14 ,textAlign: 'right' }}>2 nov 2021</Text>
                        </View>
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.2,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems:'flex-end'
                  }}
                >
                    <FontAwesome style={{color:(item.type=='Income'?"#F4E1FF":"#F4E1FF"),fontSize:30}} icon={(item.type=='Income'?SolidIcons.chevronCircleRight:SolidIcons.chevronCircleRight)} />
                </View>
              </Surface>
            </Animated.View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  surface: {
    height: height * 0.1,
    marginTop: 15,
    padding: 8,
    marginHorizontal: 10,
    borderRadius: 8,
    flexDirection: "row",
  },
});

// Wave FlatList
// const inputRange = [
//   (height * 0.1 + 15) * (index - 9),
//   (height * 0.1 + 15) * (index - 6),
//   (height * 0.1 + 15) * (index - 3),
//   (height * 0.1 + 15) * index,
//   (height * 0.1 + 15) * (index + 3),
// ];
// const scale = scrollY.interpolate({
//   inputRange,
//   outputRange: [0, 0.1, 1, 0.1, 0],
// });
// const opacity = scrollY.interpolate({
//   inputRange,
//   outputRange: [0, 0.1, 1, 0.1, 0],
// });
// const Offset = scrollY.interpolate({
//   inputRange,
//   outputRange: [400, 300, 0, -300, -400],
// });

//Normal Animation
// const inputRange = [
//   -1,
//   0,
//   (height * 0.1 + 15) * index,
//   (height * 0.1 + 15) * (index + 3),
// ];
// const scale = 1;
// const opacity = scrollY.interpolate({
//   inputRange,
//   outputRange: [1, 1, 1, 0],
// });
// const Offset = scrollY.interpolate({
//   inputRange,
//   outputRange: [0, 0, 0, 500],
// });