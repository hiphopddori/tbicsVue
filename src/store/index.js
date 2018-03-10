import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import * as mutationType from './mutation-types'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
		userSetServices:[]		    //조회 결과 값
    }
    ,mutations:{
       
        [mutationType.ADD_USER_SERVICE_MUTATION](state,payLoad){
            // var vm = this;
            /*
            let addService = _.filter(payLoad,function(selSvc){
                let addable = true;
                _.every(state.userSetServices,function(selectedSvd){
                     if (selectedSvd.svcCd === selSvc.svcCd){
                        addable = false;
                        //break; 왠안될까?
                        return true;
                     }else{
                         return false;
                     }     
                }); 
                return addable;
            });
            Array.prototype.push.apply(state.userSetServices,addService);
            */
            
            _.every(payLoad,function(selSvc){
                let addable = true;
                let exit = false;
                _.every(state.userSetServices,function(selectedSvd){
                    if (selectedSvd.svcCd === selSvc.svcCd){
                       addable = false;
                       //break; 왠안될까?
                       exit = true;        // 의미 없네 return 해도 계속 반복 됨 ㅠㅠ
                    }
                    return !exit;
               }); 

               if (addable){
                    state.userSetServices.push(selSvc);     
               }
               return true;
            });
            
            
            // Array.prototype.push.apply(state.userSetServices,[{svcNm:"한전1",svcCd:11,wplcCnt:2},{svcNm:'한전2',svcCd:12,wplcCnt:3}]);
        }
        ,[mutationType.DEL_USER_SERVICE_MUTATUIN](state,payLoad){
           _.remove(state.userSetServices,function(selectedSvc){
                  let del = false;
                  _.every(payLoad,function(deleteInfo){
                        if (selectedSvc.svcCd === deleteInfo.svcCd){
                            del = true;    
                        }
                        return !del;
                  })
                  return del;
            });
            // 추후 다른방법 검토
            var deep = _.cloneDeep(state.userSetServices);
            state.userSetServices = deep;

            /* splices는 되지만 실제 상용에서 사용하기 애매함 
             _.every(payLoad,function(deleteInfo){
                let idx = 0;
                let match = false;
                
                _.every(state.userSetServices,function(selectedSvc){
                    if (selectedSvc.svcCd === deleteInfo.svcCd){
                        match = true;    
                    }
                    idx++;
                    
                    state.userSetServices.splice(idx,1);    
                    return !match;
                })
                    
            });             
            */
            
            
            
        }
    }
})


