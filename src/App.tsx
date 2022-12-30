import { StyleSheet, Text, View, Animated, TouchableOpacity, Easing, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import TabNavigation from './navigation/TabNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import image from './views/res/require/Imager';

type Props = {}
const Stack = createNativeStackNavigator()

const App = (props: Props) => {
    const spinValue = new Animated.Value(0);
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });
    const animatedValue = new Animated.Value(0);
    let currentValue: any = 0;

    const [srcImg, setSrcImg] = React.useState<any>(image.ic_airplaneactivate)

    animatedValue.addListener(({ value }: any) => {
        currentValue = value;
    });
    const animationTab = () => {
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear, // Easing is an additional import from react-native
                useNativeDriver: true  // To make use of native driver for performance
            }
        ).start();
        if (currentValue >= 90) {
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 3000,
                useNativeDriver: true,

            }).start();
        } else {
            Animated.timing(animatedValue, {
                toValue: 180,
                duration: 3000,
                useNativeDriver: true,

            }).start();
        }
    }
    const setInterpolate = animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg'],
    });
    const rotateYAnimatedStyle = {
        transform: [{ rotateY: setInterpolate }],
    };

    return (
        <TouchableOpacity
            onPress={animationTab}
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Animated.View style={{
                transform: [{ rotate: spin }]
            }}>
                <LinearGradient
                    colors={['rgba(39, 55, 207, 1)', '#37F4FA']}
                    end={{ x: 0, y: 1 }} style={{
                        width: 68,
                        height: 68,
                        borderRadius: 68 / 2,
                        justifyContent: "center",
                        alignItems: 'center',
                    }}>
                    <LinearGradient
                        colors={['rgba(39, 55, 207, 1)', '#37F4FA']}
                        style={{
                            width: 62,
                            height: 62,
                            borderRadius: 62 / 2,
                            backgroundColor: "#fff",
                            justifyContent: "center",
                            alignItems: 'center',
                        }}>
                        <LinearGradient
                            colors={['#37F4FA', '#6386CB']}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 0 }} style={{
                                width: 46,
                                height: 46,
                                borderRadius: 46 / 2,
                                justifyContent: "center",
                                alignItems: 'center'
                            }}>
                            <View style={{
                                backgroundColor: "#fff",
                                width: 40,
                                height: 40,
                                borderRadius: 40 / 2,
                                justifyContent: "center",
                                alignItems: 'center'
                            }}>

                                <LinearGradient
                                    colors={['rgba(39, 55, 207, 1)', 'rgba(39, 55, 207, 0)']}
                                    end={{ x: 1, y: 0 }} style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 40 / 2,
                                        justifyContent: "center",
                                        alignItems: 'center'
                                    }}>

                                </LinearGradient>
                            </View>
                        </LinearGradient>

                    </LinearGradient>
                </LinearGradient>
            </Animated.View >
            <Animated.Image
                resizeMode='contain'
                source={image.ic_airplaneactivate}
                style={[rotateYAnimatedStyle, styles.imageStyle]}
            />
        </TouchableOpacity >
        // <NavigationContainer>
        //     <Stack.Navigator
        //         initialRouteName='TabNavigation' screenOptions={{
        //             headerShown: false
        //         }}
        //     >
        //         <Stack.Screen
        //             options={{ headerShown: false }}
        //             name={"TabNavigation"}
        //             component={TabNavigation} />
        //     </Stack.Navigator>

        // </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({
    linearGradient: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
    },
    buttonContainer: {
        flex: 1.0,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: 43,
        height: 43,
        borderRadius: 43 / 2,
        margin: 1
    },

    buttonContainer_: {
        // flex: 1.0,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: 24,
        height: 24,
        borderRadius: 24 / 2,
        margin: 1
    },

    linearGradient_: {
        // flex: 1.0,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: 27,
        height: 27,
        borderRadius: 27 / 2,
        margin: 1
    },
    buttonText: {
        textAlign: 'center',
        color: '#4C64FF',
        alignSelf: 'center',
    },
    imageStyle: { width: 26, height: 26, position: "absolute" }
})