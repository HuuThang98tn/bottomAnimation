import {
    StyleSheet,
    Text,
    View,
    Animated,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import image from './views/res/require/Imager';

type Props = {}

const AnimationImager = (props: Props) => {

    const animatedValue = new Animated.Value(0);
    let currentValue: any = 0;

    const [srcImg, setSrcImg] = React.useState<any>(image.ic_airplaneactivate)

    animatedValue.addListener(({ value }: any) => {
        currentValue = value;
    });

    const flipAnimation = () => {
        if (currentValue >= 90) {
            // Animated.spring(animatedValue, {
            //     toValue: 0,
            //     tension: 10,
            //     friction: 8,
            //     useNativeDriver: false,
            // }).start();
            // setSrcImg(image.ic_airplaneunactivate)
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true,

            }).start();




        } else {
            // Animated.spring(animatedValue, {
            //     toValue: 180,
            //     tension: 10,
            //     friction: 8,
            //     useNativeDriver: false,
            // }).start();
            // setSrcImg(image.ic_airplaneactivate)
            Animated.timing(animatedValue, {
                toValue: 180,
                duration: 2000,
                useNativeDriver: true,

            }).start();




        }
    };

    const setInterpolate = animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg'],
    });

    const rotateYAnimatedStyle = {
        transform: [{ rotateY: setInterpolate }],
    };


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    React Native Flip Image View Horizontally with Animation
                </Text>
                <Animated.Image
                    resizeMode="contain"
                    source={srcImg}
                    style={[rotateYAnimatedStyle, styles.imageStyle]}
                />
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={flipAnimation}>
                    <Text style={styles.buttonTextStyle}>
                        Click Here To Flip The Image
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default AnimationImager

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonStyle: {
        fontSize: 16,
        color: 'white',
        backgroundColor: 'green',
        padding: 5,
        marginTop: 32,
        minWidth: 250,
    },
    buttonTextStyle: {
        padding: 5,
        color: 'white',
        textAlign: 'center',
    },
    imageStyle: {
        width: 24,
        height: 24,
        borderRadius: 6,
    },
})