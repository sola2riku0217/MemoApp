import React from 'react';
import {
  View, TextInput, StyleSheet,
} from 'react-native';

import Appbar from '../components/appbar';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoCreateScreen() {
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.container}>
        <Appbar />
        <View style={styles.inputContainer}>
          <TextInput value="hi" multiline style={styles.input} />
        </View>
        <CircleButton name="check" />
      </View>
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    // backgroundColor: 'blue',
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
