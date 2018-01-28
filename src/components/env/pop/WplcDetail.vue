<template>
    
    <modal name="hello-world">
    
    <div class="mu-dialog mu-fix-foot" style="width:600px;height:480px;">
		<div class="mu-dialog-head">
			<span class="mu-title">한국전력공사</span>
			<button type="button" v-on:click="close()" class="mu-btn mu-btn-icon mu-btn-icon-only"><i class="mu-icon-img close"></i></button>
		</div>
		<div class="mu-dialog-body">
			<div class="mu-grid-top">
				<div class="num">Total : 00</div>
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
							<tr>
								<td>한국전력공사</td>
								<td class="tc">111-34-12345</td>
							</tr>
							<tr>
								<td>한국전력공사</td>
								<td class="tc">111-34-12345</td>
							</tr>
							<tr>
								<td>한국전력공사</td>
								<td class="tc">111-34-12345</td>
							</tr>
							<tr>
								<td>한국전력공사</td>
								<td class="tc">111-34-12345</td>
							</tr>
							<tr>
								<td>한국전력공사</td>
								<td class="tc">111-34-12345</td>
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
import eventBus from '../../EventBus.vue';

export default {
    name:'WplcDetail'
    ,created:function(){
		eventBus.$on('pop-wplcDetail',this.popWplcDetail);
	}
	,mixins:[common]
	,created:function(){
		this.log("WplcDetail-create");
	}
	,mounted:function(){
		this.log("WplcDetail-mounted");
		this.popWplcDetail();
	}
    ,methods:{
        popWplcDetail:function(){
            /*
            this.$http.get('static/pop/wplcDetail.html')
                      .then(response => {
                          alert(response.data);
                      }).catch(e => {
                          this.log("error");
                      })
            */        
             this.$modal.show('hello-world');
        }
		,close:function(){
			this.$modal.hide('hello-world');
		}


    }        

}
</script>

<style>

</style>
