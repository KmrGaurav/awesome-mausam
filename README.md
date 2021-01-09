# Awesome Mausam

Awesome Mausam is (going to be) a weather website that shows the weather data of someplace. The application uses [Mapbox] and [OpenWeatherMap] APIs.

OpenWeatherMap provides global weather data using geographic coordinates of someplace. And Mapbox provides these coordinates using the name of that place.

## Requirements

For development, you will only need Node.js installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website][node.js], download the installer and install it.

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      sudo apt install nodejs
      sudo apt install npm

If the installation was successful, you should be able to run the following command.

    $ node --version
    vXX.XX.X (e.g., v12.18.0)

    $ npm --version
    X.XX.X (e.g., 6.14.4)

## Install

    git clone https://github.com/KmrGaurav/awesome-mausam.git
    cd awesome-mausam
    npm install

## Configure app

Create a new file `.env` or rename `.env.example` to `.env` and put the [Mapbox] and [OpenWeatherMap] APIs.

## Running the app

- ### Running the website (for production)

      $ npm run start
      Setting server at port XXXX.

- ### Running the website locally (for development)

      $ npm run dev
      Setting server at port 3000.

- ### Through command line - just for server-side

      $ npm run commandLine Delhi
      Location: Delhi, India
      Currently there is mist. It is currently 15.59 degrees out. Minimum Temperature: 14 degrees. Maximum Temperature: 17.22 degrees.

      $ npm run commandLine "New Delhi"
      Location: New Delhi, Delhi, India
      Currently there is mist. It is currently 15.59 degrees out. Minimum Temperature: 14 degrees. Maximum Temperature: 17.22 degrees.

[node.js]:        https://nodejs.org/         "Node.js"
[mapbox]:         https://www.mapbox.com/     "Mapbox"
[openweathermap]: https://openweathermap.org/ "OpenWeatherMap"
