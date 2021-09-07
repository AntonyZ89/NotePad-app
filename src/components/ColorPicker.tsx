import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomSheet, Button, FAB} from 'react-native-elements';
import mock from '~/service/mock';

type PROPS = {
  color?: string;
  onChange: Dispatch<SetStateAction<string | undefined>>;
};

const ColorPicker = ({color: initial_color, onChange}: PROPS) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [color, setColor] = useState(initial_color);

  useEffect(() => {
    onChange(color);
  }, [color, onChange]);

  return (
    <>
      <FAB
        color={color || 'white'}
        size={'small'}
        icon={{
          name: 'tint',
          color: 'black',
        }}
        onPress={() => setShowColorPicker(true)}
      />

      <BottomSheet isVisible={showColorPicker}>
        <View style={styles.colorPickerContainer}>
          <Button
            icon={{name: 'ban', color: 'black'}}
            buttonStyle={[styles.colorButton, {backgroundColor: 'white'}]}
            onPress={() => setColor(undefined)}
          />
          {mock.colors.map(c => (
            <Button
              key={c}
              buttonStyle={[styles.colorButton, {backgroundColor: c}]}
              onPress={() => setColor(c)}
            />
          ))}
          <Button
            icon={{name: 'times', color: 'black'}}
            buttonStyle={[styles.colorButton, {backgroundColor: 'white'}]}
            onPress={() => setShowColorPicker(false)}
          />
        </View>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  colorButton: {
    width: 50,
    height: 50,
    margin: 3,
  },
  colorPickerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ColorPicker;
