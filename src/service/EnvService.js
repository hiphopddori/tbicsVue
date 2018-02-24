import CONF from '../config/Config.js'
import axios from 'axios'

export default {
    serviceFind:(svcNm,wplcNm) => { 
        
        let param = {svcNm:svcNm,wplcNm:wplcNm};
        //alert(this.CONF.HEADERS_JSON.headers.Content-type);
        //alert(CONF.HEADERS_JSON);
        //return axios.post('envset/selectService.do',param,CONF.HEADERS_JSON);
        
        return new Promise(function(resolve, reject) {
            let ret = new Object();
            let data = new Object();    
            data["result"]= [{svcNm:"한전1",svcCd:11,wplcCnt:2},{svcNm:'한전2',svcCd:12,wplcCnt:3}];
            ret["data"] = data;    
            resolve(ret);
        });


        //return this.$http.post('envset/getVirtualCoin.do',param,CONF.HEADERS_JSON);
    }
    ,service2Wplc:(svcCd) => {
        let param = {svcCd:svcCd};
        //return axios.post('envset/selectWplc.do',param,CONF.HEADERS_JSON);

        return new Promise(function(resolve, reject) {
            let ret = new Object();
            let data = new Object();    
            data["result"]= [{wplcNm:"한전 사업장1",wplcCd:1101},{wplcNm:"한전 사업장2",wplcCd:1201}];
            ret["data"] = data;    
            resolve(ret);
        });
    }
    ,serviceGrpTree:()=>{
        let param = {incService:'N'};
        return axios.post('envset/selectServiceGroupTreeList.do',param,CONF.HEADERS_JSON);    
    }
}