<div align="center">

  # 🌸 Pastel Glassmorphic Weather App 🌸
  
  *An aesthetically pleasing, soft pastel glassmorphic weather forecasting application built for Web and Native Android using MVVM architecture and OpenWeatherMap API.*

  [![Live Demo](https://img.shields.io/badge/Live-Demo_Link-cyan?style=for-the-badge&logo=github)](https://tethi04.github.io/Syntecxhub_Weather_App/)
  [![GitHub stars](https://img.shields.io/github/stars/Tethi04/Syntecxhub_Weather_App?style=for-the-badge&color=purple)](https://github.com/Tethi04/Syntecxhub_Weather_App)
  [![License](https://img.shields.io/badge/License-MIT-pink?style=for-the-badge)](LICENSE)

  <br />

  <!-- App Screenshot Preview -->
  <img width="1079" height="2046" alt="Image" src="https://github.com/user-attachments/assets/ad8ce878-976c-4001-b65c-0ea6c12525ed" />

</div>

---

## 📖 Table of Contents
- [✨ Overview](#-overview)
- [🎨 Design Concept](#-design-concept)
- [⚡ Key Features](#-key-features)
- [📂 Comprehensive Project Structure](#-comprehensive-project-structure)
- [🌐 Live Demo & Web Deployment](#-live-demo--web-deployment)
- [🛠️ Detailed Step-by-Step Installation Guide](#️-detailed-step-by-step-installation-guide)
  - [1. Web Edition Setup](#1-web-edition-setup)
  - [2. Android Native Setup](#2-android-native-setup)
- [📱 How to Use & Features](#-how-to-use--features)
- [💻 Tech Stack](#-tech-stack)
- [👩‍💻 Author](#-author)

---

## ✨ Overview

**Pastel Glassmorphic Weather App** is developed as part of the **Syntecxhub Virtual Internship (Android Development - Week 3 Task)**. 

The application provides real-time meteorological data with a dual-platform implementation:
1. **Native Android Application:** Built using Kotlin, Retrofit for network calls, ViewModel, Coroutines, and Gson parser with lifecycle safety.
2. **Web Edition (GitHub Pages):** Built using Vanilla HTML5, CSS3 Glassmorphism, and ES6 JavaScript, replicating the exact pastel aesthetic in any browser.

---

## 🎨 Design Concept

The UI architecture follows modern **Glassmorphism principles**:
- **Frosted Glass Cards:** Semi-transparent containers with blurred backgrounds (`backdrop-filter: blur()`) and crisp white borders.
- **Pastel Gradient Mesh:** A soft multi-color gradient background shifting between Cyan (`#A5F3FC`), Purple (`#C084FC`), and Pink (`#F472B6`).
- **Clean Typography & Layouts:** Minimalist metrics display for temperature, humidity, and wind speed.

---

## ⚡ Key Features

- 🌤️ **Live Weather Data:** Fetches real-time temperature, condition descriptions, humidity, and wind speed via OpenWeatherMap API.
- 🔍 **City Search & Validation:** Instantly search weather for any global city with robust error and "city not found" state handling.
- ⚡ **MVVM & Coroutines Architecture:** Asynchronous network calls managed cleanly via Kotlin Coroutines and Android LiveData/ViewModel.
- 📱 **Dual Platform Support:** Fully functional as a native Android APK and a live web application hosted on GitHub Pages.

---

## 📂 Comprehensive Project Structure

Here is the complete project directory structure along with file descriptions:

```text
Syntecxhub_Weather_App/
│
├── app/                                  # Native Android Application Module
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── com/
│   │       │       └── syntexhub/
│   │       │           └── weather/
│   │       │               ├── model/
│   │       │               │   └── WeatherResponse.kt    # Data classes parsing OpenWeather JSON response
│   │       │               ├── network/
│   │       │               │   ├── WeatherApiService.kt  # Retrofit HTTP GET interface endpoints
│   │       │               │   └── RetrofitClient.kt     # Singleton Retrofit client instance builder
│   │       │               ├── viewmodel/
│   │       │               │   └── WeatherViewModel.kt   # ViewModel handling background coroutine fetch & LiveData
│   │       │               └── MainActivity.kt           # Main UI controller observing data & search actions
│   │       │
│   │       ├── res/                      # Android UI Resources
│   │       │   ├── drawable/             # Custom glass drawables & shapes
│   │       │   │   ├── bg_glass_card.xml       # Translucent frosted card container shape
│   │       │   │   ├── bg_glass_input.xml      # Frosted input field background shape
│   │       │   │   ├── bg_pastel_gradient.xml  # Linear mesh pastel background gradient
│   │       │   │   └── ic_search.xml           # Vector icon for search action
│   │       │   │
│   │       │   ├── layout/
│   │       │   │   └── activity_main.xml       # Main weather dashboard layout XML
│   │       │   │
│   │       │   └── values/
│   │       │       ├── colors.xml        # Color palette design tokens
│   │       │       ├── strings.xml       # Text string localization
│   │       │       └── styles.xml        # App theme definitions
│   │       │
│   │       └── AndroidManifest.xml       # Manifest declaring INTERNET permission & launcher activity
│   │
│   └── build.gradle                      # App-level build configuration & dependencies
│
├── docs/                                 # Web Edition for GitHub Pages Deployment
│   ├── index.html                        # Web layout matching native Android app
│   ├── style.css                         # Glassmorphism CSS styles, gradients, & responsive layout
│   └── script.js                         # Web fetch API integration, search handler, & DOM updates
│
├── .gitignore                            # Git ignore rule configuration
├── README.md                             # Comprehensive project documentation
├── build.gradle                          # Top-level project build script
└── settings.gradle                       # Gradle project settings & repository definitions
```

---

## 🌐 Live Demo & Web Deployment

You can test the Web Edition live directly from your browser:  
🔗 **[Launch Pastel Glassmorphic Weather App](https://tethi04.github.io/Syntecxhub_Weather_App/)**

---

## 🛠️ Detailed Step-by-Step Installation Guide

### 1. Web Edition Setup
*No local compiler required.*

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Tethi04/Syntecxhub_Weather_App.git](https://github.com/Tethi04/Syntecxhub_Weather_App.git)
   ```
2. **Open the project folder:**
   ```bash
   cd Syntecxhub_Weather_App
   ```
3. **Run Web Edition:**  
   Navigate to the `docs/` directory and open `index.html` in any web browser.

---

### 2. Android Native Setup
*Requirements: Android Studio (Ladybug / Jellyfish or newer) & JDK 17+.*

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Tethi04/Syntecxhub_Weather_App.git](https://github.com/Tethi04/Syntecxhub_Weather_App.git)
   ```
2. **Open in Android Studio:**
   - Launch Android Studio.
   - Click **Open** and select the cloned `Syntecxhub_Weather_App` root directory.
3. **Gradle Sync & Build:**  
   Allow Gradle to sync project dependencies automatically.
4. **Run on Emulator / Device:**  
   - Select your Android Virtual Device (AVD) or connect a physical Android device via USB debugging.
   - Click **Run (▶)** or press `Shift + F10`.

---

## 📱 How to Use & Features

| Feature | Trigger / UI Element | Description |
| :--- | :--- | :--- |
| **Search City Weather** | Search Input & Button | Type any valid city name and click Search to fetch current weather. |
| **Temperature Display** | Center Big Text | Shows live temperature converted in Celsius (°C). |
| **Weather Metrics** | Bottom Info Row | Displays real-time humidity percentage and wind speed. |
| **Error Handling** | Bottom Error View | Displays alert messages if a city name is invalid or network fails. |

---

## 💻 Tech Stack

- **Android Native App:** Kotlin, Retrofit 2, Gson, ViewModel, LiveData, Coroutines, ViewBinding, Material Design 3, OpenWeatherMap API.
- **Web Application:** HTML5, CSS3 Glassmorphism (Backdrop Filters, Flexbox), Vanilla JavaScript (ES6+), Fetch API.
- **Design Architecture:** Glassmorphism, Pastel Visual Tokens, MVVM Pattern.

---

## 👩‍💻 Author

**Tethi Biswas**  
- GitHub: [@Tethi04](https://github.com/Tethi04)  

---

<div align="center">
  <i>Crafted with 💖, attention to detail, and modern design principles for Syntecxhub Internship.</i>
</div>

