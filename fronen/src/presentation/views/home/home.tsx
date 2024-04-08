import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TextInput ,StyleSheet,ToastAndroid,TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../../presentation/components/RoundedButton';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from './viewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles';

interface Props extends StackScreenProps<RootStackParamList,'HomeScreen'>{};

const HomeScreen = ({navigation,route}: Props) => {
  const { email, password, onChange, login, errorMessage, user } = useViewModel();

useEffect(()=>{
  if (errorMessage !== ''){
    ToastAndroid.show(errorMessage,ToastAndroid.LONG);
  }
}, [errorMessage]);

useEffect(()=>{
  if (user?.id !==null && user?.id !== undefined){
    navigation.replace('ProfileInfoScreen');
  }
},[user]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/pol.jpg')}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../../assets/logo.jpg')}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>POL</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>INGRESAR</Text>
        <CustomTextInput
          image={require('../../../../assets/email.png')}
          placeholder='Correo electrónico'
          keyboardType='email-address'
          property='email'
          onChangeText={onChange}
          value={email}
        />
        <CustomTextInput
          image={require('../../../../assets/password.png')}
          placeholder='Contraseña'
          keyboardType='default'
          property='password'
          onChangeText={onChange}
          value={password}
          secureTextEntry={true}
        />
        <View style={{ marginTop: 30 }}>
          <RoundedButton
            text='ENTRAR'
            onPress={() => login()}
          />
        </View>
        <View style={styles.formRegister}>
          <Text>¿No tienes cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.formRegisterText}>Regístrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
