import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import ic_arrow_back from "../asset/images/ic_orange_back_1x.png";
import img_bg_phone from "../asset/images/img_bg_phone_1x.png";
import ic_arrow_blue from "../asset/images/ic_arrow_blue_1x.png";
const SuccessScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
        <View style={styles.viewHeader}>
          <TouchableOpacity
            style={styles.btnBack}
            onPress={() => navigation.goBack()}
          >
            <Image source={ic_arrow_back} resizeMode="contain" />
          </TouchableOpacity>
        </View>
        <Image
          source={img_bg_phone}
          resizeMode="contain"
          style={styles.img_bg_phone}
        ></Image>
        <Text style={styles.title}>Paiement réussi!</Text>
        <Text numberOfLines={3} style={styles.subTitle}>
          Nous vous enverrons les détails de la commande à votre adresse e-mail
          après le paiement réussi.
        </Text>
        <TouchableOpacity style={styles.viewDetail}>
          <Text style={styles.titleDetail}>Voir les détails</Text>
          <Image source={ic_arrow_blue} resizeMode="contain" />
        </TouchableOpacity>
        <View style={styles.viewBtnSubmit}>
          <TouchableOpacity
            style={styles.btnSubmit}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Text style={styles.textBtnSubmit}>Payer la commande</Text>
          </TouchableOpacity>
        </View>
      
    </ScrollView>
  );
};
export default SuccessScreen;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#DDD",
    paddingRight: 16,
    paddingLeft: 16,
    alignItems: "center",
    backgroundColor: "white",
  },
  viewHeader: {
    marginTop: 41,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  btnBack: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
    backgroundColor: "#F8F8FB",
    shadowColor: "rgba(37, 212, 130, 0.2)",
    shadowOffset: {
      width: 5,
      height: 7,
      shadowColor: "#25D482",
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 2,
  },
  img_bg_phone: {
    marginTop: 90,
    resizeMode: "contain",
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontStyle: "normal",
    color: "#363636",
    fontWeight: "bold",
    letterSpacing: 0.3,
    textAlign: "center",
    marginTop: 102,
  },
  subTitle: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontStyle: "normal",
    color: "#7A7A7A",
    fontWeight: "normal",
    letterSpacing: 0.3,
    textAlign: "center",
    marginTop: 16,
    marginLeft: 74,
    marginRight: 77,
  },
  viewDetail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 22,
  },
  titleDetail: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    color: "#5A6CF3",
    fontWeight: "bold",
    letterSpacing: 0.3,
    textAlign: "center",
    marginRight: 7,
  },
  viewBtnSubmit: {
    width: "100%",
    height: 57,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 44,
    marginBottom: 36,
    paddingLeft: 21,
    paddingRight: 21,
    marginBottom: 72,
  },
  btnSubmit: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    backgroundColor: "#5A6CF3",
    width: "100%",
    height: "100%",
  },
  textBtnSubmit: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontStyle: "normal",
    color: "#FFFFFF",
    letterSpacing: 0.3,
    textAlign: "center",
    marginLeft: 16,
  },
});
