import React, {useState, useEffect} from 'react';
import{View, Text} from 'react-native';

const EventScreen = () => {
    const [status, setStatus] = useState('timeout is called');

    useEffect(() => {
      setTimeout(() => {
        setStatus('timeout is called');
      }, 1000);
    }, []);

    return (
      <View>
        <Text testID="myText">{status}</Text>
      </View>
    );
};

export default EventScreen;