/* eslint-disable */
/* bca-disable */
var HOST = '',
    ACTIVITY_HOST = '',
    LOGIN_HOST = '',
    COLLECTOR_HOST = '';
if (location.hostname.match(/standard/)) { //标准环境
    HOST =  'https://standard.redfinger.cn'
    ACTIVITY_HOST = 'https://standard.gc.com.cn'
    LOGIN_HOST = 'https://standard.redfinger.cn'
    COLLECTOR_HOST= 'https://gathers.gc.com.cn'
} else if (location.hostname === 'www.armbooster.com') { //生产环境
    HOST = ''
    ACTIVITY_HOST = 'https://hd.gc.com.cn'
    LOGIN_HOST = 'https://play.gc.com.cn'
    COLLECTOR_HOST= 'https://gathers.gc.com.cn'
}else if(location.hostname === 'prodtest.gc.com.cn'){   //生产测试环境
    HOST =  'https://prodtest.gc.com.cn'
    ACTIVITY_HOST = 'https://prodtest.gc.com.cn'
    LOGIN_HOST = 'https://prodtest.gc.com.cn'
    COLLECTOR_HOST= 'https://gathers.gc.com.cn'
}else if(location.hostname === 'gztest.gc.com.cn'){
    // 测试环境
    HOST =  'https://gztest.gc.com.cn'
    ACTIVITY_HOST = 'https://gztest.gc.com.cn'
    LOGIN_HOST = 'https://gztest.gc.com.cn'
    COLLECTOR_HOST= 'https://gztest.gc.com.cn'
}else if (location.hostname === 'www.shouzhiyun.cn') { //生产环境
    HOST = ''
    ACTIVITY_HOST = 'https://hd.gc.com.cn'
    LOGIN_HOST = 'https://play.gc.com.cn'
    COLLECTOR_HOST= 'https://gathers.gc.com.cn'
}else if (location.hostname === 'lander.gc.com.cn') { //生产环境
    HOST = ''
    ACTIVITY_HOST = 'https://hd.gc.com.cn'
    LOGIN_HOST = 'https://play.gc.com.cn'
    COLLECTOR_HOST= 'https://gathers.gc.com.cn'
}else{ //本地环境
    HOST =  'https://gztest.gc.com.cn'
    ACTIVITY_HOST = 'https://gztest.gc.com.cn'
    LOGIN_HOST = 'https://gztest.gc.com.cn'
    COLLECTOR_HOST= 'https://gathers.gc.com.cn'
}

// aes加密相关
var AesObject={};
!(function(){
    // 后台使用的解密相关参数
    // 算法模式：CBC；补码方式：PKCS5Padding；解密串编码方式：base64
    var originKey='1804564545445654';
    var originIv='1545456413215484';

    // AES加密方法
    AesObject.encrypt=function(data){
        var key  = CryptoJS.enc.Latin1.parse(originKey);
        var iv   = CryptoJS.enc.Latin1.parse(originIv);
        // 填充方式 后端用Pkcs5Padding，则前端用Pkcs7Padding，默认base64编码
        return CryptoJS.AES.encrypt(data, key, {iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7}).toString();
    }

    // AES解密方法
    AesObject.decrypt=function(data){
        var key  = CryptoJS.enc.Latin1.parse(originKey);
        var iv   = CryptoJS.enc.Latin1.parse(originIv);
        var decrypted =CryptoJS.AES.decrypt(data,key,
            {
                iv:iv,
                mode:CryptoJS.mode.CBC,
                padding:CryptoJS.pad.Pkcs7
            });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }

})()

//生成uuid
function generateUUID () {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

function get_android_version() {
    var ua = navigator.userAgent.toLowerCase();
    var webviewConfig={
        deviceVersion: null,
        chromeVersion: null
    }
    var deviceVersion = null;
    if (ua.indexOf("android") > 0) {
        var reg = /android [\d._]+/gi;
        var v_info = ua.match(reg);
        deviceVersion = (v_info + "").replace(/[^0-9|_.]/ig, "").replace(/_/ig, ".");
        if(deviceVersion.split('.')[1]){
            webviewConfig.deviceVersion = (parseInt(deviceVersion.split('.')[0]))*10+ parseInt(deviceVersion.split('.')[1])
        }else{
            webviewConfig.deviceVersion = (parseInt(deviceVersion.split('.')[0]))*10
        }
    }
    var chromeVersion = null;
    if (ua.indexOf("android") > 0) {
        var reg = /chrome\/[\d._]+/gi;
        var v_info = ua.match(reg);
        chromeVersion = (v_info + "").replace(/[^0-9|_.]/ig, "").replace(/_/ig, ".");
        // webviewConfig.chromeVersion = (parseInt(chromeVersion.split('.')[0]))
        webviewConfig.chromeVersion = chromeVersion
    }
    return webviewConfig;
}

function get_IOS_version() {
    var str= navigator.userAgent.toLowerCase();
    var ver=str.match(/cpu iphone os (.*?) like mac os/);
    if (!ver) return null;
    return ver[1].replace(/_/g,".");
}

//地址获取参数
function getQuery(name, obj) {
    var obj = obj || window.location.search
    var reg = new RegExp("(/?|&)" + name + "=([^&]*)(&|$)");
    var r = obj.substr(1).match(reg);
    if(r != null) return unescape(r[2]);
    return null;
}

//项目上报数据
var watchTime = null // 打开页面即观看开始
var androidWebViewInfo=null

function reportedData(bodyString) {
    //   开发环境
    var url = COLLECTOR_HOST + "/bd-collector/h5/collect.html"
    // AES加密数据
    bodyString = AesObject.encrypt(bodyString)
    var fact={
        "btyp": "STAT_INFO",
        "uid": null,
        "cuid":  generateUUID(),
        "md": null,
        "sv":  null,
        "ver":  null,
        "src":  null,
        "nw": null,
        "cop": null,
        "ctyp": "5",
        "styp":"1",
    }
    $.ajax({
        type: "POST",
        url: url,
        data: {
            "fact":JSON.stringify(fact),
            "body": bodyString
        },
        dataType: "json",
        success: function (data) {
            console.log(data)
        },
        error: function (e) {
            console.log(e,'222')
        }
    });
}

//上报的数据类型
function setReportBody(keyword,params) {
    var clientType = undefined
    var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) clientType = 1
    if (isIOS) clientType = 2
    params["clientType"] = 3
    if (clientType === 1 || clientType === 2) {
        androidWebViewInfo = get_android_version();
        params["webviewVersion"] = androidWebViewInfo.chromeVersion || get_IOS_version()
        params["clientType"] = clientType===1 ? 1 : 2 // 安卓：1 IOS：2
    }
    params["c"] = getQuery('c')
    var body = {
        "appId": "2005",
        "btyp": "STAT_INFO",
        "uid":  null,
        "cuid": generateUUID(),
        "ctyp": "5",
        "styp":"1",
        "ptyp":"1",
        "ver":  null,
        "src": null,
        "ct": new Date().getTime(),
        "data": {
            "keyword":keyword,
            "params":params
        }
    }
    reportedData(JSON.stringify(body))
};