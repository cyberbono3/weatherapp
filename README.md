# Weather app


## Overview
The simple app allows to utilize openweathermap API to send AJAX request to fetch the temperature, pressure and humidity in major US cities.

## Stack:
React JS + Redux state container + Middleware(Axios)



## Workflow
   1. User submits the city name.
   2. The Axios library is used to send AJAX request to the server
   3. Axios handles the response as redux promise and pass it to Redux reducer.
   4. Once the promise is resolved, the reducer sets state.
   5. The fetched data is rendered using [Sparklines library](https://github.com/borisyankov/react-sparklines) and Google map.
   


## Build setup

> npm install
> npm start


 This application has been initially developed by Stephen Grider

