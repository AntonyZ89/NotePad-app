import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import {RootStackParamList} from '../../App';
import {NoteType} from '../types';

type PROPS = {
  item: NoteType;
  showMenu: Dispatch<SetStateAction<NoteType | undefined>>;
};

type RootStackNavigationProp = StackNavigationProp<RootStackParamList, 'Note'>;

const NoteCard = ({item, showMenu}: PROPS) => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const {color, title, content} = item;

  return (
    <ListItem
      containerStyle={[
        styles.container,
        color ? {borderLeftWidth: 5, borderLeftColor: color} : null,
      ]}
      bottomDivider
      onLongPress={() => showMenu(item)}
      onPress={() => navigation.navigate('Note', {item})}>
      <ListItem.Content>
        <ListItem.Title numberOfLines={1} style={styles.title}>
          {title}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={2}>{content}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 90,
    alignItems: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
  },
});

export default NoteCard;
