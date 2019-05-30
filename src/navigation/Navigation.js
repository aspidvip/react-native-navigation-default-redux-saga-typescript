import { Navigation } from 'react-native-navigation';
import registerScreens from './registerScreens';
import { WELCOME_SCREEN } from './Screens';

registerScreens();

const firstScreen = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: WELCOME_SCREEN,
              options: {
                topBar: {
                  noBorder: true,
                  largeTitle: {
                    visible: true,
                    fontSize: 30,
                  },
                  title: {
                    text: 'Добро пожаловать',
                  },
                  visible: true,
                },
              },
            },
          },
        ],
      },
    },
  });
};

// eslint-disable-next-line
export { firstScreen };
