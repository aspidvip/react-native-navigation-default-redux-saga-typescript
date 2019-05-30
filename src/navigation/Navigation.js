import { Navigation } from 'react-native-navigation';
import registerScreens from './registerScreens';
import { WELCOME_SCREEN } from './Screens';

registerScreens();

const firstScreen = () => {
  Navigation.setDefaultOptions({
    topBar: {
      background: {
        color: '#039893',
      },
      title: {
        color: 'white',
      },
      backButton: {
        title: '', // Remove previous screen name from back button
        color: 'white',
      },
      buttonColor: 'white',
    },
    statusBar: {
      style: 'light',
    },
    layout: {
      orientation: ['portrait'],
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow',
    },
    bottomTab: {
      textColor: 'gray',
      selectedTextColor: 'black',
      iconColor: 'gray',
      selectedIconColor: 'black',
    },
  });

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: WELCOME_SCREEN,
              options: {
                topBar: {
                  largeTitle: {
                    visible: true,
                    fontSize: 30,
                    color: 'white',
                  },
                  title: {
                    text: 'Welcome Test',
                  },
                  visible: true,
                },
              },
            },
          }
        ],
      },
    },
  });
};

// eslint-disable-next-line
export { firstScreen };
