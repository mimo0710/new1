/**
 * Created by �ž� on 2017/7/19.
 */
$(function () {
    //������
    $("#inputSearch").on("focus", function () {
        if(this.value ==this.defaultValue){ //defaultValue�������û򷵻��ı���ĳ�ʼ����
            this.value = "";  //�����Ĭ��ֵ�������Ȼ������
        }
    }).on("blur", function () {
        if(this.value ==""){
            this.value =this.defaultValue;//����ǿ� ����뿪�� �ָ�Ĭ��ֵ
        }
    });
    //����
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
    //�»��˵�
    $("#nav li").hover(function () {
        $(this).children(".jnNav").show();
    }, function () {
        $(this).children(".jnNav").hide();
    });
    //hot
    $(".promoted").append("<span class='hot'></span>")

   //����ͼƬ�㼶
    var $imgs = $("#JS_imgWrap imgimgimg");
    $imgs.each(function (index,elem) {
       $(elem).css({
           zIndex:5-index
       });
    });

    //�л�
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

    //Ʒ�ƻ
    $("#jnBrandTab li").on("click", function () {
        $(this).addClass("chos").siblings().removeClass("chos");
        $("#jnBrandList").animate({
            left:-$("#jnBrandList li").innerWidth()*4*$(this).index()
        },1000);
    });


});
