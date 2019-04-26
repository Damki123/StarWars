$(document).ready(function() {
    setTimeout (function(){
        $('.loader').addClass('hidden-loader')
    },4000);
})

$('#sound').click(function(){
        $('.audio').prop("muted", true);
        $('#sound').addClass('opaque');
        $('#nosound').removeClass('opaque');
})
$('#nosound').click(function(){
        $('.audio').prop("muted", false);
        $('#nosound').addClass('opaque');
        $('#sound').removeClass('opaque');
})

$('#okay').click(function(){
    $('#dialog').addClass('hidden');
})

$('#light').click(function(){
    $('#wrapmodal').toggleClass('hidden');
    $('.wrapper').toggleClass('wrapper-bglight');
    $('.navbar a').toggleClass('btn-lightside');
    $('.menu').toggleClass('menu-lightside');
    $('.wrapcontent').toggleClass('wrapcontent-light');
    $('.wrap-characters').toggleClass('wrapcontent-light');
    $('.fa-empire').addClass('opaque');
    $('#sound').addClass('black');
    $('#nosound').addClass('black');
    $('#layoutchange').addClass('black');
})

$('#dark').click(function(){
    $('#wrapmodal').toggleClass('hidden');
    $('.wrapper').toggleClass('wrapper-bgdark');
    $('.navbar a').toggleClass('btn-darkside');
    $('.menu').toggleClass('menu-darkside');
    $('.wrapcontent').toggleClass('wrapcontent-dark');
    $('.wrap-characters').toggleClass('wrapcontent-dark');
    $('.fa-rebel').addClass('opaque');
    $('#sound').addClass('white');
    $('#nosound').addClass('white');
    $('#layoutchange').addClass('white');
})
$('.menu').click(function(){
    $('.navbar').toggleClass('navbar-hidden');
    $('.menu').toggleClass('hiddenmenu');
    $('.wrapcontent').toggleClass('blur');
    $('.wrap-characters').toggleClass('blur');
    if($('.wrapper').hasClass('wrapper-bglight') & ($(window).width() < 1366)) { 
        $('#sound').toggleClass('black');
        $('#sound').toggleClass('white');
        $('#nosound').toggleClass('black');
        $('#nosound').toggleClass('white');
        $('#layoutchange').toggleClass('white');
        $('#layoutchange').toggleClass('black');
    }
    if(($(window).width() < 1366)){
        $('.wrapcontent').toggleClass('hiddenmenu');
        $('.wrap-characters').toggleClass('hiddenmenu');
    }
})
$('.navbar a').click(function(){
    $('.navbar').toggleClass('navbar-hidden');
    $('.menu').toggleClass('hiddenmenu');
    $('.wrapcontent').toggleClass('blur');
    $('.wrap-characters').toggleClass('blur');
    if(($(window).width() < 1366)){
        $('.wrapcontent').removeClass('hiddenmenu');
        $('.wrap-characters').removeClass('hiddenmenu');
    }
    if($('.wrapper').hasClass('wrapper-bglight') & ($(window).width() < 1366)) { 
        $('#sound').toggleClass('black');
        $('#sound').toggleClass('white');
        $('#nosound').toggleClass('black');
        $('#nosound').toggleClass('white');
        $('#layoutchange').toggleClass('white');
        $('#layoutchange').toggleClass('black');
    }
})

