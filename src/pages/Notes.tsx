import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, FAB} from 'react-native-elements';
import {NoteCard} from '../components';

const Notes = () => {
  return (
    <>
      <FAB icon={{name: 'plus'}} placement={'right'} />
      <Card containerStyle={styles.card}>
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 0,
    padding: 0,
  },
});

export default Notes;
