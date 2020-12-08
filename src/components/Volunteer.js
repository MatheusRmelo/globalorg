import React from 'react';
import styled from 'styled-components/native';

const VolunteerArea = styled.TouchableOpacity`
    background-color:white;
    border-width:2px;
    border-color: #999;
    border-radius: 16px;
    height:80px;
    padding:16px;
    flex-direction:row;
    margin:8px 0px;
    align-items:center;
`;
const Avatar = styled.Image`
    width: 40px;
    height:40px;
    border-radius:20px;
`;
const InfoArea = styled.View`
    flex:1;
    margin:0px 16px;
`;
const Name = styled.Text`
    font-size:18px;
    font-weight: bold;
    color: #CCC;
`;
const Area = styled.Text`
    font-size:12px;
    color: black;
`;
const AreaItem = styled.Text`
    font-size:16px;
    margin:8px;
`;


export default ({data}) => {
    return(
        <VolunteerArea onPress={()=>{}}>
            <Avatar source={{uri: data.avatar}} />
            <InfoArea>
                <Name>{data.name}</Name>
                <Area>
                    {data.area.map((item, key)=>(
                        <AreaItem key={key}>{item}{data.area.length === key+1 ? null:', '}</AreaItem>
                    ))}
                </Area>
            </InfoArea>
        </VolunteerArea>
    );
}