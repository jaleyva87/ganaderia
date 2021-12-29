import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import datos from '../assets/datos.json';

export function DetallesScreen({ route, navigation }: any) {
    const { id } = route.params;
    let indice: number = datos.findIndex(ganado => ganado.id === id);
    let descripcion: string = datos[indice].descripcion;

    return (
        <View style={styles.container}>
            <Text  style={styles.texto}>Detalles {descripcion} </Text>
            <Button title="Volver" onPress={() => navigation.navigate('Ganados')} />
            {/*  <Button title="Go back" onPress={() => navigation.goBack()} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    texto: {
        flex: 1,
        fontSize: 20,
        textAlign: 'justify',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginEnd: 10,
       fontFamily: 'Cochin'

    }
});
