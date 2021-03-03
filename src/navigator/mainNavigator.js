import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import BasicLoginSignup116790Navigator from '../features/BasicLoginSignup116790/navigator';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen217773Navigator from '../features/BlankScreen217773/navigator';
import BlankScreen116791Navigator from '../features/BlankScreen116791/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen217773: { screen: BlankScreen217773Navigator },
BlankScreen116791: { screen: BlankScreen116791Navigator },
    BasicLoginSignup: { screen: BasicLoginSignup116790Navigator },
    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
