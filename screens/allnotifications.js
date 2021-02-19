import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import  MyHeader  from "../components/myheader";

export default class  AllNotifications extends React.Component {
  render() {
    return (
      <View>
       <MyHeader title='all notifications'  navigation='this.props.navigation' ></MyHeader>
      </View>
    );
  }
}
