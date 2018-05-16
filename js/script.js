$('.btn-show').on('click', function(){
    
    $('form').animate({
        top: '0px'
    });
    
    $('.shape').fadeIn();
    
    $('body').css({
        overflow: 'hidden'
    })
    
})

$('.shape').on('click', function(){
    
     $('form').animate({
        top: '-400px'
    });
    
    $('.shape').fadeOut();
    
    $('body').css({
        overflowY: 'scroll'
    })
    
})

$('.load-image').on('click', function(){
    
    $('.seleted').click();
    
})


/*VISOR DE FOTOS*/

$(function() {
  $('.seleted').change(function(e) {
      addImage(e); 
     });

     function addImage(e){
      var file = e.target.files[0],
      imageType = /image.*/;
    
      if (!file.type.match(imageType))
       return;
  
      var reader = new FileReader();
      reader.onload = fileOnload;
      reader.readAsDataURL(file);
     }
  
     function fileOnload(e) {
      var result=e.target.result;
      $('.image-select').attr("src",result);
     }
    });












