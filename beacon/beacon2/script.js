$(document).ready(function(){
	$('#beaconExpand').on('click', function(){
		$('#wrapper').toggleClass('wrapperWidth');
	})



var myContactsList = [
            {last: "Axelrod", first: "Bobby", company: "Axe Capital Investment Management, LLC", segment: "Platinum", days: 2, workPhone: 212-345-6789, email: "axe@axecapital.com", addStreet: "121 Madison Ave", addCity: "New York", addState: "NY", addZip: 123456},
            {last: "Axelrod", first: "David", company: "Fidelity Capital Management", segment: "Gold", days: 3, workPhone: 212-365-7189, email: "david@fidelity.com", addStreet: "721 Fifth Ave", addCity: "New York", addState: "NY", addZip: 123456},
            {last: "Ermantraut", first: "Mike", company: "Millenium Capital Management", segment: "G75", days: 15, workPhone: 412-395-7139, email: "ermantraut@milcapman.com", addStreet: "21 Fifth Ave", addCity: "Pittsburgh", addState: "PA", addZip: 123456},
            {last: "Bhanuprakesh", first: "Guntimadugu", company: "Fast Apac Management", segment: "Gold", days: 25, workPhone: 212-932-7891, email: "buku@apac.com", addStreet: "21 Lexington Ave", addCity: "New York", addState: "NY", addZip: 123456},
]





function makeContactsList(last, first, company, segment, days, elapsedColor) {
   		var newContact = $('<div class="row"> <div class="col nameCol">' + last + ', ' + first + '</div> <div class="col compCol">' + company + '</div><div class="col segmentCol">' + segment + '</div><div class="col daysSinceCol"><div class="timeElapsed ' + elapsedColor + '">'+ days +'</div></div><div class="col actionsCol"> <div class="iconGang"><i class="mdi mdi-email-outline"></i><div class="ibChat"><img src="ib_chat_small.png"></div><i class="mdi mdi-phone"></i></div></div></div>');
   		$('#contactList').append(newContact);
   		
   };

function returnElapsedColor(daysSince){
			if (daysSince > 14) {
	   			myElapsedColor = "red";
	   		}
	   		else if (daysSince > 7) {
	   			myElapsedColor = "yellow";
	   		}
	   		else {
	   			myElapsedColor = "green";}

	   		return myElapsedColor;
	   		
	}


console.log(returnElapsedColor(8));

function iterateDisplay(arr) {
	for (i = 0; i < arr.length; i++) {	
       makeContactsList(arr[i].last, arr[i].first, arr[i].company, arr[i].segment, arr[i].days, returnElapsedColor(arr[i].days));
        
     }};

    

iterateDisplay(myContactsList);





})
// end docready