$('#start').on('click', function(){
    game.start();
})
var questions = [{
    
    question:"Which vegetable is cruciferous?",
    options: ["Kale","Carrots", "Potatoes", "Onion"],
    correctAnswer: "Kale",
},
{
    question:"Which vegetable is high in beta-carotene?",
    options: ["Onion", "Carrots", "Rutabaga"],
    correctAnswer: "Carrots",
},
{
    question:"Which vegetable is also a flower?",
    options: ["Spinach", "Cabbage", "Broccoli"],
    correctAnswer: "Broccoli"
},
{
    question:"Which fruit is known as the Chinese apple?",
    options: ["Apples","Pears","Pomegranate"],
    correctAnswer: "Pomegranate"
},
{
    question:"What is also known as a munster plum?",
    options: ["Potatoes", "Plums", "Oranges"],
    correctAnswer: "Potatoes"
},
{
    question:"Which country grew the first orange?",
    options: ["United States", "China", "Argentina"],
    correctAnswer: "China"
},
{
    question:"Which was thought to be poisonous for 200 years in Europe?",
    options: ["Kale", "Tomatoes", "Pumpkins"],
    correctAnswer: "Tomatoes"
}];

var game = {
    correct: 0,
    incorrect: 0,
    timeRemaining: 30,
    countdown: function(){
        game.timeRemaining--;
        $('#timeRemaining').html(game.timeRemaining);
        if (game.timeRemaining<= 0){

            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown, 1000);
        $('#countDown').prepend('<h2>Time Remaining: <span id="timeRemaining">30</span> Seconds</h2>')
        $('#start').remove();
        for(var i=0; i<questions.length; i++){
            $('#main-container').append('<h2>' + questions[i].question+'</h2>');
            for (var j = 0; j < questions[i].options.length; j++){
                $("#main-container").append("<input type= 'radio' name= 'question-"+i+"' value'"+questions[i].options[j]+"'>"+questions[i].options[j]);
            }
        }
    },
    done: function(){
        for (var i = 0; i < questions.length; i++){
            for (var j = 0; j < questions[i].options.length; j++){
        $.each($('input[name="question-0"]:checked'), function(){
            
            if ($(this).val()==questions[j].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
                // I couldn't get the game to register correct answers on the scoreboard. 
                // Also, I was unable to figure out how to loop through the options to check if the answer was correct. 
                // The number of wrong answers get multiplied for some reason, instead of incrementing one.
            }
        });
    }
    }
        this.end();
        
    },
    end: function(){
        clearInterval(timer);
        $('#main-container h2').remove();
        $('#main-container').html("<h2>Time is up!</h2><br><br><h3>Correct: "+this.correct+"<h3><br><br><h3>Incorrect: "+this.incorrect+"<h3><br><br><h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
}