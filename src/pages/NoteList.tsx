import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {BottomSheet, FAB, Text} from 'react-native-elements';
import {RootStackParamList} from '~/../App';
import {NoteCard} from '~/components';
import {useNote} from '~/contexts/NoteContext';
import {NoteType} from '~/types';

type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const Notes = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [selectedNote, setSelectedNote] = useState<NoteType>();
  const {notes, lock, unlock, remove, colorFilter} = useNote();

  return (
    <>
      <FlatList
        keyExtractor={item => item?.id.toString()}
        data={notes.filter(note =>
          colorFilter ? note.color === colorFilter : true,
        )}
        renderItem={({item}) => (
          <NoteCard item={item} showMenu={setSelectedNote} />
        )}
      />

      <FAB
        icon={{name: 'plus'}}
        placement={'right'}
        color={'#4299e1'}
        onPress={() => navigation.navigate('Note')}
      />

      <BottomSheet
        isVisible={Boolean(selectedNote)}
        containerStyle={styles.backdropStyle}>
        <View style={styles.bottomInnerContainer}>
          <View style={styles.bottomOption}>
            <FAB
              color={'#53B8BB'}
              size={'large'}
              icon={{
                name: 'pencil',
              }}
              onPress={() =>
                navigation.navigate('Note', {item: selectedNote as NoteType})
              }
            />
            <Text style={styles.bottomLabel}>Editar</Text>
          </View>
          <View style={styles.bottomOption}>
            <FAB
              color={'#FF4848'}
              size={'large'}
              icon={{
                name: 'trash',
              }}
              onPress={() => {
                setSelectedNote(undefined);
                remove(selectedNote?.id as number);
              }}
            />
            <Text style={styles.bottomLabel}>Excluir</Text>
          </View>
          <View style={styles.bottomOption}>
            <FAB
              color={'#FFFACD'}
              size={'large'}
              icon={{
                name: selectedNote?.locked ? 'unlock' : 'lock',
                color: 'black',
              }}
              onPress={() => {
                selectedNote?.locked
                  ? unlock(selectedNote?.id as number)
                  : lock(selectedNote?.id as number);
              }}
            />
            <Text style={styles.bottomLabel}>
              {selectedNote?.locked ? 'Desbloquear' : 'Bloquear'}
            </Text>
          </View>
          <View style={styles.bottomOption}>
            <FAB
              onPress={() => setSelectedNote(undefined)}
              color={'#EBEBED'}
              size={'large'}
              icon={{
                name: 'times',
                color: 'black',
              }}
            />
            <Text style={styles.bottomLabel}>Cancelar</Text>
          </View>
        </View>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 0,
    padding: 0,
    flex: 1,
  },
  backdropStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
  },
  bottomInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottomOption: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'white',
  },
});

export default Notes;
