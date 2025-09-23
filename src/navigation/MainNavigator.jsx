import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./TabsNavigator";
import AuthStackNavigator from "./AuthStackNavigator";
import { useSelector } from "react-redux";

export default function MainNavigator() {
    const user = useSelector(state=>state.userReducer.user)
    console.log(user)
    return (
        <NavigationContainer>
            {
                user ? <TabsNavigator /> : <AuthStackNavigator />
            }
        </NavigationContainer>
    )
}