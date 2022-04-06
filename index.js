// First Segment

//first code
document.getElementById("btn").addEventListener('click', function () {
    var print = document.getElementById("sel");
    if (print.options[print.selectedIndex].text == "Chose:") {
        document.getElementById("display").innerHTML = "You need to chose a Color";
    } else {
        document.getElementById("display").innerHTML = print.options[print.selectedIndex].text;
    }

    var color = document.getElementById("display").innerHTML;
    console.log(color);

    if (print.options[print.selectedIndex].text == color) {
        document.body.style.backgroundColor = color;
        document.getElementById("display").style.color = "white";
        document.getElementById("display2").style.color = "white";
        document.getElementById("title").style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.getElementById("display").style.color = "black";
        document.getElementById("display2").style.color = "black";
        document.getElementById("title").style.color = "black";
    }
    
});
// second code
document.getElementById("btn2").addEventListener('click', function () {
    var test = document.getElementById("text1").value.replace("_", "");
    console.log(test);
    var print = document.getElementById("sel");
    print.options[print.selectedIndex].text = test;
    print.options[print.selectedIndex].style.color = test;
    document.body.style.backgroundColor = test;
    
    if (print.options[print.selectedIndex].text == test) {
        document.body.style.backgroundColor = test;
        document.getElementById("display").style.color = "white";
        document.getElementById("display2").style.color = "white";
        document.getElementById("title").style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.getElementById("display").style.color = "black";
        document.getElementById("display2").style.color = "black";
        document.getElementById("title").style.color = "black";
    }
    if (test == "") {
        document.getElementById("display").innerHTML = "You need to chose a Color";
    } else {
        document.getElementById("display").innerHTML = print.options[print.selectedIndex].text;
    }
    var color = document.getElementById("display").innerHTML;
    console.log(color);
});
console.log(print);

//Second Segment

//first code
document.getElementById("btn_rand").addEventListener('click', function () {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
        document.getElementById("display").style.color = "white";
        document.getElementById("title").style.color = "white";
        document.getElementById("display2").style.color = "white";
        document.getElementById("btn_color").style.color = "black";
        var display = document.getElementById("btn_color").innerHTML = "#" + randomColor;
        var test = display;
});

//second code
document.getElementById("btn_sett").addEventListener('click', function() {
    document.location.reload();
});

//third code
document.getElementById("btn_color").addEventListener('click', function () {
    document.getElementById("btn_color").style.color = "red";
    document.getElementById("btn_color").innerHTML = "Click Random";
    
});

// Third Segment

//first code
document.getElementById("color_box").oninput = function() {
    var box = document.getElementById("color_box").value;
    console.log(box);

    if (box.value == "#ffffff") {
        document.body.style.backgroundColor = box;
        document.getElementById("display").style.color = "black";
        document.getElementById("display2").style.color = "black";
        document.getElementById("title").style.color = "black";
        document.getElementById("display2").innerHTML = box;
    } else {
        document.body.style.backgroundColor = box;
        document.getElementById("display").style.color = "white";
        document.getElementById("display2").style.color = "white";
        document.getElementById("title").style.color = "white";
        document.getElementById("display2").innerHTML = box;
    }
}


