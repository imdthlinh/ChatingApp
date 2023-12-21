import { View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { Logo } from "../assets";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { avatars } from "../utils/supports";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";


const HomeScreen = () => {
    const[avatar, setAvatar] = useState(avatars[0]?.image.asset.url);
    const[isLoading, setIsLoading] = useState(false);

    const navigation = useNavigation();

    return(
        <View className="
            flex-1
        ">
            <SafeAreaView>
                {/* set logo & avatar */}
                <View className="
                    w-full
                    flex-row
                    items-center
                    justijy-between
                    px-6
                    py-2
                    
                ">
                    <Image
                    source={Logo}
                    className="w-12 h-12"
                    resizeMode="contain"
                    />
                    <View className="w-60"/>
                    <TouchableOpacity className="
                        w-12
                        h-12
                        rounded-full
                        border
                        border-primary
                        flex
                        items-center
                        justify-center
                    ">
                        <Image
                            source={{uri: avatar}}
                            className="w-full h-full rounded-full "
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                </View>

                {/* scrolling area */}
                <ScrollView className="w-full px-4 pt-4">
                    <View className="w-full">
                        {/* messages title */}
                        <View className="
                            w-full
                            flex-row
                            items-center
                            justify-between
                            px-2
                        ">
                            <Text className="
                                text-primaryText
                                text-base
                                font-extrabold
                                pb-2
                            ">
                                Messages
                            </Text>

                            <TouchableOpacity onPress={() => navigation.navigate("AddToChatScreen")}>
                                <Ionicons name="chatbox" size={28} color="#555"/>
                            </TouchableOpacity>
                        </View>
                        {isLoading ? (
                            <>
                                <View className="
                                    w-full
                                    flex
                                    items-center
                                    justify-center
                                ">
                                    <ActivityIndicator size={"large"} color={"#43C651"}/>
                                </View>
                            </>
                        ) : (
                            <>
                                <MessageCard/>
                                <MessageCard/>
                                <MessageCard/>
                                <MessageCard/>
                                <MessageCard/>
                                <MessageCard/>
                                <MessageCard/>
                                <MessageCard/>
                                <MessageCard/>
                                <MessageCard/>
                            </>
                    )}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
const MessageCard = ({room}) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
        onPress={() => navigation.navigate("ChatScreen")}
        className="
            w-full
            flex-row
            items-center
            justify-start
            py-2
        ">
            {/* images */}
            <View className="
                w-16
                h-16
                rounded-full
                flex
                items-center
                border-2
                border-primary
                p-1
                justify-center
            ">
                <FontAwesome5 name="users" size={24} color="#555"/>
            </View>

            {/* content */}
            <View className="
                flex-1
                flex
                items-start
                justify-center
                ml-4
            ">
                <Text className="
                    text-[#333]
                    text-base
                    font-semibold
                    capitalize
                ">
                    Message title
                </Text>
                <Text className="
                    text-primaryText
                    text-sm
                ">
                    Hello! Welcome to chating app, How can we help you?
                </Text>
            </View>
        </TouchableOpacity>
    )
}
export default HomeScreen