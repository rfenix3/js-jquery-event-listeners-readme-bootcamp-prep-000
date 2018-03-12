//define functions here

function getIt(){
  $('p').on('click', function(){
    alert("Hey!");
  })
}

function frameIt(){
  $('img').on('load', function(){
    $(this).addClass('tasty');
  })
}

function pressIt(){
  $('input').on('keydown', function(key){
    if (key.which == 71 || key.detail) {
      alert('G was pressed');
    } 
    return;
  });
}

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.');
    return;    
  })
}


$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();

});