$('#layoutchange').click(function(){
    if($('.wrapper').hasClass('wrapper-bgdark')) {
        $('.wrapper').removeClass('wrapper-bgdark');
        $('.navbar a').removeClass('btn-darkside');
        $('.menu').removeClass('menu-darkside');
        $('.wrapcontent').removeClass('wrapcontent-dark');
        $('.wrap-characters').removeClass('wrapcontent-dark');
        $('.wrapper').addClass('wrapper-bglight');
        $('.navbar a').addClass('btn-lightside');
        $('.menu').addClass('menu-lightside');
        $('.wrapcontent').addClass('wrapcontent-light');
        $('.wrap-characters').addClass('wrapcontent-light');
        $('#sound').removeClass('white');
        $('#nosound').removeClass('white');
        $('#layoutchange').removeClass('white');
        $('#sound').addClass('black');
        $('#nosound').addClass('black');
        $('#layoutchange').addClass('black');
        $('.fa-empire').addClass('opaque');
        $('.fa-rebel').removeClass('opaque');
        $('.wrap-characters-mask').removeClass('wcm-darkside');
        $('.wrap-characters-mask').addClass('wcm-lightside');
    }
    else if($('.wrapper').hasClass('wrapper-bglight')) {
        $('.wrapper').removeClass('wrapper-bglight');
        $('.navbar a').removeClass('btn-lightside');
        $('.menu').removeClass('menu-lightside');
        $('.wrapcontent').removeClass('wrapcontent-light');
        $('.wrap-characters').removeClass('wrapcontent-light');
        $('.wrapper').addClass('wrapper-bgdark');
        $('.navbar a').addClass('btn-darkside');
        $('.menu').addClass('menu-darkside');
        $('.wrapcontent').addClass('wrapcontent-dark');
        $('.wrap-characters').addClass('wrapcontent-dark');
        $('#sound').removeClass('black');
        $('#nosound').removeClass('black');
        $('#layoutchange').removeClass('black');
        $('#sound').addClass('white');
        $('#nosound').addClass('white');
        $('#layoutchange').addClass('white');
        $('.fa-rebel').addClass('opaque');
        $('.fa-empire').removeClass('opaque');
        $('.wrap-characters-mask').addClass('wcm-darkside');
        $('.wrap-characters-mask').removeClass('wcm-lightside');
    }
})
    $('#characters').click(function(){
        $('.wrap-characters').removeClass('characters-offscreen');
        $('.wrap-characters-mask').removeClass('wcm-offscreen');
        $('.wrapcontent').addClass('content-offscreen');
        if($('.wrapper').hasClass('wrapper-bglight')){
            $('.wrap-characters-mask').addClass('wcm-lightside');
        }
        else{
            $('.wrap-characters-mask').addClass('wcm-darkside');
        }
    })
    $('#home').click(function(){
        $('.wrap-characters').addClass('characters-offscreen');
        $('.wrap-characters-mask').addClass('wcm-offscreen');
        $('.wrapcontent').removeClass('content-offscreen');
    })
    $('.card-inner').dblclick(function(){
        $(this).toggleClass('rotate');
        $(this).toggleClass('card-active');
    })
$(document).ready(function(){
    $("#dark").hover(function(){
        vader.play();
        },
        function(){
        vader.load();
        });
})
$(document).ready(function(){
    $("#light").hover(function(){
        yoda.play();
        },
        function(){
        yoda.load();
        });
})
$(document).ready(function(){
    $(".nav a").hover(function(){
        nav_audio_click.play();
        },
        function(){
        nav_audio_click.load();
        });
})
$(document).ready(function(){
    $(".nav a").click(function(){
        nav_audio.play();})
})
$(".grey").hover(function(){
        nav_audio.play();
        },
        function(){
        nav_audio.load();
        });

$(document).ready(function(){
    $('#anakin-card .card-back').dblclick(function(){
        anakin.play();
    })
    $('#luke-card .card-back').dblclick(function(){
        luke.play();
    })
    $('#yoda-card .card-back').dblclick(function(){
        yoda1.play();
    })
    $('#leia-card .card-back').dblclick(function(){
        leia.play();
    })
    $('#han-card .card-back').dblclick(function(){
        han.play();
    })
    $('#chewie-card .card-back').dblclick(function(){
        chewie.play();
    })
    $('#obiwan-card .card-back').dblclick(function(){
        obiwan.play();
    })
    $('#c3po-card .card-back').dblclick(function(){
        c3po.play();
    })
    $('#r2d2-card .card-back').dblclick(function(){
        r2d2.play();
    })
})
