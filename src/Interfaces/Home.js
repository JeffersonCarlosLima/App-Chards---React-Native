import React from "react";
import { Text, View, Button } from 'react-native';
import { BarChart } from "react-native-chart-kit";
import GraficoBarra from './Graficos/GraficoBarra';

export default function Home(props) {
    return(<View>

    <Text>Teste</Text>
    <GraficoBarra/>
    <Button title="Sair" onPress={()=>props.navigation.navigate('Login')}/>

    </View>)}
