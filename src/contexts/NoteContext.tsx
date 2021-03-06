import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import {NoteType} from '~/types';

type PROPS = {
  notes: NoteType[];
  save: (note: NoteType) => void;
  remove: (id: number) => void;
  lock: (id: number) => void;
  unlock: (id: number) => void;
  colorFilter?: string;
  setColorFilter: Dispatch<SetStateAction<string | undefined>>;
};

const init: PROPS = {
  notes: [],
  save: _note => {},
  remove: _id => {},
  lock: _id => {},
  unlock: _id => {},
  setColorFilter: _color => {},
};

const NoteContext = createContext<PROPS>(init);

const NoteProvider: React.FC = ({children}) => {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [rerender, setRerender] = useState(false);
  const [colorFilter, setColorFilter] = useState<string | undefined>();

  useEffect(() => {
    (async () => {
      const content = JSON.parse(
        (await AsyncStorage.getItem('@notes')) || '[]',
      );

      setNotes(content);
    })();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('@notes', JSON.stringify(notes));
  }, [notes, rerender]);

  function save(note: NoteType) {
    const index = note.id ? notes.findIndex(({id}) => id === note.id) : -1;

    if (index !== -1) {
      notes[index] = note;
    } else {
      const last_id = notes[notes.length - 1]?.id || 0;
      note.id = last_id + 1;
      notes.push(note);
    }

    setNotes(notes);
    setRerender(!rerender);
  }

  function remove(id: number) {
    const index = notes.findIndex(({id: note_id}) => note_id === id);

    notes.splice(index, 1);

    setNotes(notes);
  }

  function lock(id: number) {
    const note = notes.find(({id: note_id}) => note_id === id);

    if (note) {
      note.locked = true;
      setRerender(!rerender);
    }
  }

  function unlock(id: number) {
    const note = notes.find(({id: note_id}) => note_id === id);

    if (note) {
      note.locked = false;
      setRerender(!rerender);
    }
  }

  return (
    <NoteContext.Provider
      value={{notes, save, lock, unlock, remove, colorFilter, setColorFilter}}>
      {children}
    </NoteContext.Provider>
  );
};

function useNote() {
  return useContext(NoteContext);
}

export {NoteContext, NoteProvider, useNote};
