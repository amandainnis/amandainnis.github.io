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










    $('.brush1').on('click', function() {
        var thisColor = $(".color-picker1").val();
        console.log(thisColor);
        $('.brush1').css('background-color', thisColor);

    });


    $('.brush2').on('click', function() {
        var thisColor = $(".color-picker2").val();
        console.log(thisColor);
        $('.brush2').css('background-color', thisColor);

    });



});

function setup() {
    var canvasOne = createCanvas(580, 580);
    canvasOne.parent('my_parent');
}

var brushUp = true;
var type = 'ellipse';

function draw() {
    console.log('draw function ran');
    // 'return' will exit a function and not run anything below it.
    if (brushUp === true) {
        return;
    }

    var color = $('.color-picker1').val();
    fill(color);
    stroke(color);

    if (type === 'ellipse') {
        ellipse(mouseX, mouseY, 30, 40);
    } else {
        ellipse(mouseX, mouseY, 10, 10);
    }
}

$('#my_parent').on('click', function() {
    brushUp = !brushUp;

    // if (brushUp === true) {
    // 	brushUp = false;
    // } else {
    // 	brushUp = true;
    // }
});

$('.brush1').on('click', function() {
    if (type === 'ellipse') {
        type = '';
    } else {
        type = 'ellipse';
    }
});
