import react from "react";
import {Text,View,Image,StyleSheet} from 'react-native';
import styled from "styled-components/native";
import { ProgressBar } from "react-native-paper";
import { useContext } from "react";
import { ClothingLimit, ContextData,ContextDataProvider, DailyUseLimit, FootwearLimit, StationaryLimit } from '../Contextjs/DataContext';

const StyledView=styled(View)`
flex:1;
`;
const StyledText=styled(Text)`
 font-size:41px;
 margin-top:145px;
 text-align:right;
 margin-right:49px;
 color:black;
 font-weight:bold
 `;

 const StyledImage=styled(Image)`
  margin-top:17px
  margin-left: auto;
  margin-right: auto;
  width: 347px;
  height:379px;
  border-radius:11px;
  
 `;

export const Details=({route,navigation})=>{

    const{uri,content,id}=route.params;
    const SL=useContext(StationaryLimit);
    const CL=useContext(ClothingLimit);
    const FL=useContext(FootwearLimit);
    const DL=useContext(DailyUseLimit);
    const getCurrentValue=(id)=>
{
   switch(id){
       case 1:{
           return FL;
       }
       case 2:{
           return SL;
       }
       case 3:{
           return DL;
       }
       case 4:{
           return CL;
       }
       default:
           Alert.alert("Oops");
   }
}
    console.log(uri);
    return(
        <StyledView >
             <StyledText>{content}</StyledText>
             <StyledImage
               source={{uri:uri}}
            />

            <ProgressBar progress={0.55} color="#13C1FF"  style={{margin:41 ,height:9, backgroundColor:"#E0E3EA"}}/>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginLeft:41,marginRight:41}}>
                 <Text style={{fontSize:25,fontWeight:"bold"}}>April</Text>
                 <Text style={{fontSize:25,fontWeight:"bold"}}>$ {getCurrentValue(id)}</Text>
            </View>
        </StyledView>
    );
}


const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });