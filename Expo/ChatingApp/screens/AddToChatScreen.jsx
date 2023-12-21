import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { avatars } from "../utils/supports";

const AddToChatScreen = () => {
    const[avatar, setAvatar] = useState(avatars[0]?.image.asset.url);
    const navigation = useNavigation();
    const [addChat, setAtChat] = useState("");

    const createNewChat = async () => {
    //     let id = `${Date.now()}`

    //     // // const data tu server = {
    //     //     _id: id,
    //     //     user: user,
    //     //     chatName: addChat
    //     }
    }

    return (
        <View className="flex-1">
            <View className="
                w-full
                bg-primary
                px-4
                py-6
                flex-[0.2]
            ">
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

                    {/* last section */}
                    <View className="
                        flex-row
                        items-center
                        justify-center
                        space-x-3
                    ">
                        <Image
                            source={{uri: avatar}}
                            className="w-12 h-12 rounded-full "
                            resizeMode="cover"
                        />
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
                <View className="
                    w-full px-4 py-4
                ">
                    <View className="
                        w-full
                        px-4
                        flex-row
                        items-center
                        justify-between
                        py-3
                        rounded-xl
                        border
                        border-gray-200
                        space-x-3
                    ">
                        {/* icons */}
                        <Ionicons name="chatbubbles" size={24} color={"#777"}/>
                        {/* text input */}
                        <TextInput 
                            className="flex-1 text-lg text-primaryText -mt-2 h-12 w-full"
                            placeholder="Create a chat"
                            placeholderTextColor={"#999"}
                            value={addChat}
                            onChangeText={(text) => setAtChat(text)}
                        />
                        {/* icon */}
                        <TouchableOpacity onPress={createNewChat}>
                            <FontAwesome name="send" size={24} color="#777"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default AddToChatScreen;