
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState(0);
  const [lower, setLower] = useState(0);
  const [upper, setUpper] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput keyboardType='numeric'></TextInput>
      <Text>Heart Rate Limits</Text>
      <Text></Text>
      <Button title='Calculate'></Button>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
