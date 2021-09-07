import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet} from 'react-native';
import {Icon, ListItem} from 'react-native-elements';
import {RootStackParamList} from '~/../App';
import {NoteType} from '~/types';

type PROPS = {
  item: NoteType;
  showMenu: Dispatch<SetStateAction<NoteType | undefined>>;
};

type RootStackNavigationProp = StackNavigationProp<RootStackParamList, 'Note'>;

const NoteCard = ({item, showMenu}: PROPS) => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const {color, title, content, locked} = item;

  return (
    <ListItem
      containerStyle={[
        styles.container,
        color
          ? {
              borderLeftWidth: 5,
              borderColor: color,
              borderBottomColor: 'gray', // fix for Android, because `borderLeftColor` doesn't works
            }
          : null,
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
      {locked && (
        <Icon name={'lock'} color={'black'} style={{alignSelf: 'center'}} />
      )}
    </ListItem>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 90,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
});

export default NoteCard;
