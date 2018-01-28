import CONF from '../../../config/Config.js'

export default{
    methods :{
        log:function(msg){
            console.log(msg);
        }
        ,alert:function(msg){
            this.$alert(msg, CONF.MAIN_TITLE, {
                confirmButtonText: CONF.DAILOG_OK
            });    
        }
    }
}