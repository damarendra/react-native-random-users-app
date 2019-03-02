import {
  createStackNavigator
} from 'react-navigation';

import screens from './../screens';
import colors from "./../common/colors";

const AppNavigator = createStackNavigator(
  {
    Main: screens.MainScreen
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.dark_blue
      },
      headerTitle: "Random Users App",
      headerTitleStyle: {
        fontSize: 18
      },
      headerTintColor: colors.gray
    }
  }
);

export default AppNavigator;
