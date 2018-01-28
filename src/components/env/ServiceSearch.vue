<<template>
	
	<div class="service-wrap">
		<div class="mu-grid-top">

			<!--<div class="mu-search-group">
				<div class="mu-search-item">
					<div class="mu-item-group">
						<label>서비스 명</label>
						<input type="text" class="mu-input" placeholder="서비스 명">
					</div>
					<div class="mu-item-group">
						<label>사업장 명</label>
						<input type="text" class="mu-input" placeholder="사업장 명">
					</div>
				</div>
				<div class="mu-search-btn">
					<button type="button" class="mu-btn mu-btn-icon"><i class="mu-icon-img search"></i>조회</button>
				</div>
			</div>-->

			
			<div class="mu-item-group mu-search-item">
				<div class="mu-title">서비스 명</div>
				<input type="text" v-on:keyup.13="serviceSearch" v-model="svcNm" class="mu-input" placeholder="서비스 명">
			</div>
			<div class="mu-item-group mu-search-item">
				<div class="mu-title">사업장 명</div>
				<input type="text" v-on:keyup.13="serviceSearch" v-modek="wplcNm" class="mu-input" placeholder="사업장 명">
			</div>
			<div class="mu-item-group">
				<button v-on:click="serviceSearch()" type="button" class="mu-btn mu-btn-icon"><i class="mu-icon-img search"></i>조회</button>
			</div>
			<div class="num">00건</div>
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
								<input type="checkbox" v-model="chkAll" v-on:change="checkAll()" id="ck_all" />
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
					<tr v-for="service in findedServices">
						<td class="tc">
							<div class="mu-checkbox">
								<input type="checkbox" v-model="service.checked" v-bind:id="service.svcCd" />
								<label v-bind:for="service.svcCd" v-on:click="popDetailWplcInfo"></label>
							</div>
						</td>
						<td>{{service.svcNm}}</td>
						<td class="tc">{{service.wplcCnt}}</td>
					</tr>
					</tbody>
				</table>
			</div>
			<!-- //scroll -->
		</div>
		<!-- //grid -->
		<!--
		<wplc-detail></wplc-detail>
		-->
		<component :is="popView"> </component>
		
	</div>

	
</template>

<script>

import _ from 'lodash';
import eventBus from '../EventBus.vue';
// import singleTest from '../SingleTest.vue';
import envService from '../../service/EnvService.js'
//import wplcDetail from './pop/WplcDetail.vue'
// import serviceApi from '../mixin/service/serviceApi';
import CONF from '../../config/Config.js'
import common from '../mixin/common/common';

 const popWplc = () => import("./pop/WplcDetail.vue");


export default {
	name:'ServiceSearch'
	,data:function(){
		return {
			svcNm:''				//서비스명 조건절
			,wplcNm:''				//사업자명
			,chkAll:false
			,findedServices:[]		//조회 결과 값
			,popView:''
		}
	}
	/*
	,components:{WplcDetail}
	*/
	,components:{
		'wplc-detail' : popWplc
	}
	,created:function(){
		eventBus.$on('service-tree-click',this.serviceGrp2Service);
		eventBus.$on('service-user-set',this.serviceUserSet);
		
	}
	,mixins:[common]
	,methods:{
		serviceSearch:function(){		// 서비스 선택
			var vm = this;
			//this.serviceFind(this.svcNm,this.wplcNm)
			envService.serviceFind(this.svcNm,this.wplcNm)
			.then(function(response) {
				vm.findedServices = response.data.result;
				//alert(response.data.result);
            })
            .catch(function(e) {
                // this.errors.push(e);
            });
		}
		,checkAll:function(){				// 전체선택
			/*
			var isAll = this.chkAll;
			this.findedServices.forEach(function(service){
				service.checked = isAll;
			});
			*/
			

			//popView = this.popWplc;
			//this.popWplc().then(popWplcDetail);

			this.popView = 'wplc-detail';
			/*
			this.popWplc.then(someModule => {
				this.popView = 'wplc-detail'
				eventBus.$emit('pop-wplcDetail');	
			});
			*/
			// eventBus.$emit('pop-wplcDetail');	

			
		}
		,serviceGrp2Service:function(svcCd){
			// alert(singleTest.singleTest);
			this.log("on:service" +svcCd);
			alert(svcCd);

			/*
			var vm = this;
			this.serviceFind(svcCd,'')
			.then(function(response) {
				vm.findedServices = response.data.result;
            })
            .catch(function(e) {
                //this.errors.push(e);
            });
			*/
		}
		,serviceUserSet:function(){
			/*
			let seletedItem = [];
			this.findedServices.forEach(function(service){
			});
			*/
			let seletedSevice = _.filter(this.findedServices,function(service){
					return service.checked;
			});

			if (seletedSevice.length === 0){
				
				this.alert('선택된 서비스가 없습니다.');
				return;
				/*
				this.$alert('선택된 서비스가 없습니다.', CONF.MAIN_TITLE, {
						confirmButtonText: CONF.DAILOG_OK
				});
				return;
				*/
			}
			eventBus.$emit('service-user-set-apply',seletedSevice);	
		}
		,popDetailWplcInfo:function(){

		}

	}
}
</script>

<<style>

</style>

