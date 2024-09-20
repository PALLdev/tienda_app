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
  const backgroundColor =
    colorScheme === 'dark'
      ? themeMode['color-basic-800']
      : themeMode['color-basic-100'];

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={themeMode}>
        <NavigationContainer
          theme={{
            dark: colorScheme === 'dark',
            colors: {
              primary: themeMode['color-primary-500'],
              background: backgroundColor,
              text: themeMode['text-basic-color'],
              border: themeMode['color-basic-800'],
              card: themeMode['color-basic-100'],
              notification: themeMode['color-primary-500'],
            },
          }}>
          <StackNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
