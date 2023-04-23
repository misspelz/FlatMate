import { Alert, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
// import CountryPicker, {
// countryCode,
// country,
// } from "react-native-country-picker-modal";
// import { Entypo } from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";

// const showAlert = () =>
//   Alert.alert(
//     "Registration Successfull",
//     "Dear User, you have successfully regsitered, please proceed to login",
//     [
//       {
//         text: "continue",
//         onPress: () => {
//           navigation.navigate("Login");
//         },
//       },
//     ]
//   );

const Register = ({ navigation }) => {
  // const [phone, setPhone] = useState("");
  // const [password, setPassword] = useState("");
  // const [callingCode, setCallingCode] = useState("234");
  // const [country, setCountry] = useState("NG");

  // const BASE_URL = "";
  // const REGISTER_USER = async () => {
  //   try {
  //   } catch (error) {}
  // };

  return (
    <View style={styles.root}>
      <Pressable style={styles.navArrow} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={35} color="#231F20" />
      </Pressable>
      <Text style={{ fontWeight: "600", fontSize: 20 }}>Register With</Text>
      <Text style={{ fontWeight: "600", fontSize: 20 }}>Email & Password</Text>
      <Text style={{ color: "#837B7B", marginTop: 5 }}>
        Please enter your Email and Password.
      </Text>
      <Text
        style={{
          fontSize: 14,
          marginTop: 20,
          marginBottom: 10,
          fontWeight: "500",
        }}
      >
        Email
      </Text>

      <View style={styles.inputBox}>
        {/* <View style={styles.selectBox}>
          <CountryPicker
            withFlagButton={false}
            withCallingCodeButton
            countryCode={country}
            onSelect={(val) => {
              console.log(val);
              setCallingCode(val.callingCode);
              setCountry(val.cca2);
            }}
          />
          <Entypo name="chevron-down" size={24} color="#9BC6F2" />
        </View> */}
        <TextInput
          style={styles.inputField}
          placeholder="example@email.com"
          placeholderTextColor="#848484"
          keyboardType="email-address"
          maxLength={50}
        />
      </View>

      <Text
        style={{
          fontSize: 14,
          marginTop: 20,
          marginBottom: 10,
          fontWeight: "500",
        }}
      >
        Password
      </Text>

      <TextInput
        style={styles.inputPassword}
        placeholder="Enter your password"
        placeholderTextColor="#848484"
        keyboardType="numeric"
        maxLength={50}
        secureTextEntry={true}
      />

      <View
        style={{
          position: "absolute",
          width: "100%",
          alignSelf: "center",
          bottom: "20%",
        }}
      >
        <CustomButton
          buttonText={"Register"}
          onPress={() => alert("Registration Successfull")}
        />
      </View>
    </View>
  );
};
export default Register;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#fff",
    flex: 1,
    padding: "10%",
  },
  navArrow: {
    width: "20%",
    height: "7%",
  },
  inputBox: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  selectBox: {
    backgroundColor: "#9D69FC33",
    width: "28%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  inputField: {
    borderWidth: 1,
    width: "100%",
    height: "100%",
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: "#EBE1FE",
  },
  inputPassword: {
    borderWidth: 1,
    width: "100%",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: "#EBE1FE",
  },
});
