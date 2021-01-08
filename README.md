# Awesome Mausam

Awesome Mausam is a weather website. The application uses [Mapbox] API. (Currently gives only address and geographical coordinates.)

---

## Requirements

For development, you will only need Node.js installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website][node.js] and download the installer.

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      sudo apt install nodejs
      sudo apt install npm

If the installation was successful, you should be able to run the following command.

    $ node --version
    vXX.XX.X (e.g., v12.18.0)

    $ npm --version
    X.XX.X (e.g., 6.14.4)

---

## Install

    git clone https://github.com/KmrGaurav/awesome-mausam.git
    cd awesome-mausam
    npm install

## Configure app

Create a new file `.env` or rename `.env.example` to `.env` and put the Mapbox API.

## Running the app

    $ npm run start Delhi
    Location: Delhi, India
    $ npm run start "New Delhi"
    Location: New Delhi, Delhi, India

[node.js]:        https://nodejs.org/         "Node.js"
[mapbox]:         https://www.mapbox.com/     "Mapbox"
