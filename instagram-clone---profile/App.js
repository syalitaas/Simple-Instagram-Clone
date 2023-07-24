import * as React from 'react';
import { Text, View, Image } from 'react-native';
import Constants from 'expo-constants';


const App = () => {
  return (
    <View style={{
      width:'100%', 
      height:'100%', 
      backgroundColor:"white"}}>
    <View style={{
      alignItems:'center',
      marginTop: 10,
      height:20,
    }}>
    <Text style={{
      fontWeight:700,
    }}>
    syalitaaas
    </Text>
    </View>

    <View style={{
      flexDirection:'row',
      
    }}>
    <Image 
    source = {require('assets/profile.png')}
    style={{
      width:60,
      height:60,
      marginLeft:7,
      marginTop:13
    }}>

    </Image>

    <View>
        <View style={{
      flexDirection:'row',
      paddingTop:25,
      justifyContent:'space-evenly',
      paddingLeft:5
      
    }}>
    <Text style={{
      paddingLeft:15,
      paddingRight:20,
      fontWeight:700
      }}>
    9
    </Text>
    <Text style={{
      paddingLeft:17,
      fontWeight:700
    }}>
    1M
    </Text>
    <Text style={{
      paddingLeft:40,
      fontWeight:700
      }}>
    1
    </Text>
    </View>

    <View style={{
      flexDirection:'row',
      paddingTop:5,
      justifyContent:'space-evenly',
      paddingLeft:20,

      
    }}>
    <Text style={{
      paddingLeft:20,
      paddingRight:30,
      fontWeight:400,
      fontSize:12
      }}>
    Posts
    </Text>
    <Text style={{
      fontWeight:400,
      fontSize:12,
      paddingLeft:6,
      paddingRight:0
    }}>
    Followers
    </Text>
    <Text style={{
      paddingLeft:30,
      fontWeight:400,
      fontSize:12
      }}>
    Following
    </Text>
    </View>

    </View>


    </View>

    <View>
    <Text style={{
      paddingLeft:10,
      fontWeight:600,
      fontSize:13,
      marginTop:6
    }}>
    Syalita
    </Text>
    <Text style={{
      paddingLeft:10,
      fontWeight:400,
      fontSize:13
    }}>
    bukan rokok jadi ga sampoerna
    </Text>
    
    </View>

    <View style={{
      flexDirection:'row',
      justifyContent:'space-evenly',
      marginRight:10,
      
    }}>
    <Image 
    source = {require('assets/gallery.png')}
    style={{
      width:25,
      height:25,
      marginTop:30,
      paddingLeft:10,
      paddingRight:10
    }}>

    </Image>
    <Image 
    source = {require('assets/igtv.png')}
    style={{
      width:23,
      height:23,
      marginLeft:20,
      marginTop:30,
      opacity:0.5,
      paddingLeft:13,
      paddingRight:10
    }}>

    </Image>
    <Image 
    source = {require('assets/reels.png')}
    style={{
      width:23,
      height:23,
      marginLeft:20,
      marginTop:30,
      opacity:0.5,
      paddingLeft:10,
      paddingRight:10,
      
    }}>

    </Image>
    <Image 
    source = {require('assets/follower.png')}
    style={{
      width:25,
      height:25,
      marginLeft:20,
      marginTop:30,
      opacity:0.5,
      paddingLeft:10,
      paddingRight:10
    }}>

    </Image>
   

    </View>

    <View style={{
      borderBottomWidth:0.2,
      marginTop:10,
      opacity:0.2
    }}>

    </View>

    <View style={{
      flexDirection:'row',
      justifyContent:'space-evenly'
    }}>
    <Image 
    source = {require('assets/1.jpg')}
    style={{
      width:108,
      height:108,
      marginTop:2,
      paddingLeft:10,
      paddingRight:10
    }}>
    </Image>
    <Image 
    source = {require('assets/2.jpg')}
    style={{
      width:108,
      height:108,
      marginLeft:2,
      marginTop:2,
      paddingLeft:10,
      paddingRight:10
    }}>
    </Image>
    <Image 
    source = {require('assets/3.png')}
    style={{
      width:108,
      height:108,
      marginLeft:2,
      marginTop:2,
      paddingLeft:10,
      paddingRight:10
    }}>
    </Image>
    </View>

    <View style={{
      flexDirection:'row',
      justifyContent:'space-evenly'
    }}>
    <Image 
    source = {require('assets/4.jpg')}
    style={{
      width:108,
      height:108,
      marginTop:2,
      paddingLeft:10,
      paddingRight:10
    }}>
    </Image>
    <Image 
    source = {require('assets/5.jpg')}
    style={{
      width:108,
      height:108,
      marginLeft:2,
      marginTop:2,
      paddingLeft:10,
      paddingRight:10
    }}>
    </Image>
    <Image 
    source = {require('assets/6.jpg')}
    style={{
      width:108,
      height:108,
      marginLeft:2,
      marginTop:2,
      paddingLeft:10,
      paddingRight:10
    }}>
    </Image>
    </View>
    <View style={{
      flexDirection:'row',
      justifyContent:'space-evenly'
    }}>
    <Image 
    source = {require('assets/7.jpg')}
    style={{
      width:108,
      height:108,
      marginTop:2,
      paddingLeft:10,
      paddingRight:10
    }}>
    </Image>
    <Image 
    source = {require('assets/8.jpg')}
    style={{
      width:108,
      height:108,
      marginLeft:2,
      marginTop:2,
      paddingLeft:10,
      paddingRight:10
    }}>
    </Image>
    <Image 
    source = {require('assets/9.jpg')}
    style={{
      width:108,
      height:108,
      marginLeft:2,
      marginTop:2,
      paddingLeft:10,
      paddingRight:10
    }}>
    </Image>
    </View>

    <View style={{
      flexDirection:'row',
      justifyContent:'space-evenly',
      height:30,
      borderTopWidth:1,
      // marginTop:10
    }}>

    <Image 
    source = {require('assets/home.png')}
    style={{
      width:25,
      height:25,
      marginTop:8,
      paddingLeft:10,
      paddingRight:10
    }}>

    </Image>
    <Image 
    source = {require('assets/search.png')}
    style={{
      width:23,
      height:23,
      marginLeft:20,
      marginTop:8,
      paddingLeft:10,
      paddingRight:10
    }}>

    </Image>
    <Image 
    source = {require('assets/add.png')}
    style={{
      width:23,
      height:23,
      marginLeft:20,
      marginTop:8,
      paddingLeft:10,
      paddingRight:10,
      
    }}>

    </Image>
    <Image 
    source = {require('assets/like.png')}
    style={{
      width:23,
      height:23,
      marginLeft:10,
      marginTop:8,
      paddingLeft:10,
      paddingRight:10,
      
    }}>

    </Image>
    <Image 
    source = {require('assets/profile.png')}
    style={{
      width:25,
      height:25,
      marginLeft:10,
      marginTop:6,
      paddingLeft:10,
      paddingRight:10,
      
    }}>

    </Image>

    </View>
    </View>
  );
}



export default App;