import { View, Text, TouchableOpacity, Image, TextInput, Platform, ActivityIndicator } from "react-native";
import React, {useRef, useState } from "react";
import { ServerContainer, useNavigation } from "@react-navigation/native";
import { Entypo, FontAwesome5, FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { avatars } from "../utils/supports";
import HomeScreen from "./HomeScreen";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";

const ChatScreen = () => {
    const navigation = useNavigation();
    const[avatar, setAvatar] = useState(avatars[0]?.image.asset.url);
    const [isLoading, setIsLoading] = useState(false);
    const[message, setMessage] = useState("");

    const TextInputRef = useRef(null);

    const handKeyboardOpen = () => {
        if(TextInputRef.current){
            TextInputRef.current.focus();
        }
    };

    const sendMessage = () => {
        // data tu server(id, roomID, timeStamp, message, user,...)
    }

    return (
        <View className="flex-1">
            <View className="w-full bg-primary px-4 py-6 flex-[0.2] ">
                <View className="
                    flex-row
                    items-center
                    justify-between
                    w-full
                    px-4
                    py-12
                ">
                    {/* go back */}
                    <TouchableOpacity  onPress={() => navigation.goBack()}>
                        <MaterialIcons name="chevron-left" size={32} color={"#fbfbfb"}/>
                    </TouchableOpacity>
                    {/* middle */}
                    <View className="
                        flex-row
                        items-center
                        justify-center
                        space-x-3
                    ">
                        <View className="
                            w-12
                            h-12
                            rounded-full
                            border
                            border-white
                            flex
                            items-center
                            justify-center
                        ">
                            <FontAwesome5 name="users" size={24} color="#fbfbfb"/>
                         </View>
                         <View>
                            <Text className="
                                text-gray-50
                                text-base
                                font-semibold
                                capitalize
                            ">
                                {/* ChatName */} Meeting Room 
                            </Text>
                            <Text className="
                                text-gray-100
                                text-sm
                                font-semibold
                                capitalize
                            ">
                                {/* Status */} Online
                            </Text>
                         </View>
                    </View>
                    {/* last section */}
                    <View className="
                        flex-row
                        items-center
                        justify-center
                        space-x-3
                    ">
                        <TouchableOpacity>
                            <FontAwesome5 name="video" size={24} color="#fbfbfb"/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome5 name="phone" size={24} color="#fbfbfb"/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Entypo name="dots-three-vertical" size={24} color="#fbfbfb"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* bottom section */}
            <View className="
                w-full
                bg-white
                px-4
                py-6
                rounded-3xl
                flex-1
                rounded-t-[50px]
                -mt-10
            ">
                <KeyboardAvoidingView 
                    className="flex-1"
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={160}
                >
                    <ScrollView>
                       {isLoading ? (
                        <>
                            <View className="w-full flex items-center justify-centr">
                                <ActivityIndicator size={"large"} color={"#43C651"}/>
                            </View>
                        </>
                       ):(
                        <>
                        <View className="m-1">
                            <View 
                            style={{alignSelf: "flex-end"}}
                            className="
                                px-4 
                                py-2 
                                rounded-tl-2xl 
                                rounded-tr-2xl 
                                rounded-bl-2xl
                                bg-primary
                                w-auto
                                relative
                            ">
                                <Text className="text-base font-semibold text-white"> Hello </Text>
                            </View>
                            {/* Time */}
                            <View style={{alignSelf: "flex-end"}}>
                                <Text className="text-[12px] text-black font-semibold">
                                    {new Date(
                                        parseInt()*1000
                                    ).toLocaleTimeString("en-US", {
                                        hour: "numeric",
                                        minute: "numeric",
                                        hour12: true,
                                    })}
                                </Text>
                            </View>
                        </View>
                        <View 
                        style={{alignSelf: "flex-start"}}
                        className="
                            flex
                            items-center
                            justify-start
                            space-x-2
                        ">
                            <View className="
                                flex-row
                                items-center
                                justify-center
                                space-x-2
                            ">
                                {/* avatar */}
                                <Image 
                                    className="w-12 h-12 rounded-full"
                                    resizeMode="cover"
                                    source={{uri:avatar}}
                                />
                                {/* text */}
                                <View className="m-1">
                                    <View 
                                    className="
                                        px-4 
                                        py-2 
                                        rounded-tl-2xl 
                                        rounded-tr-2xl 
                                        rounded-bl-2xl
                                        bg-gray-200
                                        w-auto
                                        relative
                                    ">
                                    <Text className="text-base font-semibold text-black"> 
                                        Hi
                                    </Text>
                                </View>
                                {/* Time */}
                                <View style={{alignSelf: "flex-start"}}>
                                    <Text className="text-[12px] text-black font-semibold">
                                    {new Date(
                                        parseInt()*1000
                                    ).toLocaleTimeString("en-US", {
                                        hour: "numeric",
                                        minute: "numeric",
                                        hour12: true,
                                    })}
                                    </Text>
                                </View>
                            </View>
                            </View>
                        </View>
                        </>
                       )}
                                
                    </ScrollView>
                    <View className="w-full flex-row items-center justify-center px-8">
                        <View className="
                            bg-gray-200 
                            rounded-2xl 
                            px-4 
                            space-x-4 
                            py-2 
                            flex-row 
                            items-center 
                            justify-center
                        ">
                            <TouchableOpacity onPress={handKeyboardOpen}>
                                <Entypo name="emoji-happy" size={24} color="#555"/>
                            </TouchableOpacity>
                            <TextInput
                                className="flex-1 h-8 text-base text-primaryText font-semibold"
                                placeholder="Type here..."
                                placeholderTextColor={"#999"}
                                value={message}
                                onChangeText={(text) => setMessage(text)}
                            />
                            <TouchableOpacity>
                                <Entypo name="mic" size={24} color="#43C651"/>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity className="pl-4" onPress={sendMessage}>
                            <FontAwesome name="send" size={24} color="#555"/>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </View>
    )
}


export default ChatScreen