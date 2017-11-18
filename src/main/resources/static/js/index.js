$("nav.fixed-top").autoHidingNavbar();
var mySwiper = new Swiper('.swiper-container',{
    pagination: '.swiper-pagination',
    paginationClickable: true,
    paginationBulletRender: function (swiper, index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
});
$('#li1').click(function(){
    mySwiper.slideTo(0, 1000, false);//切换到第一个slide，速度为1秒
});
$('#li2').click(function(){
    mySwiper.slideTo(1, 1000, false);//切换到第二个slide，速度为1秒
});
$('#li3').click(function(){
    mySwiper.slideTo(2, 1000, false);//切换到第三个slide，速度为1秒
});
$('#li4').click(function(){
    mySwiper.slideTo(3, 1000, false);//切换到第四个slide，速度为1秒
});
$('#li5').click(function(){
    mySwiper.slideTo(4, 1000, false);//切换到第五个slide，速度为1秒
});

var w = document.documentElement.clientWidth || document.body.clientWidth;
var hidenav=document.getElementById('navbarCollapse');
var swiperdiv=document.getElementsByClassName("swiper-container")[0];
var but=document.getElementsByTagName("button")[0];
if(w<992){
    swiperdiv.onclick=function () {
        hidenav.className='collapse navbar-collapse';

    };
}
/**
 * Created by 42143 on 2017/11/10.
 */
