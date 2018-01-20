<<template>
    <section>
        <div class="mu-container">
            <div class="mu-all-container">            
                <ul class="mu-tab">
                    <li class="active"><a href="">서비스 그룹</a></li><!-- class="active" -->
                    <li><a href="">사업장(서비스) 임계치</a></li>
				</ul>    
                <div class="mu-tab-body">
                    <button type="button" class="mu-btn mu-btn-icon"><i class="mu-icon-img group-add"></i>그룹 가져오기</button>
                    <!-- 1번째 Tab 내용 -->
                    <div class="mu-tabCont" style="">
                        <ServiceTree></ServiceTree>

                        <div class="mu-right-container">
		                    <div class="service-list">
                                <ServiceSearch></ServiceSearch>
                                <div class="btn-move">
                                    <button type="button" v-on:click="serviceUserSet" class="mu-btn mu-btn-icon mu-btn-icon-only"><i class="mu-icon-img next"></i></button>
                                </div>
                                <ServiceWplc></ServiceWplc>
                            </div>
                        </div>   
                    </div>
                    <!-- 2번째 Tab 내용 -->
                    <div class="mu-tabCont" style="display:none;">
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>

<<script>

import eventBus from '../EventBus.vue';
import ServiceTree from './ServiceTree.vue';
import ServiceSearch from './ServiceSearch.vue';
import ServiceWplc from './ServiceWplc.vue';

export default {
    name:'ServiceGroupApp'
    ,components:{ServiceTree,ServiceSearch,ServiceWplc}
    ,methods:{
        serviceUserSet:function(){
            eventBus.$emit('service-user-set',null);
        }
    }
}
</script>

<<style>

</style>

