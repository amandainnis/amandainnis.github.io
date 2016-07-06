
// Global Variables
	var type = 'ellipse';
	
	var brushIndex = 0;
	var brushUp = true;
	var previousClass = false; // global scope so any function can use contents of this handmade variable, this var can have any name
	
	var canvasImg;
	var screenshotButton = $('#screenshot');
	
	var articles2 = [];
	var paintingTitles = [];
	var images = [];
	
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

function initializeListeners()
{
	/*
		note: All event listeners /should/ be bound to IDs only. This prevents erroniously binding an event to multiple tags
	*/
	
	// NAVIGATION
		$('h2').on('click', function(){
			$('#studioWall').show();
			$('#main').hide();
		});

		$('h1').on('click', function(){
			$('#studioWall').hide();
			$('#main').show();
		});
		
		// this allows for dynamic binding of elements with class type 'titleSpan' to invoke click events and allow the event to bubble up to the 'body' where this function is actually bound
		$('body').on('click', '.titleSpan', function(e) {
			
			// remove from all instances of class 'sectedJson' where class contains 'titleSpan'
			$('.titleSpan').removeClass('selectedJson');

			// the <span> that invoked this function will gain the class 'selectedJson'
			$(this).addClass('selectedJson');

			// <span url="http://" >
			var url = $(this).data('url');
			$('.level1').css('background-image', 'url(' + url + ')');
		});
	
	// REDDIT IMAGeRY
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
		
		$(".color-pickerBackground").on('change', function() {
			var thisColor = $(".color-pickerBackground").val();
			$('.level1').css('background-color', thisColor) 
			// console.log(thisColor);

		});

		$('.changeRedditImage').on('click', function(){
			$('.nameYourPainting').css({'display': 'block'});
		});

		$('.nameYourPainting').mouseleave(function() {
			$('.nameYourPainting').css({'display': 'none'});
		});
	
/* this was the old method of selecting a filter
	$('.filters').on('click', 'li', function (){
		return;
		var thisFilter = $(this).attr("class");

		// $('li').removeClass('selectedFilter');
		$(this).toggleClass('selectedFilter');

		$('.level1').toggleClass(thisFilter);

		// $('.titleSpan').click();
	})
*/
	// CANVAS EVENTS
		// BRUSHES
			$(".color-picker0").on('click', function() {
				var thisColor = $(".color-picker0").val();
				// console.log(thisColor);
				brushIndex = 0;

			});


			$(".color-picker1").on('click', function() {
				var thisColor = $(".color-picker1").val();
				// console.log(thisColor);
				brushIndex = 1;

			});

			$(".color-picker2").on('click', function() {
				var thisColor = $(".color-picker2").val();
				// console.log(thisColor);
				brushIndex = 2;

			});

			$(".color-picker3").on('click', function() {
				var thisColor = $(".color-picker3").val();
				// console.log(thisColor);
				brushIndex = 3;

			});

			$(".color-picker4").on('click', function() {
				var thisColor = $(".color-picker4").val();
				// console.log(thisColor);
				brushIndex = 4;

			});

			$(".color-picker5").on('click', function() {
				var thisColor = $(".color-picker5").val();
				// console.log(thisColor);
				brushIndex = 5;

			});

}


$(document).ready(function() {
	initializeListeners();
	
	// get this stuff from reddit json and throw it inside handleResponse()--not saying how we're going to use function
	$.get('https://www.reddit.com/top.json', handleResponse);
});
// end of doc ready

function handleResponse(response) {
	// console.log(response);
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
	

	// console.log(articles2);
	// console.log(paintingTitles);
	// console.log(images);

	// $('.level1').css('background-image', images[0]);

	paintingTitles.forEach(function(title, i) {
		var span = $('<span class="titleSpan">');
		span.text(title);
		span.attr('data-url', images[i]);

	   $('.nameYourPainting').append(span); 

	   $('.titleSpan')[0].click();
	});


};

//         [----Pixel Density----]        [-Visual Representation-]
// <canvas width="580" height="580" style="width: 580; height: 580">


function setup() {
	// we need to create this canvas based on the scale of the platform we're using (pc, tablet, phone)
    var canvasOne = createCanvas(580, 580);
	// canvasOne.style="width:275px, height: 275px";
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

    // console.log(brush)
    fill(color);
    stroke(color);
	
	// mouseX and mouseY need to be adjust to the scale of the canvas
	// this is the attributied width and height vs the css width and height

	// console.log( "MousXY - " + mouseX + " , " + mouseY + " | TouchXY - " + touchX + ", " + touchY );
    // ellipse(touchX, touchY, brush.size[0], brush.size[1]);
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




screenshotButton.on('click', function() {
    alert("title your painting!");
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
