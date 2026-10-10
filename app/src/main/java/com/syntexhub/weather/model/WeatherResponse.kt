package com.syntexhub.weather.model

data class WeatherResponse(
    val name: String,
    val main: MainData,
    val weather: List<WeatherDetail>,
    val wind: WindData
)

data class MainData(
    val temp: Double,
    val humidity: Int
)

data class WeatherDetail(
    val main: String,
    val description: String,
    val icon: String
)

data class WindData(
    val speed: Double
)
