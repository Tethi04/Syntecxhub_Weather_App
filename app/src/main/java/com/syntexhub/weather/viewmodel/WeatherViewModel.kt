package com.syntexhub.weather.viewmodel

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.syntexhub.weather.model.WeatherResponse
import com.syntexhub.weather.network.RetrofitClient
import kotlinx.coroutines.launch

class WeatherViewModel : ViewModel() {

    private val _weatherData = MutableLiveData<WeatherResponse?>()
    val weatherData: LiveData<WeatherResponse?> get() = _weatherData

    private val _errorState = MutableLiveData<String?>()
    val errorState: LiveData<String?> get() = _errorState

    private val apiKey = "YOUR_OPENWEATHERMAP_API_KEY" // Free key from openweathermap.org

    fun fetchWeather(cityName: String) {
        if (cityName.isBlank()) {
            _errorState.value = "Please enter a city name"
            return
        }

        viewModelScope.launch {
            try {
                val response = RetrofitClient.apiService.getCurrentWeather(cityName, apiKey)
                if (response.isSuccessful && response.body() != null) {
                    _weatherData.value = response.body()
                    _errorState.value = null
                } else {
                    _errorState.value = "City not found or invalid API key!"
                    _weatherData.value = null
                }
            } catch (e: Exception) {
                _errorState.value = "Network error: ${e.localizedMessage}"
                _weatherData.value = null
            }
        }
    }
}
