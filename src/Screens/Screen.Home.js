import React ,{useContext}from 'react';
import {Text,View,StatusBar} from 'react-native';
import styled from 'styled-components/native';
import { HorizontalFlatList } from '../features/HorizontalFlatList';
import { ClothingLimit, DailyUseLimit, FootwearLimit, StationaryLimit } from '../Contextjs/DataContext';





const StyledHeader=styled(Text)`
   font-size:37px;
   font-weight:bold
   padding:13px;
   elevation:15;
   text-shadow: 10px 10px;
`;

export const Home=({navigation})=>{
    const SL=useContext(StationaryLimit);
    const CL=useContext(ClothingLimit);
    const FL=useContext(FootwearLimit);
    const DL=useContext(DailyUseLimit);
    const TotalLimit=parseInt(SL)+parseInt(CL)+parseInt(FL)+parseInt(DL);
    return(
        <View style={{flex:1,justifyContent:'space-between',marginTop:StatusBar.currentHeight}}>
        <View style={{flexDirection:'column'}}>
           <StyledHeader>Hi Kartik</StyledHeader>
           <View style={{alignItems:'flex-end',marginEnd:5,marginBottom:13}}>
                 <Text style={{borderColor:'#4385F5',borderWidth:1.5,padding:15,fontSize:29,fontWeight:'bold',borderRadius:15}} >April Limit : ${parseInt(SL)+parseInt(CL)+parseInt(FL)+parseInt(DL)}</Text>
           </View>
           <View style={{alignItems:'flex-end',marginEnd:5,}}>
               <Text style={{borderColor:'#4385F5',borderWidth:1,padding:15,fontSize:29,borderRadius:15}}>Credit Left: ${parseInt(SL)+parseInt(CL)+parseInt(FL)+parseInt(DL)-198}</Text>
           </View>
        </View>

        <View style={{marginBottom:177}}>
            
            <HorizontalFlatList navigation={navigation}/>
        </View>
        </View>
    );
}