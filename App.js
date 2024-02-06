import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "./hooks/useAuth";
import LoginScreen from "./screens/Auth/LoginScreen";
import CustomerStack from "./stacks/CustomerStack";
import AdminStack from "./stacks/AdminStack";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { useEffect } from "react";
import { Fragment } from "react";
const Stack = createNativeStackNavigator();
export default function App() {
  const { signedIn, userType } = useAuth();

  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_800ExtraBold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {signedIn ? (
          <Fragment>
            {userType == "C" && (
              <Stack.Screen
                name="Customer"
                component={CustomerStack}
                options={{
                  headerShown: false,
                }}
              />
            )}
            {userType == "D" && (
              <Stack.Screen
                name="Admin"
                component={AdminStack}
                options={{
                  headerShown: false,
                }}
              />
            )}
          </Fragment>
        ) : (
          <Fragment>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />
          </Fragment>
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
