import { StyleSheet, Text, View , ScrollView ,Image} from 'react-native'
import React from 'react'

export default function ContactList() {

     const contacts = [
        {
          uid: 1,
          name: 'Hitesh Choudhary',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
          uid: 2,
          name: 'Aman',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/146328707?v=4',
        },
      ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.contaner} scrollEnabled={false}>
            {contacts.map(({uid,name,status,imageUrl})=>(
                <View key={uid} style={styles.userCard}>
                    <Image 
                     source={{uri:imageUrl}}
                     style={styles.userImage}
                    />
                    <View>
                        <Text style={styles.userName}>{name}</Text>
                        <Text style={styles.userStatus}>{status}</Text>
                    </View>
                </View>
            ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginBottom: 8
    },
    contaner:{
        paddingHorizontal:16,
        marginBottom:16
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:8,
    },
    userImage:{
        width:50,
        height:50,
        borderRadius:60/2,
        marginRight:14
    },
    userName:{
        fontSize:16,
        fontWeight:'600',
        color:'black'
    },
    userStatus:{
        fontSize:12,
        color:'gray'
    }
})