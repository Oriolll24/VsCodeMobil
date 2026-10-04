import React from 'react';
import { Text, StyleSheet } from 'react-native';

    const textos = {
        es: '¡Hola Mundo!.',
        en: 'Hello World!.',
    };

  export default function Saludo({idioma = 'es'}) {
    return (
        <Text style={styles.estiloTexto}>
            {textos[idioma] || textos['es']}
        </Text>
    );
  }

  const styles = StyleSheet.create({
    // Define tus estilos aquí
    estiloTexto: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'blue'
    }
  
  });