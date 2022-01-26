import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  TouchableHighlight,
} from "react-native";

import ic_arrow_back from "../asset/images/ic_orange_back_1x.png";
import ic_credit_card from "../asset/images/ic_credit_card_1x.png";
import ic_coin from "../asset/images/ic_coin_1x.png";
import ic_master_card from "../asset/images/ic_master_card_1x.png";
import ic_credit_card_white from "../asset/images/ic_credit_card_white_1x.png";
import ic_question_mark from "../asset/images/ic_question_mark_1x.png";
import ic_lock_white from "../asset/images/ic_lock_white_1x.png";

const LogScreen = ({navigation}) => {
  const [colorBtn, setColorBtn] = useState('#25D482')
  return (
    <View style={{ backgroundColor: "white" }}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.btnBack}
            onPress={() => navigation.goBack()}
          >
            <Image source={ic_arrow_back} resizeMode="contain" />
          </TouchableOpacity>
          <View style={styles.headerPaiment}>
            <Text style={styles.title}>Paiment 💳 </Text>
            <View style={styles.headerPaimentRight}>
              <Text style={styles.sumMoney}> 12 154 CFA</Text>
              <Text style={styles.percent}>TVA inclue (18%)</Text>
            </View>
          </View>
        </View>
        <View style={styles.groupBtn}>
          <View style={styles.viewContainBtn}>
            <TouchableOpacity style={{...styles.btnCreditCard,backgroundColor: colorBtn }} >
              <Image source={ic_credit_card_white} />
              <Text style={styles.titleCreditCard}>Credit card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCoin}>
              <Image source={ic_coin} />
              <Text style={styles.titleCoin}>Mobile Money</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.viewMasterCard}>
            <Text style={styles.titleMasterCart}>Numéro de carte</Text>
            <View style={styles.viewInputMasterCard}>
              <TextInput
                placeholder="5261   4841   0151   8471"
                style={styles.inputMasterCard}
              />
              <Image source={ic_master_card} style={{ marginRight: 33 }} />
              <Image source={ic_credit_card} style={{ marginRight: 17 }} />
            </View>
          </View>
          <View style={styles.viewTitulaire}>
            <Text style={styles.titleTitulaire}>Titulaire</Text>
            <TextInput placeholder="Lucie AYAH" style={styles.inputTitulaire} />
          </View>
          <View style={styles.viewDateCVV}>
            <View style={styles.viewDate}>
              <Text style={styles.titleTitulaire}>Date d'expiration</Text>
              <TextInput placeholder="06/ 2024" style={styles.inputDate} />
            </View>
            <View style={styles.viewCVV}>
              <View style={styles.viewTitleCVV}>
                <Text style={styles.titleCVV}>CVV/CVC</Text>
                <View
                  style={{
                    backgroundColor: "#CFF2E2",
                    borderRadius: 18,
                    width: 18,
                    height: 18,
                    padding: 2.5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={ic_question_mark}
                    resizeMode="contain"
                    style={{ width: 6, height: 14, borderRadius: 18 }}
                  />
                </View>
              </View>
              <TextInput placeholder="917" style={styles.inputCVV} />
            </View>
          </View>
          <Text style={styles.paragraph}>
            Nous vous enverrons les détails de la commande à votre adresse
            e-mail après le paiement réussi.
          </Text>
          <View style={styles.viewBtnSubmit}>
            <TouchableOpacity style={styles.btnSubmit} onPress={()=>navigation.navigate('SuccessScreen')}>
              <Image source={ic_lock_white} />
              <Text style={styles.textBtnSubmit}>Payer la commande</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default LogScreen;
const styles = StyleSheet.create({
  header: {
    height: 253,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
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
  btnBack: {
    marginTop: 33,
    marginLeft: 16,
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
    backgroundColor: "#F8F8FB",
    padding: 17,
  },
  headerPaiment: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 25,
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 22,
    fontStyle: "normal",
    color: "#363636",
    fontWeight: "bold",
    letterSpacing: 0.3,
    textAlign: "center",
  },
  headerPaimentRight: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  sumMoney: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontStyle: "normal",
    color: "#25D482",
    fontWeight: "bold",
    letterSpacing: 0.3,
    textAlign: "right",
  },
  percent: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontStyle: "normal",
    color: "#B1B1B1",
    fontWeight: "normal",
    letterSpacing: 0.2,
    paddingTop: 2,
    textAlign: "right",
  },
  groupBtn: {
    width: "100%",
    paddingRight: 20,
    paddingLeft: 20,
    height: 69,
    top: 218,
    position: "absolute",
    elevation: 3,
  },
  viewContainBtn: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderRadius: 16,
  },
  btnCreditCard: {
    height: "100%",
    backgroundColor: "#25D482",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  titleCreditCard: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: 0.3,
    marginLeft: 8,
  },
  titleCoin: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#3A3C3F",
    letterSpacing: 0.3,
    marginLeft: 4,
  },
  btnCoin: {
    height: "100%",
    backgroundColor: "white",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  content: {
    marginTop: 59,
    width: "100%",
    paddingLeft: 38,
    paddingRight: 38,
    backgroundColor: "#FFFFFF",
  },
  viewMasterCard: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  titleMasterCart: {
    width: "100%",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#3A3C3F",
    letterSpacing: 0.3,
    width: "100%",
    textAlign: "left",
  },
  viewInputMasterCard: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    borderRadius: 16,
    width: "100%",
    backgroundColor: "orange",
    backgroundColor: "#F2F2F5",
  },
  inputMasterCard: {
    fontSize: 16,
    backgroundColor: "#F2F2F5",
    borderRadius: 16,
    flexGrow: 1,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 16,
    paddingBottom: 21,
  },
  viewTitulaire: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 24,
  },
  titleTitulaire: {
    width: "100%",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#3A3C3F",
    letterSpacing: 0.3,
    width: "100%",
    textAlign: "left",
  },
  inputTitulaire: {
    marginTop: 8,
    fontSize: 16,
    height: 56,
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#F2F2F5",
    borderRadius: 16,
    flexGrow: 1,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 16,
    paddingBottom: 21,
  },
  viewDateCVV: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
    backgroundColor: "white",
    justifyContent: "space-around",
  },
  viewDate: {
    flexDirection: "column",
    alignItems: "flex-start",
    flexGrow: 1,
    marginRight: 12,
  },
  inputDate: {
    marginTop: 8,
    fontSize: 16,
    height: 56,
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#F2F2F5",
    borderRadius: 16,
    flexGrow: 1,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 16,
    paddingBottom: 21,
  },
  viewCVV: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 12,
    flexGrow: 1,
  },
  viewTitleCVV: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  titleCVV: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#3A3C3F",
    letterSpacing: 0.3,
    textAlign: "left",
    marginRight: 30,
  },

  inputCVV: {
    marginTop: 8,
    fontSize: 16,
    height: 56,
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#F2F2F5",
    borderRadius: 16,
    flexGrow: 1,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 16,
    paddingBottom: 21,
  },
  paragraph: {
    width: "100%",
    fontFamily: "Roboto",
    fontSize: 12,
    fontStyle: "normal",
    color: "#B1B1B1",
    letterSpacing: 0.3,
    textAlign: "center",
    marginTop: 36,
  },
  viewBtnSubmit: {
    width: "100%",
    height: 57,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    marginBottom: 36,
  },
  btnSubmit: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    backgroundColor: "#25D482",
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
