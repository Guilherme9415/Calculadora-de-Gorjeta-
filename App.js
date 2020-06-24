import React, {useState,useEffect} from 'react';
import { SafeAreaView, StyleSheet, Text, View,Button } from 'react-native';

import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
align-items:center;
flex:1;
background-color:#FFFFFF;

`;
const HeaderText = styled.Text`
font-size:25px;
margin-top:40px;
color:#000000;

`;
const Input = styled.TextInput`
width:90%;
border-radius:10px;
margin-top:30px;
height:50px;
font-size:18px;
background-color:#EEEEEE;
padding:10px;
`;
const CalcButton = styled.Button`
margin-top:20px;

`;
const ResulArea = styled.View`
margin-top:30px;
color:#000000;
padding:20px;
justify-content:center;
align-items:center;
`;
const ResultItemTitle = styled.Text`
 font-size:18px;
 font-weight:bold;
 color:#000000;

`;
const ResultItem = styled.Text`
font-size:15px;
color:#000000;
margin-bottom:30px;

`;
const PctArea = styled.Text`
font-size:15px;
margin:20px;
`;
const PctItem = styled.Button`

`;

export default () => {

  const [bill, setBill] = useState("");
  const [tip , setTip] = useState(0);
  const [pct, setPct ] = useState(10);
  
  const calc = () => {
    let nBill = parseFloat(bill);
    
   if (nBill) {
     setTip((pct/100) * nBill);
   }
  }
   
  useEffect(()=>{
     calc();
  }, [pct]);
  return(
    <Page>
      <HeaderText> Calculadora de Gorjeta </HeaderText>
      <Input 
      placeholder="Quanto deu a conta?"
      placeholderTextColor="#000"
      keyboardType="numeric"
      value={bill}
      onChangeText={n=>setBill(n)}
      />
      <PctArea>
        <PctItem title="5%" onPress={() => setPct(5)}/>
        <PctItem title="10%"onPress={() => setPct(10)}/>
        <PctItem title="15%"onPress={() => setPct(15)}/>
        <PctItem title="20%"onPress={() => setPct(20)}/>
      </PctArea>
      <CalcButton title={` Calcular ${pct}%`} onPress={calc}/>
      {tip > 0 &&
       <ResulArea>
        <ResultItemTitle> valor da Conta </ResultItemTitle>
          <ResultItem> R$ {parseFloat(bill).toFixed(2)}</ResultItem>

        <ResultItemTitle> valor da Gorjeta </ResultItemTitle>
      <ResultItem> R$ {tip.toFixed(2)} ({pct})%</ResultItem>

        <ResultItemTitle> valor da Total </ResultItemTitle>
          <ResultItem> R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
       </ResulArea>
      }
    </Page>
  );
}

