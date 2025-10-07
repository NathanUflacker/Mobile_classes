import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from "./assets/stylesheet";

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(null);


  //Prof, aqui a gente tá admitindo os dois números pra que a gente use no cálculo.
  const calcular = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    // Aqui a gente faz a checagem pra ver se algum deles é nulo ou se a pessoa colocou alguma coisa fora do escopo
    if (isNaN(n1) || isNaN(n2)) {
      Alert.alert('Erro', 'Você não inseriu valores válidos');
      return;
    }



    let resultado = 0;
    // Aqui a gente faz a troca pro tipo de operação que a pessoa quer que seja realizada.
    switch (operation) {
      case '+':
        resultado = n1 + n2;
        break;
      case '-':
        resultado = n1 - n2;
        break;
      case '*':
        resultado = n1 * n2;
        break;
      case '/':
        if (n2 === 0) {
          Alert.alert('Erro', 'Divisão por zero não permitida!');
          return;
        }
        resultado = n1 / n2;
        break;
      default:
        break;
    }


    // Aqui a gente só mostra o resultado só
    setResult(resultado);
  };

  const limpar = () => {
    setNum1('');
    setNum2('');
    setResult(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <Image source={require('./assets/img/calc.png')} style={styles.logo} />

      <View style={styles.form}>
        <Text style={styles.label}>Primeiro número:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Digite um número"
          value={num1}
          onChangeText={setNum1}
        />
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Segundo número:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Digite oto número"
          value={num2}
          onChangeText={setNum2}
        />
      </View>

      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Selecione a operação desejada:</Text>
        <Picker
          selectedValue={operation}
          style={styles.picker}
          onValueChange={(itemValue) => setOperation(itemValue)}
        >
          <Picker.Item label="Adição" value="+" />
          <Picker.Item label="Subtração" value="-" />
          <Picker.Item label="Multiplicação" value="*" />
          <Picker.Item label="Divisão" value="/" />
        </Picker>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={calcular}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={limpar}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
      </View>

      {result !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Resultado: {result}</Text>
        </View>
      )}
    </ScrollView>
  );
}
