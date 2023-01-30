$(document).ready(()=>{
    $('a').click((e)=>{
        e.preventDefault();
    })
    $('.menu-link-hover').mouseenter(()=>{ 
        $('.drop-1').addClass('visible');
        $('.drop-1').mouseenter(()=>{
            $('.drop-1').addClass('visible')
        })
        $('.drop-1').mouseleave(()=>{
            $('.drop-1').removeClass('visible')
        })
    })
    $('.menu-link-hover').mouseleave(()=>{
        $('.drop-1').removeClass('visible');
    })
    $('.menu-link-hover1').mouseenter(()=>{ 
        $('.drop-2').addClass('visible');
        $('.drop-2').mouseenter(()=>{
            $('.drop-2').addClass('visible')
        })
        $('.drop-2').mouseleave(()=>{
            $('.drop-2').removeClass('visible')
        })
    })
    $('.menu-link-hover1').mouseleave(()=>{
        $('.drop-2').removeClass('visible');
    })
    $('#hamber-btn').click(()=>{
        $('.menu').removeClass('tr-hide')
    })
    $('.btn-close').click(()=>{
        $('.menu').addClass('tr-hide')
    })
    const typed = new Typed('.write',{
        stringsElement:'#demo',
        typeSpeed: 1,
        backSpeed: 1,
        loop: true,
        backDelay:2000,
        fadeOut:false,
    })
    $('#counter2').counterUp({
        delay: 1,
        time: 600,
    });
    $('#counter1').counterUp({
        delay: 1,
        time: 500,
    });
    $('#counter3').counterUp({
        delay: 1,
        time: 500,
    });
    $('.row1').removeClass('tr')   
    $(window).scroll(()=>{
        const row = $(window).scrollTop();
        row >=50 ?  $('.row2').removeClass('tr'):null;
        row >=350 ?  $('.row3').removeClass('tr'):null;       
        row >=550 ?  $('.row4').removeClass('tr'):null;
        row >=1250 ?  $('.row5').removeClass('tr'):null;
        row >=2100 ?  $('.row6').removeClass('tr'):null;
        row >=2450 ?  $('.row7').removeClass('tr'):null;
    })   
})
