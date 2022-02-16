import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NativeModules } from 'react-native';
const { StringExtracterModule } = NativeModules;

class Native extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    StringExtracterModule.getValue('service_key', key =>
      this.setState({ key }),
    );
  }
  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text style={{ fontSize: 18 }}>
          Service Key:
          {'{'}
          {__DEV__ ? this.state.key : 'le475jUm1D'}
          {'}'}
        </Text>
      </View>
    );
  }
}

export default Native;
