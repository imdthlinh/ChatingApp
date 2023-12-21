import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {BGImage} from "../assets"
import { Logo } from "../assets";
import { UserTextInput } from "../components";
import { useNavigation } from "@react-navigation/native";
import { avatars } from "../utils/supports";
import { MaterialIcons } from "@expo/vector-icons";

const RegisterScreen = () => {

    const screenWidth = Math.round(Dimensions.get("window").width);

    const [email, setEmail] = useState("");
    const[name, setName] = useState("");
    const[password, setPassword] =useState("");
    const[getEmailValidationStatus, setGetEmailValidationSatus] =useState(false);
    const[avatar, setAvatar] = useState(avatars[0]?.image.asset.url);

    const navigation = useNavigation();

    return(
        <View className="flex-1 items-center justify-start">
            <Image 
            source={BGImage} 
            resizeMode="cover" 
            className="h-96"
            style={{width: screenWidth }} 
            />
            {/* Main View */}
            <View className="
            w-full 
            h-full 
            bg-white 
            rounded-tl-[90px] -mt-44 
            flex
            items-center
            justify-start 
            py-6 
            px-6 
            space-y-6">
                <View className="flex-row">
                    <Image 
                        source={Logo}
                        className="
                            w-10
                            h-10
                            backgroundColor-transparent"
                        resizeMode="cover"
                        
                    />
                    <Text className="py-2 
                    text-primaryText
                    text-xl
                    font-semibold">
                        Join with us!
                    </Text>
                </View>

                {/* avatar section */}
                <View className="
                    w-full
                    flex
                    items-center
                    justify-center
                    relative
                    -my-4
                ">
                    <TouchableOpacity className="
                        w-20
                        h-20
                        p-1
                        rounded-full
                        border-2
                        border-primary
                        relative
                    ">
                        <Image 
                        source={{uri: avatar}} 
                        className="
                            w-full
                            h-full
                            rounded-full"
                            resizeMode="cover"
                        />
                        <View className="
                            w-6
                            h-6
                            bg-primary
                            rounded-full
                            absolute
                            top-0
                            right-0
                            flex
                            items-center
                            justify-center
                        ">
                            <MaterialIcons 
                                name="edit" 
                                size={18}
                                color={"#fff"}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                <View className="w-full flex items-center justify-center">
                    {/* full name */}
                    <UserTextInput 
                    placeholder="Full Name" 
                    isPass={false} 
                    setStateValue={setName}
                    />

                    {/* email */}
                    <UserTextInput 
                    placeholder="Email" 
                    isPass={false} 
                    setStateValue={setEmail}
                    setGetEmailValidationSatus={setGetEmailValidationSatus}
                    />

                    {/* password */}
                    <UserTextInput 
                    placeholder="Paasword" 
                    isPass={true} 
                    setStateValue={setPassword}
                    />

                    {/* login button */}
                    <TouchableOpacity className="
                        w-60
                        px-4
                        py-2
                        rounded-xl
                        bg-primary
                        my-3
                        flex
                        items-center
                        justify-center">
                        <Text className="
                            py-2
                            text-white
                            text-xl
                            font-semibold
                        ">
                            Sign Up
                        </Text>
                    </TouchableOpacity>

                    <View className="
                        w-full
                        p-12
                        flex-row
                        items-center
                        justify-center
                        space-x-2
                    ">
                        <Text className="
                            text-base
                            text-primaryText
                        ">
                            Have an account!
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
                            <Text className="
                                text-base
                                font-semibold
                                text-primaryBold
                            ">
                                Login Here
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default RegisterScreen