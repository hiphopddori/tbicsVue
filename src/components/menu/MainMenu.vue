<<template>
    
    <header>
        <h1 class="fl"><span>T-BICS  B2B Integrated Control System</span></h1>
        <nav class="mu-gnb fl">
            <!-- Depth1 -->
            <ul class="mu-h-menu fl">
            <li class="active"><a href="#"><span>Map</span></a><!-- 현재 메뉴 위치 class="active" 추가 -->
                <!-- Depth2 -->
                <ul class="mu-list">
                <li class="active"><router-link to="/map"><span>품질지도</span></router-link></li>                
                </ul>
            </li>
            <li><a href="#"><span>B2B 분석</span></a>
                <ul class="mu-list">
                <li><a href="#"><span>서비스 그룹 분석</span></a></li>
                <li><a href="#"><span>사업장 분석</span></a></li>
                </ul>
            </li>
            <li><a href="#"><span>현황조회</span></a>
                <ul class="mu-list">
                <li><a href="#"><span>단말기</span></a></li>
                <li><a href="#"><span>사업장</span></a></li>
                <li><a href="#"><span>서비스</span></a></li>
                </ul>
            </li>
            <li><a href="#"><span>환경설정</span></a>
                <ul class="mu-list">
                <li><router-link to="/service"><span>서비스 그룹</span></router-link></li>                
                </ul>
            </li>
            <li><a href="#"><span>관리자</span></a>
                <ul class="mu-list">
                <li><a href="#"><span>사용자 관리</span></a></li>
                <li><a href="#"><span>로그인 이력</span></a></li>
                <li><a href="#"><span>SMS 인증 이력</span></a></li>
                </ul>
            </li>
            <div class="mu-h-smenu"></div>
            </ul>
            <div class="mu-top-menu fr">
                <div class="user-info"><i class="mu-icon-img user"></i>admin</div>
                <!--
                <div><button type="button" class="mu-btn btn-logout">Logout</button></div>
                -->
            </div>
        </nav>
    </header>


</template>


<script>
export default {
    name:'MainMenu'

}
</script>


<style>

</style>

