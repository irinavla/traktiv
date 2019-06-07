### Getting Started

#### 1) Clone & Install Dependencies

- 1.1) `git clone https://github.com/irinavla/traktiv.git`
- 1.2) `cd traktiv` - cd into your newly created project directory.
- 1.3) Install NPM packages with your package manager of choice - i.e run `yarn` or `npm install`
- 1.4) **[iOS]** `cd ios` and run `pod install` - if you don't have CocoaPods you can follow [these instructions](https://guides.cocoapods.org/using/getting-started.html#getting-started) to install it.
- 1.5) **[Android]** No additional steps for android here.


#### 2) Start App

- 2.1) Start the react native packager, run `yarn run start` or `npm start` from the root of your project.
- 2.2) **[iOS]** Build and run the iOS app, run `npm run ios` or `yarn run ios` from the root of your project. The first build will take some time. This will automatically start up a simulator also for you on a successful build if one wasn't already started.
- 2.3) **[Android]** If you haven't already got an android device attached/emulator running then you'll need to get one running (make sure the emulator is with Google Play / APIs). When ready run `npm run android` or `yarn run android` from the root of your project.


#### 3) Creating a Firebase database
- 3.1) I know it's not good practice to expose API keys, but for demostrational purposes I've included the GoogleService-Info.plist file in the project.
- 3.2) To create new Firebase database, go to Google Console `https://console.firebase.google.com` and create a new project, then follow these instructions to generate a new GoogleService-Info.plist file: `https://firebase.google.com/docs/ios/setup#add_firebase_to_your_app`.
