import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/components/appbar';
import MemoList from './src/components/memoList';
import CircleButton from './src/components/CircleButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />
      <MemoList />
      <CircleButton>+</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
