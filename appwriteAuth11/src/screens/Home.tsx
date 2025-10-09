import { StyleSheet, Text, View,Image} from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import Snackbar from 'react-native-snackbar'
import {FAB} from '@rneui/themed'

import {AppwriteContext} from '../appwrite/AppwriteContext'
import { SafeAreaView } from 'react-native-safe-area-context'


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
    appwrite.getCurrentUser()
    .then((res)=>{
        if(res){
            const user:UserObj = {
                name:res.name,
                email:res.email
            }
            setUserData(user)
        }
    })
  },[appwrite])//appwrite change m mtalb
  
  return (
    <SafeAreaView  style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Image 
          source={{
            uri:'https://appwrite.io/images-ee/blog/og-private-beta.png',
            width:400,
            height:300,
            cache:'default',
          }}
          resizeMode = 'contain'
        />
        <Text style={styles.message}>Build Fast. Scale Big. All in One Place.</Text>

        {userData && (
          <View style={styles.userContainer}>
            <Text>Name: {userData.name}</Text>
            <Text>Email:{userData.email}</Text>
          </View>
        )}
      </View>
      <FAB 
        placement='right'
        color='#f02e65'
        size='large'
        title='Logout'
        icon={{name:'logout',color:'#FFFFF'}}
        onPress={handleLogout}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0D32',
  },
  welcomeContainer: {
    padding: 12,

    flex: 1,
    alignItems: 'center',
  },
  message: {
    fontSize: 26,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  userContainer: {
    marginTop: 24,
  },
  userDetails: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});