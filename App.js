import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Button, StyleSheet, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {launchImageLibrary} from 'react-native-image-picker';
import WebViewScreen from './components/WebViewScreen';

const Stack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  // const [uploadedImage, setUploadedImage] = useState(null);

  // const handleUploadImage = () => {
  //   const options = {
  //     mediaType: 'photo',
  //     includeBase64: false,
  //     maxHeight: 2000,
  //     maxWidth: 2000,
  //   };

  //   launchImageLibrary(options, response => {
  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('Image picker error: ', response.error);
  //     } else {
  //       let imageUri = response.uri || response.assets?.[0]?.uri;
  //       setUploadedImage(imageUri);
  //     }
  //   });
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Product Country</Text>
      <Text style={styles.description}>
        Discover where your product is made by uploading its image or using your
        camera to scan its company name or logo.
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Get Product Country"
          onPress={() => navigation.navigate('Search Product')}
        />
        {/* <Button title="Upload Image" onPress={handleUploadImage} /> */}
      </View>
      {/* {uploadedImage && (
        <Image source={{uri: uploadedImage}} style={styles.uploadedImage} />
      )} */}

      <View style={styles.footer}>
        <Text style={styles.footerText}>All right reserved by DevFirm</Text>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search Product" component={WebViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 30,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '100%',
  },
  uploadedImage: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#666',
  },
});
