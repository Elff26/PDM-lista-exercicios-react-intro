import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react'

const gerarNumeroAleatorio = () =>{
  let numberList = [];
  let min, max, quantNum, randons, isIncluded
  min = 1;
  max = 60;
  quantNum = 6;

  for(let i = 0; i < quantNum; i++){
    do{
      randons = Math.floor(Math.random() * (max - min + 1)) + min;
      isIncluded = numberList.includes(randons);

      if(!isIncluded){
        numberList.push(randons);
      }

    }while(isIncluded)
  }

  return numberList;
}

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      numero: gerarNumeroAleatorio()
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Text>Gerador de Números</Text>
        <Text>
          {
            this.state.numero[0] + " - " + 
            this.state.numero[1] + " - " + 
            this.state.numero[2] + " - " + 
            this.state.numero[3] + " - " + 
            this.state.numero[4] + " - " + 
            this.state.numero[5]
          }
        </Text>

        <Button 
          title="Gerar"
          onPress={() => {this.setState({numero: this.numero = gerarNumeroAleatorio()})}}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});