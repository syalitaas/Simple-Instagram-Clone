import * as React from 'react';
import { Text, View, Image } from 'react-native';
import Constants from 'expo-constants';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View
        style={{
          height: 50,
          borderBottomWidth: 0.5,
          borderColor: 'light-grey',
          opacity: 0.2,
        }}></View>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <Image
          source={require('assets/profile.png')}
          style={{
            width: 40,
            height: 40,
            marginLeft: 5,
            marginTop: 20,
            paddingLeft: 10,
            paddingRight: 10,
          }}></Image>

        <Text
          style={{
            fontWeight: 500,
            marginTop: 30,
            marginLeft: 8,
          }}>
          syalitaaas
        </Text>

        <Text
          style={{
            fontWeight: 700,
            opacity: 0.6,
            marginTop: 28,
            paddingLeft: 185,
          }}>
          ...
        </Text>
      </View>

      <View
        style={{
          alignItems: 'center',
        }}>
        <Image
          source={require('assets/5.jpg')}
          style={{
            width: 330,
            height: 330,
            marginTop: 8,
          }}></Image>
      </View>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <Image
          source={require('assets/like photo.png')}
          style={{
            width: 23,
            height: 23,
            marginLeft: 10,
            marginTop: 10,
          }}></Image>
        <Image
          source={require('assets/chat.png')}
          style={{
            width: 23,
            height: 23,
            marginLeft: 15,
            marginTop: 10,
          }}></Image>
        <Image
          source={require('assets/send.png')}
          style={{
            width: 23,
            height: 23,
            marginLeft: 15,
            marginTop: 10,
          }}></Image>
        <Image
          source={require('assets/bookmark.png')}
          style={{
            width: 20,
            height: 20,
            marginLeft: 195,
            marginTop: 10,
          }}></Image>
      </View>

      <View>
      <Text style={{
        fontWeight:650,
        fontSize:12,
        marginLeft:12,
        marginTop:8
      }}>
      1.000.080 Likes
      </Text>
      <View style={{
        flexDirection:'row'
      }}>
      <Text style={{
        fontWeight:650,
        fontSize:12,
        marginLeft:12,
        marginTop:6
      }}>
      syalitaaas
      </Text>
      <Text style={{
        fontWeight:400,
        fontSize:12,
        marginLeft:6,
        marginTop:6
      }}>
      pretty skies
      </Text>
      </View>

      <Text style={{
        fontWeight:600,
        fontSize:10,
        marginLeft:12,
        marginTop:6,
        opacity:0.4,
        paddingBottom:20
      }}>
      1 MINUTES AGO
      </Text>
      </View>
      

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          height: 5,
          borderColor: 'light-grey',
          borderTopWidth: 0.5,
        }}>

        <Image
          source={require('assets/home.png')}
          style={{
            width: 25,
            height: 25,
            marginTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
          }}></Image>
        <Image
          source={require('assets/search.png')}
          style={{
            width: 23,
            height: 23,
            marginLeft: 20,
            marginTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
          }}></Image>
        <Image
          source={require('assets/add.png')}
          style={{
            width: 23,
            height: 23,
            marginLeft: 20,
            marginTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
          }}></Image>
        <Image
          source={require('assets/like.png')}
          style={{
            width: 25,
            height: 25,
            marginLeft: 20,
            marginTop:10,
            paddingLeft: 10,
            paddingRight: 10,
          }}></Image>   
        <Image
          source={require('assets/profile.png')}
          style={{
            width: 25,
            height: 25,
            marginLeft: 20,
            marginTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
          }}></Image>
      </View>
      
      <View
        style={{
        }}>
        <Image
          source={require('assets/notif.png')}
          style={{
            width: 150,
            height: 70,
            marginTop: -60,
            marginLeft: 155,
            paddingTop: 12,
            paddingRight: 12,
          }}></Image>
      </View> 

    </View>
  );
};

export default App;
