import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { PortalProvider } from 'react-native-portal';
import { store, persistor } from '../store';
import { WelcomePage, Test } from '../screens';
import { WELCOME_SCREEN } from './Screens';

function WrappedComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <PortalProvider>
            <Component {...props} />
          </PortalProvider>
        </PersistGate>
      </Provider>
    );

    return <EnhancedComponent />;
  };
}

export default function() {
  Navigation.registerComponent(WELCOME_SCREEN, () => WrappedComponent(WelcomePage));
  Navigation.registerComponent('TEST', () => WrappedComponent(Test));
}
