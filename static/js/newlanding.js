/* eslint-disable */
// WCI-28144需求统一渠道
var location_hostname = location.hostname;
var channelParams = getQuery("c")||'';
var linkHost = 'https://www.gc.com.cn';
var iosHost = 'https://ios.gc.com.cn';
if(location.hostname === 'gztest.gc.com.cn'){
  linkHost = 'https://gztest.gc.com.cn';
  iosHost = 'https://gztest.gc.com.cn';
}

//地址获取参数
function getQuery(name, obj) {
    var obj = obj || window.location.search
    var reg = new RegExp("(/?|&)" + name + "=([^&]*)(&|$)");
    var r = obj.substr(1).match(reg);
    if(r != null) return unescape(r[2]);
    return null;
}

// 获取下载地址
function getLinkUrl(type) {
    var iosChannel = channelParams ? 'com.redfinger.app.' + channelParams : 'com.redfinger.app';
    var androidChannel = channelParams ? '/'+ channelParams : '';
    var pcChannel = channelParams ? '/'+ channelParams : '';
    var ios_url = iosHost + '/h5app/redCloud/?channelCode=' + iosChannel;
    var android_url = linkHost + '/download/android'+ androidChannel + '.html';
    var pc_url = linkHost + '/download/win'+ pcChannel + '.html';
    var web_url = iosHost + '/h5app/redCloud/?channelCode=' + iosChannel;
    var harmonyOS_url = 'https://appgallery.huawei.com/app/detail?id=com.redfinger.ohosapp';
    var urlObj = {
        'android': android_url,
        'ios': ios_url,
        'window' : pc_url,
        'harmonyOS': harmonyOS_url,
        'web': web_url
    }
    return urlObj[type];
}


// pc专业版下载
function getVersion(platform, domElementId) {
  var url = "";
  var channelCode = ""
  if(channelParams){
    channelCode = "com.redfinger.business." + channelParams 
  }else{
    channelCode = "com.redfinger.business.gwgn"
  }
  if (location.hostname === "gztest.gc.com.cn") {
    url = "https://gztest.gc.com.cn/";
  } else {
    url = "https://www.gc.com.cn/";
  }
  var host = url + "hsz/market/get/getNewVersion";
  var param = {
    clientId: "100000001",
    platform: platform,
    v: "2.1.11",
    version: "201011",
    channelCode: channelCode,
  };
  $.ajax({
    url: host,
    type: "GET",
    data: param,
    datatype: "json",
    success: function (data) {
      if (data.code == 0) {
        var url = data.response.downloadUrl;
        $(domElementId).click(function () {
          window.location.href = url;
        });
        $(domElementId).attr("href", url);
      }
    },
    error: function (e) {
      console.log(e);
    },
  });
}
// getVersion(11);
getVersion(11, "#pcgn,#zybpcgn");

// 安卓专业版下载
var proDownLoadTime = 0; // 获取专业版次数
function getDownLoadLink(platform, channelCode) {
var host = "https://www.gc.com.cn/hsz/market/get/getNewVersion";
var channelCodeStr = ''
if (channelCode) {
  channelCodeStr = channelCode;
} else {
  channelCodeStr = channelParams ? "com.redfinger.business." + channelParams : "com.redfinger.business";
}
var param = {
  clientId: "100000001",
  platform: platform,
  v: "2.1.11",
  version: "201011",
  channelCode: channelCodeStr,
};
$.ajax({
  url: host,
  type: "GET",
  data: param,
  datatype: "json",
  success: function (data) {
    if (data.code == 0 && platform == 10) {
        // 接口调用过两次后，阻止再次请求
        if (proDownLoadTime > 1) {
          return;
        }
        // 安卓根据渠道请求为空时，重新请求一次。
        if (data.response && !data.response.downloadUrl) {
          proDownLoadTime = 1;
          getDownLoadLink(10, "com.redfinger.business");
          return;
        }
        var url = data.response.downloadUrl;
        $("#zyapp,#gwapp-zybaz").click(
          function () {
            window.location.href = url;
          }
        );
        $("#zyapp,#gwapp-zybaz").attr("href", url);
        // 安卓专业版二维码生成，接口请求需要异步获取
        setTimeout(function () {
          hoverQr('androidBeta-qr', $('#zyapp').attr('href'));
        }, 500);
        return;
    }
  },
  error: function (e) {
    console.log(e);
  },
});
}

setTimeout(function () {
  getDownLoadLink(10);
}, 500);

function hoverQr(qrId, linkUrl) {
  var AQR = document.getElementById(qrId);
  AQR && new QRCode(AQR, {
      text: linkUrl,
      width: 150,
      height: 150,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
  });
  var $strong = "<div class='in'>使用微信或浏览器扫码</div>";
  $("#" + qrId).append($strong);
}

$(function () {
    // 页面a标签链接替换，因为有些右侧浮动的二维码
    $(".download-link").each(function(){
        var ctype = $(this).attr('type');
        if (ctype) {
            var linkUrl = getLinkUrl(ctype);
            if (linkUrl) {
                $(this).attr("href", linkUrl);
            }
        }
    })

    // 下载链接跳转
    $(".download-link").click(function (e) {
        var ctype = $(this).attr('type');
        var linkUrl = getLinkUrl(ctype);
        e.preventDefault();
        if (linkUrl) {
            setTimeout(function(){
                location.href = linkUrl;
            }, 500);
        }
    });

    // 安卓普通版二维码生成
    hoverQr('android-qr', getLinkUrl('android'));
    // ios二维码生成
    hoverQr('ios-qr', getLinkUrl('ios'));
    // 鸿蒙二维码生成
    hoverQr('harmonyOS-qr', getLinkUrl('harmonyOS'));
    
});

