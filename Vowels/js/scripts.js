$(document).ready(function () {
  $('form#formInput').submit(function (event) {
    event.preventDefault();
    var userInput = ($('#sentence').val()).split('');
    console.log(userInput);
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    result = 0
    for (index = 0; index < userInput.length; index++) {
      if (vowels.includes(userInput[index])) {
        result = result + 1;
      }

    };
    $(".resultSentence").append(result);
    console.log(result);
  });
});
