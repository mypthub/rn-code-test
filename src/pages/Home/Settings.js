import React, { Component } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Platform,
  NativeModules,
} from 'react-native';

export default class Settings extends Component {
  constructor() {
    super();
    this.state = {
      release_service_key: 'le475jUm1D',
      debug_service_key: null,
    };
  }

  componentDidMount() {
    if (__DEV__) {
      if (Platform.OS === 'ios') {
        NativeModules.AppConfig.getPListValue(
          'SERVICE_KEY',
          (error, keyValue) => {
            if (error) {
              console.error(error);
            } else {
              console.log(keyValue);
              this.setState({ debug_service_key: keyValue });
            }
          },
        );
      } else {
        NativeModules.ServiceKeyModule.GetServiceKey()
          .then(key => {
            this.setState({ debug_service_key: key });
          })
          .catch(error => {
            throw error;
          });
      }
    }
  }

  render() {
    if (__DEV__) {
      const text = 'Service Key: {' + this.state.debug_service_key + '}';
      return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>{text}</Text>
        </SafeAreaView>
      );
    } else {
      const text = 'Service Key: {' + this.state.release_service_key + '}';
      return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>{text}</Text>
        </SafeAreaView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
    marginVertical: 5,
  },
});
