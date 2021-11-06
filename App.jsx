import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        {/* App Bar */}
        <View style={styles.appbarinner}>
          <Text style={styles.appbartitle}>Memo App</Text>
          <Text style={styles.appbarright}>ログアウト</Text>
        </View>
      </View>
      {/* memo List */}
      <View>
        {/* memo List① */}
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年12月24日 10:00</Text>
          </View>
          <View>
            <Text> X </Text>
          </View>
        </View>
        {/* memo List② */}
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年12月24日 10:00</Text>
          </View>
          <View>
            <Text> X </Text>
          </View>
        </View>
        {/* memo List③ */}
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年12月24日 10:00</Text>
          </View>
          <View>
            <Text> X </Text>
          </View>
        </View>
      </View>
      {/* + Button */}
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>+</Text>
      </View>
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
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },
  appbarinner: {
    // backgroundColor: 'gray',
    alignItems: 'center',
  },
  appbarright: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255,255,255,0.8)',
  },
  appbartitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  memoListItem: {
    width: '100%',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  memoListTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    textShadowOffset: { wigth: 8, height: 0 },
    shadowOpacity: 0.25,
    textShadowRadius: 8,
    elevation: 8,

  },
  circleButtonLabel: {
    color: '#FFFFFF',
    fontSize: 40,
    lineHeight: 40,
  },
});
