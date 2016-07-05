var brushUp = true;
var type = 'ellipse';

var brushIndex = 0;

var canvasImg;


var brushes = [{
    size: [10, 10]
}, {
    size: [20, 20],
},{
    size: [30, 40],
}, {
    size: [50, 60],
}, {
    size: [70, 80]
}, {
    size: [100, 100]
}];


function selectBrush(index) {
    brushIndex = index;
}


// global scope so any function can use contents of this handmade variable, this var can have any name
var previousClass = false;

$(document).ready(function() {
       
        
        
        $('h2').on('click', function(){
            $('#studioWall').show();
            $('#main').hide();
        });

        $('h1').on('click', function(){
            $('#studioWall').hide();
            $('#main').show();
        });

        $('.changeRedditImage').on('click', function(){
            $('.nameYourPainting').css({'display': 'block'});
        });

        $('.nameYourPainting').mouseleave(function() {
            $('.nameYourPainting').css({'display': 'none'});
        });

        $('body').on('click', '.titleSpan', function(e) {
            $('.titleSpan').removeClass('selectedJson');

            $(this).addClass('selectedJson');

            var url = $(this).data('url');

            $('.level1').css('background-image', 'url(' + url + ')');
        });


         // $('.level1').addClass('color-burn');


         // turns off previousClass but also stores it as a variable for subsequent calls
         // return states that this is the end of the function, it could return something but in this case it returns undefined
        $('input[type=radio][name=filter]').change(function(){
            if (previousClass) {
               $('.level1').removeClass(previousClass); 
            }
            // following line changes the value of previousClass and holds it above, because previousClass 
            //is a gloabal var, its value persists outside the function terminating
            previousClass = this.value.toLowerCase();
            $('.level1').addClass(previousClass);
        });
        

        $('.filters').on('click', 'li', function (){
            return;
            var thisFilter = $(this).attr("class");

            // $('li').removeClass('selectedFilter');
            $(this).toggleClass('selectedFilter');

            $('.level1').toggleClass(thisFilter);

            // $('.titleSpan').click();
        })

// get this stuff from reddit json and throw it inside handleResponse()--not saying how we're going to use function
        $.get('https://www.reddit.com/top.json', handleResponse);

        var articles2 = [];
        var paintingTitles = [];
        var images = [];


        /////  articles is a local variable unless declared 
        function handleResponse(response) {
            console.log(response);
                // if (response.data.children.thumbnail === true) {
                //    articles.push(response.data.children)};
            
            var articles = response.data.children.map(function(item) {
                return item.data;
            });

            // articles2 = jQuery.grep(articles, function( a ) {
            //     return a.thumbnail !== ("");
            // });

             articles2 = jQuery.grep(articles, function( a ) {
                if ( a.thumbnail.indexOf('http') > -1 ) {
                    return a.thumbnail;
                }
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

            // $('.level1').css('background-image', images[0]);

            paintingTitles.forEach(function(title, i) {
                var span = $('<span class="titleSpan">');
                span.text(title);
                span.attr('data-url', images[i]);

               $('.nameYourPainting').append(span); 

               $('.titleSpan')[0].click();
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

    $(".color-picker4").on('click', function() {
        var thisColor = $(".color-picker4").val();
        console.log(thisColor);
        brushIndex = 4;

    });

    $(".color-picker5").on('click', function() {
        var thisColor = $(".color-picker5").val();
        console.log(thisColor);
        brushIndex = 5;

    });

});
// end of doc ready




function setup() {
    var canvasOne = createCanvas(580, 580);
    canvasOne.parent('my_parent');

    
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
    } else if (brushIndex === 4) {
        var color = $(".color-picker4").val();
    } else if (brushIndex === 5) {
        var color = $(".color-picker5").val();
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


// $('#fileinput1').click(function() {
//     var inputImg = $(this).val();
//     var $newBkgd = $('.level1').css('background-image', 'url(' + inputImg + ')');

// });

// $('.brush0').on('click', function() {
//     if (type === 'ellipse') {
//         type = '';
//     } else {
//         type = 'ellipse';
//     }
// });
