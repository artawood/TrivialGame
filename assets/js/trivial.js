// trivial game

$(document).ready ( () => {

    var questions = {
        question : "What is my name?",
        answerSet : ["Bob", "Art", "Adam", "Henry"],
        correctAnswer : "Art",
    }

    // display points
    var point = 0;
    $('#points').text(point);
    
    var answerDiv = $('#answerSet');

    var question = $('#question').text(questions.question);
    
    question.append(question);

    questions.answerSet.forEach((answers) => {
        var answer = answers;
        var radioDiv = $('<div>').attr("class", "radio");
        var label = $('<label>');
        answerDiv.append(radioDiv);
        radioDiv.append(label);
        label.html("<input class='selectAnswer' type='radio' name='optradio' value='" + answer + "'>" + answer);

    });

    //Display Timer
    var time = 10;
    $('#display').text(time);

    //Start Game
    $('.startGame').on("click", () => {
        var startGame = setTimeout(gameOver, 10000);

        

        var stopTimer = function stopTimer () {
            clearInterval(timer);
        }
        var gameOver = function gameOver () {
            alert("You did not answer in time! Game Over!");
        };

        $('#confirmAnswer').on("click", () => {
            event.preventDefault();
            var value = $("input[type='radio']:checked").val();
            if ($("input[type='radio']").is(':checked')) {
                if (value === questions.correctAnswer) {
                    alert("Yes, you are correct! My name is " + value);
                    clearTimeout(startGame);
                    point++;
                    $('#points').text(point);
                } else {
                    alert("No, my name is not " + value);
                }
            } else {
                alert(" Please Select any Option ");
            }
        });
    });

});