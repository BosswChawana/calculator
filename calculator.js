import React, { Component } from 'react';
import { Image,TextInput,StyleSheet, TouchableOpacity,Text, View ,Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class FacebookButton extends React.Component {
  
  constructor(prop){
    super(prop);
    this.state={
      num1:0,output:0,sign:"",update:"",checkN : 0
    }
  }

  check(e){
    switch(e){
      case ".":
        if(this.state.update.includes(".") == false){
          this.setState({output:(this.state.update+".")})
          this.setState({update : this.state.update+"."})
        }
        break;
      case "AC":
        this.setState({num1:0})
        this.setState({output:0})
        this.setState({sign:""})
        this.setState({update:""})
        break;
      case 1:
        if(this.state.checkN ==1){
          this.setState({update : ""})
          this.setState({update : ""+1})
          this.setState({output:Number(""+1)})
          this.setState({checkN : 0})
        }else{
          this.setState({output:Number(this.state.update+1)})
          this.setState({update : this.state.update+1})
        }
        break;
      case 2:
        if(this.state.checkN ==1){
          this.setState({update : ""})
          this.setState({update : ""+2})
          this.setState({output:Number(""+2)})
          this.setState({checkN : 0})
        }else{
          this.setState({output:Number(this.state.update+2)})
          this.setState({update : this.state.update+2})
        }        
        break;
      case 3:
        if(this.state.checkN ==1){
          this.setState({update : ""})
          this.setState({update : ""+3})
          this.setState({output:Number(""+3)})
          this.setState({checkN : 0})
        }else{
          this.setState({output:Number(this.state.update+3)})
          this.setState({update : this.state.update+3})
        }
        break;
      case 4:
        if(this.state.checkN ==1){
          this.setState({update : ""})
          this.setState({update : ""+4})
          this.setState({output:Number(""+4)})
          this.setState({checkN : 0})
        }else{
          this.setState({output:Number(this.state.update+4)})
          this.setState({update : this.state.update+4})
        }       
        break;
      case 5:
        if(this.state.checkN ==1){
          this.setState({update : ""})
          this.setState({update : ""+5})
          this.setState({output:Number(""+5)})
          this.setState({checkN : 0})
        }else{
          this.setState({output:Number(this.state.update+5)})
          this.setState({update : this.state.update+5})
        }
        break;
      case 6:
        if(this.state.checkN ==1){
          this.setState({update : ""})
          this.setState({update : ""+6})
          this.setState({output:Number(""+6)})
          this.setState({checkN : 0})
        }else{
          this.setState({output:Number(this.state.update+6)})
          this.setState({update : this.state.update+6})
        }      
        break;
      case 7:
        if(this.state.checkN ==1){
          this.setState({update : ""})
          this.setState({update : ""+7})
          this.setState({output:Number(""+7)})
          this.setState({checkN : 0})
        }else{
          this.setState({output:Number(this.state.update+7)})
          this.setState({update : this.state.update+7})
        }
        break;
      case 8:
        if(this.state.checkN ==1){
          this.setState({update : ""})
          this.setState({update : ""+8})
          this.setState({output:Number(""+8)})
          this.setState({checkN : 0})
        }else{
          this.setState({output:Number(this.state.update+8)})
          this.setState({update : this.state.update+8})
        }       
        break;
      case 9:
        if(this.state.checkN ==1){
          this.setState({update : ""})
          this.setState({update : ""+9})
          this.setState({output:Number(""+9)})
          this.setState({checkN : 0})
        }else{
          this.setState({output:Number(this.state.update+9)})
          this.setState({update : this.state.update+9})
        }
        break;
      case 0:
        if(this.state.update != "0"){
          if(this.state.checkN ==1){
            this.setState({update : ""})
            this.setState({update : ""+0})
            this.setState({output:(""+0)})
            this.setState({checkN : 0})
          }else{
            this.setState({output:(this.state.update+0)})
            this.setState({update : this.state.update+0})
          }
        }
        break;
      case "+":
        switch(this.state.sign){
          case "":
            this.setState({num1 : Number(this.state.update)})
            this.setState({update:""})
            this.setState({sign : "+"})
            break;
          case "+":
            this.setState({output: this.state.num1 + Number(this.state.update)})
            this.setState({update: this.state.num1 + Number(this.state.update)})
            this.setState({num1 : this.state.num1 + Number(this.state.update)})
            this.setState({sign:"+"})
            this.setState({update: ""})
            break;
          case "-":
            this.setState({output: this.state.num1 - Number(this.state.update)})
            this.setState({update: this.state.num1 - Number(this.state.update)})
            this.setState({num1 : this.state.num1 - Number(this.state.update)})
            this.setState({sign:"+"})
            this.setState({update: ""})
            break;    
          case "*":
            this.setState({output: this.state.num1 * Number(this.state.update)})
            this.setState({update: this.state.num1 * Number(this.state.update)})
            this.setState({num1 : this.state.num1 * Number(this.state.update)})
            this.setState({sign:"+"})
            this.setState({update: ""})
            break;
          case "/":
            this.setState({output: this.state.num1 / Number(this.state.update)})
            this.setState({update: this.state.num1 / Number(this.state.update)})
            this.setState({num1 : this.state.num1 / Number(this.state.update)})
            this.setState({sign:"+"})
            this.setState({update: ""})
            break;  
        }
        break;
      case "-":
        switch(this.state.sign){
          case "":
            this.setState({num1 : Number(this.state.update)})
            this.setState({update:""})
            this.setState({sign : "-"})
            break;
          case "-":
            this.setState({output: this.state.num1 - Number(this.state.update)})
            this.setState({update: this.state.num1 - Number(this.state.update)})
            this.setState({num1 : this.state.num1 - Number(this.state.update)})
            this.setState({sign:"-"})
            this.setState({update: ""})
            break;
          case "+":
            this.setState({output: this.state.num1 + Number(this.state.update)})
            this.setState({update: this.state.num1 + Number(this.state.update)})
            this.setState({num1 : this.state.num1 + Number(this.state.update)})
            this.setState({sign:"-"})
            this.setState({update: ""})
            break;
          case "*":
            this.setState({output: this.state.num1 * Number(this.state.update)})
            this.setState({update: this.state.num1 * Number(this.state.update)})
            this.setState({num1 : this.state.num1 * Number(this.state.update)})
            this.setState({sign:"-"})
            this.setState({update: ""})
            break;
          case "/":
            this.setState({output: this.state.num1 / Number(this.state.update)})
            this.setState({update: this.state.num1 / Number(this.state.update)})
            this.setState({num1 : this.state.num1 / Number(this.state.update)})
            this.setState({sign:"-"})
            this.setState({update: ""})
            break;
        }
        break;
      case "*":
        switch(this.state.sign){
          case "":
            this.setState({num1 : Number(this.state.update)})
            this.setState({update:""})
            this.setState({sign : "*"})
            break;
          case "+":
            this.setState({output: this.state.num1 + Number(this.state.update)})
            this.setState({update: this.state.num1 + Number(this.state.update)})
            this.setState({num1 : this.state.num1 + Number(this.state.update)})
            this.setState({sign:"*"})
            this.setState({update: ""})
            break;
          case "-":
            this.setState({output: this.state.num1 - Number(this.state.update)})
            this.setState({update: this.state.num1 - Number(this.state.update)})
            this.setState({num1 : this.state.num1 - Number(this.state.update)})
            this.setState({sign:"*"})
            this.setState({update: ""})
            break;    
          case "*":
            this.setState({output: this.state.num1 * Number(this.state.update)})
            this.setState({update: this.state.num1 * Number(this.state.update)})
            this.setState({num1 : this.state.num1 * Number(this.state.update)})
            this.setState({sign:"*"})
            this.setState({update: ""})
            break;
          case "/":
            this.setState({output: this.state.num1 / Number(this.state.update)})
            this.setState({update: this.state.num1 / Number(this.state.update)})
            this.setState({num1 : this.state.num1 / Number(this.state.update)})
            this.setState({sign:"*"})
            this.setState({update: ""})
            break;
        }
        break;
      case "/":
        switch(this.state.sign){
          case "":
            this.setState({num1 : Number(this.state.update)})
            this.setState({update:""})
            this.setState({sign : "/"})
            break;
          case "+":
            this.setState({output: this.state.num1 + Number(this.state.update)})
            this.setState({update: this.state.num1 + Number(this.state.update)})
            this.setState({num1 : this.state.num1 + Number(this.state.update)})
            this.setState({sign:"/"})
            this.setState({update: ""})
            break;
          case "-":
            this.setState({output: this.state.num1 - Number(this.state.update)})
            this.setState({update: this.state.num1 - Number(this.state.update)})
            this.setState({num1 : this.state.num1 - Number(this.state.update)})
            this.setState({sign:"/"})
            this.setState({update: ""})
            break;    
          case "*":
            this.setState({output: this.state.num1 * Number(this.state.update)})
            this.setState({update: this.state.num1 * Number(this.state.update)})
            this.setState({num1 : this.state.num1 * Number(this.state.update)})
            this.setState({sign:"/"})
            this.setState({update: ""})
            break;
          case "/":
            this.setState({output: this.state.num1 / Number(this.state.update)})
            this.setState({update: this.state.num1 / Number(this.state.update)})
            this.setState({num1 : this.state.num1 / Number(this.state.update)})
            this.setState({sign:"/"})
            this.setState({update: ""})
            break;
        }
        break;
      case "=":
        switch(this.state.sign){
          case "+":
            this.setState({output: this.state.num1 + Number(this.state.update)})
            this.setState({update: this.state.num1 + Number(this.state.update)})
            this.setState({num1 : this.state.num1 + Number(this.state.update)})
            this.setState({sign:""})
            this.setState({checkN:1})
            break;
          case "-":
            this.setState({output: this.state.num1 - Number(this.state.update)})
            this.setState({update: this.state.num1 - Number(this.state.update)})
            this.setState({num1 : this.state.num1 - Number(this.state.update)})
            this.setState({sign:""})
            this.setState({checkN:1})
            break;
          case "*":
            this.setState({output: this.state.num1 * Number(this.state.update)})
            this.setState({update: this.state.num1 * Number(this.state.update)})
            this.setState({num1 : this.state.num1 * Number(this.state.update)})
            this.setState({sign:""})
            this.setState({checkN:1})
            break;
          case "/":
            this.setState({output: this.state.num1 / Number(this.state.update)})
            this.setState({update: this.state.num1 / Number(this.state.update)})
            this.setState({num1 : this.state.num1 / Number(this.state.update)})
            this.setState({sign:""})
            this.setState({checkN:1})
            break;     
        }
      break;
      
    }
  }

  render() {
    return (
      <LinearGradient colors={['black','black']} style={{ flex:1}}>
          <View style = {{flex:0.5 ,flexDirection: 'column'}}>
            <TouchableOpacity style={{flex : 1 , backgroundColor: 'black'}} ><Text> {"num1 : "+this.state.num1} {"\n output : "+this.state.output} {"\n update : "+this.state.update} {"\n sign : "+this.state.sign} </Text></TouchableOpacity>
            <TouchableOpacity style={{flex : 1 , backgroundColor: 'black',alignItems: 'flex-end',justifyContent:'flex-end'}} ><Text style = {styles.fontZero}> {this.state.output} </Text></TouchableOpacity>
          </View>
          <View style = {{flex:1 ,flexDirection: 'column'}}>
            <View style = {{flex:1 ,flexDirection: 'row'}}>
              
              <View style={{flex:2, backgroundColor: 'black'}}><TouchableOpacity style={styles.btn} onPress = {()=>this.check("AC")}><Text style = {styles.fontB}>AC</Text></TouchableOpacity></View>
              <View style={{flex:2, backgroundColor: 'black'}}><TouchableOpacity style={styles.btn} ><Text style = {styles.fontB}>+/-</Text></TouchableOpacity></View>
              <View style={{flex:2, backgroundColor: 'black'}}><TouchableOpacity style={styles.btn} ><Text style = {styles.fontB}>%</Text></TouchableOpacity></View>
              <View style={{flex:2, backgroundColor: 'black'}}><TouchableOpacity style={styles.btnOrange} onPress = {()=>this.check("/")}><Text style = {styles.fontS}>÷</Text></TouchableOpacity></View>
            </View>
            
            <View style = {{flex:1 ,flexDirection: 'row'}}>
              <View style={{flex:2, backgroundColor: 'black'}}><TouchableOpacity style={styles.btn} onPress = {()=>this.check(7)}><Text style = {styles.fontS} >7</Text></TouchableOpacity></View>
              <View style={{flex:2, backgroundColor: 'black'}}><TouchableOpacity style={styles.btn} onPress = {()=>this.check(8)}><Text style = {styles.fontS }>8</Text></TouchableOpacity></View>
              <View style={{flex:2, backgroundColor: 'black'}}><TouchableOpacity style={styles.btn} onPress = {()=>this.check(9)}><Text style = {styles.fontS}>9</Text></TouchableOpacity></View>
              <View style={{flex:2, backgroundColor: 'black'}}><TouchableOpacity style={styles.btnOrange} onPress = {()=>this.check("*")}><Text style = {styles.fontS}>X</Text></TouchableOpacity></View>
            </View>

            <View style = {{flex:1 ,flexDirection: 'row'}}>
              <View style={{flex:2, backgroundColor: 'black'}}><TouchableOpacity style={styles.btn} onPress = {()=>this.check(4)}><Text style = {styles.fontS}>4</Text></TouchableOpacity></View>
              <View style={{flex:2, backgroundColor: 'black'}}><TouchableOpacity style={styles.btn} onPress = {()=>this.check(5)}><Text style = {styles.fontS}>5</Text></TouchableOpacity></View>
              <View style={{flex:2, backgroundColor: 'black'}}><TouchableOpacity style={styles.btn} onPress = {()=>this.check(6)}><Text style = {styles.fontS}>6</Text></TouchableOpacity></View>
              <View style={{flex:2, backgroundColor: 'black'}}><TouchableOpacity style={styles.btnOrange} onPress = {()=>this.check("-")}><Text style = {styles.fontS}>-</Text></TouchableOpacity></View>
            </View>

            <View style = {{flex:1 ,flexDirection: 'row'}}>
              <View style={{flex:2, backgroundColor: 'black'}}><TouchableOpacity style={styles.btn} onPress = {()=>this.check(1)}><Text style = {styles.fontS}>1</Text></TouchableOpacity></View>
              <View style={{flex:2, backgroundColor: 'black'}}><TouchableOpacity style={styles.btn} onPress = {()=>this.check(2)}><Text style = {styles.fontS}>2</Text></TouchableOpacity></View>
              <View style={{flex:2, backgroundColor: 'black'}}><TouchableOpacity style={styles.btn} onPress = {()=>this.check(3)}><Text style = {styles.fontS} >3</Text></TouchableOpacity></View>
              <View style={{flex:2, backgroundColor: 'black'}}><TouchableOpacity style={styles.btnOrange} onPress = {()=>this.check("+")}><Text style = {styles.fontS} >+</Text></TouchableOpacity></View>
            </View>

            <View style = {{flex:1 ,flexDirection: 'row'}}>
              <View style={{flex:4, backgroundColor: 'black'}}><TouchableOpacity style={styles.btnzero} onPress = {()=>this.check(0)}><Text style = {styles.fontS} >0</Text></TouchableOpacity></View>
              
              <View style={{flex:2, backgroundColor: 'black'}}><TouchableOpacity style={styles.btn } onPress = {()=>this.check(".")}><Text style = {styles.fontS}>.</Text></TouchableOpacity></View>
              <View style={{flex:2, backgroundColor: 'black'}}><TouchableOpacity style={styles.btnOrange}  onPress = {()=>this.check("=")}><Text style = {styles.fontS}>=</Text></TouchableOpacity></View>
            </View>
          </View>

      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  btn : {
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'gray' ,
    height : 60,
    width:60,
    margin:10,
    padding:10,
    borderRadius: 50
  },
  btnOrange : {
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'orange' ,
    height : 60,
    width:60,
    margin:10,
    padding:10,
    borderRadius: 50
  },
  fontS:{
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    alignItems: 'center',
    justifyContent:'center',
  },
  fontB:{
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
  },
  fontZero:{
    fontWeight: 'bold',
    fontSize: 60,
    color: 'white',
  },
  btnzero:{
    alignItems: 'center',
    backgroundColor:'gray' ,
    height : 60,
    width:130,
    margin:10,
    padding:10,
    borderRadius: 50
  }
});
