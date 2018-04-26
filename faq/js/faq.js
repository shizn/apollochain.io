$(function(){
    // console.log("hello world")
    // let flowPic = document.querySelector(".flow-pic");
    // changeFlowHeight();
    //
    // window.onresize = function(){
    //     changeFlowHeight();
    // }
    //
    // function changeFlowHeight(){
    //     flowPic.style.height = (flowPic.offsetWidth)*403/1160 + "px";
    // }

    // $(window).scroll(function(event){
    //     if($(window).scrollTop() < 300){
    //         if($(".navbar").hasClass("navbar-light")){
    //             $(".navbar").addClass("navbar-dark").removeClass("navbar-light");
    //         }
    //     }else{
    //         if($(".navbar").hasClass("navbar-dark")){
    //             $(".navbar").addClass("navbar-light").removeClass("navbar-dark");
    //         }
    //     }
    //
    //
    // });

    $(".paddingTopX").height($(".navbar").height());

    $(".navbar-slideShow").on("click",function(){
        $(".slideRight").addClass("in");
        $(".mock").addClass("show");
    })

    $(".mock").on("click",function(){
        $(".slideRight").removeClass("in");
        $(".mock").removeClass("show");
    })

    $(".teamlink").on("click",function(){
        $(".slideRight").removeClass("in");
        $(".mock").removeClass("show");
    })

    window.onresize = function(){
        $(".paddingTopX").height($(".navbar").height());
    }

})
