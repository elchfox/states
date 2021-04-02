import React , {useState,useEffect} from "react";
import {View,FlatList,Text,StyleSheet} from 'react-native';

import { useObserver } from "mobx-react-lite";
import Icon from 'react-native-vector-icons/FontAwesome5';


import {COLORS, FONTS, SIZES} from "../constants"
import GeneralStore  from "../Stores/GeneralStore";
import { toJS } from "mobx";
const general =  GeneralStore;
var s = require('../style')

 const DetailScreen = (props)=> {

  const [detail, setDetail] = useState([])

  useEffect(() => {
    general.getDetail(props.item.detail)
    setDetail(props.item)
  }, [general.modalVisible])

  const renderState =({item,index}) =>{
    return (
      <View 
      style={{backgroundColor:COLORS.secondary,  
      borderBottomColor:COLORS.primary,
      borderBottomWidth:0.5,
      paddingHorizontal:SIZES.padding,paddingVertical:SIZES.padding2}}>
        <Text style={[FONTS.body3]}>{item.county}</Text>
        <Text style={[FONTS.body4]}>{item.population}</Text>
      </View>
    )
  }

      return useObserver(() =>
     <View  style={styles.wapper}>
                  <View style={[{height:120,  backgroundColor:"#4527a0",padding:SIZES.padding}]}> 
                      <Text style={[FONTS.h1,{color:COLORS.white}]}>{detail.state}</Text>
                        <View style={[s.row,s.centerRow]}>
                          <Text style={[FONTS.body3,{color:COLORS.white}]}>{detail.population}</Text>
                          <View style={{width:4,height:4,
                            backgroundColor:COLORS.white,borderRadius:2,marginHorizontal:5}}></View>
                          <Text style={[FONTS.body3,{color:COLORS.white}]}>{detail.counties}</Text>
                        </View>
                        <Text style={{fontWeight:'bold',  color:detail.population  === general.totalPopulations ? '#c1ff79' : 'red'}}>{general.totalPopulations}</Text>

                  </View>
          <FlatList style={{backgroundColor:COLORS.colorBGsec}} 
               data={general.detail}
         renderItem={renderState}
         keyExtractor={(item, index) => index.toString()}
      />
        </View> 
      );
    }
  


  export default DetailScreen



  const styles = StyleSheet.create({
    wapper: {
      flex:1, 
      overflow:'hidden', 
      backgroundColor:COLORS.colorBG,
      width:SIZES.width - 80 ,
      maxHeight:SIZES.height - 146 ,
      borderRadius:20
  }
  })