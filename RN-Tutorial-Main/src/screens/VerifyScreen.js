import React, {useState, useEffect} from 'react';
import{View, Text, Button} from 'react-native';

const VerifyScreen = () => {
    const [status, setStatus] = useState('');

    /*useEffect(() => {
      setTimeout(() => {
        setStatus('timeout is called');
      }, 5000);
    }, []);*/

    return (
      <View>
        <Text testID="myText">{status}</Text>
        <Button
          testID="myButton" 
          onPress={() => setStatus('button pressed')} 
          title="PressMe" 
        />  
      </View>
    );
};

export default VerifyScreen;