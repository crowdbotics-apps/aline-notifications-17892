# WIP Notifications

The Notifications Screen is a React Native-based screen that allows the user to view push notifications.

## Requirements
For this module to be fully function, we recommend first installing and configuring the `Basic Login Signup` module available in the storyboard's list of verified modules.

## Installation

After you have added the screen module into your project, you will need to configure a few items by modifying the project files in the github repository. Please note to replace ####### with the numeric sequence for your screen (found in folder name under /src/features) and also that the @BluePrint tags for ImportInsertion and NavigationInsertion will be removed in future so placement is with other imports and inside the AppNavigator above other screens.


### STEP 1: Add screen into your project screen navigation.

#### Edit File /src/mainNavigator.js:
**ADD** immediately below in the section labeled //@BlueprintImportInsertion:

```js
import Notifications#######Navigator from '../features/Notifications#######/navigator';
```

**ADD** immediately below in the section inside AppNavigator definition labeled //@BlueprintNavigationInsertion section:

```js
Notifications#######: { screen: Notifications#######Navigator },
```

#### Edit File /src/config/installed_blueprints.js:
Open the file and add below the comment message `// access route is the route nate given to navigator`:

```js
{ name: 'Notifications#######', human_name: 'Notifications', access_route: 'Notifications#######'},
```

You can define the `human_name` for any text that you desire it to display in the side menu.

### STEP 2: Add reducers to store.

**/src/store/index.js**
**ADD** after Line 4 (sagas import):

```js
import { notificationRootSaga, notificationReducer } from "../features/Notifications#######/store"
```

Update your `createStore` code to include the `userReducer`. For example, if your store looks like this:
```js
const store = createStore(
  combineReducers({
    apiReducer: apiReducer,
    customReducer: customReducer,
    authReducer: authReducer
  }),
  composeEnhancers(applyMiddleware(...middlewares))
);
```

You should add the `notificationReducer: notificationReducer` after the authReducer, and it should then look like this:

```js
const store = createStore(
  combineReducers({
    apiReducer: apiReducer,
    customReducer: customReducer,
    authReducer: authReducer,
    notificationReducer: notificationReducer
  }),
  composeEnhancers(applyMiddleware(...middlewares))
);
```

Near the end of the file, before the `export { store }` line, register the new sagas `sagaMiddleware` like this:

```js
sagaMiddleware.run(notificationRootSaga);
```

                            
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
