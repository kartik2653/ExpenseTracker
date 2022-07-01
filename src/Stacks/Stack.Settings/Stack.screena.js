import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

const StyledText=styled(Text)`
width:280px;
height:100px;
background-color:#4BB543
text-align:center;
color:white;
padding-top:29px;
font-weight:bold;
font-size:27px;
border-radius:12px;
margin-top:157px;
margin-left:77px
`;

const StyledCard=styled(Card)`
width:128px;
margin-top:7px;
border-radius:17px;
elevation:13;
`;
export const Screena=({navigation})=>{
    function NavigateIt(){
        console.log("hii");
        navigation.navigate('ScreenB'),{};
        console.log("hii56");
    }
    return(
        <View>
            <StyledText>Change Limits</StyledText>
            <View style={{display:'flex',flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around",marginTop:17}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('ScreenB', {
                                                    id: 1,
                                                });}}>
                <StyledCard>
                    <Card.Cover source={{uri:"https://th.bing.com/th/id/R.f571af30929e1051ef10f0b9405d89b8?rik=B%2b4EUIWaqV8DMw&riu=http%3a%2f%2fhypebeast.com%2fimage%2f2015%2f06%2freebok-2015-spring-summer-footwear-0.jpg&ehk=S9%2f4veVP20dMtYIdR%2fcw0rVG8G%2fA6gSB1i8aUMvgM94%3d&risl=&pid=ImgRaw&r=0"}}/>
                </StyledCard>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('ScreenB',{id:2})}}>
                <StyledCard>
                    <Card.Cover source={{uri:"https://3.bp.blogspot.com/-mENGDwXRAVw/V1aWNh0IDXI/AAAAAAAAcA4/qx7-apA21jMcuudoBbRQHOJbDWWrtMMvgCKgB/s1600/IMG_7539.JPG"}}/>
                </StyledCard>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{(navigation.navigate('ScreenB',{id:3}))}}>
                <StyledCard>
                    <Card.Cover source={{uri:"https://i.ebayimg.com/images/g/WpsAAOSwQ6ZfyIrl/s-l400.jpg"}}/>
                </StyledCard>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{(navigation.navigate('ScreenB',{id:4}))}}>
                <StyledCard>
                    <Card.Cover source={{uri:"https://cdn-images-1.medium.com/max/2600/1*g2rWkmY0VEjFLNmDGwZakg.jpeg"}}/>
                </StyledCard>
                </TouchableOpacity>
            </View>
        </View>
    );
}
