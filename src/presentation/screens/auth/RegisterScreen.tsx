import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {MyIcon} from '../../components/ui/MyIcon';
import {type StackScreenProps} from '@react-navigation/stack';
import {type RootStackParams} from '../../navigation/StackNavigator';

export const RegisterScreen = ({
  navigation,
}: StackScreenProps<RootStackParams, 'Register'>) => {
  const {height} = useWindowDimensions();
  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout style={{paddingTop: height * 0.3}}>
          <Text category="h1">Crear cuenta</Text>
          <Text category="p1">Completa estos datos para crear cuenta</Text>
        </Layout>

        {/* Register Form */}
        <Layout style={{marginTop: 20}}>
          <Input
            accessoryLeft={<MyIcon name="person-outline" />}
            placeholder="Nombre completo"
            style={{marginBottom: 10}}
            autoCapitalize="none"
          />
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
            Crear
          </Button>
        </Layout>

        <Layout style={{height: 50}} />

        <Layout
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Text>¿Ya tienes cuenta?</Text>
          <Text
            category="s1"
            onPress={() => navigation.goBack()}
            status="primary">
            {' '}
            Ingresa
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
