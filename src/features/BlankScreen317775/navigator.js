import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { SlideMenuIcon } from "../../navigator/slideMenuIcon"
import Screen from "./screens/index"

const Stack = createStackNavigator()

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Screen"
        component={Screen}
        options={({ navigation }) => ({
          headerLeft: () => <SlideMenuIcon navigation={navigation} />,
          headerTitle: ""
        })}
      />
    </Stack.Navigator>
  )
}
