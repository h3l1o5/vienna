import { StyleSheet, Text, useColorScheme, View } from 'react-native';

const colors = {
  light: { paper: '#faf9f6', ink: '#1b1917' },
  dark: { paper: '#161514', ink: '#e2dfdb' },
};

export default function Index() {
  const { paper, ink } = colors[useColorScheme() === 'dark' ? 'dark' : 'light'];

  return (
    <View style={[styles.container, { backgroundColor: paper }]}>
      <Text style={{ color: ink }}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
