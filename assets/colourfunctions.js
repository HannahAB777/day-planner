//current time tracker
const currentTime = moment().format("HH:mm");

//check time and adjust colors
function nineColor() {
    const nineElement = $("#9am-element");
    var currentHour = nineElement.text();
    if (currentHour == currentTime) {
        $("#9am-text").addClass("current");
        $("#9am-text").removeClass("past");
        $("#9am-text").removeClass("future");
    }
    if (currentHour <= currentTime) {
        $("#9am-text").addClass("past");
        $("#9am-text").removeClass("current");
        $("#9am-text").removeClass("future");
    }
    if (currentHour >= currentTime) {
        $("#9am-text").addClass("future");
        $("#9am-text").removeClass("past");
        $("#9am-text").removeClass("current");
    }
}
function tenColor() {
    const tenElement = $("#10am-element");
    var currentHour = tenElement.text();
    if (currentHour == currentTime) {
        $("#10am-text").addClass("current");
        $("#10am-text").removeClass("past");
        $("#10am-text").removeClass("future");
    }
    if (currentHour <= currentTime) {
        $("#10am-text").addClass("past");
        $("#10am-text").removeClass("current");
        $("#10am-text").removeClass("future");
    }
    if (currentHour >= currentTime) {
        $("#10am-text").addClass("future");
        $("#10am-text").removeClass("past");
        $("#10am-text").removeClass("current");
    }
}
function elevenColor() {
    const elevenElement = $("#11am-element");
    var currentHour = elevenElement.text();
    if (currentHour == currentTime) {
        $("#11am-text").addClass("current");
        $("#11am-text").removeClass("past");
        $("#11am-text").removeClass("future");
    }
    if (currentHour <= currentTime) {
        $("#11am-text").addClass("past");
        $("#11am-text").removeClass("current");
        $("#11am-text").removeClass("future");
    }
    if (currentHour >= currentTime) {
        $("#11am-text").addClass("future");
        $("#11am-text").removeClass("past");
        $("#11am-text").removeClass("current");
    }
}
function twelveColor(){
    const twelveElement = $("#12pm-element");
    var currentHour = twelveElement.text();
    if (currentHour == currentTime) {
        $("#12pm-text").addClass("current");
        $("#12pm-text").removeClass("past");
        $("#12pm-text").removeClass("future");
    }
    if (currentHour <= currentTime) {
        $("#12pm-text").addClass("past");
        $("#12pm-text").removeClass("current");
        $("#12pm-text").removeClass("future");
    }
    if (currentHour >= currentTime) {
        $("#12pm-text").addClass("future");
        $("#12pm-text").removeClass("past");
        $("#12pm-text").removeClass("current");
    }
}
function oneColor() {
    const oneElement = $("#1pm-element");
    var currentHour = oneElement.text();
    if (currentHour == currentTime) {
        $("#1pm-text").addClass("current");
        $("#1pm-text").removeClass("past");
        $("#1pm-text").removeClass("future");
    }
    if (currentHour <= currentTime) {
        $("#1pm-text").addClass("past");
        $("#1pm-text").removeClass("current");
        $("#1pm-text").removeClass("future");
    }
    if (currentHour >= currentTime) {
        $("#1pm-text").addClass("future");
        $("#1pm-text").removeClass("past");
        $("#1pm-text").removeClass("current");
    }
} function twoColor() {
    const twoElement = $("#2pm-element");
    var currentHour = twoElement.text();
    if (currentHour == currentTime) {
        $("#2pm-text").addClass("current");
        $("#2pm-text").removeClass("past");
        $("#2pm-text").removeClass("future");
    }
    if (currentHour <= currentTime) {
        $("#2pm-text").addClass("past");
        $("#2pm-text").removeClass("current");
        $("#2pm-text").removeClass("future");
    }
    if (currentHour >= currentTime) {
        $("#2pm-text").addClass("future");
        $("#2pm-text").removeClass("past");
        $("#2pm-text").removeClass("current");
    }
}
function threeColor() {
    const threeElement = $("#3pm-element");
    var currentHour = threeElement.text();
    if (currentHour == currentTime) {
        $("#3pm-text").addClass("current");
        $("#3pm-text").removeClass("past");
        $("#3pm-text").removeClass("future");
    }
    if (currentHour <= currentTime) {
        $("#3pm-text").addClass("past");
        $("#3pm-text").removeClass("current");
        $("#3pm-text").removeClass("future");
    }
    if (currentHour >= currentTime) {
        $("#3pm-text").addClass("future");
        $("#3pm-text").removeClass("past");
        $("#3pm-text").removeClass("current");
    }
}
function fourColor() {
    const fourElement = $("#4pm-element");
    var currentHour = fourElement.text();
    if (currentHour == currentTime) {
        $("#4pm-text").addClass("current");
        $("#4pm-text").removeClass("past");
        $("#4pm-text").removeClass("future");
    }
    if (currentHour <= currentTime) {
        $("#4pm-text").addClass("past");
        $("#4pm-text").removeClass("current");
        $("#4pm-text").removeClass("future");
    }
    if (currentHour >= currentTime) {
        $("#4pm-text").addClass("future");
        $("#4pm-text").removeClass("past");
        $("#4pm-text").removeClass("current");
    }
}
function fiveColor() {
    const fiveElement = $("#5pm-element");
    var currentHour = fiveElement.text();
    if (currentHour == currentTime) {
        $("#5pm-text").addClass("current");
        $("#5pm-text").removeClass("past");
        $("#5pm-text").removeClass("future");
    }
    if (currentHour <= currentTime) {
        $("#5pm-text").addClass("past");
        $("#5pm-text").removeClass("current");
        $("#5pm-text").removeClass("future");
    }
    if (currentHour >= currentTime) {
        $("#5pm-text").addClass("future");
        $("#5pm-text").removeClass("past");
        $("#5pm-text").removeClass("current");
    }
}