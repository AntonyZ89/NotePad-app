import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Header} from 'react-native-elements';
import {RootStackParamList} from '../../App';
import {InnerContainer} from '../components';

type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const Home = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <>
      <Header
        leftComponent={{icon: 'bars', color: 'white'}}
        centerComponent={{
          text: 'NotePad',
          style: {fontWeight: 'bold', fontSize: 20, color: 'white'},
        }}
      />

      <InnerContainer style={styles.innerContainer}>
        <Button
          onPress={() => navigation.navigate('NoteList')}
          buttonStyle={styles.optionContainer}
          title={'Notas'}
          titleStyle={styles.optionTitle}
          icon={{name: 'sticky-note', size: 40, style: styles.optionIcon}}
        />
        <Button
          buttonStyle={styles.optionContainer}
          title={'Configurações'}
          titleStyle={styles.optionTitle}
          icon={{name: 'cogs', size: 40, style: styles.optionIcon}}
        />
        <Button
          buttonStyle={styles.optionContainer}
          title={'Sobre'}
          titleStyle={styles.optionTitle}
          icon={{
            name: 'question',
            size: 40,
            style: styles.optionIcon,
          }}
        />
      </InnerContainer>
    </>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    justifyContent: 'center',
  },
  optionContainer: {
    borderRadius: 12,
    margin: 5,
  },
  optionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  optionIcon: {
    marginBottom: 10,
  },
});

export default Home;
