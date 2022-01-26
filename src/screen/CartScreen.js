import React,{useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  SafeAreaView,
  Dimensions,
} from "react-native";
import img_bottle_orange from "../asset/images/img_bottle_orange_1x.png";
import img_bottle_milk from "../asset/images/img_bottle_milk_1x.png";
import img_bottle_amber from "../asset/images/img_bottle_amber_1x.png";
import ic_btn_tru from "../asset/images/ic_btn_tru_1x.png";
import ic_btn_cong from "../asset/images/ic_btn_cong_1x.png";

const list = [
  {
    id: 1,
    image: img_bottle_orange,
    title: "FANJUICE",
    subTitle: "Jus d’Orange Nature",
    price: "1100 CFA",
    mount: 2,
  },
  {
    id: 2,
    image: img_bottle_milk,
    title: "BPL",
    subTitle: "Lait écrémé",
    price: "3500 CFA",
    mount: 1,
  },
  {
    id: 3,
    image: img_bottle_amber,
    title: "TOUCH’AM",
    subTitle: "Lotion Aloe Vera",
    price: "5700 CFA",
    mount: 1,
  },
  {
    id: 4,
    image: img_bottle_orange,
    title: "FANJUICE",
    subTitle: "Jus d’Orange Nature",
    price: "1100 CFA",
    mount: 2,
  },
  {
    id: 5,
    image: img_bottle_milk,
    title: "BPL",
    subTitle: "Lait écrémé",
    price: "3500 CFA",
    mount: 1,
  },
  {
    id: 6,
    image: img_bottle_amber,
    title: "TOUCH’AM",
    subTitle: "Lotion Aloe Vera",
    price: "5700 CFA",
    mount: 1,
  },
  {
    id: 1,
    image: img_bottle_orange,
    title: "FANJUICE",
    subTitle: "Jus d’Orange Nature",
    price: "1100 CFA",
    mount: 2,
  },
  {
    id: 7,
    image: img_bottle_milk,
    title: "BPL",
    subTitle: "Lait écrémé",
    price: "3500 CFA",
    mount: 1,
  },
  {
    id: 8,
    image: img_bottle_amber,
    title: "TOUCH’AM",
    subTitle: "Lotion Aloe Vera",
    price: "5700 CFA",
    mount: 1,
  },
  {
    id: 9,
    image: img_bottle_orange,
    title: "FANJUICE",
    subTitle: "Jus d’Orange Nature",
    price: "1100 CFA",
    mount: 2,
  },
  {
    id: 10,
    image: img_bottle_milk,
    title: "BPL",
    subTitle: "Lait écrémé",
    price: "3500 CFA",
    mount: 1,
  },
  {
    id: 11,
    image: img_bottle_amber,
    title: "TOUCH’AM",
    subTitle: "Lotion Aloe Vera",
    price: "5700 CFA",
    mount: 1,
  },
];

import ic_arrow_back from "../asset/images/ic_orange_back_1x.png";

const CartScreen = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height
  const [mount, setMount] = useState(0)
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: 85,
          padding: 13,
          marginBottom: 19,
          backgroundColor: "#F2F2F5",
          borderRadius: 16,
        }}
      >
        <Image
          source={item.image}
          style={{ borderRadius: 11, height: 60, width: 61 }}
        />
        <View style={{ flexDirection: "column", flexGrow: 1, paddingLeft: 13 }}>
          <Text style={{
            fontFamily: "Roboto",
            fontSize: 10,
            fontStyle: "normal",
            fontWeight: "bold",
            color: "#B1B1B1",
            letterSpacing: 0.3,
            width: "100%",
            textAlign: "left",
            
          }}>{item.title}</Text>
          <Text style={{
            fontFamily: "Roboto",
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: "bold",
            color: "#494949",
            letterSpacing: 0.3,
            width: "100%",
            textAlign: "left",
            
          }}>{item.subTitle}</Text>
          <Text style={{
            fontFamily: "Roboto",
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: "bold",
            color: "#F08F5F",
            letterSpacing: 0.3,
            width: "100%",
            textAlign: "left",
            
          }}>{item.price}</Text>
        </View>
        <View
          style={{
            width: 67,
            height: "100%",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              backgroundColor: "#ffffff",
              height: 25,
              borderRadius: 5,
              width: "100%",
            }}
          >
            <TouchableOpacity onPress={()=>{setMount((mount)=>mount-1)}}>
              <Image source={ic_btn_tru} />
            </TouchableOpacity>
            <Text>{mount}</Text>
            <TouchableOpacity onPress={()=>{setMount((mount)=>mount+1)}}>
              <Image source={ic_btn_cong} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <TouchableOpacity style={styles.btnBack} onPress={()=>navigation.goBack()}>
          <Image source={ic_arrow_back} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      <Text style={styles.headerTitle}>Votre Panier 🛒 </Text>
      <SafeAreaView style={{ width: "100%", paddingTop: 30}}>
        <FlatList
          initialNumToRender={3}
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
        />
      </SafeAreaView>

      <View style={styles.footer}>
        <View style={styles.titleFooter}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.money}>10300 CFA</Text>
        </View>
        <View style={styles.viewBtnSubmit}>
          <TouchableOpacity style={styles.btnSubmit} onPress={()=>navigation.navigate('PaimentScreen')}>
            <Text style={styles.textSubmit}>Passer à la caisse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default CartScreen;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 10,
    backgroundColor: "#DDD",
    paddingRight: 16,
    paddingLeft: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  viewHeader: {
    marginTop: 95,
    height: 77,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  btnBack: {
    backgroundColor: "gray",
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
    backgroundColor: "#F8F8FB",
  },
  headerTitle: {
    width: "100%",
    marginTop: 40,
    fontFamily: "Roboto",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#363636",
    letterSpacing: 0.3,
    width: "100%",
    textAlign: "left",
  },

  footer: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 242,
  },
  titleFooter: {
    marginTop: 36,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  total: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#363636",
    letterSpacing: 0.3,
    textAlign: "left",
  },
  money: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#F08F5F",
    letterSpacing: 0.3,
  },
  viewBtnSubmit: {
    width: "100%",
    height: 62,
    paddingLeft: 20,
    paddingRight: 20,
    position: "absolute",
    bottom: 60,
  },
  btnSubmit: {
    backgroundColor: "#F08F5F",
    width: "100%",
    height: "100%",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  textSubmit: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#ffffff",
    letterSpacing: 0.3,

    textAlign: "left",
  },
});
