import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

import './rn-addons';

// import stories
configure(() => {
  require('../src/components/Text/Text.stories.js');
}, module);

const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true });

AppRegistry.registerComponent('exemple', () => StorybookUIRoot);

export default StorybookUIRoot;
