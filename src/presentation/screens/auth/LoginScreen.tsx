import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native';
import {MyIcon} from '../../components/ui/MyIcon';
import {type StackScreenProps} from '@react-navigation/stack';
import {type RootStackParams} from '../../navigation/StackNavigator';

export const LoginScreen = ({
  navigation,
}: StackScreenProps<RootStackParams, 'Login'>) => {
  const {height} = useWindowDimensions();

  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout style={{paddingTop: height * 0.35}}>
          <Text category="h1">Ingresar</Text>
          <Text category="p1">Completa estos datos para continuar</Text>
        </Layout>

        {/* Login Form */}
        <Layout style={{marginTop: 20}}>
          <Input
            accessoryLeft={<MyIcon name="email-outline" />}
            placeholder="Correo electrónico"
            style={{marginBottom: 10}}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            accessoryLeft={<MyIcon name="lock-outline" />}
            placeholder="Contraseña"
            autoCapitalize="none"
            secureTextEntry
            style={{marginBottom: 10}}
          />
        </Layout>

        {/* Spacer */}
        <Layout style={{height: 10}} />

        {/* Form Buttons */}
        <Layout>
          <Button
            accessoryRight={<MyIcon name="arrow-forward-outline" white />}
            onPress={() => {}}>
            Ingresar
          </Button>
        </Layout>

        <Layout style={{height: 50}} />

        <Layout
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Text>¿No tienes cuenta?</Text>
          <Text
            category="s1"
            onPress={() => navigation.navigate('Register')}
            status="primary">
            {' '}
            Registrate
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
