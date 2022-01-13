
function onReady(){
    
    const timeElement = $("#currentDay");
    const currentDay = moment().format("dddd MMMM Do");
    const currentTime = moment().format("HH:mm");
    //create a time/day tracker that starts when the page loads 
    function setTime(){
    timeElement.text(currentDay);
    //insert date into the header
    console.log(currentTime);
   }
   
    setInterval(function (){
       setTime();
       nineColor();
       tenColor();
       elevenColor();
       twelveColor();
       oneColor();
       twoColor();
       threeColor();
       fourColor();
       fiveColor();
    },1000);

    //save text content from input into local storage
    //click btn
    //save text input to local storage
    
    // clear input



}
$(onReady);










//make a function for current hour
//change the colour to red/current

//function for if an hour  has past
//change class to grey/past

//create function for future
//change class to future/green

//function for entering data in table

//fucntion for saving to local storage
//click event to tagret the current row and store the data

//fucntion for clearing contence