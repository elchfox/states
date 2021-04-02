import { makeAutoObservable, toJS} from "mobx"
import State from "../modules/state";


class GeneralStore {
    states = []
    detail = [];
    detailInfo = []
    statesHighlight = []
    totalPopulations = 0
    show = null
    countClick = 0;
    modalVisible = false
    constructor() {
        makeAutoObservable(this)
        
    }

    async getStates(){
          let res  = await  State.getStates()
            this.states = this.statesHighlight   = res.data
            
    }
    async filter(text){
        console.log(text)
       let regex =  new RegExp(text)
   
      if(text.length > 0){
        let res =   toJS(this.statesHighlight).filter((item)=>regex.test(item.state))
        this.statesHighlight  = res


      }else{
          this.getStates()
      }
    }
    async getDetail(url){
          let res  = await  State.getDetail(url)
            this.totalPopulations = res.data.reduce((a,b)=> a += b.population ,0)
            this.detail  = res.data
    }
 
}


export default  new GeneralStore();