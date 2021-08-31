import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FAB, ListItem} from 'react-native-elements';

const NoteCard = () => {
  return (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>Example</ListItem.Title>
        <ListItem.Subtitle numberOfLines={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus
          diam sit amet aliquam lacinia. Morbi lectus risus, volutpat sed neque
        </ListItem.Subtitle>
      </ListItem.Content>
      <View>
        <FAB
          color={'#53B8BB'}
          size={'small'}
          icon={{
            name: 'pencil',
            size: 20,
          }}
          style={{marginBottom: 5}}
        />
        <FAB
          color={'#FF4848'}
          size={'small'}
          icon={{
            name: 'trash',
            size: 20,
          }}
        />
      </View>
    </ListItem>

    // <View style={styles.container}>
    //   <Text>Teste</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF7AE',
    padding: 12,
    marginTop: 10,
    elevation: 5,
    borderRadius: 5,
  },
});

export default NoteCard;
