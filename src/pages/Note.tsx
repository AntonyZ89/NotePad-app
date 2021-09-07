import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {Divider, FAB, Input} from 'react-native-elements';
import {RootStackParamList} from '~/../App';
import {ColorPicker} from '~/components';
import {useNote} from '~/contexts/NoteContext';

type NoteScreenNavigationProps = RouteProp<RootStackParamList, 'Note'>;

const lines = Math.ceil(Dimensions.get('window').height / 20);

const Note = () => {
  const {item} = useRoute<NoteScreenNavigationProps>().params || {};
  const navigation = useNavigation();
  const {lock, unlock, save} = useNote();

  const [title, setTitle] = useState<string>(item?.title || '');
  const [content, setContent] = useState<string>(item?.content || '');
  const [color, setColor] = useState<string | undefined>(item?.color);

  useEffect(() => {
    const blur = navigation.addListener('blur', () => {
      if (!title.length && !content.length) {
        return;
      }

      save({
        id: item?.id as number,
        title,
        content,
        locked: item?.locked,
        color,
      });
    });

    return blur;
  });

  return (
    <View style={{flex: 1}}>
      <View style={styles.title}>
        <Input
          placeholder={'Título'}
          editable={!item?.locked}
          value={title}
          onChangeText={setTitle}
          inputStyle={{color: item?.locked ? 'gray' : undefined}}
          inputContainerStyle={{
            borderBottomColor: item?.locked ? '#d3d3d3' : undefined,
          }}
          containerStyle={{flex: 1}}
        />
        {item?.id && (
          <FAB
            color={'#FFFACD'}
            size={'small'}
            icon={{
              name: item.locked ? 'lock' : 'unlock',
              color: 'black',
            }}
            onPress={() => (item.locked ? unlock(item.id) : lock(item.id))}
          />
        )}
        <ColorPicker onChange={setColor} color={color} />
      </View>
      <View>
        <View style={styles.linesContainer}>
          {Array(lines)
            .fill(null)
            .map((v, i) => (
              <Divider key={i.toString()} style={styles.line} />
            ))}
        </View>
        <ScrollView>
          <TextInput
            multiline
            editable={!item?.locked}
            value={content}
            onChangeText={setContent}
            spellCheck={false}
            style={[
              styles.content,
              {
                color: item?.locked ? 'gray' : undefined,
              },
            ]}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    marginRight: 8,
  },
  linesContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  line: {
    marginTop: 20,
  },
  content: {
    borderBottomWidth: 0,
    lineHeight: 20,
    fontSize: 15,
    flex: 1,
    padding: 0,
    paddingHorizontal: 12,
    paddingBottom: 150,
  },
});

export default Note;
