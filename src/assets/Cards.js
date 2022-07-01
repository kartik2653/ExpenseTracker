import React from 'react';
import {Card,Title,Paragraph} from 'react-native-paper';


export const Cards=(props)=>{
    return(
       
            <Card style={{margin:5,width:135,elevation:15}}>
            <Card.Cover source={{ uri:props.uri} } />
            <Card.Content>
            <Paragraph>{props.content}</Paragraph>
            </Card.Content>
            </Card>
       
    );
}