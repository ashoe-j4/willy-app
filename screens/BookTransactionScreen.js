import React from 'react';
import { Text, View, Button, TouchableOpacity} from 'react-native';

export default class TransactionScreen extends React.Component {
    render() {
      return (
        <View style={ styles.container }/>
          <Text style={styles.displayText}>Issue or Return</Text>
          <TouchableOpacity>
            <Text> Scan QR Code Here! </Text>
          </TouchableOpacity>
      );
    }
  }
 const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
    displayText
 })