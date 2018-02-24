
/*
import CONF from '../../../config/Config.js'


export default {
    created : function(){
        console.log("ServiceService");
    }
    , methods :{
        serviceFind:function(svcNm,wplcNm){
            
            let param = {svcNm:svcNm,wplcNm:wplcNm};
            //alert(this.CONF.HEADERS_JSON.headers.Content-type);
            return this.$http.post('envset/selectService.do',param,CONF.HEADERS_JSON);
            //return this.$http.post('envset/getVirtualCoin.do',param,CONF.HEADERS_JSON);
        }
        ,serviceGrpTree:function(){
            
            let param = {incService:'N'};
            return this.$http.post('envset/selectServiceGroupTreeList.do',param,CONF.HEADERS_JSON);    
        }
        ,testCall:function(){
            alert("testCall");
            //return this.$http.post('https://api.bithumb.com/public/ticker/BTS',param,CONF.HEADERS_JSON);
        }
    }
}
*/