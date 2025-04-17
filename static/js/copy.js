/* eslint-disable */
var location_hostname = location.hostname,
    HOST = location_hostname,
    is_mobile_campaign = typeof mobile_campaign!="undefined" && mobile_campaign==true,
    // is_redfinger_host = location_hostname.indexOf('gc.com.cn') != -1,

    // is_landerGcCom_host = location_hostname.indexOf(' landing.gc.com.cn') != -1 || location_hostname.indexOf('shouzhiyun.cn') != -1,
    // is_landerGcCom_host = location_hostname.indexOf('landing.gc.com.cn') != -1,

    copy = "COPYRIGHT©版权信息归微算互联所有";
// HOST = 'bdyd.hnyep.com';
// HOST = 'hsz.lzy55.cn';
if(HOST == "hsz.lzy55.cn"){
    copy= "版权信息：重庆林之友信息技术咨询有限公司高密分公司<br> 开发者：湖南微算互联信息技术有限公司 <br> 版本：2.3.127  <br> 应用名称：红手指云手机平台   更新时间：2021.2.4 <br><a href='../mobile/yyqx.html'>应用权限</a> <a href='https://www.gc.com.cn/termofservice/ysxy.htm'>隐私政策</a>"
}else if(HOST == "sgtg.xuanheng01.cn"){
    copy= "版权信息：淮南轩恒网络科技有限公司  <br> 开发者：湖南微算互联信息技术有限公司 <br> 版本：2.3.127  <br> 应用名称：红手指云手机平台   更新时间：2021.2.4 <br><a href='../mobile/yyqx.html'>应用权限</a> <a href='https://www.gc.com.cn/termofservice/ysxy.htm'>隐私政策</a>"
}else if(HOST == "hongshouzhi.baidu.com"){
    copy= '©2020 Baidu 使用百度前必读 京ICP证030173号<p><a style="color:#FFF;" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001"><img style="width:16px" src="https://bce.bdstatic.com/bce-portal/static/assets/assets/892af362.png"/>京公网安备11000002000001号</a></p>' +
    "版权信息：北京百度网讯科技有限公司 <br> 版本：2.3.127  <br> 应用名称：红手指云手机平台   更新时间：2021.2.4 <br><a href='" +
        "../../yyqx.html'>应用权限</a> <a href='../../ysxy.html'>隐私政策</a>"
}else if(HOST == "smxxl.pzfwan.cn"){
    copy= "版权信息：成都柒玖游科技有限公司  <br> 开发者：湖南微算互联信息技术有限公司 <br> 版本：2.3.127  <br> 应用名称：红手指云手机平台   更新时间：2021.2.4 <br><a href='" +
        "../../yyqx.html'>应用权限</a> <a href='../../ysxy.html'>隐私政策</a>"
}else if(HOST == "tttg.baojia056.cn"){
    copy= "安徽宝家商贸有限公司"
}else if(HOST == "djtg.cd0dhd1022.cn"){
    copy= "版权信息：成都零点互动广告有限公司"
}else if(HOST == "hszsm.cdycst.cn"){
    copy= "开发者：湖南微算互联信息技术有限公司 <br> 版本：2.3.127  <br> 应用名称：红手指云手机平台   更新时间：2021.2.4 <br><a href='" +
        "../../yyqx.html'>应用权限</a> <a href='../../ysxy.html'>隐私政策</a>"
}else if (HOST == "bdss.cqkdj3.cn"){
    copy= "版权信息：重庆康德景科技有限公司第三分公司 <br> 开发者：湖南微算互联信息技术有限公司 <br> 版本：2.3.127  <br> 应用名称：红手指云手机平台   更新时间：2021.2.4 <br><a href='" +
        "../../yyqx.html'>应用权限</a> <a href='../../ysxy.html'>隐私政策</a>"
} else if (HOST.indexOf("shouzhiyun.cn")!=-1){
    copy= '<p><a style="" href="https://beian.miit.gov.cn/"><img style="width:16px" src="https://bce.bdstatic.com/bce-portal/static/assets/assets/892af362.png"/>湘ICP备15006053号-4</a></p>'
} else if (HOST == "landing.gc.com.cn"){
    copy= '<p>' + '开发者：湖南微算互联信息技术有限公司 <br> 红手指云手机 2.3.267  <br> Copyright © 2013 -2020 Redfinger . All Rights Reserved ' +
        '<br><a href="../../yyqx.html">应用权限</a> <a href="../../ysxy.html">隐私政策</a><br>' +
        '<a style="" href="https://beian.miit.gov.cn/">' +
        '<img style="width:16px" src="https://bce.bdstatic.com/bce-portal/static/assets/assets/892af362.png"/>湘ICP备15006053号-4&nbsp;&nbsp;&nbsp;&nbsp;' +
        '</a>' +
        '<img src="/default/img/beian.png" />湘公网安备 43011102001736号&nbsp;&nbsp;增值电信业务经营许可证：'+
        '<a style="color:#333;" href="https://tsm.miit.gov.cn/dxxzsp/xkz/xkzgl/resource/qiyesearch.jsp?num=湘B2-20200027&type=xuke" rel="nofollow">湘B2-20200027</a>' +
        '</p>'
} else if (HOST == "djtg.muxuelook.cn"){
    copy= "版权信息：穆雪信息科技（上海）有限公司 <br> 开发者：湖南微算互联信息技术有限公司 <br> 版本：2.3.127  <br> 应用名称：红手指云手机平台   更新时间：2021.2.4 <br><a href='" +
        "../../yyqx.html'>应用权限</a> <a href='../../ysxy.html'>隐私政策</a>"
} else if(HOST == "hsz.you99x.cn"){
    copy= "版权信息：海南指趣互娱信息科技有限公司  <br> 开发者：湖南微算互联信息技术有限公司 <br> 版本：2.3.127  <br> 应用名称：红手指云手机平台   更新时间：2021.2.4 <br><a href='" +
        "../../yyqx.html'>应用权限</a> <a href='../../ysxy.html'>隐私政策</a>"
} else if(HOST == "hsz.qu8you.cn"){
    copy= "版权信息：海南指趣互娱信息科技有限公司  <br> 开发者：湖南微算互联信息技术有限公司 <br> 版本：2.3.127  <br> 应用名称：红手指云手机平台   更新时间：2021.2.4 <br><a href='" +
        "../../yyqx.html'>应用权限</a> <a href='../../ysxy.html'>隐私政策</a>"
} else if(HOST == "hszcs.you99x.cn"){
    copy= "版权信息：海南指趣互娱信息科技有限公司  <br> 开发者：湖南微算互联信息技术有限公司 <br> 版本：2.3.127  <br> 应用名称：红手指云手机平台   更新时间：2021.2.4 <br><a href='" +
        "../../yyqx.html'>应用权限</a> <a href='../../ysxy.html'>隐私政策</a>"
} else if(HOST == "hsz.wxgwl.com"){
    copy= "版权信息：青岛唯玺阁科技有限公司  <br> 开发者：湖南微算互联信息技术有限公司 <br> 版本：2.3.127  <br> 应用名称：红手指云手机平台   更新时间：2021.2.4 <br><a href='" +
        "../../yyqx.html'>应用权限</a> <a href='../../ysxy.html'>隐私政策</a>"
} else if(HOST == "hsz.szlwwhcm.cn"){
    copy= "版权信息：苏州蓝威文化传媒有限公司  <br> 开发者：湖南微算互联信息技术有限公司 <br> 版本：2.3.127  <br> 应用名称：红手指云手机平台   更新时间：2021.2.4 <br><a href='" +
        "../../yyqx.html'>应用权限</a> <a href='../../ysxy.html'>隐私政策</a>"
} else if(HOST == "bdhsz.dhn02.cn"){
    copy= "版权信息：重庆大灰能网络有限公司  <br> 开发者：湖南微算互联信息技术有限公司 <br> 版本：2.3.127  <br> 应用名称：红手指云手机平台   更新时间：2021.2.4 <br><a href='" +
        "../../yyqx.html'>应用权限</a> <a href='../../ysxy.html'>隐私政策</a>"
} else if(HOST == "hsz.xuanheng03.cn"){
    copy= "版权信息：淮南轩恒网络科技有限公司  <br> 开发者：湖南微算互联信息技术有限公司 <br> 版本：2.3.127  <br> 应用名称：红手指云手机平台   更新时间：2021.2.4 <br><a href='" +
        "../../yyqx.html'>应用权限</a> <a href='../../ysxy.html'>隐私政策</a>"
} else if(HOST == "hszsg.xuanheng05.cn"){
    copy= "版权信息：淮南轩恒网络科技有限公司  <br> 开发者：湖南微算互联信息技术有限公司 <br> 版本：2.3.127  <br> 应用名称：红手指云手机平台   更新时间：2021.2.4 <br><a href='" +
        "../../yyqx.html'>应用权限</a> <a href='../../ysxy.html'>隐私政策</a>"
} else if (HOST == "bdhsz.zhan01.cn"){
    copy= "版权信息：南京展智电子商务有限公司福州鼓楼区分公司 <br> 开发者：湖南微算互联信息技术有限公司 <br>红手指云手机   版本：2.3.267  <br> <a href='" +
        "../../yyqx.html'>应用权限</a> <a href='../../../ysxy.html'>隐私政策</a>"
} else if (HOST == "hszbd.weny01.cn"){
    copy= "版权信息：南京茉栀电子商务有限公司福州鼓楼区分公司 <br> 开发者：湖南微算互联信息技术有限公司 <br>红手指云手机   版本：2.3.267  <br> <a href='" +
        "../../yyqx.html'>应用权限</a> <a href='../../../ysxy.html'>隐私政策</a>"
} else if(HOST == "hsz.yidianzhiyue.top"){
    copy= ""
} else if(HOST == "hsztf.cd0dhd1022.cn"){
    copy= "版权信息：成都零点互动广告有限公司  <br> 开发者：湖南微算互联信息技术有限公司 <br> 版本：2.3.127  <br> 应用名称：红手指云手机平台   更新时间：2021.2.4 <br><a href='" +
        "../../yyqx.html'>应用权限</a> <a href='../../ysxy.html'>隐私政策</a>"
} else if(HOST == "hsztg.jingyuwk.top"){
    copy= "版权信息：贵州旌宇网络科技有限公司 <br> 开发者：湖南微算互联信息技术有限公司 <br> 版本：2.3.127  <br> 应用名称：红手指云手机平台   更新时间：2021.2.4 <br><a href='" +
        "../../yyqx.html'>应用权限</a> <a href='../../ysxy.html'>隐私政策</a>"
} else if(HOST == "hsztg.jyw01.cn"){
    copy= "重庆今友网络科技有限公司 <br> 开发者：湖南微算互联信息技术有限公司 <br> 版本：2.3.127  <br> 应用名称：红手指云手机平台   更新时间：2021.2.4 <br><a href='" +
        "../../yyqx.html'>应用权限</a> <a href='../../ysxy.html'>隐私政策</a>"
} else if(HOST == "hszbd.sdlx2.cn"){
    copy= "重庆金学网络有限公司 <br> 开发者：湖南微算互联信息技术有限公司 <br> 版本：2.3.127  <br> 应用名称：红手指云手机平台   更新时间：2021.2.4 <br><a href='" +
        "../../yyqx.html'>应用权限</a> <a href='../../ysxy.html'>隐私政策</a>"
} else if(HOST == "hsztg.sdlx2.cn"){
    copy= "重庆金学网络有限公司 <br> 开发者：湖南微算互联信息技术有限公司 <br> 版本：2.3.127  <br> 应用名称：红手指云手机平台   更新时间：2021.2.4 <br><a href='" +
        "../../yyqx.html'>应用权限</a> <a href='../../ysxy.html'>隐私政策</a>"
} else if(HOST == "hsztg.riweixz.cn"){
    copy= "上海日维网络科技有限公司 <br> 开发者：湖南微算互联信息技术有限公司 <br> 版本：2.3.127  <br> 应用名称：红手指云手机平台   更新时间：2021.2.4 <br><a href='" +
        "../../yyqx.html'>应用权限</a> <a href='../../ysxy.html'>隐私政策</a>"
} else if(HOST == "hsz.gc.com.cn"){
    copy= "湖南微算互联信息技术有限公司 <br> 开发者：湖南微算互联信息技术有限公司 <br> 版本：2.3.127  <br> 应用名称：红手指云手机平台   更新时间：2021.2.4 <br><a href='" +
        "../../yyqx.html'>应用权限</a> <a href='../../ysxy.html'>隐私政策</a>"
} else if(HOST == "ybb.sly09.cn"){
    copy= "版权信息：巫山县西里云网络有限公司 <br> 版本：2.3.127  <br> 应用名称：红手指云手机平台   更新时间：2021.2.4 <br><a href='" +
        "../../yyqx.html'>应用权限</a> <a href='../../ysxy.html'>隐私政策</a>"
}


$("#copy").html(copy)
$("#copy").css({
    color:"#333333",
    textAlign:"center",
    padding:"10px",
    display:"block",
    lineHeight: is_mobile_campaign?"27px":"15px",
    fontSize: is_mobile_campaign?"15px":"15px",
})
$("#head ul li a").attr('href',"###")
if(location.pathname == "/"){$('#page7,#page8,#site-change,.head,#kefu').hide()}
// }
var hostUrl = window.location.href;
if(hostUrl.indexOf("ftldy")!=-1){
    $("#page9").hide();
}
