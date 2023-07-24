import * as React from 'react';
import { Text, View, Image } from 'react-native';
import Constants from 'expo-constants';


const App = () => {
  return (
    <View style={{
      width:'100%', 
      height:'100%', 
      backgroundColor:"white"}}>
    <View
        style={{
          height:15,
          borderBottomWidth: 0.7,
          borderColor: 'light-grey',
          opacity: 0.2,
        }}>
    </View>
    <Image
          source={require('assets/search bar.png')}
          style={{
            width: 308,
            height: 25,
            marginLeft: 10,
            marginTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
          }}></Image>
    <View style={{
      alignItems:'center',
      marginTop: 10,
      height:20,
    }}>
    </View>

    <View
        style={{
          flexDirection: 'row',
        }}>
        <Image
          source={require('assets/zayn.png')}
          style={{
            width: 35,
            height: 35,
            marginLeft: 20,
            marginTop: -10,
            paddingLeft: 10,
            paddingRight: 10,
          }}></Image>
        <Text
          style={{
            fontWeight: 500,
            marginTop: -12,
            marginLeft: 19,
          }}>
          zaynmalik
        </Text>
        <Text
          style={{
            fontWeight: 100,
            fontSize: 12,
            marginTop: 6,
            marginLeft: -64,
          }}>
          Zayn Malik
        </Text>
        <Image
          source={require('assets/x.png')}
          style={{
            width: 15,
            height: 15,
            marginLeft: 160,
            marginTop: -2,
            paddingLeft: 10,
            paddingRight: 10,
            opacity: 0.5,
          }}>
        </Image>
    </View>

    <View
        style={{
          flexDirection: 'row',
        }}>
        <Image
          source={require('assets/justin.png')}
          style={{
            width: 35,
            height: 35,
            marginLeft: 20,
            marginTop: 20,
            paddingLeft: 10,
            paddingRight: 10,
          }}></Image>
        <Text
          style={{
            fontWeight: 500,
            marginTop: 20,
            marginLeft: 19,
          }}>
          justinbieber
        </Text>
        <Text
          style={{
            fontWeight: 100,
            fontSize: 12,
            marginTop: 37,
            marginLeft: -76,
          }}>
          Justin Bieber
        </Text>
        <Image
          source={require('assets/x.png')}
          style={{
            width: 15,
            height: 15,
            marginLeft: 150,
            marginTop: 27,
            paddingLeft: 10,
            paddingRight: 10,
            opacity: 0.5,
          }}>
        </Image>
    </View>

    <View
        style={{
          flexDirection: 'row',
        }}>
        <Image
          source={require('assets/michele.png')}
          style={{
            width: 35,
            height: 35,
            marginLeft: 20,
            marginTop: 20,
            paddingLeft: 10,
            paddingRight: 10,
          }}></Image>
        <Text
          style={{
            fontWeight: 500,
            marginTop: 20,
            marginLeft: 19,
          }}>
          michelemorrone
        </Text>
        <Text
          style={{
            fontWeight: 100,
            fontSize: 12,
            marginTop: 37,
            marginLeft: -103,
          }}>
          Michele Morrone
        </Text>
        <Image
          source={require('assets/x.png')}
          style={{
            width: 15,
            height: 15,
            marginLeft: 125,
            marginTop: 27,
            paddingLeft: 10,
            paddingRight: 10,
            opacity: 0.5,
          }}>
        </Image>
    </View>

    <View
        style={{
          flexDirection: 'row',
        }}>
        <Image
          source={require('assets/shawn.png')}
          style={{
            width: 35,
            height: 35,
            marginLeft: 20,
            marginTop: 20,
            paddingLeft: 10,
            paddingRight: 10,
          }}></Image>
        <Text
          style={{
            fontWeight: 500,
            marginTop: 20,
            marginLeft: 19,
          }}>
          shawnmendes
        </Text>
        <Text
          style={{
            fontWeight: 100,
            fontSize: 12,
            marginTop: 37,
            marginLeft: -90,
          }}>
          Shawn Mendes
        </Text>
        <Image
          source={require('assets/x.png')}
          style={{
            width: 15,
            height: 15,
            marginLeft: 133,
            marginTop: 27,
            paddingLeft: 12,
            paddingRight: 10,
            opacity: 0.5,
          }}>
        </Image>
    </View>

        <View
        style={{
          flexDirection: 'row',
        }}>
        <Image
          source={require('assets/liam.png')}
          style={{
            width: 35,
            height: 35,
            marginLeft: 20,
            marginTop: 20,
            paddingLeft: 10,
            paddingRight: 10,
          }}></Image>
        <Text
          style={{
            fontWeight: 500,
            marginTop: 20,
            marginLeft: 19,
          }}>
          liampayne
        </Text>
        <Text
          style={{
            fontWeight: 100,
            fontSize: 12,
            marginTop: 37,
            marginLeft: -65,
          }}>
          Liam Payne
        </Text>
        <Image
          source={require('assets/x.png')}
          style={{
            width: 15,
            height: 15,
            marginLeft: 152,
            marginTop: 27,
            paddingLeft: 12,
            paddingRight: 10,
            opacity: 0.5,
          }}>
        </Image>
    </View>

    <View
        style={{
          flexDirection: 'row',
        }}>
        <Image
          source={require('assets/niall.png')}
          style={{
            width: 35,
            height: 35,
            marginLeft: 20,
            marginTop: 20,
            paddingLeft: 10,
            paddingRight: 10,
          }}></Image>
        <Text
          style={{
            fontWeight: 500,
            marginTop: 20,
            marginLeft: 19,
          }}>
          niallhoran
        </Text>
        <Text
          style={{
            fontWeight: 100,
            fontSize: 12,
            marginTop: 37,
            marginLeft: -63,
          }}>
          Niall Horan
        </Text>
        <Image
          source={require('assets/x.png')}
          style={{
            width: 15,
            height: 15,
            marginLeft: 154,
            marginTop: 27,
            paddingLeft: 12,
            paddingRight: 10,
            opacity: 0.5,
          }}>
        </Image>
    </View>

    <View
        style={{
          flexDirection: 'row',
        }}>
        <Image
          source={require('assets/harry.png')}
          style={{
            width: 35,
            height: 35,
            marginLeft: 20,
            marginTop: 20,
            paddingLeft: 10,
            paddingRight: 10,
          }}></Image>
        <Text
          style={{
            fontWeight: 500,
            marginTop: 20,
            marginLeft: 19,
          }}>
          harrystyles
        </Text>
        <Text
          style={{
            fontWeight: 100,
            fontSize: 12,
            marginTop: 37,
            marginLeft: -69,
          }}>
          Harry Styles
        </Text>
        <Image
          source={require('assets/x.png')}
          style={{
            width: 15,
            height: 15,
            marginLeft: 151,
            marginTop: 27,
            paddingLeft: 12,
            paddingRight: 10,
            opacity: 0.5,
          }}>
        </Image>
    </View>

    <View style={{
      borderBottomWidth:0.2,
      marginTop:35,
      opacity:0.2
    }}>
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
      marginTop:15,
      paddingLeft:10,
      paddingRight:10
    }}>

    </Image>
    <Image 
    source = {require('assets/search.png')}
    style={{
      width:20,
      height:20,
      marginLeft:20,
      marginTop:17,
      paddingLeft:10,
      paddingRight:10,
    }}>

    </Image>
    <Image 
    source = {require('assets/add.png')}
    style={{
      width:23,
      height:23,
      marginLeft:20,
      marginTop:15,
      paddingLeft:10,
      paddingRight:10,
      
    }}>

    </Image>
    <Image 
    source = {require('assets/like.png')}
    style={{
      width:23,
      height:23,
      marginLeft:20,
      marginTop:15,
      paddingLeft:10,
      paddingRight:10,
      
    }}>

    </Image>
    <Image 
    source = {require('assets/profile.png')}
    style={{
      width:25,
      height:25,
      marginLeft:20,
      marginTop:12,
      paddingLeft:10,
      paddingRight:10,
      
    }}>

    </Image>

    </View>
    </View>
  );
}



export default App;