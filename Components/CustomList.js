import { useObserver } from "mobx-react-lite";
import React from "react";
import {View,Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { COLORS, SIZES } from "../constants";
import GeneralStore  from "../Stores/GeneralStore";
import   DoubleClick  from "react-native-double-tap";


var s = require('../style')

var  timer   

const CustomList = ({item,index ,show,disabled}) => {


    const   onPressItem = (item)=>{
        // timer = setTimeout(() => {
           
        //   },2); 
        // GeneralStore.countClick += 1
      
        //     if(GeneralStore.countClick >= 2){
        //       clearTimeout(timer);
        //       GeneralStore.show  = GeneralStore.show ===  item.state ? null : item.state

        //       GeneralStore.countClick = 0
        //     }

        GeneralStore.countClick = 0;
        GeneralStore.detailInfo =  item
        GeneralStore.modalVisible = true;
       }


    return useObserver(() =>
    <TouchableOpacity
        
        onPress={()=> onPressItem(item) }
        disabled={disabled}
        style={{backgroundColor:COLORS.secondary,  
        borderBottomColor:COLORS.primary,
        borderWidth:0.5,
        paddingHorizontal:SIZES.padding2,paddingVertical:SIZES.padding}}>
          <Text>{item.state}</Text>
          {  show || GeneralStore.show === item.state ?
          <View style={[s.row,s.centerRow]}>
               <Text style={[{ fontSize:12, color:COLORS.primary}]}>{item.population}</Text>
               <View style={{width:4,height:4,
                   backgroundColor:COLORS.primary,borderRadius:2,marginHorizontal:5}}></View>
              <Text style={[{ fontSize:12, color:COLORS.primary}]}>{item.counties}</Text>
          </View>: null }
        </TouchableOpacity>
    )


}
CustomList.defaultProps = {
    show:false,
    disabled: false
  }
  
export default CustomList;