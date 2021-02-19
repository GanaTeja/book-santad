import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Header,Icon } from "react-native-elements";
import db from '../config'
export default class Myheader  extends React.Component {
  render() {
    return (
      <View>
    <Header 
    leftComponent={<Icon name='bars' type='font-awesome' onPress={()=>this.props.navigation.toggleDrawer()}
    ></Icon>}
    centerComponent={{text:this.props.title}}
    rightComponent={<Icon name='bell' type='font-awesome'
     onPress={()=>{this.props.navigation.navigate('notifications')}}></Icon>}>

    </Header>
      </View>
    );
  }
}
