import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "../screens/Admin/DashboardScreen";

const Tab = createBottomTabNavigator();
export default function AdminStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={DashboardScreen} />
    </Tab.Navigator>
  );
}
