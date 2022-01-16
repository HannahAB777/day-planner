
function onReady() {
    
    //create a time/day tracker that starts when the page loads 
    const timeElement = $("#currentDay");
    const currentDay = moment().format("dddd MMMM Do");
    let currentTime = moment().format("HH");
    currentTime = Number(currentTime);
    
    function setTime() {
        timeElement.text(currentDay);
        //insert date into the header
        //console.log(currentTime);
    }

    function colourChange() {
        // target all the row 
        const rows = $(".task");
        //console.log(rows);

        // loop thru these rows
        rows.each(function (i, row) {
            // for each row we will run the time check

            // grab the data-hour attr
            var currentTask = $(row).data("hour");
            currentTask = Number(currentTask);
            // if row time is less than current time
            // grey
            // if row time is === current time
            // red

            // if row time is > current 
            // green
            if (currentTask == currentTime) {
                $(row).addClass("current");
                $(row).removeClass("past");
                $(row).removeClass("future");
            }
            if (currentTask < currentTime) {
                $(row).addClass("past");
                $(row).removeClass("current");
                $(row).removeClass("future");
            }
            if (currentTask > currentTime) {
                $(row).addClass("future");
                $(row).removeClass("past");
                $(row).removeClass("current");
            }
        });

    }
    //running a time and colour check every second
    setInterval(function () {
        setTime();
        colourChange();

    }, 1000);

    const savebtn = $(".save");
//click to save task text to local storage
    savebtn.on("click", function (event) {

        const jButton = $(event.target);
        const jButtonCol = jButton.parents();
        const jButtonUserInput = jButtonCol.prev().children();
        const textInput = jButtonUserInput.val();
        const timeOfTask = jButtonCol.prev(".task");
        const timeOfTaskVal = timeOfTask.data("hour");
     
        localStorage.setItem(timeOfTaskVal, textInput);    
    });
}
$(onReady);
