/* eslint-disable */
/* bca-disable */
// 需求WCI-26776
// arrHostName在具体页面引入的report.js中，声明赋值
var browerUa = navigator.userAgent;
// var borwerCookie = document.cookie;
var linkUrl = window.location.href.split('?')[0];
var linkParams = window.location.search;

var landingPageId = window.localStorage.getItem('landingPageId') || '';
if (!landingPageId) {
    landingPageId = generateUniqueId();
    window.localStorage.setItem('landingPageId', landingPageId)
}


var baseParams = {
    ua: browerUa,
    cookieId: landingPageId,
    url: linkUrl,
    from: linkParams,
}

var localHostnName = window.location.hostname;
var islog = false;

function generateUniqueId() {
    // 使用当前时间戳和随机数来生成ID
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); // 使用高精度时间
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
}
// 页面曝光
function report_hszprompage_show() {
    var kw = 'hszprompage_show';
    var params = baseParams;
    if(islog){
        console.log(kw,params)
    }
    setReportBody(kw, params);
}
// 页面加载完成
function report_hszprompage_success_report() {
    var kw = 'hszprompage_success_report';
    var params = baseParams;
    if(islog){
        console.log(kw,params)
    }
    setReportBody(kw, params);
}
// 点击下载
// btnName：直接上报按钮显示的中文名称，例如右图有（根据实际上报，右图只是举例而已）：
// 1、电脑版下载
// 2、安卓版下载
// 3、iOS版下载
function report_hszprompage_down_click(btnName) {
    var kw = 'hszprompage_down_click';
    var params = baseParams;
    params.btnName = btnName;
    if(islog){
        console.log(kw,params)
    }
    setReportBody(kw, params);
}