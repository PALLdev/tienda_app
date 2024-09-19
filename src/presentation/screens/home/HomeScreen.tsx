import {Button, Icon, Layout, Text} from '@ui-kitten/components';

export const HomeScreen = () => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h4">HOME SCREEN</Text>
      <LoginButton />
    </Layout>
  );
};

const FacebookIcon = (props: any) => <Icon name="facebook" {...props} />;

export const LoginButton = () => (
  <Button accessoryLeft={FacebookIcon}>Login with Facebook</Button>
);
