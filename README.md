# Git-hub-stargazers

A [React Native](https://facebook.github.io/react-native) Application to get github REPO Stargazers.

<p align="center">
  <img src="https://res.cloudinary.com/ddkjggkaz/image/upload/v1680540597/ezgif.com-resize_ekcaye.gif" width="200"/></br>
</p>

## Getting started

1. Edit .ENV file with your personal Github token. Click [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) to create one if you need.

2. Install node-modules:

    `npm install`

3. <ins>If you have not install</ins> the application on native device, please follow below command ( **if you have, please jump this step and move to 3**):
    - Android devices: `npm run android`
    - iOS device `npm run ios`

4. <ins>If you have yet install</ins> install the application on native device, please run below command to start server:

    `npm start`

## Usage

Insert repository owner and repository name and click on Submit button to see related Stargazers.

## Libraries used

* [React Navigation](https://reactnavigation.org/) (v6.1.6)
* [React native toast message](https://github.com/calintamas/react-native-toast-message) (v2.1.6)

## Testing

Testing are implemented, please run `npm run test` to start automation test about:

1. Create App
2. Services API status

### Notes

This application is created using React Native CLI.