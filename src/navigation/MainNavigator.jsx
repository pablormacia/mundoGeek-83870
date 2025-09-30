import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./TabsNavigator";
import AuthStackNavigator from "./AuthStackNavigator";
import { useSelector, useDispatch } from "react-redux";
import { useGetProfilePictureQuery } from "../store/services/profileApi";
import { useEffect } from "react";
import { setProfilePicture } from "../store/slices/userSlice";

export default function MainNavigator() {
    const user = useSelector(state=>state.userReducer.user)
    const localId = useSelector(state=>state.userReducer.localId)

    const dispatch = useDispatch()
    const {data: profilePicture, isLoading, error} =  useGetProfilePictureQuery(localId)

    //console.log(profilePicture)

    useEffect(()=>{
        if(profilePicture){
            dispatch(setProfilePicture(profilePicture.image))
        }
    },[profilePicture])


    return (
        <NavigationContainer>
            {
                user ? <TabsNavigator /> : <AuthStackNavigator />
            }
        </NavigationContainer>
    )
}