import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native';

export const LoginScreen = () => {
  const {height} = useWindowDimensions();

  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout style={{paddingTop: height * 0.35}}>
          <Text category="h1">Ingresar</Text>
          <Text category="p2">Completa los datos para continuar</Text>
        </Layout>

        {/* Login Form */}
        <Layout style={{marginTop: 20}}>
          <Input
            placeholder="Correo electrónico"
            style={{marginBottom: 10}}
            keyboardType="email-address"
            autoCapitalize="none"
            showSoftInputOnFocus={false}
          />
          <Input
            autoCapitalize="none"
            placeholder="Contraseña"
            secureTextEntry
            style={{marginBottom: 10}}
            showSoftInputOnFocus={false}
          />
        </Layout>

        {/* Spacer */}
        <Layout style={{height: 20}} />

        {/* Form Buttons */}
        <Layout>
          <Button onPress={() => {}}>Ingresar</Button>
        </Layout>

        <Layout style={{height: 50}} />

        <Layout
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Text>¿No tienes cuenta?</Text>
          <Text category="s1" onPress={() => {}} status="primary">
            {' '}
            Registrate
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
