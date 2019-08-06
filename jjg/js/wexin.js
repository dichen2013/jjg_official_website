var  url=location.href;
$.ajax({
    type : "get",
    url : "https://www.jiejieguai.com/jssdk.php?url="+url,
    dataType : "jsonp",
    jsonp: "callback",
    jsonpCallback:"success_jsonpCallback",
    success : function(data){

        wx.config({
            debug: false,
            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: [
                'onMenuShareTimeline',//
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'onMenuShareQZone'
            ]
        });
    },
    error:function(data){
        alert("连接失败！");
    }
});

wx.ready(function () {
    var shareData = {
        title: 'JJG信息',
        desc: '中小企业最好的互联网助手',
        link: url,
        imgUrl: 'images/jjg.png'
    };

    wx.onMenuShareAppMessage(shareData);//分享给好友
    wx.onMenuShareTimeline(shareData);//分享到朋友圈
    wx.onMenuShareQQ(shareData);//分享给手机QQ
    wx.onMenuShareWeibo(shareData);//分享腾讯微博
    wx.onMenuShareQZone(shareData);//分享到QQ空间



});
wx.error(function (res) {
    //alert(res.errMsg);//错误提示

});
