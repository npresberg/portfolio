$('#menu a').click(function(e){
  var pos = $('#footer').offset().top;
  $('html,body').animate({ scrollTop: pos}, 700);
  return false;
});

$('.proyecto .fotos').each(function(i) {
  var links = $(this).find('a').attr('rel', 'f' + i);
  $(this).click(function(e) {
    $.fancybox(links, {
      loop:false, prevEffect:'fade', nextEffect:'fade'
    });
  });
});

$('form').on('submit',function(e){
  e.preventDefault();
  
  var form = $(this);
  form.children().removeClass('error').each(function(){
    var elem = $(this);
    var value = elem.val();
    if (!value || elem.attr('name') === 'email' && !/^[^@]+@[^@.]+\..+/.test(value)) {
      elem.addClass('error');
    }
  });

  if (form.find('.error').length) return;

  $.ajax({
    url: form.attr('action'),
    type: form.attr('method'),
    data: form.serialize()
  });

  form.parent().addClass('enviado');
});