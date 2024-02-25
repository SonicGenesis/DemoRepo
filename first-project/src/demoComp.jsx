import React from "react";

const currentDate = new Date(12, 1 ,1 ,16);
const currentHour = currentDate.getHours();

let cssObject = {
    color: "",
}

var greeting;
if (currentHour >= 0 && currentHour <= 12) {
    greeting = "Good Morning!";
    cssObject.color = "green";
}
else if (currentHour > 12 && currentHour <= 18) {
    greeting = "Good Afternoon!";
    cssObject.color = "blue";
} else {
    greeting = "Good Evening!";
    cssObject.color = "red"
}

function ClockComponent() {
    return <h1 style={cssObject}>{greeting}</h1>
}

export default ClockComponent;
