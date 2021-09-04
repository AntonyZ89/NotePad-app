<p align="center">
  <img width=150 src="https://reactnative.dev/img/header_logo.svg" alt="Sublime's custom image"/>
</p>

<h1 align="center" style="font-weight: bold">NotePad APP</h1>

<p align="center">
A NotePadd APP builded with <b>React Native Elements</b> components
</p>

<p valign="top" align="center">
  <img valign="middle" src="docs/assets/screenshot/HomeScreen.png" width="18%" alt="Home Screen" />
  <img valign="middle" src="docs/assets/screenshot/NoteListScreen.png" width="18%" alt="Note List Screen" />
  <img valign="middle" src="docs/assets/gif/app.gif" width="23%" alt="App Review" />
  <img valign="middle" src="docs/assets/screenshot/NoteScreen.gif" width="18%" alt="Note Screen" />
  <img valign="middle" src="docs/assets/screenshot/ColorPicker.gif" width="18%" alt="Color Picker" />
</p>

- TypeScript
- [React Native Elements](https://github.com/react-native-elements/react-native-elements) components
- [AsyncStorage](https://github.com/react-native-community/async-storage) for store data
- [React Navigation](https://reactnavigation.org/) (**v6**) for navigation.
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) for Icons


## DIRECTORY STRUCTURE
---

```
├───src
│   │   App.tsx
│   │   
│   ├───assets              contains resources
│   ├───components          contains components do be used on pages
│   ├───context             contains NoteContext
│   ├───pages               contains pages
│   ├───service             contains fake data
│   │   └───mock
│   ├───types               contains typescript type of entities
│
│  .buckconfig
│  .editorconfig
│  .eslintrc.js
│  .gitattributes
│  .gitignore
│  .prettierrc.js
│  .watchmanconfig
│  app.json
│  App.tsx
│  babel.config.js
│  index.js
│  metro.config.js
│  package.json
│  README.md
│  tsconfig.json
```

## Installation
---


```cmd
1. npm install or yarn install
2. cd ios && pod install
3. run application the app using one theses commands:
  2.1 npm run android or yarn android
  2.2 npm run ios or yarn ios
3. Done!
```

## Contributing
---

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
---

[MIT](https://choosealicense.com/licenses/mit/)
