import React , {useState,useEffect} from "react";
import {View,FlatList,Text,Modal,  TextInput,StyleSheet } from 'react-native';
import { Container, Tab, Tabs } from 'native-base';

import { useObserver } from "mobx-react-lite";
import {COLORS, FONTS, SIZES} from "../constants"
import GeneralStore  from "../Stores/GeneralStore";
import { toJS } from "mobx";
import { Detail } from ".";
import CustomList from "../Components/CustomList";
const general =  GeneralStore;
var s = require('../style')
 const HomeScreen = ({navigation,route })=> {

  useEffect(() => {
    general.getStates()
    
  }, [])

      return useObserver(() =>
      <Container>
      <Tabs
             // style={{width: '70%'}}
              tabContainerStyle={{ elevation: 0 }}
              locked={true}
              scrollWithoutAnimation={true}
             tabBarUnderlineStyle={styles.underLine}>
        <Tab tabStyle={styles.Tab}  activeTabStyle={styles.activeTabs} textStyle={{color:'#000'}} 
        activeTextStyle={{color:COLORS.primary}}    heading={"List 1"}>
          <FlatList  data={general.states} renderItem={(item) =>  <CustomList  {...item} show={false}/>} />
        </Tab>   
        <Tab tabStyle={styles.Tab}  activeTabStyle={styles.activeTabs} textStyle={{color:'#000'}} 
        activeTextStyle={{color:COLORS.primary}}   heading={"List 2"}>
              <View style={{flex:1,backgroundColor:COLORS.colorBG}}>
         
          
         <View style={{padding:SIZES.padding,backgroundColor:COLORS.primary}}>
           <TextInput onChangeText={(text)=> general.filter(text)}
           placeholder="Search..."
           style={{backgroundColor:COLORS.white,paddingHorizontal:SIZES.padding2,
           borderRadius:25}}/>
         </View>
         <FlatList  data={general.statesHighlight} renderItem={(item) =>  <CustomList {...item} show={true} disabled={true}/>} />
       
       </View> 
        </Tab>
      </Tabs>
      <Modal
          animationType="slide"
          transparent={true}
          visible={general.modalVisible}
          onRequestClose={() => {
            general.modalVisible  = false
          }}
        >
          <View style={[s.center,{ flex:1,backgroundColor:COLORS.primary + "28"}]}>
              <Detail item={general.detailInfo}/>
          </View>
        </Modal>
    </Container>
 
      );
    }
  


    const styles = StyleSheet.create({
 
      Tabs: {
        borderWidth: 0,
        flex: 1
      },
      Tab: {
        backgroundColor: COLORS.colorBGsec,
        borderWidth:0,
      },
      activeTabs: {
        backgroundColor: COLORS.colorBGsec,
        borderWidth:0,
      },
      underLine: {
        borderWidth: 0.3,
        backgroundColor:COLORS.primary
      },
    });
  export default HomeScreen



