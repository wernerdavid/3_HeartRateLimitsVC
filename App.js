
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState(0);
  const [lower, setLower] = useState(0);
  const [upper, setUpper] = useState(0);

  const calculate = () => {
    const lowerLimit = (220 - age) * 0.65;
    setLower(lowerLimit);
    const upperLimit = (220 - age) * 0.85;
    setUpper(upperLimit);
  }

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput 
        	keyboardType='numeric'
          placeholder='Enter age'
          value={age}
          onChangeText={text =>setAge(text)}></TextInput>
      <Text>Heart Rate Limits</Text>
      <Text>{lower.toFixed(0)} - {upper.toFixed(0)}</Text>
      <Button onPress={calculate} title='Calculate'></Button>
      
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
