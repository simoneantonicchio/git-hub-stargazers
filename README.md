# Git-hub-stargazers

A [React Native](https://facebook.github.io/react-native) application to get a github REPO Stargazers list.

<p>
  <img src="https://res.cloudinary.com/ddkjggkaz/image/upload/v1680541350/ezgif.com-resize-min_y8cp2f.gif" width="200"/></br>
</p>

## Getting started

1. Edit .ENV file with your personal Github token. Click [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) to create a new one.

2. Install node-modules:

    `npm install`

3. <ins>If you have not installed</ins> the application on native device, please run the command below ( **if you already have, please jump to step 4**):
    - Android devices: `npm run android`
    - iOS device `npm run ios`

4. <ins>If you have installed</ins> the application on native device, please run the command below to start the server:

    `npm start`

## UI Usage

Insert repository owner and repository name and click on submit button to get the related Stargazers list.

## Libraries used

* [React Navigation](https://reactnavigation.org/) (v6.1.6)
* [React native toast message](https://github.com/calintamas/react-native-toast-message) (v2.1.6)

## Testing

Testing are implemented, please run `npm run test` to start automation test about:

1. Create App
2. Services API status

### Notes

This application is created using React Native CLI.