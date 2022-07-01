import react from "react";
import{useState,useContext} from "react";
import ContextDataProvider, { useData } from '../Contextjs/DataContext';
import { ContextData,DataUpdateContext } from "../Contextjs/DataContext";

 function ManagingLimits(){
    const OverallLimit = useData();
    const setNewLimit  = useContext(DataUpdateContext);
    return (
        <ContextDataProvider>
             
        </ContextDataProvider>
    );
}

