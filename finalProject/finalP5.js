

var brushUp = true;
var type = 'ellipse';

var brushIndex = 0;


var brushes = [{
	size: [10, 10]
}, {
	size: [30, 40],	
}, {
    size: [50, 60]
}
];


$(document).ready(function() {


    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBZtTlNFZZdXACckXIoQ6JkLLrogJPyagY",
        authDomain: "drawingundefined.firebaseapp.com",
        databaseURL: "https://drawingundefined.firebaseio.com",
        storageBucket: "drawingundefined.appspot.com",
    };
    firebase.initializeApp(config);

    var firebaseAuth = firebase.auth();
    var provider = new firebase.auth.GoogleAuthProvider();

    var token;
    var currentUser;










    $(".color-picker0").on('click', function() {
        var thisColor = $(".color-picker0").val();
        console.log(thisColor);
        brushIndex = 0;

    });


    $(".color-picker1").on('click', function() {
        var thisColor = $(".color-picker1").val();
        console.log(thisColor);
        brushIndex = 1;

    });

    $(".color-picker2").on('click', function() {
        var thisColor = $(".color-picker2").val();
        console.log(thisColor);
        brushIndex = 2;

    });

    $("#triangle").on('click', function() {
        var thisShape = triangle(290, 225, 450, 175, 550, 225);
        

    });

});

function setup() {
    var canvasOne = createCanvas(580, 580);
    canvasOne.parent('my_parent');
}



function draw() {
    console.log('draw function ran');
    // 'return' will exit a function and not run anything below it.
    if (brushUp === true) {
        return;
    }

    var brush = brushes[brushIndex];
    if (brushIndex === 0) {
    	var color = $(".color-picker0").val();
    } else if (brushIndex === 1) {
    	var color = $(".color-picker1").val();
    } else if (brushIndex === 2) {
        var color = $(".color-picker2").val();}




    // var color = $('.color-picker0').val();
    console.log(brush)
    fill(color);
    stroke(color);

    ellipse(mouseX, mouseY, brush.size[0], brush.size[1]);
}
//end of draw function

$('#my_parent').on('mouseup', function() {
    brushUp = true;

    // if (brushUp === true) {
    // 	brushUp = false;
    // } else {
    // 	brushUp = true;
    // }
});

$('#my_parent').on('mousedown', function() {
    brushUp = false;

    // if (brushUp === true) {
    // 	brushUp = false;
    // } else {
    // 	brushUp = true;
    // }
});


var screenshotButton = $('#screenshot');
screenshotButton.on('click', function(){
	alert("you got it");
	save('#my_parent.png');
});


$('#fileinput1').click(function(){
    var inputImg = $(this).val();
    var $newBkgd = $('.level1').css('background-image', inputImg);
    
});
    


// $('.brush0').on('click', function() {
//     if (type === 'ellipse') {
//         type = '';
//     } else {
//         type = 'ellipse';
//     }
// });
