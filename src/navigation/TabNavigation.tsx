import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import image from '../views/res/require/Imager';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    ScreenChatting,
    ScreenHeart,
    ScreenHome,
    ScreenList
} from "../views/screens"
import LinearGradient from 'react-native-linear-gradient';
type Props = {

}

const Tab = createBottomTabNavigator();
const screenOptions = ({ route }: any) => ({
    headerShown: false,
    tabBarActiveTintColor: 'white',

    tabBarInactiveTintColor: 'rgba(0,0,0,0.5)',
    // tabBarActiveBackgroundColor:  '#ED6263',
    // tabBarInactiveBackgroundColor:  '#ED6263',
    tabBarBackground: () => (
        <LinearGradient
            // start={{ x: 0, y: 4 }}
            // end={{ x: 4, y: 0 }}
            colors={[
                "rgba(13, 14, 31, 1)",
                "rgba(47, 49, 74, 1)"
            ]}
            style={styles.linearGradient}
        >
        </LinearGradient>


    ),
    tabBarIcon: ({ focused, color, size }: any) => {

        /*
        let screenName = route.name
        let iconName = "facebook";
        if(screenName == "ProductGridView") {
            iconName = "align-center"
        } else if(screenName == "FoodList") {
            iconName = "accusoft"
        } else if(screenName == "Settings") {
            iconName = "cogs"
        }
        */
        return (
            <View>
                <Text>ok</Text>
            </View>
        )
        //  <Icon
        //     style={{
        //         paddingTop: 5
        //     }}
        //     name={route.name == "ScreenHome" ? "align-center" :
        //         (route.name == "FoodList" ? "accusoft" : (
        //             route.name == "Settings" ? "cogs" :
        //                 (route.name == "Profile" ? "user" :
        //                     (route.name == "Chat" ? "comment-dots" : ""))
        //         ))}
        //     size={23}
        //     color={focused ? 'white' : "red"}
        // />
    },
})
const TabNavigation = (props: Props) => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name={"ScreenHome"}
                component={ScreenHome}
                options={{
                    tabBarLabelStyle: {
                        // fontSize: fontSizes.h6
                    }
                }}
            />
            <Tab.Screen
                name={"ScreenList"}
                component={ScreenList}
                options={{
                    tabBarLabelStyle: {
                        // fontSize: fontSizes.h6
                    }
                }}
            />
            <Tab.Screen
                name={"ScreenHeart"}
                component={ScreenHeart}
                options={{
                    tabBarLabelStyle: {
                        // fontSize: fontSizes.h6
                    }
                }}
            />
            <Tab.Screen
                name={"ScreenChatting"}
                component={ScreenChatting}

                options={{
                    tabBarLabelStyle: {
                        // fontSize: fontSizes.h6
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation

const styles = StyleSheet.create({
    linearGradient: {
        height: 68
    }
})