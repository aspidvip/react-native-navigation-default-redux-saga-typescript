import { Navigation } from 'react-native-navigation';
import { firstScreen } from './src/navigation/Navigation';

Navigation.events().registerAppLaunchedListener(() => firstScreen());
