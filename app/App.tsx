import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Saludo from './Saludo.tsx';

export default function App() {
  return (
    // Agrega aquí tu <View> y <Text> con sus respectivos estilos
    <View style={styles.contenedor}>
      <Saludo idioma='es'/>
      <Saludo idioma='en'/>
      <Saludo />
    </View>
  );
}

const styles = StyleSheet.create({
  // Define tus estilos aquí
  contenedor: {
    flex : 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f5f5f5'
  }
});