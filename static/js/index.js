/* eslint-disable */
/* bca-disable */
var indexHostName = window.location.hostname;
// 改渠道域名下隐藏
if (
    indexHostName == 'landing.gc.com.cn'&&
    (getQuery('c') == "ppzq-sg" || getQuery('c') == "ppzq-sg_2")
    ) {
    $('#contact').hide();
    $("#company-info").css("display", "flex");
} else {
    $('#contact').show();
    $("#company-info").hide();
}