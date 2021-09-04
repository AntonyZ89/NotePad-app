import React from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import {Icon, Text} from 'react-native-elements';

const date = new Date();

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NotePad</Text>

      <Text style={styles.description}>Desenvolvido por AntonyDev</Text>

      <View style={styles.icons}>
        <Icon
          onPress={() => Linking.openURL('https://github.com/antonyz89')}
          name={'github'}
          color={'black'}
          size={40}
        />
      </View>

      <Text>{date.getFullYear()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginVertical: 32,
    fontSize: 16,
  },
  icons: {
    justifyContent: 'center',
  },
});

export default About;
