import { StyleSheet, Text, View,ScrollView,StatusBar,useColorScheme,Linking } from 'react-native'
import React, { JSX, PropsWithChildren } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Router from './routes/Router'
import {AppwriteProvider} from './appwrite/AppwriteContext'
type SectionProps = PropsWithChildren<{
  title:string
}>
console.log("✅ App.tsx file loaded");
const Colors = {
  white: '#FFFFFF',
  black: '#000000',
  light: '#CCCCCC',
  dark: '#333333',
  darker: '#222222',
  lighter: '#F5F5F5',
};

function Section({children,title}:SectionProps):JSX.Element{
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <View style={styles.sectionContainer}>
      <Text
       style={[
        styles.sectionContainer,
        {color: isDarkMode ? Colors.white : Colors.black}
       ]}
      >
        {title}
      </Text>
      <Text 
       style={[
          styles.sectionDescription,
          {color: isDarkMode ? Colors.light : Colors.dark},
        ]}>
          {children}
        </Text>
    </View>
  )
}

function Header():JSX.Element{
  const isDarkMode = useColorScheme()==='dark';
  return (
    <View  style={[styles.header, {backgroundColor: isDarkMode ? Colors.dark : Colors.lighter}]}>
      <Text style={[styles.headerText, {color: isDarkMode ? Colors.white : Colors.black}]}> Welcome to React Native 🚀 </Text>
    </View>
  )
}

function LearnMoreLinks():JSX.Element{
  return (
    <View
     style={styles.linksContainer}
    >
      <Text
      style={styles.link}
      onPress={()=>Linking.openURL('https://reactnative.dev/')}
      > Learn More about React Native </Text>
    </View>
  )
}
function ReloadInstructions(): JSX.Element {
  return (
    <Text style={styles.instructions}>
      Press <Text style={styles.highlight}>R</Text> twice to reload the app.
    </Text>
  );
}
function DebugInstructions(): JSX.Element {
  return (
    <Text style={styles.instructions}>
      Press <Text style={styles.highlight}>Ctrl + M</Text> or shake your device to open the dev menu.
    </Text>
  );
}

const App = () => {
   const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
   
     
   
    
           <AppwriteProvider>
             <StatusBar
       barStyle={isDarkMode?'light-content':'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
        <Router/>
      </AppwriteProvider>
       
  
    
  )
}

export default App

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  header: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  instructions: {
    fontSize: 16,
    marginVertical: 8,
  },
  linksContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  link: {
    fontSize: 16,
    color: '#1E90FF',
    textDecorationLine: 'underline',
  },
});