import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Customer/HomeScreen";
import { useAuth } from "./hooks/useAuth";
import LoginScreen from "./screens/Auth/LoginScreen";
import DashboardScreen from "./screens/Admin/DashboardScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  const { signedIn, userType } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {signedIn ? (
          <>
            {userType == "C" && (
              <Stack.Screen name="Home" component={HomeScreen} />
            )}
            {userType == "D" && (
              <Stack.Screen name="Home" component={DashboardScreen} />
            )}
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
