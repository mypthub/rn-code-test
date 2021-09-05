import { NativeModules } from 'react-native';

const { CodeModule } = NativeModules;

export const getServiceCode = (): Promise<string> => CodeModule.getCode();
