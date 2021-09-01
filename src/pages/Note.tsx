import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import React, {useState} from 'react';
import {Dimensions, StyleSheet, TextInput, View} from 'react-native';
import {Divider, Input, Text} from 'react-native-elements';
import {RootStackParamList} from '../../App';

type NoteScreenNavigationProps = RouteProp<RootStackParamList, 'Note'>;

const lines = Math.ceil(Dimensions.get('window').height / 20);

const Note = () => {
  const {item} = useRoute<NoteScreenNavigationProps>().params || {};
  const navigation = useNavigation();

  const [title, setTitle] = useState<string | undefined>(item?.title);
  const [content, setContent] = useState<string | undefined>(item?.content);
  const [color, setColor] = useState<string | undefined>(item?.color);

  navigation.addListener('blur', () => {
    console.log('blur');
  });

  async function save() {
    if (item?.id) {
      // TODO
    } else {
      // TODO
    }
  }

  return (
    <View style={{flex: 1}}>
      <Input placeholder={'Título'} value={title} onChangeText={setTitle} />
      <View style={{flex: 1}}>
        <View style={styles.linesContainer}>
          {Array(lines)
            .fill()
            .map(() => (
              <Divider style={styles.line} />
            ))}
        </View>
        <TextInput
          multiline
          value={content}
          onChangeText={setContent}
          spellCheck={false}
          style={styles.content}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  linesContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  line: {
    marginBottom: 20,
  },
  content: {
    borderBottomWidth: 0,
    lineHeight: 20,
    fontSize: 15,
    flex: 1,
    padding: 12,
  },
});

export default Note;
