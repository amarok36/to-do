// This is my first jQuery development experience. May 03, 2022 

$(document).ready(function(){
    $("form").submit(function(e){ // отменяем отправку формы, иначе страница перезагружается
        e.preventDefault();       // и новая карточка сразу пропадет
    });
});

$(function() {

  const tmp = (titleText, bodyText) => `<div class="case">
            <div class="case-title">
            <span>${titleText}</span>
            <div class="clear-button"></div></div>
            <div class="case-body">${bodyText}</div>
            </div>`; // шаблон карточки дела

  $('#add-button').on('click', function() {
    const t_val = $('#name-field-input').val().trim(), // значение поля input
    d_val = $('#description-field').val().trim(); // значение поля textarea

    if (t_val.length > 0 && d_val.length > 0) { // если поля input и textarea не пустые
      $('.fixed-container #to-do-list').append(tmp(t_val, d_val)); // то добавляем новую карточку 
      $('#list-empty').remove(); // и удаляем надпись "Список пуст..."
    } else {                     // если поля пустые, то выводим сообщение
        alert('Все поля должны быть заполнены'); 
        return false;
  }

  $('form').children('input, textarea').val(null); // очищаем input и textarea в форме

  $(".case-title").click(function(){
       var block = $(this).closest('.case'); // сворачиваем или разворачиваем описание карточки, кликая по заголовку
       block.find('.case-body').stop(true, true).delay(0).slideToggle(400)}); // останавливаем анимацию, задержка 0

  $('.clear-button').click(function() {
        $(this).closest('.case').remove()}); // удаляем блок карточки, на которой был нажат крестик

  });

});

