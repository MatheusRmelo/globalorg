import React, { useEffect } from 'react';
import {
    Container 
} from './styles';

import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';

export default ()=>{
    const navigation = useNavigation();
    const token = useSelector(state=>state.user.token);
    useEffect(()=>{
        setTimeout(()=>{
            if(token){
                navigation.reset({
                    routes: [{name: 'MainTab'}]
                });
            }else{
                navigation.reset({
                    routes: [{name: 'MainTab'}]
                });
            }
        }, 1000);
    },[]);

    return(
        <Container>
            <Text>SPLASH SCREEN</Text>
        </Container>
    );
}