/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
import App from './src/App';
import AnimationImager from './src/Animation.Imager';
import TabNavigation from './src/navigation/TabNavigation';

AppRegistry.registerComponent(appName, () => App);
