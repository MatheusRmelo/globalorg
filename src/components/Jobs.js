import React from 'react';
import styled from 'styled-components/native';

const JobArea = styled.TouchableOpacity`
    background-color:white;
    border-width:2px;
    border-color: #999;
    border-radius: 16px;
    height:148px;
    margin:16px 0px;
    padding:24px 32px;
`;

const InfoArea = styled.View`
    flex:1;
`;
const Small = styled.Text`
    font-size:12px;
`;
const Heading2 = styled.Text`
    font-size:12px;
    font-weight:bold;
`;
const ButtonMoreDetails = styled.TouchableOpacity`
    justify-content:center;
    align-items:center;
    background-color:#564658;
    border-radius:16px;
    width:100%;
    height:32px;
    margin:16px 0px;
`;
const ButtonMoreDetailsText = styled.Text`
    font-size:12px;
`;
export default ({data}) => {
    return(
        <JobArea onPress={()=>{}}>
            <Heading2>{data.vaga}|{data.ong}</Heading2>
            
            <Small>Voluntáriado</Small>
            <Small>Qualquer lugar do mundo</Small>
            <ButtonMoreDetails>
                <ButtonMoreDetailsText>SAIBA MAIS</ButtonMoreDetailsText>
            </ButtonMoreDetails>
            
        </JobArea>
    );
}