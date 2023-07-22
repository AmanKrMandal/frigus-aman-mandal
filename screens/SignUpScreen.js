import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import GoogleSVG from '../assets/GoogleSVG';
import LogoIcon from '../assets/LogoIcon';
import {Formik} from 'formik';
import * as Yup from 'yup';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {autoBatchEnhancer} from '@reduxjs/toolkit';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SignUpScreen = ({navigation}) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });
  return (
    <SafeAreaView>
      <LinearGradient
        colors={['#FCA806', '#FCCB06']}
        style={styles.linearGradient}>
        <View style={styles.LoginAndRegisterHeader}>
          <View style={styles.blackCircale}>
            <LogoIcon />
          </View>
        </View>
        <View style={styles.loginSec}>
          <Text style={styles.loginSecText}>Sing Up</Text>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
              console.log(values);
              navigation.navigate('Login');
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <View style={styles.customForm}>
                  <View style={styles.loginSecLabel}>
                    <Text style={styles.loginSecSpan}>Name</Text>
                  </View>
                  <TextInput
                    style={styles.formControl}
                    placeholder="May I know your Email id."
                    placeholderTextColor="#9E9E9E"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                  />
                  {touched.name && errors.name && (
                    <Text style={{color: 'red'}}>{errors.name}</Text>
                  )}
                </View>
                <View style={styles.customForm}>
                  <View style={styles.loginSecLabel}>
                    <Text style={styles.loginSecSpan}>Email</Text>
                  </View>
                  <TextInput
                    style={styles.formControl}
                    placeholder="Please! Keep it secret always"
                    placeholderTextColor="#9E9E9E"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  {touched.email && errors.email && (
                    <Text style={{color: 'red'}}>{errors.email}</Text>
                  )}
                </View>
                <View style={styles.customForm}>
                  <View style={styles.loginSecLabel}>
                    <Text style={styles.loginSecSpan}>Password</Text>
                  </View>
                  <TextInput
                    style={styles.formControl}
                    placeholder="Enter your password"
                    placeholderTextColor="#9E9E9E"
                    secureTextEntry
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  {touched.password && errors.password && (
                    <Text style={{color: 'red'}}>{errors.password}</Text>
                  )}
                </View>
                <View style={styles.customForm}>
                  <View style={styles.loginSecLabel}>
                    <Text style={styles.loginSecSpan}>Confirm Password</Text>
                  </View>
                  <TextInput
                    style={styles.formControl}
                    placeholder="Confirm your password"
                    placeholderTextColor="#9E9E9E"
                    secureTextEntry
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <Text style={{color: 'red'}}>{errors.confirmPassword}</Text>
                  )}
                </View>
                <TouchableOpacity
                  style={styles.LoginButton}
                  onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
          <Text style={styles.loginSecSignUp}>
            Don't have an account?{' '}
            <Text
              style={styles.loginSecSignUpText}
              onPress={() => navigation.navigate('Login')}>
              Login here
            </Text>
          </Text>
        </View>
        <View style={styles.loginImg}>
          <Image source={require('../assets/singupImg.png')} />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: windowHeight,
  },
  LoginAndRegisterHeader: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    minHeight: 145,
  },
  blackCircale: {
    width: 157,
    height: 157,
    borderRadius: 100,
    backgroundColor: '#000',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -30,
    left: -40,
  },
  loginImg: {
    flex: 1,
    alignItems: 'center',
  },
  loginSec: {
    borderRadius: 16,
    backgroundColor: '#FFF',
    marginHorizontal: 18,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 28,
    marginBottom: 15,
  },
  loginSecText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
    textTransform: 'capitalize',
    marginBottom: 27,
    fontFamily: 'Nunito',
  },
  customForm: {
    marginBottom: 24,
    position: 'relative',
  },
  loginSecLabel: {
    position: 'absolute',
    top: -16,
    left: 10,
    zIndex: 99,
  },
  loginSecSpan: {
    color: '#262626',
    backgroundColor: 'white',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 36,
    paddingHorizontal: 8,
  },
  formControl: {
    borderColor: '#FCCB06',
    borderWidth: 2,
    fontSize: 14,
    fontWeight: '400',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  loginPassword: {
    color: '#FCCB06',
    fontSize: 14,
    fontWeight: '500',
  },
  remember_forget_Sec: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginTop: -12,
  },
  remember_Sec: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  remember_Text_Sec: {
    marginLeft: 12,
    color: '#0F0F0F',
    fontSize: 14,
    fontWeight: '400',
  },
  LoginButton: {
    borderRadius: 10,
    backgroundColor: '#0E0E0E',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 36,
    paddingVertical: 10,
  },
  checkboxStyle: {
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 4,
    padding: 8,
  },
  loginSecContinue: {
    color: '#626262',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 36,
    marginBottom: 5,
  },
  loginSecSignUp: {
    color: '#4B4B4B',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 36,
  },
  loginSecSignUpText: {
    fontWeight: '600',
  },
  loginSecIcon: {
    width: 52,
    height: 52,
    borderRadius: 50,
    borderColor: '#D3D3D3',
    borderWidth: 2,
    marginHorizontal: 10,
    textAlign: 'center',
    paddingTop: 14,
  },
  loginIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 10,
  },
});
