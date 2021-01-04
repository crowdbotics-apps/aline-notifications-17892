import { createStackNavigator } from "react-navigation-stack";

import Notifications from "./index";

export default BlankBlueprintNavigator = createStackNavigator(
  {
    Notifications: { screen: Notifications }
  },
  {
    initialRouteName: "Notifications"
  }
);
