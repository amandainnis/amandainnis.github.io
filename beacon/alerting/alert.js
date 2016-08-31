
var totals = [ 464, 363, 101 ];

var openTotalSummaryBoxTotals = [ 41, 73, 18, 38, 46, 51, 21, 35 ];
var outageSummaryBoxTotals = [ 5, 3, 2, 9, 4, 8, 6, 5 ];
var criticalSummaryBoxTotals = [ 7, 9, 6, 3, 11, 7, 6, 8 ];
var urgentSummaryBoxTotals = [ 17, 11, 21, 19, 9, 9, 8, 36 ];
var commentarySummaryBoxTotals = [ 1, 0, 0, 1, 0, 1, 0, 0 ];
var proActSummaryBoxTotals = [ 10, 11, 3, 4, 17, 16, 5, 16 ];

var riskSummary = $('#riskSummary');
var tradeSummary = $('#tradeSummary');
var stratSummary = $('#stratSummary');
var salesSummary = $('#salesSummary');
var perfSummary = $('#perfSummary');
var prTrdSummary = $('#prTrdSummary');
var systmSummary = $('#systmSummary');
var mrktSummary = $('#mrktSummary');

$(document).ready(function(){

	$('#total').click(function(){
		$('.summary .numbers').removeClass('selectedNumbers');
		$('#total').addClass('selectedNumbers');
		$('#riskSummary').text(openTotalSummaryBoxTotals[0]);
		$('#tradeSummary').text(openTotalSummaryBoxTotals[1]);
		$('#stratSummary').text(openTotalSummaryBoxTotals[2]);
		$('#salesSummary').text(openTotalSummaryBoxTotals[3]);
		$('#perfSummary').text(openTotalSummaryBoxTotals[4]);
		$('#prTrdSummary').text(openTotalSummaryBoxTotals[5]);
		$('#systmSummary').text(openTotalSummaryBoxTotals[6]);
		$('#mrktSummary').text(openTotalSummaryBoxTotals[7]);

	});
	// end of total

	$('#outage').click(function(){
		$('.summary .numbers').removeClass('selectedNumbers');
		$('#outage').addClass('selectedNumbers');
		$('#riskSummary').text(outageSummaryBoxTotals[0]);
		$('#tradeSummary').text(outageSummaryBoxTotals[1]);
		$('#stratSummary').text(outageSummaryBoxTotals[2]);
		$('#salesSummary').text(outageSummaryBoxTotals[3]);
		$('#perfSummary').text(outageSummaryBoxTotals[4]);
		$('#prTrdSummary').text(outageSummaryBoxTotals[5]);
		$('#systmSummary').text(outageSummaryBoxTotals[6]);
		$('#mrktSummary').text(outageSummaryBoxTotals[7]);

	});
	// end of outage

	$('#critical').click(function(){
		$('.summary .numbers').removeClass('selectedNumbers');
		$('#critical').addClass('selectedNumbers');
		$('#riskSummary').text(criticalSummaryBoxTotals[0]);
		$('#tradeSummary').text(criticalSummaryBoxTotals[1]);
		$('#stratSummary').text(criticalSummaryBoxTotals[2]);
		$('#salesSummary').text(criticalSummaryBoxTotals[3]);
		$('#perfSummary').text(criticalSummaryBoxTotals[4]);
		$('#prTrdSummary').text(criticalSummaryBoxTotals[5]);
		$('#systmSummary').text(criticalSummaryBoxTotals[6]);
		$('#mrktSummary').text(criticalSummaryBoxTotals[7]);

	});
	// end of critical

	$('#urgent').click(function(){
		$('.summary .numbers').removeClass('selectedNumbers');
		$('#urgent').addClass('selectedNumbers');
		$('#riskSummary').text(urgentSummaryBoxTotals[0]);
		$('#tradeSummary').text(urgentSummaryBoxTotals[1]);
		$('#stratSummary').text(urgentSummaryBoxTotals[2]);
		$('#salesSummary').text(urgentSummaryBoxTotals[3]);
		$('#perfSummary').text(urgentSummaryBoxTotals[4]);
		$('#prTrdSummary').text(urgentSummaryBoxTotals[5]);
		$('#systmSummary').text(urgentSummaryBoxTotals[6]);
		$('#mrktSummary').text(urgentSummaryBoxTotals[7]);

	});
	// end of urgent

	$('#commentary').click(function(){
		$('.summary .numbers').removeClass('selectedNumbers');
		$('#commentary').addClass('selectedNumbers');
		$('#riskSummary').text(commentarySummaryBoxTotals[0]);
		$('#tradeSummary').text(commentarySummaryBoxTotals[1]);
		$('#stratSummary').text(commentarySummaryBoxTotals[2]);
		$('#salesSummary').text(commentarySummaryBoxTotals[3]);
		$('#perfSummary').text(commentarySummaryBoxTotals[4]);
		$('#prTrdSummary').text(commentarySummaryBoxTotals[5]);
		$('#systmSummary').text(commentarySummaryBoxTotals[6]);
		$('#mrktSummary').text(commentarySummaryBoxTotals[7]);

	});
	// end of commentary

	$('#proAct').click(function(){
		$('.summary .numbers').removeClass('selectedNumbers');
		$('#proAct').addClass('selectedNumbers');
		$('#riskSummary').text(proActSummaryBoxTotals[0]);
		$('#tradeSummary').text(proActSummaryBoxTotals[1]);
		$('#stratSummary').text(proActSummaryBoxTotals[2]);
		$('#salesSummary').text(proActSummaryBoxTotals[3]);
		$('#perfSummary').text(proActSummaryBoxTotals[4]);
		$('#prTrdSummary').text(proActSummaryBoxTotals[5]);
		$('#systmSummary').text(proActSummaryBoxTotals[6]);
		$('#mrktSummary').text(proActSummaryBoxTotals[7]);

	});
	// end of proAct


});
// end of doc ready


