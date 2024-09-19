import './gesture-handler';

import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {useColorScheme} from 'react-native';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './presentation/navigation/StackNavigator';

export const App = () => {
  const colorScheme = useColorScheme();
  const themeMode = colorScheme === 'dark' ? eva.dark : eva.light;

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={themeMode}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
