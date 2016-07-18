
// ORIGINAL NYT CODE



// var nyt = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// nyt += '?' + $.param({
//   'api-key': "d6ba56bec4a945d8bb9862791f0fcde1"
// });
// $.ajax({
//   url: nyt,
//   method: 'GET',
// }).done(function(result) {

//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });





// this didn't work and said nyt is not a function


// var nyt = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// nyt ({
//   'api-key': "d6ba56bec4a945d8bb9862791f0fcde1"
// });
// $.ajax({
//   url: nyt,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });



// WANTED TO THROW A CALLBACK IN HERE (like below from former api call) BUT COULDN'T FIGURE OUT HOW

// $.get('https://www.reddit.com/top.json', handleResponse);




var nytObj = [];
var nytImg = [];
var nytURL = [];




var nyt = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=d6ba56bec4a945d8bb9862791f0fcde1";
$.ajax({
  url: nyt,
  method: 'GET',
}).done(function(result) {

  console.log(result);

  nytObj = result.response.docs; 
  console.log(nytObj);

// ADDED THIS BIT IN AFTER ALL BELOW CODE FAILED

  nytImg = nytObj.map(function(itemInArray) {
  if (itemInArray.multimedia && itemInArray.multimedia[1])	
  return itemInArray.multimedia[1].url;
  });

  console.log(nytImg);

// END OF ADDITION




// UNNECESSARY

  // nytUrl = nytObj.map(function(itemInArray) {
  // return itemInArray.web_url;
  // });

  // console.log(nytUrl);




  $('.level1').css('background-image', 'url(http://www.nytimes.com/' + nytImg[4] + ')');	

}).fail(function(err) {
  throw err;
});


///////////// submit 


$('.submitImage').click(function(){
	var inputText = $('.newImage').val();
	$('.level2').css('background-image', 'url(' + inputText + ')');
});











// ATTEMPT TO LOAD NEXT IMAGE VIA STATING INDEX WAS SUCCESSFUL

// $('#nextNytImg').click(function(){
// 	$('.level1').css('background-image', 'url(http://www.nytimes.com/' + nytImg[1] + ')');
// });


// ATTEMPT TO LOAD NEXT IMAGE VIA ITERATION IS A MISERABLE FAILURE
var currentImgIndex = 0;

$('#nextNytImg').click(function(){
	// if will always run the first logical statement, if there re a lot of && then put oftenmost false thing first
			if (++currentImgIndex >= nytImg.length){
				currentImgIndex = 0;
			}
			$('.level1').css('background-image', 'url(http://www.nytimes.com/' + nytImg[currentImgIndex] + ')');
		
	
});

$('#prevNytImg').click(function(){
	// if will always run the first logical statement, if there re a lot of && then put oftenmost false thing first
			if (--currentImgIndex < 0){
				currentImgIndex = nytImg.length -1;
			}
			$('.level1').css('background-image', 'url(http://www.nytimes.com/' + nytImg[currentImgIndex] + ')');
		
	
});


// ATTEMPT TO LOAD NEXT IMAGE VIA ITERATION IS A SLIGHTLY LESSER FAILURE
// HERE'S What i want:  every time you click, you get the next image in the array

// $('#nextNytImg').click(function(){
// 	for (var j= 1; j< nytImg.length; j++)
// 	$('.level1').css('background-image', 'url(http://www.nytimes.com/' + nytImg[j] + ')');
	
	
// });



// ALSO FAILED, I'M FUCKING TIRED AT THIS POINT, IT IS HOUR #4 AND I AM GOING TO QUIT

// nytImg.forEach(function(image, i) {
		
// 	$('#nextNytImg').click(function(){
	
// 	var loadNext = $('.level1').css('background-image', 'url(http://www.nytimes.com/' + image + ')');
	
	
// 	});

// });




















// DID NOT WORK

// nytObj.forEach(function(value, index) { 
// 	return this.multimedia}
// console.log(nytObj);





// DID NOT WORK   BUT IT COULD HAVE WORKED SAID MARK


// var nytImg2 = [];

// 	for (var i = 0; i < nytObj.length; i++) {
// 		nytImg2.push(nytObj[i].multimedia[1].url); 
// 	}
// 	console.log(nytImg2);




// DID NOT WORK

// function handleImages (arr) {
// 	for (var i = 0; i < arr.length; i++) {
// 		console.log(arr[i]); 
// 	}
	
// };

// handleImages(nytObj);





// DID NOT WORK

// nytImg = nytObj.map(function(itemInArray) {
//   return itemInArray.multimedia;
// });


// console.log(nytImg);








/////////////////////////////////////////// FAILURE TO PLACE IMG /////////////////////////////////////////

// DID NOT WORK
			
// $(document).ready(function(){
// 	$('.level1').css('background-image', 'url(' + nytImg[0] + ')');
// });
// 			









