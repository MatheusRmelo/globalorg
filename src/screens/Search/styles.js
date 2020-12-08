import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
`;
export const InputArea = styled.View`
    border-width:3px;
    border-color:#CCC;
    height:50px;
    width:90%;
    padding-left:8px;
    margin:16px;
    border-radius:16px;
    flex-direction:row;
    align-items:center;
`;
export const Input = styled.TextInput`
    flex:1;
    margin:0px 8px;
`;
export const SearchArea = styled.ScrollView`
    margin:24px;
    flex:1;
`;