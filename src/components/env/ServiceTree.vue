<<template>
   
    <div class="mu-left-container service-group">
        <div class="mu-vgroup">
            <h3>서비스 그룹<button type="button" class="mu-btn mu-btn-icon mu-btn-icon-only"><i class="mu-icon-img refresh"></i></button></h3>
            <div class="date-wrap">
                <button type="button" class="mu-btn mu-btn-icon"><i class="mu-icon-img group-add"></i>그룹 추가</button>
                <button type="button" class="mu-btn mu-btn-icon"><i class="mu-icon-img group-edit"></i>그룹 수정</button>
                <button type="button" class="mu-btn mu-btn-icon"><i class="mu-icon-img group-delete"></i>그룹 삭제</button>
            </div>
        </div>
        <!--
        <cnc-vue-jstree :data="treeData" show-checkbox multiple allow-batch whole-row draggable data-is-flat 
            text-field-name="title" id-field-name="id" order-field-name="order" parent-field-name="parent" >
        </cnc-vue-jstree>
        -->
        <v-jstree :data="treeData" @item-click="itemClick"></v-jstree>

    </div>

</template>

<script>

// import cncVueTree from 'cnc-vue-jstree'
import eventBus from '../EventBus.vue';
// import singleTest from '../SingleTest.vue';
import VJstree from 'vue-jstree'
import  _ from 'lodash'
import serviceApi from '../mixin/service/serviceApi';
import common from '../mixin/common/common';

export default {
	name:'ServiceTree'
	,data:function(){
		return {
            //treeData:[{'id':'1','order':'A','title':'jsTest'},{'id':'2','parent':'1','order':'B','title':'jsTest2'}]
            treeData:[{"text":"Test","children":[{"text":"child1","selected":true}]}]		    
		}
    }
    ,mounted:function(){
            /*
            var vm = this;
            this.serviceGrpTree()
                .then(function(response) {
                    vm.treeData = response.data.result;
                    alert(vm.treeData);
                })
                .catch(function(e) {
                    //this.errors.push(e);
                });
            */
    }
    // ,components:{cncVueTree}
    ,components:{VJstree}
    ,mixins:[serviceApi,common]
    ,methods:{
        itemClick:function(node){
            this.log("emit:service" +  node.model.text);            
            // singleTest.singleTest = "Click";
            // ServiceSearch로 이벤트 전송
            eventBus.$emit('service-tree-click',node.model.text);
        }   
    }
}
</script>

<<style>
</style>

