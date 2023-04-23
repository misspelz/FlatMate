import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons, EvilIcons, AntDesign } from "@expo/vector-icons";

const Home = () => {
  let notificationAvailable = true;

  const [searchText, setSearchText] = useState("");

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  // horizontal flat list
  const horizontalFlats = [
    {
      id: 1,
      img: "https://www.shutterstock.com/image-photo/interior-small-apartment-living-room-260nw-2154108011.jpg",
      price: 500000,
      type: "Apartment",
      location: "Lagos Island",
    },
    {
      id: 2,
      img: "https://exej2saedb8.exactdn.com/wp-content/uploads/2022/02/Screen-Shot-2022-02-04-at-2.28.40-PM.png?strip=all&lossy=1&ssl=1",
      price: 650000,
      type: "Home",
      location: "Lagos Mainland",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZKiP_n9gPuCJkFTg7NFbnGLK9Mf1J28o8r7cY8XBGgMQcnHlA_vRB5QJ-iM02QCZkgC4&usqp=CAU",
      price: 200000,
      type: "Roomate",
      location: "Oshodi",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/originals/7d/81/4e/7d814eee185496be2b2f5795e7e31fe7.jpg",
      price: 900000,
      type: "Home",
      location: "Ikeja",
    },
    {
      id: 5,
      img: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/6/23/2/Nathalie-Milazzo_Master-Retreat_4.jpg.rend.hgtvcom.616.462.suffix/1445968491002.jpeg",
      price: 350000,
      type: "Apartment",
      location: "Ajah",
    },
  ];

  // vertical flat list
  const verticalFlats = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv-shelf_105762-2077.jpg?size=626&ext=jpg&ga=GA1.1.658927123.1679747164&semt=sph",
      price: 320000,
      type: "Home",
      location: "Lagos Mainland",
      address: "12, Harmony Street, Ogba, Lagos",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table-counter_105762-2105.jpg?size=626&ext=jpg&ga=GA1.1.658927123.1679747164&semt=sph",
      price: 500000,
      type: "Apartment",
      location: "Lagos Island",
      address: "11, Adekoya Estate, Ogba, Lagos",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-vector/railway-station-building-composition_1284-20060.jpg?size=626&ext=jpg&ga=GA1.2.658927123.1679747164&semt=sph",
      price: 450000,
      type: "Roomate",
      location: "Ikeja",
      address: "5, Adeleke Street, Ikeja, Lagos",
    },
  ];

  // let like = true;

  const [likeTabIndex, setLikeTabIndex] = useState(0);

  return (
    <View style={styles.container}>
      <FlatList
        data={verticalFlats}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.verticalFlatListBox}>
            <View
              style={{
                width: "100%",
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{
                  width: "100%",
                  height: 216,
                  borderTopRightRadius: 15,
                  borderTopLeftRadius: 15,
                }}
              />

              <Pressable
                onPress={() => setLikeTabIndex(index)}
                style={{
                  position: "absolute",
                  height: 50,
                  width: 50,
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  right: 10,
                  top: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {likeTabIndex === index ? (
                  <AntDesign name="heart" size={24} color="#FF5C5C" />
                ) : (
                  <AntDesign name="hearto" size={24} color="#OOO" />
                )}
              </Pressable>

              <View style={styles.line1}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#9D69FC",
                      fontSize: 16,
                      fontWeight: "700",
                    }}
                  >
                    N{item.price.toLocaleString()}
                  </Text>
                  <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={{
                      // color: "#848484",
                      fontSize: 16,
                      width: 130,
                    }}
                  >
                    / year . {item.type}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    // marginTop: 10,
                  }}
                >
                  <AntDesign name="star" size={24} color="#FFBC5A" />

                  <Text
                    style={{
                      color: "#FFBC5A",
                      fontWeight: "bold",
                      marginLeft: 10,
                    }}
                  >
                    4.0
                  </Text>
                </View>
              </View>

              <View style={styles.line2}>
                <Text
                  adjustsFontSizeToFit
                  numberOfLines={1}
                  style={{
                    color: "#000",
                    fontSize: 16,
                    width: 130,
                    fontWeight: "bold",
                  }}
                >
                  {item.location}
                </Text>

                <View
                  style={{ flexDirection: "row", justifyContent: "center" }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={require("../assets/images/v1.png")}
                      style={{ height: 20, width: 20 }}
                    />
                    <Text style={{ marginLeft: 4 }}>2</Text>
                  </View>
                  <View style={{ flexDirection: "row", marginLeft: 20 }}>
                    <Image
                      source={require("../assets/images/v2.png")}
                      style={{ height: 20, width: 20 }}
                    />
                    <Text style={{ marginLeft: 6 }}>3</Text>
                  </View>
                </View>
              </View>

              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Image
                  source={require("../assets/images/v3.png")}
                  style={{ height: 20, width: 15, marginRight: 6 }}
                />
                <Text>{item.address}</Text>
              </View>
            </View>
          </View>
        )}
        // horizontal flat list embedded in the vertical flat list
        ListHeaderComponent={
          <>
            <View style={styles.head}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={styles.headText}>
                  <Text style={{ fontSize: 20, fontWeight: 600 }}>
                    Find Your Best
                  </Text>
                  <Text style={{ fontSize: 20, fontWeight: 600 }}>
                    Apartment, Roomate..
                  </Text>
                </View>
                <View style={styles.notify}>
                  <MaterialIcons
                    name="notifications-none"
                    size={30}
                    color="black"
                  />
                  {notificationAvailable && (
                    <View
                      style={{
                        height: 10,
                        width: 10,
                        backgroundColor: "red",
                        borderRadius: "50%",
                        position: "absolute",
                        right: 2,
                        top: 2,
                      }}
                    />
                  )}
                </View>
              </View>
              <View style={styles.searchBox}>
                <EvilIcons name="search" size={30} color="#000" />
                <TextInput
                  value={searchText}
                  onChangeText={setSearchText}
                  placeholder="Search home, roomate..."
                  placeholderTextColor={"#8D8D8D"}
                  style={{ paddingLeft: 8 }}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginTop: 20,
                }}
              >
                {["Home", "Roomate", "Apartment"].map((item, index) => (
                  <Pressable
                    key={index}
                    onPress={() => setActiveTabIndex(index)}
                    style={{
                      marginRight: 20,
                      paddingHorizontal: 13,
                      paddingVertical: 8,
                      borderWidth: 1,
                      borderColor: "#c4c4c4",
                      borderRadius: 15,
                      backgroundColor:
                        activeTabIndex === index ? "#9D69FC" : "#FFFFFF",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        color: activeTabIndex === index ? "#FFFFFF" : "#000",
                      }}
                    >
                      {item}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>

            <View style={styles.horizontalFlatListBox}>
              <Text style={styles.horizontalFlatListText}>
                Recommended for you
              </Text>
              <FlatList
                data={horizontalFlats}
                horizontal
                contentContainerStyle={{
                  paddingBottom: 2,
                  paddingLeft: 2,
                }}
                showsHorizontalScrollIndicator={false}
                snapToAlignment="start"
                snapToInterval={240}
                decelerationRate={"fast"}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      width: 230,
                      height: 200,
                      // borderWidth: 1,
                      backgroundColor: "#fff",
                      marginRight: 10,
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10,
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.23,
                      shadowRadius: 2.62,

                      elevation: 4,
                    }}
                  >
                    <Image
                      source={{ uri: item.img }}
                      style={{
                        width: "100%",
                        height: 130,
                        backgroundColor: "grey",
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                      }}
                    />
                    <View
                      style={{
                        marginTop: 10,
                        paddingHorizontal: "5%",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: "#9D69FC",
                            fontSize: 16,
                            fontWeight: "700",
                          }}
                        >
                          N{item.price.toLocaleString()}
                        </Text>
                        <Text
                          adjustsFontSizeToFit
                          numberOfLines={1}
                          style={{
                            color: "#848484",
                            fontSize: 16,
                            width: 130,
                          }}
                        >
                          / year . {item.type}
                        </Text>
                      </View>
                      <Text
                        adjustsFontSizeToFit
                        numberOfLines={1}
                        style={{
                          color: "#000",
                          fontSize: 16,
                          width: 130,
                        }}
                      >
                        {item.location}
                      </Text>
                    </View>
                  </View>
                )}
              />
              <Text style={styles.verticaFlatListText}>Popular</Text>
            </View>
          </>
        }
      />
      {/* </View> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  head: {
    padding: "6%",
    flexDirection: "column",
  },
  searchBox: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#8D8D8D",
    marginTop: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  horizontalFlatListBox: {
    paddingLeft: "6%",
  },
  horizontalFlatListText: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  verticalFlatListBox: {
    padding: "6%",
    paddingTop: 0,
    height: "100%",
  },
  verticaFlatListText: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 10,
    paddingTop: 20,
  },
  line1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  line2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
});
