import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import img_avatar from "../asset/images/img_avatar_1x.png";
import ic_scan_blue from "../asset/images/ic_scan_blue_1x.png";
import ic_warning_1x from "../asset/images/img_warning_1x.png";
import ic_check from "../asset/images/ic_check_1x.png";
import ic_menu from "../asset/images/ic_menu_1x.png";
import ic_arrow_black from "../asset/images/ic_arrow_black_1x.png";
import img_bottle_milk_1x from "../asset/images/img_bottle_milk_1x.png";
import img_bottle_amber_1x from "../asset/images/img_bottle_amber_1x.png";

const items = [
  {
    id: 1,
    title: "Scanner un produit",
    subTitle: "384 Scannés",
    img: ic_scan_blue,
    color: "#DBDAF7",
  },
  {
    id: 2,
    title: "Contrefaçons",
    subTitle: "23 détectées",
    img: ic_warning_1x,
    color: "#F6E3DB",
  },
  {
    id: 3,
    title: "Produits achetés",
    subTitle: "164 achats",
    img: ic_check,
    color: "#CCE7E5",
  },
  {
    id: 4,
    title: "Liste de souhaits",
    subTitle: "258 articles",
    img: ic_menu,
    color: "#B0EDF3",
  },
];
const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container} horizontal={false}>
      <View style={styles.info}>
        <View>
          <Text style={styles.title}>Bonjour 👋🏻 </Text>
          <Text style={styles.sayHi}>Lucie AYAH</Text>
        </View>
        <Image source={img_avatar} style={styles.img_avatar} />
      </View>
      <Text style={styles.titleSubject}>Vos idées d’achat</Text>
      <View style={styles.section1}>
        <TouchableOpacity style={styles.itemFlatlist}>
          <View
            style={{
              padding: 15,
              borderRadius: 16,
              backgroundColor: "#DBDAF7",
            }}
          >
            <Image source={ic_scan_blue} />
          </View>
          <Text style={styles.titleItem} numberOfLines={1}>
            Scanner un produit
          </Text>
          <Text style={styles.subTitleItem}>384 Scannés</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemFlatlist}>
          <View
            style={{
              padding: 15,
              borderRadius: 16,
              backgroundColor: "#F6E3DB",
            }}
          >
            <Image source={ic_warning_1x} />
          </View>
          <Text style={styles.titleItem} numberOfLines={1}>
            Contrefaçons
          </Text>
          <Text style={styles.subTitleItem}>23 détectées</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section2}>
        <TouchableOpacity style={styles.itemFlatlist}>
          <View
            style={{
              padding: 15,
              borderRadius: 16,
              backgroundColor: "#CCE7E5",
            }}
          >
            <Image source={ic_check} />
          </View>
          <Text style={styles.titleItem} numberOfLines={1}>
            Scanner un produit
          </Text>
          <Text style={styles.subTitleItem}>384 Scannés</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemFlatlist}>
          <View
            style={{
              padding: 15,
              borderRadius: 16,
              backgroundColor: "#B0EDF3",
            }}
          >
            <Image source={ic_menu} />
          </View>
          <Text style={styles.titleItem} numberOfLines={1}>
            Contrefaçons
          </Text>
          <Text style={styles.subTitleItem}>23 détectées</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.viewPlus}>
        <Text style={styles.titlePlus}>Découvrez plus</Text>
        <TouchableOpacity>
        <Image source={ic_arrow_black} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} contentContainerStyle={styles.viewItemPlus}>
        <TouchableOpacity style={styles.itemplus}>
          <Image source={img_bottle_milk_1x} style={styles.img_bottle_milk_1x} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemplus}>
          <Image source={img_bottle_amber_1x} style={styles.img_bottle_milk_1x} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemplus}>
          <Image source={img_bottle_milk_1x} style={styles.img_bottle_milk_1x} />
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    paddingRight: 16,
    paddingLeft: 16,
    alignItems: "center",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 64,
    width: "100%",
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 22,
    fontWeight: "700",
    color: "#363636",
    letterSpacing: 0.3,
  },
  sayHi: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "400",
    color: "#363636",
    letterSpacing: 0.3,
  },
  img_avatar: {
    height: 48,
    width: 48,
    borderRadius: 4,
    marginTop: 14,
  },
  titleSubject: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "500",
    color: "#363636",
    marginTop: 48,
    letterSpacing: 0.3,
    width: "100%",
    textAlign: "left",
  },
  section1: {
    paddingTop: 33,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 13,
    paddingLeft: 13,
    width: "100%",
  },
  section2: {
    paddingTop: 14.47,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 13,
    paddingLeft: 13,

    width: "100%",
  },
  itemFlatlist: {
    backgroundColor: "#F7EFEE",
    borderRadius: 16,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 39,
    paddingBottom: 36,
    alignItems: "center",
    width: 158,
    height: 176,
    flexGrow: 1,
    marginRight: 9,
    marginLeft: 9,
  },
  titleItem: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "500",
    color: "#363636",
    marginTop: 9,
    textAlign: "center",
    letterSpacing: 0.3,
  },
  subTitleItem: {
    color: "#82A6B0",
    fontFamily: "Roboto",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "bold",
    marginTop: 9,
    textAlign: "center",
    letterSpacing: 0.3,
  },
  viewPlus: {
    marginTop: 35.62,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: '100%'
  },
  titlePlus: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "500",
    color: "#363636",
    textAlign: "center",
    letterSpacing: 0.3,
  },
  viewItemPlus: {
    marginTop: 28,
  
    marginLeft: 23
  },
  itemplus: {
    width: 127,
    height: 125,
    borderRadius: 16,
    marginRight: 25
  },
  img_bottle_milk_1x: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
});
