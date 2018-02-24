<template>
    
    <modal name="wplcDetail" height="480">
    
		<div class="mu-dialog mu-fix-foot" style="width:600px;height:480px;">
			<div class="mu-dialog-head">
				<span class="mu-title">{{param.svcNmsvcNmsvcNm}}</span>
				<button type="button" v-on:click="close()" class="mu-btn mu-btn-icon mu-btn-icon-only"><i class="mu-icon-img close"></i></button>
			</div>
			<div class="mu-dialog-body">
				<div class="mu-grid-top">
					<div class="num">Total : {{wplcDatas.length}}건</div>
				</div>
				<!-- grid -->
				<div class="mu-grid-scroll">
					<table class="mu-grid">
						<colgroup>
							<col>
							<col width="200">
						</colgroup>
						<thead>
							<tr>
								<th>사업자 명</th>
								<th>사업자 코드</th>
							</tr>
						</thead>
					</table>
					<!-- scroll -->
					<div class="mu-scroll-v">
						<table class="mu-grid">
							<colgroup>
								<col>
								<col width="200">
							</colgroup>
							<tbody>
								<tr v-for="wplc in wplcDatas">
									<td>{{wplc.wplcNm}}</td>
									<td class="tc">{{wplc.wplcCd}}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- //scroll -->
				</div>
				<!-- //grid -->
			</div>
			<div class="mu-dialog-foot mu-dialog-foot-1">
				<button type="button"  v-on:click="close()" class="mu-btn mu-btn-icon mu-btn-cancel">닫기</button>
			</div>
		</div>
    </modal>
</template>

</<script>

import common from '../../mixin/common/common';
import envService from '../../../service/EnvService.js'
import eventBus from '../../EventBus.vue';

// #############################################
// alert('WplcDetail');	// dynamic loading Test
// #############################################

export default {
    name:'WplcDetail'
    ,created:function(){
		eventBus.$on('pop-wplcDetail',this.popWplcDetail);
		this.log("WplcDetail-create");
	}
	,data:function(){
		return{
			wplcDatas:[]
		}
	}
	,props:{
		param:{
			type: Object
			,default: function () {
				return { svcCd: '', svcNm:'' }
			}
		} 
	}
	,mixins:[common]
	,mounted:function(){
		this.log("WplcDetail-mounted");
		this.popWplcDetail();
	}
	
    ,methods:{
        popWplcDetail:function(){

			var svcCd = this.param.svcCd;	
			this.$modal.show('wplcDetail');
			var vm = this;

			envService.service2Wplc(svcCd).then(function(response) {
				vm.wplcDatas = response.data.result;
            })
            .catch(function(e) {
                // this.errors.push(e);
			});
        }
		,close:function(){
			this.$modal.hide('wplcDetail');
		}
    }
}
</script>

<style>

</style>
