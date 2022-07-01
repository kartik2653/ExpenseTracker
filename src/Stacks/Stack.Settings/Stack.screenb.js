import react from "react";
import { useState } from "react";
import {View,Text,Alert,Image,TouchableOpacity} from "react-native";
import styled from 'styled-components/native';
import {Provider,Modal,Portal,TextInput,Button} from 'react-native-paper';
import { StationaryLimit,StationaryLimitUpdate,FootwearLimit,FootwearLimitUpdate,ClothingLimit,ClothingLimitUpdate,DailyUseLimit,DailyUseLimitUpdate } from "../../Contextjs/DataContext";
import { useContext } from "react";



const StyledLimit=styled(Text)`
background-color:#3B5999;
width:322px;
height:62px;
font-size:27px;
border-radius:17px;
color:white;
text-align:center;
margin-top:157px;
padding-top:13px;
font-weight:bold;
margin-left:57px
`;
 const StyledCustomLimit=styled(Text)`
 border-radius:17px;
 background-color:#4BB543;
 width:231px;
 height:56px;
 text-align:center;
 font-size:23px;
 color:white;
 padding-top:15px;
 margin-left:97px;
 margin-top:59px;
 `;
const StyledTick=styled(Image)`
width:137px;
height:129px;
margin-left:137px;
border-radius:277px;
margin-top:77px;
elevation:17;

`;



export const Screenb=({id})=>{

     //Context
 const SL=useContext(StationaryLimit);
 const SLU=useContext(StationaryLimitUpdate);
 const FL=useContext(FootwearLimit);
 const FLU=useContext(FootwearLimitUpdate);
// const{FL,FLU}=useContext(FootwearLimit);
 const CL=useContext(ClothingLimit);
 const CLU=useContext(ClothingLimitUpdate);
 const DL=useContext(DailyUseLimit);
 const DLU=useContext(DailyUseLimitUpdate);
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
   //Update values
   const updateCurrentLimit=(val)=>{
    switch(id){
        case 1:{
            FLU(val);
            break;
        }
        case 2:{
            SLU(val);
            break;
        }
        case 3:{
           DLU(val);
           break;
        }
        case 4:{
            CLU(val);
            break;
        }
        default:
            Alert.alert("Oops");
    }
   }

    //
    const [visible,setVisible]=useState(false);
    const [NewLimit,setNewLimit]=useState(0);
    const showModal=()=>setVisible(true);
    const hideModal=()=>{
        
        setVisible(false);
       // Alert.alert({id});
        // DataUpdateC(DC+5);
        console.log("id: "+id);
    };
    const containerStyle = {backgroundColor: 'white', padding: 20};
    return(
        <Provider>
            <Portal>
                <Modal visible={visible}  contentContainerStyle={containerStyle}>
                <TextInput  mode="outlined" label="New Limit"  onChangeText={(val)=>updateCurrentLimit(val)}/>
                <Button  mode="contained" onPress={hideModal} style={{width:157 ,height:45,marginTop:17,}}>
                 Set Limit
               </Button>
                </Modal>
            </Portal>
            <View>
            <StyledLimit>Current Limit :${getCurrentValue(id)}</StyledLimit>
            <TouchableOpacity onPress={showModal}>
                <StyledCustomLimit>Enter New Limit</StyledCustomLimit>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Alert.alert("Data is Updated")}>
            <StyledTick source={{uri:"https://cdn.pixabay.com/photo/2021/08/09/23/26/verified-6534505_960_720.png"}} style={{width:137,height:129}}/>
            </TouchableOpacity>
        </View>
        </Provider>
    );
}