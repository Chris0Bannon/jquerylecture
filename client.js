console.log('client.js is loading');


$(document).ready(handleReady);


function handleReady(){
console.log('DOM is ready');

// $('#some-id')
// $('.some-class')
// $('li').parent();
// $('ul').children().first();
// $('li a')
// $('.mic', '.check')
// }

$('.once-blue').addClass('blue');
// $('.once-blue').removeClass('blue');
// $('.once-blue').toggleClass('blue');
// $('.once-blue').css('color','blue');
$('.potato').append('<p> i like your hat </p>').prepend('<p>i like my hat</p>');

//when i click the add food button i want to see a console.log
$('#addFoodBTN').on('click', handleClick)
// $(existsNow).on('click',existsInTheFuture, handleDelete)
$('#tastyList').on('click', '.foodItem', handleDelete)
}

function handleDelete(){
    console.log('clicked it');
    //$ this will get the item that called this function
    $(this).parent().remove();
}

function handleClick (){
    console.log('clicked');
    //go get the value of our input
   let newFood =  $('#foodToAdd').val();
    console.log(newFood);
    $('#tastyList').append(`<li>${newFood} is the best
                            <button class = "foodItem"> Delete Me</button>
                            </li>`);
    // reset the value
    $('#foodToAdd').val('');
}

// $('#tastyList').append(`<li>` + newFood + `</li>`)
 //  $('#tastyList').append(`<li>${newFood} is the best</li>`)
console.log('client.js is done loading');

