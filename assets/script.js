
function onReady() {

    const timeElement = $("#currentDay");
    const currentDay = moment().format("dddd MMMM Do");
    let currentTime = moment().format("HH");
    currentTime = Number(currentTime);

    //create a time/day tracker that starts when the page loads 
    function setTime() {
        timeElement.text(currentDay);
        //insert date into the header
        //console.log(currentTime);
    }

    var nineTask = $("#input1");
    var nineText =localStorage.getItem("09");
    console.log(nineTask);
    nineTask.val(nineText);

    
    var nineTask = $("#input1");
    var nineText =localStorage.getItem("09");
    console.log(nineTask);
    nineTask.val(nineText);

    function colourChange() {
        // target all the row 
        const rows = $(".task");
        //console.log(rows);

        // loop thru these rows
        rows.each(function (i, row) {
            //console.log(i); // i is the index of the element
            //console.log(row); // row element
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
    setInterval(function () {
        setTime();
        colourChange();

    }, 1000);

    const savebtn = $(".save");

    savebtn.on("click", function (event) {

        const jButton = $(event.target);
        const jButtonCol = jButton.parents();
        const jButtonUserInput = jButtonCol.prev().children();
        const textInput = jButtonUserInput.val();
        const timeOfTask = jButtonCol.prev(".task");
        const timeOfTaskVal = timeOfTask.data("hour");
     

        localStorage.setItem(timeOfTaskVal, textInput);
        console.log(localStorage);
     

    });


    //get value from input

    //save it with get

    //set text content of task

}
$(onReady);
