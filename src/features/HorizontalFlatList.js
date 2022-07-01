import React from 'react';
import { Cards } from '../assets/Cards';
import { View ,FlatList,TouchableOpacity} from 'react-native';

const DATA=[{
uri:"https://cdn-images-1.medium.com/max/2600/1*g2rWkmY0VEjFLNmDGwZakg.jpeg",
content:"Clothes",
id:4},
{
  uri:"https://th.bing.com/th/id/R.f571af30929e1051ef10f0b9405d89b8?rik=B%2b4EUIWaqV8DMw&riu=http%3a%2f%2fhypebeast.com%2fimage%2f2015%2f06%2freebok-2015-spring-summer-footwear-0.jpg&ehk=S9%2f4veVP20dMtYIdR%2fcw0rVG8G%2fA6gSB1i8aUMvgM94%3d&risl=&pid=ImgRaw&r=0",
          content:"Footwear",
          id:1
},
{
  uri:"https://3.bp.blogspot.com/-mENGDwXRAVw/V1aWNh0IDXI/AAAAAAAAcA4/qx7-apA21jMcuudoBbRQHOJbDWWrtMMvgCKgB/s1600/IMG_7539.JPG",
  content:"Stationary",
  id:2
},
{
  uri:"https://i.ebayimg.com/images/g/WpsAAOSwQ6ZfyIrl/s-l400.jpg",
          content:"Daily Use",
          id:3
}];

const GetCard=({item})=>{
  return (<Cards uri={item.uri} content={item.content} id={item.id}/>);
}
export const HorizontalFlatList=({navigation})=>{
    return(
        
        <FlatList
        data={DATA}
        renderItem={({item})=>{return(<TouchableOpacity  onPress={()=>(navigation.navigate('Details',{uri:item.uri, content:item.content,id:item.id }))}><Cards uri={item.uri} content={item.content} id={item.id}/></TouchableOpacity>)}}
        keyExtractor={item => item.id}
        horizontal={true}
      />

        
    );
}