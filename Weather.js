import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";


const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA", "#F54BC2"],
        title: "비가 내리고 있어요!",
        subtitle: "우산 챙기세요!",
        icon: "weather-rainy"
    },
    Clear: {
        colors: ["#FEF253", "#FF7300", "#DBFFD5"],
        title: "날이 밝네요!",
        subtitle: "화창한 날씨입니다!",
        icon: "weather-sunny"
    },
    Thunderstorm: {
        colors: ["#00C6FB", "#005BEA", "#FFD9EC"],
        title: "천둥이 치네요!",
        subtitle: "천둥번개가 치고있어요!",
        icon: "weather-lightning"
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352", "#6F5000"],
        title: "날이 흐리네요!",
        subtitle: "구름이 많이 꼈네요!",
        icon: "weather-cloudy"
    },
    Snow: {
        colors: ["#7DE2FC", "#B9B6E5", "#FFD9FA"],
        title: "눈이 내리네요!",
        subtitle: "흰눈이 내리고 있어요!",
        icon: "weather-snowy"
    },
    Drizzle: {
        colors: ["#89F7FE", "#66A6FF", "#FAED7D"],
        title: "이슬비가 내리네요!",
        subtitle: "비가 약하게 내리고있어요!",
        icon: "weather-hail"
    },
    Haze: {
        colors: ["#89F7FE", "#66A6FF", "#FAED7D"],
        title: "안개가 심해요!",
        subtitle: "앞이 안 보일 수 있어요!",
        icon: "weather-windy"
    },
    Mist: {
        colors: ["#89F7FE", "#DB88A3", "#FAED7D"],
        title: "안개가 조금 있어요!",
        subtitle: "앞을 조심 하세요!",
        icon: "weather-fog"
    }
}

function Weather({ weatherName, temp }){
    return(
        <LinearGradient colors = { weatherCases[weatherName].colors } style = { styles.container }
        >
        <View style = { styles.upper }>
            <MaterialCommunityIcons
             color= "white" 
             size = {144} 
             name= {weatherCases[weatherName].icon} />
            <Text style = { styles.temp }>{temp}°</Text>
        </View>
        <View style = { styles.lower }>
            <Text style = { styles.title }>{weatherCases[weatherName].title}</Text>
            <Text style = { styles.subtitle }>{weatherCases[weatherName].subtitle}</Text>
        </View>
        </LinearGradient>
    )
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    temp: {
        fontSize: 50,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 25
    }
})
