import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { ImageBackground } from "react-native";
import { LogoSvg } from "../assets/svg/svg";
import { w, h } from "../constants/constants";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/images/login_img.png")}
      style={{ ...StyleSheet.absoluteFillObject }}
    >
      <View style={styles.logoBox}>
        <LogoSvg />

        <Text style={styles.headText}>
          The best place to find roomates, home apartment and rental listings.
        </Text>
      </View>

      <View style={styles.bottomBox}>
        <TouchableOpacity
          style={styles.button1}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Login")}
        >
          <Feather name="smartphone" size={24} color="#fff" />
          <Text style={{ color: "white", marginLeft: 10, fontSize: 16 }}>
            Continue with Phone Number
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2}>
          <FontAwesome5 name="facebook" size={24} color="#1877F2" />
          <Text style={{ color: "black", marginLeft: 10, fontSize: 16 }}>
            Welcome with Facebook
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button3}>
          <Image
            source={require("../assets/icons/google.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text style={{ color: "black", marginLeft: 10, fontSize: 16 }}>
            Welcome with Google
          </Text>
        </TouchableOpacity>

        <Pressable
          style={{
            flexDirection: "row",
            position: "absolute",
            bottom: 50,
            justifyContent: "center",
            width: w,
            gap: 5,
          }}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text>Don’t have an account?</Text>
          <Text style={{ color: "#1877F2", fontWeight: "bold" }}>Sign Up</Text>
        </Pressable>
        <Image
          source={require("../assets/icons/homebaseline.png")}
          style={{
            width: w * 0.3,
            height: 4,
            position: "absolute",
            bottom: 20,
            alignSelf: "center",
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  logoBox: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 30,
  },
  headText: {
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
    marginTop: 10,
  },
  bottomBox: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    width: w,
    height: h * 0.4,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  button1: {
    width: w * 0.8,
    alignSelf: "center",
    backgroundColor: "#000",
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  button2: {
    width: w * 0.8,
    alignSelf: "center",
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C4C4C4",
  },
  button3: {
    width: w * 0.8,
    alignSelf: "center",
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C4C4C4",
  },
});
