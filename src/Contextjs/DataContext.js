import React,{useEffect,useState,createContext,useMemo} from "react";
import { useContext } from "react/cjs/react.production.min";

// Footwear Context
export const FootwearLimit=createContext();
export const FootwearLimitUpdate=createContext();
//Clothing Context
export const ClothingLimit=createContext();
export const ClothingLimitUpdate=createContext();
// Stationary Context
export const StationaryLimit=createContext();
export const StationaryLimitUpdate=createContext();
//Daily Use Context
export const DailyUseLimit=createContext();
export const DailyUseLimitUpdate=createContext();


export const useData = ()=>{
    return useContext(ContextData);
}

export const ContextDataProvider=({children})=>{

    
    const[FL,setFootwearLimit]=useState(0);
    const[SL,setStationaryLimit]=useState(0);
    const[DL,setDailyUseLimit]=useState(0);
    const[CL,setClothingLimit]=useState(0);
   
    function updateFootwearLimit(factor)
    {
        setFootwearLimit(factor);
    }

    function updateStationaryLimit(factor){
        setStationaryLimit(factor);
    }
    function updateClothingLimit(factor){
        setClothingLimit(factor);
    }
    function updateDailyUseLimit(factor){
        setDailyUseLimit(factor);
    }

    return <StationaryLimit.Provider value={SL}>
          <StationaryLimitUpdate.Provider value={updateStationaryLimit}>
              <FootwearLimit.Provider value={FL}>
                  <FootwearLimitUpdate.Provider value={updateFootwearLimit}>
                      <ClothingLimit.Provider value={CL}>
                          <ClothingLimitUpdate.Provider value={updateClothingLimit}>
                              <DailyUseLimit.Provider value={DL}>
                                  <DailyUseLimitUpdate.Provider value={updateDailyUseLimit}>
            {children}
                                  </DailyUseLimitUpdate.Provider>
                               </DailyUseLimit.Provider>
                          </ClothingLimitUpdate.Provider>
                     </ClothingLimit.Provider>
                  </FootwearLimitUpdate.Provider>
            </FootwearLimit.Provider>
          </StationaryLimitUpdate.Provider>
        </StationaryLimit.Provider>
}
