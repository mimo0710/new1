/**
 * Created by 张靖 on 2017/7/19.
 */
$(function () {
    //搜索框
    $("#inputSearch").on("focus", function () {
        if(this.value ==this.defaultValue){ //defaultValue属性设置或返回文本框的初始内容
            this.value = "";  //如果是默认值点击后变空然后输入
        }
    }).on("blur", function () {
        if(this.value ==""){
            this.value =this.defaultValue;//如果是空 点击离开后 恢复默认值
        }
    });
    //换肤
    if($.cookie("skin")){
        var skin = $.cookie("skin");
        changeSkin(skin);
    }
    $("#skin li").on("click",function(){
        var skin = $(this).attr("id");
        $.cookie("skin",skin,{expires:30});
        changeSkin(skin)
    });
    function changeSkin(skin){
        $("#cssfile").attr("href","styles/skin/"+skin+".css");
        $("#"+skin).addClass("selected").siblings().removeClass("selected");
    }
    //下滑菜单
    $("#nav li").hover(function () {
        $(this).children(".jnNav").show();
    }, function () {
        $(this).children(".jnNav").hide();
    });
    //hot
    $(".promoted").append("<span class='hot'></span>")

   //调整图片层级
    var $imgs = $("#JS_imgWrap imgimgimg");
    $imgs.each(function (index,elem) {
       $(elem).css({
           zIndex:5-index
       });
    });

    //切换
    var nowIndex = 0;
    var $menus = $("#menu a");
    $menus.on("mouseover", function () {
        nowIndex = $(this).index();
        changeImg();
    });
    setInterval(function () {
       nowIndex++;
        if(nowIndex ==$imgs.length){
            nowIndex = 0;
        }
        changeImg();
    },1000);
    function changeImg(){
        $menus.eq(nowIndex).addClass("chos").siblings().removeClass("chos");
        $imgs.eq(nowIndex).stop().fadeIn().siblings().stop().fadeOut();
    }

    //品牌活动
    $("#jnBrandTab li").on("click", function () {
        $(this).addClass("chos").siblings().removeClass("chos");
        $("#jnBrandList").animate({
            left:-$("#jnBrandList li").innerWidth()*4*$(this).index()
        },1000);
    });


});
