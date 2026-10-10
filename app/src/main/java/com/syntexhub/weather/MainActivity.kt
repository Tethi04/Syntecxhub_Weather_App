package com.syntexhub.weather

import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.activity.viewModels
import androidx.appcompat.app.AppCompatActivity
import com.syntexhub.weather.databinding.ActivityMainBinding
import com.syntexhub.weather.viewmodel.WeatherViewModel

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding
    private val viewModel: WeatherViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        setupObservers()
        setupListeners()

        // Default initial city fetch
        viewModel.fetchWeather("Siliguri")
    }

    private fun setupListeners() {
        binding.btnSearch.setOnClickListener {
            val city = binding.etCityInput.text.toString().trim()
            viewModel.fetchWeather(city)
        }
    }

    private fun setupObservers() {
        viewModel.weatherData.observe(this) { weather ->
            if (weather != null) {
                binding.tvCityName.text = weather.name
                binding.tvTemperature.text = "${weather.main.temp.toInt()}°C"
                binding.tvCondition.text = weather.weather.firstOrNull()?.description?.capitalize() ?: ""
                binding.tvHumidity.text = "${weather.main.humidity}%"
                binding.tvWind.text = "${weather.wind.speed} m/s"
                binding.tvError.text = ""
                binding.cardWeather.visibility = View.VISIBLE
            }
        }

        viewModel.errorState.observe(this) { errorMsg ->
            if (!errorMsg.isNullOrEmpty()) {
                binding.tvError.text = errorMsg
                Toast.makeText(this, errorMsg, Toast.LENGTH_SHORT).show()
            }
        }
    }
}
