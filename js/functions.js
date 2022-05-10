$(function(){

    
    // Slider Venda de Carros

    var imgShow = 3;
    var maxIndex = Math.ceil($('.mini-img').length/3) - 1;
    var curIndex = 0; 

    navigateSlider();
    clickSlider();

    function navigateSlider(){
        $('.arrow-right-nav').click(function(){
            if(curIndex < maxIndex){
                curIndex++;
                var elOff = $('.mini-img').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
                $('.nav-galeria').animate({'scrollLeft':elOff+'px'});
            } else{
                console.log('')
            }
        });

        $('.arrow-left-nav').click(function(){
            if(curIndex > 0){
                curIndex--;
                var elOff = $('.mini-img').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
                $('.nav-galeria').animate({'scrollLeft':elOff+'px'});
            } else{
                console.log('')
            }
        });
    }

    function clickSlider(){
        $('.mini-img').click(function(){
            $('.mini-img').css('border','1px solid black');
            $(this).css('border','1px solid red');
            var img = $(this).css('background-image');
            $('.foto-destaque').css('background-image', img);
        })

        $('mini-img').eq(0).click();
    }

    // Scroll para contato.

    var directory = '/Danki Code/Projetos/projeto-danki005/'

    $('[goto=contato]').click(function(){
        location.href=directory+'index.html?contato';
        return false;
    })

    checkUrl();

    function checkUrl(){
        var url = location.href.split('/');
        var curPage = url[url.length-1].split('?');

        if(curPage[1] != undefined && curPage[1] == 'contato'){
            $('nav.menu-desktop a').css('color','black');
            $('footer nav a').css('color','white');
            $('[goto=contato]').css('color','#EB2D2D');
            $('html,body').animate({'scrollTop':$('#contato').offset().top});
        }
    }

    // Menu responsivo

    $('.menu-wraper').click(function(){
        $(this).find('ul').slideToggle();
    })
    

    // Sistema de navegação nos depoimentos da index.html

    var amtDep = $('.depoimento-single').length;
    var cIndex = 0;

    initDep();
    navDep();

    function initDep(){
        $('.depoimento-single').hide();
        $('.depoimento-single').eq(0).show();
    }

    function navDep(){
        $('[next]').click(function(){
            cIndex++;
            if(cIndex >= amtDep)
                cIndex = 0;
            $('.depoimento-single').hide();
            $('.depoimento-single').eq(cIndex).show();
        })

        $('[prev').click(function(){
            cIndex--;
            if(cIndex < 0)
                cIndex = amtDep-1;
            $('.depoimento-single').hide();
            $('.depoimento-single').eq(cIndex).show();
        })
    }

});