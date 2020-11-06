import React, { PureComponent } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import ServiceKeyModule from '../../modules/ServiceKeyModule';

class Native extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      serviceKey: 'le475jUm1D',
    };
  }

  componentDidMount() {
    if (__DEV__) {
      ServiceKeyModule.getServiceKey(serviceKey => {
        this.setState({ serviceKey });
      });
    }
  }

  render() {
    const { serviceKey } = this.state;
    return (
      <SafeAreaView style={styles.root}>
        <Text>Service Key: {serviceKey}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Native;
