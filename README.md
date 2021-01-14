# Awesome Mausam

Awesome Mausam is a weather website that shows the forecast data of a place that you search. The application uses [Mapbox] and [OpenWeatherMap] APIs.

OpenWeatherMap provides global weather data using geographic coordinates of someplace. And Mapbox provides these coordinates using the name of that place.

## Live Demo

The website is live at <https://awesomemausam.herokuapp.com> on the Heroku server.

## Requirements

- For development, you will only need Node.js installed in your environment.

- For deployment, you will need Git installed on your system.

### Node installation

- #### Node installation on Windows

  Just go on [official Node.js website][node.js], download the installer, and install it.

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with the apt install, just run the following commands.

      sudo apt install nodejs
      sudo apt install npm

If the installation was successful, you should be able to run the following command.

    $ node --version
    vXX.XX.X (e.g., v12.18.0)

    $ npm --version
    X.XX.X (e.g., 6.14.4)

### Git installation

- #### Git installation on Windows

  Just go on [official Git website][Git], download the installer, and install it.

- #### Git installation on Ubuntu

  Git may be pre-installed on your OS. If not, run the following command in your terminal to install.

      apt-get install git

## Install

    git clone https://github.com/KmrGaurav/awesome-mausam.git
    cd awesome-mausam
    npm install

## Configure the app

Create a new file `.env` or rename `.env.example` to `.env` and put the [Mapbox] and [OpenWeatherMap] APIs.

## Running the app

- ### Deploying the website on the Heroku server

      git push heroku main

- ### Running the website locally (for development)

      $ npm run dev
      Setting server at port 3000.

- ### Running the website locally (for debugging)

      npm run debug

- ### Through command line - just for server-side

      $ npm run cmd Delhi
      Location: Delhi, India
      Description: smoke
      Temperature: 18 C
      Minimum Temperature: 18 C
      Maximum Temperature: 18 C
      Pressure: 1014 Pa
      Humidity: 68
      Wind Speed: 1.54 m/s

      $ npm run cmd "New Delhi"
      Location: New Delhi, Delhi, India
      Description: smoke
      Temperature: 17.47 C
      Minimum Temperature: 17 C
      Maximum Temperature: 18 C
      Pressure: 1014 Pa
      Humidity: 72
      Wind Speed: 1.03 m/s

[node.js]:        https://nodejs.org/         "Node.js"
[Git]:            https://git-scm.com/        "Git"
[mapbox]:         https://www.mapbox.com/     "Mapbox"
[openweathermap]: https://openweathermap.org/ "OpenWeatherMap"
