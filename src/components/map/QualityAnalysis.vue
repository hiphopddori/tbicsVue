<template>
    <section>
        <div class="mu-container">
            <div id="content">
                <div id="mapView"></div>
            </div>        
        </div>    
    </section>
</template>

<script>

import daum  from 'daum'
//npm install --save-dev html-webpack-externals-plugin

export default {
    name:'QulityAnalisys'
    ,mounted:function(){
        this.init();        
    }
    ,methods:{
        init:function(){
            let container = document.getElementById('mapView');
            //alert(container);

            let options = {
                center: new daum.maps.LatLng(33.450701, 126.570667),
                level: 3
            };

            let map = new daum.maps.Map(container, options);
            let mapTypeControl = new daum.maps.MapTypeControl();            
            map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);            
            let zoomControl = new daum.maps.ZoomControl();
            map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
        }
    }
}
</script>

<style>
#content {position:relative; top:0; right:0; bottom:0; left:0; width:100%; height:100%;}
#mapView {position:absolute; top:0; right:0; bottom:0; left:0; z-index:0}/* Map 실제영역 */
</style>


