import { getServiceCode } from '@side-effects/service-code';
import { styles } from '@styles/service-code';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const absentIfEmpty = (c: string): string => c.length > 0 ? c : '<absent>';

export const ServiceCode = () => {
  const [code, setCode] = useState('loading...');
  useEffect(() => {
    getServiceCode()
      .then(absentIfEmpty)
      .then(setCode);
  }, []);

  return (
    <View style={styles['service-code']}>
      <Text style={styles['service-code__message']}>
        Service Code: {code}
      </Text>
    </View>
  );
};
