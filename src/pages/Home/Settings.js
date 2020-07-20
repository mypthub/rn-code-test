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
      service_key: null,
    };
  }

  componentDidMount() {
    if (__DEV__) {
      if (Platform.OS === 'ios') {
        NativeModules.AppConfig.getPListValue(
          'SERVICE_KEY',
          (error, keyValue) => {
            this.setState({ service_key: keyValue });
          },
        );
      } else {
        NativeModules.ServiceKeyModule.GetServiceKey()
          .then(key => {
            this.setState({ service_key: key });
          })
          .catch(error => {
            throw error;
          });
      }
    } else {
      this.setState({ service_key: 'le475jUm1D' });
    }
  }

  render() {
    const text = 'Service Key: {' + this.state.service_key + '}';
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </SafeAreaView>
    );
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
