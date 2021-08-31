import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Header} from 'react-native-elements';
import {RootStackParamList} from '../../App';
import {InnerContainer} from '../components';

type MainStackParamList = StackNavigationProp<RootStackParamList>;

const Home = () => {
  const navigation = useNavigation<MainStackParamList>();

  return (
    <>
      <Header
        leftComponent={{icon: 'bars', color: 'white'}}
        centerComponent={{
          text: 'NotePad',
          style: {fontWeight: 'bold', fontSize: 20, color: 'white'},
        }}
      />

      <InnerContainer style={styles.container}>
        <Button
          onPress={() => navigation.navigate('Notes')}
          buttonStyle={styles.optionContainer}
          title={'Notas'}
          titleStyle={styles.optionTitle}
          icon={{name: 'sticky-note', size: 50, style: styles.optionIcon}}
        />
        <Button
          buttonStyle={styles.optionContainer}
          title={'Configurações'}
          titleStyle={styles.optionTitle}
          icon={{name: 'cogs', size: 50, style: styles.optionIcon}}
        />
        <Button
          buttonStyle={styles.optionContainer}
          title={'Sobre'}
          titleStyle={styles.optionTitle}
          icon={{
            name: 'question',
            size: 50,
            style: styles.optionIcon,
          }}
        />
      </InnerContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  optionContainer: {
    flexDirection: 'column',
    width: 150,
    height: 150,
    borderRadius: 12,
  },
  optionTitle: {
    fontSize: 20,
  },
  optionIcon: {
    marginBottom: 10,
  },
});

export default Home;
