import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

const InnerContainer: React.FC<ViewProps> = ({children, ...props}) => {
  const {style, ...other_props} = props;

  return (
    <View {...other_props} style={[styles.container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    flex: 1,
  },
});

export default InnerContainer;
