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
import GetStartSVG from '../assets/GetStartSVG';
import LogoIcon from '../assets/LogoIcon';
import React from 'react';
const windowHeight = Dimensions.get('window').height;
const GetStartScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.linearGradient}>
        <View style={styles.LoginAndRegisterHeader}>
          <View style={styles.blackCircale}>
            <Text style={styles.GetStartImg}>
              <GetStartSVG />
            </Text>
          </View>
        </View>
        <View style={styles.loginImg}>
          <Image source={require('../assets/getImg.png')} />
        </View>
        <TouchableOpacity
          style={styles.LoginButton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GetStartScreen;

const styles = StyleSheet.create({
  linearGradient: {
    paddingHorizontal: 32,
    backgroundColor: '#000',
    minHeight: windowHeight,
  },
  LoginAndRegisterHeader: {
    position: 'relative',
    minHeight: 200,
  },
  blackCircale: {
    width: 291,
    height: 291,
    borderRadius: 150,
    backgroundColor: '#272727',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -100,
    left: 30,
  },
  GetStartImg: {
    paddingTop: 80,
  },
  loginImg: {
    flex: 1,
    alignItems: 'center',
  },

  LoginButton: {
    borderRadius: 10,
    backgroundColor: '#FCCB06',
    marginBottom: 86,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 36,
    paddingVertical: 10,
    color: '#000000',
  },
});
