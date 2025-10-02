import { StyleSheet, Text, View } from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import Snackbar from 'react-native-snackbar'
import {FAB} from '@rneui/themed'

import {AppwriteContext} from '../appwrite/AppwriteContext'


type UserObj = {
    name:string;
    email:string;
}
export default function Home() {
  const [userData,setUserData] = useState<UserObj>()
  const {appwrite,setIsLoggedIn} = useContext(AppwriteContext)

  const handleLogout = ()=>{
    appwrite.logout()
    .then(()=>{
        setIsLoggedIn(false)
        Snackbar.show({
            text:'Logout Successful',
            duration:Snackbar.LENGTH_SHORT
        })
    })
  }

  useEffect(()=>{
    appwrite.logout()
    .then((res)=>{
        if(res){
            const user:UserObj = {
                name:res.name,
                email:res.email
            }
            setUserData(user)
        }
    })
  },[appwrite])//appwrite chane m mtalb
  
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({})