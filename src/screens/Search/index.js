import React, { useState } from 'react';
import {
    Container,
    InputArea,
    Input,
    SearchArea
} from './styles';

import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Jobs from '../../components/Jobs';

export default () => {
    const [jobs, setJobs] = useState([
        {id:123, ong: 'CPB', vaga: 'Desenvolvedor web', avatar:'https://qualytestensaios.com/app/images/user_login.png'},
        {id:123, ong: 'GLOBAL ORG', vaga: 'Desenvolvedor web', avatar:'https://qualytestensaios.com/app/images/user_login.png'},
        {id:123, ong: 'Pais Afetivos', vaga: 'UX design', avatar:'https://qualytestensaios.com/app/images/user_login.png'},
    ]);
    const [search, setSearch] = useState('');

    onSearch = (e) =>{
        setSearch(e);

        let newList = [...volunteers];
        let newVolunteers = [];
        for(let i in newList){
            let area = newList[i].area.filter(item => item === e);
            if(!area){
                newList = newList.filter((it, key)=>key!==i);
            }
        }
        console.log(newList);
        if(newList){
            setVolunteers(newList);
        }
    }

    return(
        <Container>
            <InputArea>
                <Icon name="filter" size={24} color="#CCC" />
                <Input value={search} onChangeText={e=>onSearch(e)} placeholder="Pesquisa..." />
            </InputArea>
            <SearchArea showsVerticalScrollIndicator={false} >
                {
                    jobs.map((item,key)=>(
                        <Jobs data={item} key={key} />
                    ))
                }
            </SearchArea>
            
            
        </Container>
    )
}