<<template>
  
    <div class="service-wrap">
        <div class="mu-grid-top">
            <div class="mu-title"><i class="mu-icon-img folder"></i>그룹명 : AMI (지능형원격검침)</div>
            <div class="mu-item-group fr">
                <button type="button" class="mu-btn mu-btn-icon"><i class="mu-icon-img trash"></i>삭제</button>
            </div>
            <div class="num">Total : 00건</div>
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
                        <tr v-for="service in userSetServices">
                            <td class="tc">
                                <div class="mu-checkbox">
                                    <input type="checkbox" v-bind:id="service.svcCd" />
                                    <label v-bind:for="service.svcCd"></label>
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
import serviceApi from '../mixin/service/serviceApi';

export default {
	name:'ServiceWplc'
	,data:function(){
		return {
			svcNm:''				//서비스명 조건절
			,wplcNm:''				//사업자명
			,userSetServices:{}		//조회 결과 값
		}
    }
    ,created:function(){
        eventBus.$on('service-user-set-apply',this.serviceUserSetAppy);
    }
    ,mixins:[serviceApi]
    ,methods:{
        serviceUserSetAppy:function(selectedService){
            this.userSetServices = selectedService;
        }            
    }
}
</script>

<<style>
</style>

