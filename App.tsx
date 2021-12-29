import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import {DetallesScreen} from './detalles/detalles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons  } from '@expo/vector-icons';

const ganados = [
    { cantidad: '25', icon: 'cow',  categoria: 'Bovino', id: '1' },
    { cantidad: '14', icon: 'sheep', categoria: 'Ovino', id: '2' },
    { cantidad: '20', icon: 'pig', categoria: 'Porcino', id: '3' },
    { cantidad: '35', icon: 'horseshoe', categoria: 'Equino', id: '4' },
];

function ListadoScreen({ navigation }: any) {
    return (
        <View>

             <FlatList
                keyExtractor={(item) => item.id }
                data={ganados}
                renderItem={({ item }) => (
                    <Text style={styles.item} onPress={() => navigation.navigate('Detalles', {
                        id: item.id
                    })} >
                        <MaterialCommunityIcons name={item.icon} size={24} color="black" />
                        {item.categoria}
                        <Text style={{padding: 20, fontSize: 18}}>{'\nTotal '+item.cantidad}</Text>
                    </Text>
                )}
            />
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Ganados" component={ListadoScreen} />
          <Stack.Screen name="Detalles" component={DetallesScreen} />
        </Stack.Navigator>
        <StatusBar style="auto"/>
      </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 20
    },
    item: {
        marginTop: 12,
        padding: 30,
        backgroundColor: '#2ecc71',
        fontSize: 24
    },
    texto:{
        padding: 20,
        fontSize: 24
    }
});
