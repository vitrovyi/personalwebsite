$(document).ready(function(){
	$(".navbar").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

$(function () {
    $('#btn-send').click(sendForm);
});

function sendForm (e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/bogwind@gmail.com", 
        method: "POST",
        data: {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#msg').val()
        },
        dataType: "json",
        success: function () {
            $('#thanks').html('Thank you for message!');
        }
    });
};