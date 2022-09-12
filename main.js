let howAMI = ["happy", "angry", "sad", "tired", "thinking"] 


function mood() {
    //the following line gets a random number of the array
    const i = Math.floor(Math.random() * howAMI.length)
    //the following line gets the random number and picks the corresponding item from the howAMI array
    //store array value based on index position into variable
    const selectedMood = howAMI[i]
    console.log(selectedMood + ".png")
    //this should select the html element which apply a change to it
    const elem = document.getElementById('background-image');
    elem.style.backgroundImage = "url(images/" + selectedMood + ".png)";
    elem.style.height = "100px";
    elem.style.width = "100px";
    elem.style.margin = "10px";

}




