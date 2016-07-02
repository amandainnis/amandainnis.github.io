var brushUp = true;
var type = 'ellipse';

var brushIndex = 0;

var canvasImg;


var brushes = [{
    size: [10, 10]
}, {
    size: [30, 40],
}, {
    size: [50, 60],
}, {
    size: [70, 80]
}];

$('body').on('click', '.titleSpan', function(e) {
    $(this).css('color', 'blue');

    var url = $(this).data('url');

    $('.level1').css('background-image', 'url(' + url + ')');
});


// $('body').on('click', '.titleSpan', function(e) {
//     $(this).css('color', 'blue');

//     var url = $(this).data('url');

//     $('.level1').css('background-image', 'url(' + url + ')');
// });


//by clicking on this, you choose this

$(document).ready(function() {


  
        $.get('https://www.reddit.com/top.json', handleResponse);

        var articles2 = [];
        var paintingTitles = [];
        var images = [];

        /////  articles is a local variable unless declared 
        function handleResponse(response) {
            console.log(response);
                // if (response.data.children.thumbnail === true) {
                //    articles.push(response.data.children)};
            
            articles = response.data.children.map(function(item) {
                return item.data;
            });

            articles2 = jQuery.grep(articles, function( a ) {
                return a.thumbnail !== ("");
            });
           
            articles2.forEach(function(item) {
                images.push(item.thumbnail);
            });

            articles2.forEach(function(item) {
                paintingTitles.push(item.author);
            });
            

            console.log(articles2);
            console.log(paintingTitles);
            console.log(images);

            paintingTitles.forEach(function(title, i) {
                var span = $('<span class="titleSpan">');
                span.text(title);
                span.attr('data-url', images[i]);

               $('.nameYourPainting').append(span); 
            });


        };

        // paintingTitles.forEach(title) {
        //     return('<span class="titleSpan">' + title + '</span>')
        // }

        // $('.nameYourPainting').text(paintingTitles);

    // });



    

    $(".color-pickerBackground").on('change', function() {
        var thisColor = $(".color-pickerBackground").val();
        $('.level1').css('background-color', thisColor) 
        console.log(thisColor);

    });


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

    $(".color-picker3").on('click', function() {
        var thisColor = $(".color-picker3").val();
        console.log(thisColor);
        brushIndex = 3;

    });

   

});
// end of doc ready


function preload() {
  canvasImg = loadImage('url');
  
}

function setup() {
    var canvasOne = createCanvas(580, 580);
    canvasOne.parent('my_parent');
    var canvasTwo = createCanvas(580, 580);
    canvasTwo.parent('emptyFrameCanvas');
};



function draw() {

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
        var color = $(".color-picker2").val();
    } else if (brushIndex === 3) {
        var color = $(".color-picker3").val();
    };




  
    console.log(brush)
    fill(color);
    stroke(color);

    ellipse(mouseX, mouseY, brush.size[0], brush.size[1]);
};
//end of draw function

$('#my_parent').on('mouseup', function() {
    brushUp = true;

    // if (brushUp === true) {
    //  brushUp = false;
    // } else {
    //  brushUp = true;
    // }
});

$('#my_parent').on('mousedown', function() {
    brushUp = false;

    // if (brushUp === true) {
    //  brushUp = false;
    // } else {
    //  brushUp = true;
    // }
});


var screenshotButton = $('#screenshot');
screenshotButton.on('click', function() {
    alert("you got it");
    save('#my_parent.png');
});

var screenshotButton2 = $('#screenshot2');
screenshotButton2.on('click', function() {
    alert("you got it");
    // newImg = $('.level1').css('background-image','url');
    save("$('.level1').css('background-image','url').png");
});


//////////////  html to canvas //////////////////

// $("#screenshot2").click(function() { 
//         html2canvas($(".level1"), {
//             onrendered: function(canvas) {
//                 theCanvas = canvas;
//                 document.body.appendChild(canvas);

//                 canvas.toBlob(function(blob) {
//                     saveAs(blob, "Dashboard.png"); 
//                 });
//             }
//         });
//     });


////////////// end of  html to canvas //////////////////


$('#fileinput1').click(function() {
    var inputImg = $(this).val();
    var $newBkgd = $('.level1').css('background-image', 'url(' + inputImg + ')');

});

// $('.brush0').on('click', function() {
//     if (type === 'ellipse') {
//         type = '';
//     } else {
//         type = 'ellipse';
//     }
// });
