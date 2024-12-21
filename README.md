# Weather Journal App

This project is part of the **Front-End Web Developer Nanodegree** from Udacity. It combines **server-side** and **client-side** development, utilizing **Node.js**, **Express**, and the **OpenWeatherMap API** to create a dynamic weather journal app.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
- [How It Works](#how-it-works)
- [Code Structure](#code-structure)
- [Acknowledgments](#acknowledgments)

## Overview

The Weather Journal App allows users to:
- Enter a ZIP code to fetch real-time weather data from the **OpenWeatherMap API**.
- Input their feelings and save them along with the weather information.
- Dynamically display the fetched weather data, the current date, and user input on the page.

## Features

1. **Server-Side Functionality**:
   - Local server set up using **Node.js** and **Express**.
   - GET and POST routes to handle client-server communication.
   - Middleware configured for secure and smooth data handling using **CORS** and **express.json()**.

2. **Client-Side Functionality**:
   - Fetch real-time weather data using the **OpenWeatherMap API**.
   - Update the DOM dynamically based on API responses and user inputs.
   - Error handling for API calls and server communication.

## Technologies Used

- Node.js
- Express
- OpenWeatherMap API
- Vanilla JavaScript (ES6)
- HTML
- CSS
- CORS Middleware

## Project Setup

1. Clone this repository to your local machine:
   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:
   ```bash
   cd weather-journal-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   node server.js
   ```

5. Open the app in your browser at:
   ```
   http://localhost:3000
   ```

6. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/), replace the placeholder API key in `app.js`:
   ```javascript
   const apiKey = 'YOUR_API_KEY&units=imperial';
   ```

## How It Works

1. User enters a ZIP code and their feelings.
2. Clicking the "Generate" button triggers:
   - Fetching weather data from OpenWeatherMap using the entered ZIP code.
   - Sending the weather data, date, and user input to the server using a POST request.
   - Updating the UI dynamically with the retrieved information.

## Code Structure

### server.js

- Sets up the Express app and middleware.
- Contains:
  - A GET route `/getData` to retrieve stored project data.
  - A POST route `/addData` to add new data to the `projectData` object.

### app.js

- Handles client-side functionality, including:
  - Fetching weather data from the OpenWeatherMap API.
  - Sending data to the server with a POST request.
  - Fetching data from the server with a GET request.
  - Dynamically updating the DOM.

### website/

- Contains the static files for the app:
  - `index.html`: The main HTML file.
  - `styles.css`: Styles for the app.
  - `app.js`: Client-side JavaScript file.

## Acknowledgments

This project is made possible by **Udacity**, **Stichting SPARK**, and **#PLwG** as part of the Front-End Web Developer Nanodegree Program.
