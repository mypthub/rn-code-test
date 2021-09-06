import { NativeModules } from 'react-native';

const { ServiceCodeModule } = NativeModules;

export const getServiceCode = (): Promise<string> =>
  ServiceCodeModule.getCode();
