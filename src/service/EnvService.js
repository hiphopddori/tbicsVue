import CONF from '../config/Config.js'
import axios from 'axios'

export default {
    serviceFind:(svcNm,wplcNm) => { 
        
        let param = {svcNm:svcNm,wplcNm:wplcNm};
        //alert(this.CONF.HEADERS_JSON.headers.Content-type);
        //alert(CONF.HEADERS_JSON);
        return axios.post('envset/selectService.do',param,CONF.HEADERS_JSON);
        //return this.$http.post('envset/getVirtualCoin.do',param,CONF.HEADERS_JSON);
    }
    ,serviceGrpTree:()=>{
        let param = {incService:'N'};
        return axios.post('envset/selectServiceGroupTreeList.do',param,CONF.HEADERS_JSON);    
    }
}