<<template>
  
    <div class="service-wrap">
        <div class="mu-grid-top">
            <div class="mu-title"><i class="mu-icon-img folder"></i>그룹명 : AMI (지능형원격검침)</div>
            <div class="mu-item-group fr">
                <button type="button" v-on:click="deleteUserService" class="mu-btn mu-btn-icon"><i class="mu-icon-img trash"></i>삭제</button>
            </div>
            <div class="num">Total : {{this.$store.state.userSetServices.length}}건</div>
        </div>
        <!-- grid -->
        <div class="mu-grid-scroll">
            <table class="mu-grid">
                <colgroup>
                    <col width="80">
                    <col>
                    <col width="180">
                </colgroup>
                <thead>
                    <tr>
                        <th>
                            <div class="mu-checkbox">
                                <input type="checkbox" id="ck_all" />
                                <label for="ck_all"></label>
                            </div>
                        </th>
                        <th>서비스 명</th>
                        <th>관련 사업장 수</th>
                    </tr>
                </thead>
            </table>
            <!-- scroll -->
            <div class="mu-scroll-v">
                <table class="mu-grid">
                    <colgroup>
                        <col width="80">
                        <col>
                        <col width="180">
                    </colgroup>
                    <tbody>
                        <tr v-for="service in this.$store.state.userSetServices">
                            <td class="tc">
                                <div class="mu-checkbox">
                                    <input type="checkbox" v-model="service.checked" v-bind:id="'wplc' + service.svcCd" />
                                    <label v-bind:for="'wplc' + service.svcCd"></label>
                                </div>
                            </td>
                            <td><span>{{service.svcNm}}</span></td>
                            <td class="tc">{{service.wplcCnt}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- //scroll -->
        </div>
        <!-- //grid -->
    </div>
      
</template>

<script>

import eventBus from '../EventBus.vue';
import * as mutationType from '../../store/mutation-types'
import common from '../mixin/common/common';
// import serviceApi from '../mixin/service/serviceApi';

export default {
	name:'ServiceWplc'
	,data:function(){
		return {
			svcNm:''				//서비스명 조건절
			,wplcNm:''				//사업자명
			//,userSetServices:{}	//조회 결과 값 20180213 store에서 관리 
		}
    }
    ,created:function(){
        //eventBus.$on('service-user-set-apply',this.serviceUserSetAppy);
    }
    ,mixins:[common]
    ,methods:{
        serviceUserSetAppy:function(selectedService){
            //this.userSetServices = selectedService;
        }   
        ,deleteUserService:function(){
            
            let seletedSevice = _.filter(this.$store.state.userSetServices,function(service){
					return service.checked;
			});

			if (seletedSevice.length === 0){
				
				this.alert('선택된 서비스가 없습니다.');
				return;
			}
			
            this.$store.commit(mutationType.DEL_USER_SERVICE_MUTATUIN,seletedSevice);
        }         
    }
}
</script>

<<style>
</style>

