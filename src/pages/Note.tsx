import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {BottomSheet, Button, Divider, FAB, Input} from 'react-native-elements';
import {RootStackParamList} from '../../App';
import {useNote} from '../contexts/NoteContext';
import mock from '../service/mock';

type NoteScreenNavigationProps = RouteProp<RootStackParamList, 'Note'>;

const lines = Math.ceil(Dimensions.get('window').height / 20);

const Note = () => {
  const {item} = useRoute<NoteScreenNavigationProps>().params || {};
  const navigation = useNavigation();
  const {lock, unlock, save} = useNote();

  const [title, setTitle] = useState<string>(item?.title || '');
  const [content, setContent] = useState<string>(item?.content || '');
  const [color, setColor] = useState<string | undefined>(item?.color);
  const [showColorPicker, setShowColorPicker] = useState(false);

  useEffect(() => {
    const blur = navigation.addListener('blur', () => {
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
          containerStyle={{flex: 1}}
        />
        {item?.id && (
          <FAB
            color={'#FFFACD'}
            size={'large'}
            icon={{
              name: item.locked ? 'lock' : 'unlock',
              color: 'black',
            }}
            onPress={() => (item.locked ? unlock(item.id) : lock(item.id))}
          />
        )}
        <FAB
          color={color || 'rgba(0, 0, 0, 0.1)'}
          size={'large'}
          icon={{
            name: 'tint',
            color: 'black',
          }}
          onPress={() => setShowColorPicker(true)}
        />
      </View>
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={styles.linesContainer}>
            {Array(lines)
              .fill(null)
              .map((v, i) => (
                <Divider key={i.toString()} style={styles.line} />
              ))}
          </View>
          <TextInput
            multiline
            editable={!item?.locked}
            value={content}
            onChangeText={setContent}
            spellCheck={false}
            style={styles.content}
          />
        </View>
      </ScrollView>

      <BottomSheet isVisible={showColorPicker}>
        <View style={styles.colorPickerContainer}>
            <Button
              icon={{name: 'ban', color: 'black'}}
              buttonStyle={[styles.colorButton, {backgroundColor: 'white'}]}
              onPress={() => setColor(undefined)}
            />
          {mock.colors.map(c => (
            <Button
              buttonStyle={[styles.colorButton, {backgroundColor: c}]}
              onPress={() => {
                setColor(c);
              }}
            />
          ))}
          <Button
            icon={{name: 'times', color: 'black'}}
            buttonStyle={[styles.colorButton, {backgroundColor: 'white'}]}
            onPress={() => setShowColorPicker(false)}
          />
        </View>
      </BottomSheet>
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
    marginBottom: 20,
  },
  content: {
    borderBottomWidth: 0,
    lineHeight: 20,
    fontSize: 15,
    flex: 1,
    padding: 12,
  },
  colorPickerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorButton: {
    width: 50,
    height: 50,
    margin: 3,
  },
});

export default Note;
