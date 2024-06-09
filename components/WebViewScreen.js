import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const WebViewScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{uri: 'https://alemprogramer.github.io/countryProduct/'}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WebViewScreen;
