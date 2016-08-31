
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

		///////// MINIS ////////

		$('#riskSummaryMy').text(Math.round(Math.random() * openTotalSummaryBoxTotals[0]));
		$('#riskSummaryDsk').text(Math.round(Math.random() * openTotalSummaryBoxTotals[0]));
		$('#riskSummaryCov').text(Math.round(Math.random() * openTotalSummaryBoxTotals[0]));
		$('#riskSummaryVip').text(Math.round(Math.random() * openTotalSummaryBoxTotals[0]));

		$('#tradeSummaryMy').text(Math.round(Math.random() * openTotalSummaryBoxTotals[1]));
		$('#tradeSummaryDsk').text(Math.round(Math.random() * openTotalSummaryBoxTotals[1]));
		$('#tradeSummaryCov').text(Math.round(Math.random() * openTotalSummaryBoxTotals[1]));
		$('#tradeSummaryVip').text(Math.round(Math.random() * openTotalSummaryBoxTotals[1]));

		$('#stratSummaryMy').text(Math.round(Math.random() * openTotalSummaryBoxTotals[2]));
		$('#stratSummaryDsk').text(Math.round(Math.random() * openTotalSummaryBoxTotals[2]));
		$('#stratSummaryCov').text(Math.round(Math.random() * openTotalSummaryBoxTotals[2]));
		$('#stratSummaryVip').text(Math.round(Math.random() * openTotalSummaryBoxTotals[2]));

		$('#salesSummaryMy').text(Math.round(Math.random() * openTotalSummaryBoxTotals[3]));
		$('#salesSummaryDsk').text(Math.round(Math.random() * openTotalSummaryBoxTotals[3]));
		$('#salesSummaryCov').text(Math.round(Math.random() * openTotalSummaryBoxTotals[3]));
		$('#salesSummaryVip').text(Math.round(Math.random() * openTotalSummaryBoxTotals[3]));

		$('#perfSummaryMy').text(Math.round(Math.random() * openTotalSummaryBoxTotals[4]));
		$('#perfSummaryDsk').text(Math.round(Math.random() * openTotalSummaryBoxTotals[4]));
		$('#perfSummaryCov').text(Math.round(Math.random() * openTotalSummaryBoxTotals[4]));
		$('#perfSummaryVip').text(Math.round(Math.random() * openTotalSummaryBoxTotals[4]));

		$('#prTrdSummaryMy').text(Math.round(Math.random() * openTotalSummaryBoxTotals[5]));
		$('#prTrdSummaryDsk').text(Math.round(Math.random() * openTotalSummaryBoxTotals[5]));
		$('#prTrdSummaryCov').text(Math.round(Math.random() * openTotalSummaryBoxTotals[5]));
		$('#prTrdSummaryVip').text(Math.round(Math.random() * openTotalSummaryBoxTotals[5]));

		$('#systmSummaryMy').text(Math.round(Math.random() * openTotalSummaryBoxTotals[6]));
		$('#systmSummaryDsk').text(Math.round(Math.random() * openTotalSummaryBoxTotals[6]));
		$('#systmSummaryCov').text(Math.round(Math.random() * openTotalSummaryBoxTotals[6]));
		$('#systmSummaryVip').text(Math.round(Math.random() * openTotalSummaryBoxTotals[6]));

		$('#mrktSummaryMy').text(Math.round(Math.random() * openTotalSummaryBoxTotals[7]));
		$('#mrktSummaryDsk').text(Math.round(Math.random() * openTotalSummaryBoxTotals[7]));
		$('#mrktSummaryCov').text(Math.round(Math.random() * openTotalSummaryBoxTotals[7]));
		$('#mrktSummaryVip').text(Math.round(Math.random() * openTotalSummaryBoxTotals[7]));

	});
	// end of total

	//////////////////////////////  OUTAGE ////////////////////////////////////

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

		///////// MINIS ////////

		$('#riskSummaryMy').text(Math.round(Math.random() * outageSummaryBoxTotals[0]));
		$('#riskSummaryDsk').text(Math.round(Math.random() * outageSummaryBoxTotals[0]));
		$('#riskSummaryCov').text(Math.round(Math.random() * outageSummaryBoxTotals[0]));
		$('#riskSummaryVip').text(Math.round(Math.random() * outageSummaryBoxTotals[0]));

		$('#tradeSummaryMy').text(Math.round(Math.random() * outageSummaryBoxTotals[1]));
		$('#tradeSummaryDsk').text(Math.round(Math.random() * outageSummaryBoxTotals[1]));
		$('#tradeSummaryCov').text(Math.round(Math.random() * outageSummaryBoxTotals[1]));
		$('#tradeSummaryVip').text(Math.round(Math.random() * outageSummaryBoxTotals[1]));

		$('#stratSummaryMy').text(Math.round(Math.random() * outageSummaryBoxTotals[2]));
		$('#stratSummaryDsk').text(Math.round(Math.random() * outageSummaryBoxTotals[2]));
		$('#stratSummaryCov').text(Math.round(Math.random() * outageSummaryBoxTotals[2]));
		$('#stratSummaryVip').text(Math.round(Math.random() * outageSummaryBoxTotals[2]));

		$('#salesSummaryMy').text(Math.round(Math.random() * outageSummaryBoxTotals[3]));
		$('#salesSummaryDsk').text(Math.round(Math.random() * outageSummaryBoxTotals[3]));
		$('#salesSummaryCov').text(Math.round(Math.random() * outageSummaryBoxTotals[3]));
		$('#salesSummaryVip').text(Math.round(Math.random() * outageSummaryBoxTotals[3]));

		$('#perfSummaryMy').text(Math.round(Math.random() * outageSummaryBoxTotals[4]));
		$('#perfSummaryDsk').text(Math.round(Math.random() * outageSummaryBoxTotals[4]));
		$('#perfSummaryCov').text(Math.round(Math.random() * outageSummaryBoxTotals[4]));
		$('#perfSummaryVip').text(Math.round(Math.random() * outageSummaryBoxTotals[4]));

		$('#prTrdSummaryMy').text(Math.round(Math.random() * outageSummaryBoxTotals[5]));
		$('#prTrdSummaryDsk').text(Math.round(Math.random() * outageSummaryBoxTotals[5]));
		$('#prTrdSummaryCov').text(Math.round(Math.random() * outageSummaryBoxTotals[5]));
		$('#prTrdSummaryVip').text(Math.round(Math.random() * outageSummaryBoxTotals[5]));

		$('#systmSummaryMy').text(Math.round(Math.random() * outageSummaryBoxTotals[6]));
		$('#systmSummaryDsk').text(Math.round(Math.random() * outageSummaryBoxTotals[6]));
		$('#systmSummaryCov').text(Math.round(Math.random() * outageSummaryBoxTotals[6]));
		$('#systmSummaryVip').text(Math.round(Math.random() * outageSummaryBoxTotals[6]));

		$('#mrktSummaryMy').text(Math.round(Math.random() * outageSummaryBoxTotals[7]));
		$('#mrktSummaryDsk').text(Math.round(Math.random() * outageSummaryBoxTotals[7]));
		$('#mrktSummaryCov').text(Math.round(Math.random() * outageSummaryBoxTotals[7]));
		$('#mrktSummaryVip').text(Math.round(Math.random() * outageSummaryBoxTotals[7]));

	});
	// end of outage

	//////////////////////////////  CRITICAL ////////////////////////////////////

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

		///////// MINIS ////////

		$('#riskSummaryMy').text(Math.round(Math.random() * criticalSummaryBoxTotals[0]));
		$('#riskSummaryDsk').text(Math.round(Math.random() * criticalSummaryBoxTotals[0]));
		$('#riskSummaryCov').text(Math.round(Math.random() * criticalSummaryBoxTotals[0]));
		$('#riskSummaryVip').text(Math.round(Math.random() * criticalSummaryBoxTotals[0]));

		$('#tradeSummaryMy').text(Math.round(Math.random() * criticalSummaryBoxTotals[1]));
		$('#tradeSummaryDsk').text(Math.round(Math.random() * criticalSummaryBoxTotals[1]));
		$('#tradeSummaryCov').text(Math.round(Math.random() * criticalSummaryBoxTotals[1]));
		$('#tradeSummaryVip').text(Math.round(Math.random() * criticalSummaryBoxTotals[1]));

		$('#stratSummaryMy').text(Math.round(Math.random() * criticalSummaryBoxTotals[2]));
		$('#stratSummaryDsk').text(Math.round(Math.random() * criticalSummaryBoxTotals[2]));
		$('#stratSummaryCov').text(Math.round(Math.random() * criticalSummaryBoxTotals[2]));
		$('#stratSummaryVip').text(Math.round(Math.random() * criticalSummaryBoxTotals[2]));

		$('#salesSummaryMy').text(Math.round(Math.random() * criticalSummaryBoxTotals[3]));
		$('#salesSummaryDsk').text(Math.round(Math.random() * criticalSummaryBoxTotals[3]));
		$('#salesSummaryCov').text(Math.round(Math.random() * criticalSummaryBoxTotals[3]));
		$('#salesSummaryVip').text(Math.round(Math.random() * criticalSummaryBoxTotals[3]));

		$('#perfSummaryMy').text(Math.round(Math.random() * criticalSummaryBoxTotals[4]));
		$('#perfSummaryDsk').text(Math.round(Math.random() * criticalSummaryBoxTotals[4]));
		$('#perfSummaryCov').text(Math.round(Math.random() * criticalSummaryBoxTotals[4]));
		$('#perfSummaryVip').text(Math.round(Math.random() * criticalSummaryBoxTotals[4]));

		$('#prTrdSummaryMy').text(Math.round(Math.random() * criticalSummaryBoxTotals[5]));
		$('#prTrdSummaryDsk').text(Math.round(Math.random() * criticalSummaryBoxTotals[5]));
		$('#prTrdSummaryCov').text(Math.round(Math.random() * criticalSummaryBoxTotals[5]));
		$('#prTrdSummaryVip').text(Math.round(Math.random() * criticalSummaryBoxTotals[5]));

		$('#systmSummaryMy').text(Math.round(Math.random() * criticalSummaryBoxTotals[6]));
		$('#systmSummaryDsk').text(Math.round(Math.random() * criticalSummaryBoxTotals[6]));
		$('#systmSummaryCov').text(Math.round(Math.random() * criticalSummaryBoxTotals[6]));
		$('#systmSummaryVip').text(Math.round(Math.random() * criticalSummaryBoxTotals[6]));

		$('#mrktSummaryMy').text(Math.round(Math.random() * criticalSummaryBoxTotals[7]));
		$('#mrktSummaryDsk').text(Math.round(Math.random() * criticalSummaryBoxTotals[7]));
		$('#mrktSummaryCov').text(Math.round(Math.random() * criticalSummaryBoxTotals[7]));
		$('#mrktSummaryVip').text(Math.round(Math.random() * criticalSummaryBoxTotals[7]));

	});
	// end of critical

	//////////////////////////////  URGENT ////////////////////////////////////

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

		///////// MINIS ////////

		$('#riskSummaryMy').text(Math.round(Math.random() * urgentSummaryBoxTotals[0]));
		$('#riskSummaryDsk').text(Math.round(Math.random() * urgentSummaryBoxTotals[0]));
		$('#riskSummaryCov').text(Math.round(Math.random() * urgentSummaryBoxTotals[0]));
		$('#riskSummaryVip').text(Math.round(Math.random() * urgentSummaryBoxTotals[0]));

		$('#tradeSummaryMy').text(Math.round(Math.random() * urgentSummaryBoxTotals[1]));
		$('#tradeSummaryDsk').text(Math.round(Math.random() * urgentSummaryBoxTotals[1]));
		$('#tradeSummaryCov').text(Math.round(Math.random() * urgentSummaryBoxTotals[1]));
		$('#tradeSummaryVip').text(Math.round(Math.random() * urgentSummaryBoxTotals[1]));

		$('#stratSummaryMy').text(Math.round(Math.random() * urgentSummaryBoxTotals[2]));
		$('#stratSummaryDsk').text(Math.round(Math.random() * urgentSummaryBoxTotals[2]));
		$('#stratSummaryCov').text(Math.round(Math.random() * urgentSummaryBoxTotals[2]));
		$('#stratSummaryVip').text(Math.round(Math.random() * urgentSummaryBoxTotals[2]));

		$('#salesSummaryMy').text(Math.round(Math.random() * urgentSummaryBoxTotals[3]));
		$('#salesSummaryDsk').text(Math.round(Math.random() * urgentSummaryBoxTotals[3]));
		$('#salesSummaryCov').text(Math.round(Math.random() * urgentSummaryBoxTotals[3]));
		$('#salesSummaryVip').text(Math.round(Math.random() * urgentSummaryBoxTotals[3]));

		$('#perfSummaryMy').text(Math.round(Math.random() * urgentSummaryBoxTotals[4]));
		$('#perfSummaryDsk').text(Math.round(Math.random() * urgentSummaryBoxTotals[4]));
		$('#perfSummaryCov').text(Math.round(Math.random() * urgentSummaryBoxTotals[4]));
		$('#perfSummaryVip').text(Math.round(Math.random() * urgentSummaryBoxTotals[4]));

		$('#prTrdSummaryMy').text(Math.round(Math.random() * urgentSummaryBoxTotals[5]));
		$('#prTrdSummaryDsk').text(Math.round(Math.random() * urgentSummaryBoxTotals[5]));
		$('#prTrdSummaryCov').text(Math.round(Math.random() * urgentSummaryBoxTotals[5]));
		$('#prTrdSummaryVip').text(Math.round(Math.random() * urgentSummaryBoxTotals[5]));

		$('#systmSummaryMy').text(Math.round(Math.random() * urgentSummaryBoxTotals[6]));
		$('#systmSummaryDsk').text(Math.round(Math.random() * urgentSummaryBoxTotals[6]));
		$('#systmSummaryCov').text(Math.round(Math.random() * urgentSummaryBoxTotals[6]));
		$('#systmSummaryVip').text(Math.round(Math.random() * urgentSummaryBoxTotals[6]));

		$('#mrktSummaryMy').text(Math.round(Math.random() * urgentSummaryBoxTotals[7]));
		$('#mrktSummaryDsk').text(Math.round(Math.random() * urgentSummaryBoxTotals[7]));
		$('#mrktSummaryCov').text(Math.round(Math.random() * urgentSummaryBoxTotals[7]));
		$('#mrktSummaryVip').text(Math.round(Math.random() * urgentSummaryBoxTotals[7]));

	});
	// end of urgent

	//////////////////////////////  COMMENTARY ////////////////////////////////////

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

		///////// MINIS ////////

		$('#riskSummaryMy').text(Math.round(Math.random() * commentarySummaryBoxTotals[0]));
		$('#riskSummaryDsk').text(Math.round(Math.random() * commentarySummaryBoxTotals[0]));
		$('#riskSummaryCov').text(Math.round(Math.random() * commentarySummaryBoxTotals[0]));
		$('#riskSummaryVip').text(Math.round(Math.random() * commentarySummaryBoxTotals[0]));

		$('#tradeSummaryMy').text(Math.round(Math.random() * commentarySummaryBoxTotals[1]));
		$('#tradeSummaryDsk').text(Math.round(Math.random() * commentarySummaryBoxTotals[1]));
		$('#tradeSummaryCov').text(Math.round(Math.random() * commentarySummaryBoxTotals[1]));
		$('#tradeSummaryVip').text(Math.round(Math.random() * commentarySummaryBoxTotals[1]));

		$('#stratSummaryMy').text(Math.round(Math.random() * commentarySummaryBoxTotals[2]));
		$('#stratSummaryDsk').text(Math.round(Math.random() * commentarySummaryBoxTotals[2]));
		$('#stratSummaryCov').text(Math.round(Math.random() * commentarySummaryBoxTotals[2]));
		$('#stratSummaryVip').text(Math.round(Math.random() * commentarySummaryBoxTotals[2]));

		$('#salesSummaryMy').text(Math.round(Math.random() * commentarySummaryBoxTotals[3]));
		$('#salesSummaryDsk').text(Math.round(Math.random() * commentarySummaryBoxTotals[3]));
		$('#salesSummaryCov').text(Math.round(Math.random() * commentarySummaryBoxTotals[3]));
		$('#salesSummaryVip').text(Math.round(Math.random() * commentarySummaryBoxTotals[3]));

		$('#perfSummaryMy').text(Math.round(Math.random() * commentarySummaryBoxTotals[4]));
		$('#perfSummaryDsk').text(Math.round(Math.random() * commentarySummaryBoxTotals[4]));
		$('#perfSummaryCov').text(Math.round(Math.random() * commentarySummaryBoxTotals[4]));
		$('#perfSummaryVip').text(Math.round(Math.random() * commentarySummaryBoxTotals[4]));

		$('#prTrdSummaryMy').text(Math.round(Math.random() * commentarySummaryBoxTotals[5]));
		$('#prTrdSummaryDsk').text(Math.round(Math.random() * commentarySummaryBoxTotals[5]));
		$('#prTrdSummaryCov').text(Math.round(Math.random() * commentarySummaryBoxTotals[5]));
		$('#prTrdSummaryVip').text(Math.round(Math.random() * commentarySummaryBoxTotals[5]));

		$('#systmSummaryMy').text(Math.round(Math.random() * commentarySummaryBoxTotals[6]));
		$('#systmSummaryDsk').text(Math.round(Math.random() * commentarySummaryBoxTotals[6]));
		$('#systmSummaryCov').text(Math.round(Math.random() * commentarySummaryBoxTotals[6]));
		$('#systmSummaryVip').text(Math.round(Math.random() * commentarySummaryBoxTotals[6]));

		$('#mrktSummaryMy').text(Math.round(Math.random() * commentarySummaryBoxTotals[7]));
		$('#mrktSummaryDsk').text(Math.round(Math.random() * commentarySummaryBoxTotals[7]));
		$('#mrktSummaryCov').text(Math.round(Math.random() * commentarySummaryBoxTotals[7]));
		$('#mrktSummaryVip').text(Math.round(Math.random() * commentarySummaryBoxTotals[7]));

	});
	// end of commentary

	//////////////////////////////  PROACT ////////////////////////////////////

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

		///////// MINIS ////////

		$('#riskSummaryMy').text(Math.round(Math.random() * proActSummaryBoxTotals[0]));
		$('#riskSummaryDsk').text(Math.round(Math.random() * proActSummaryBoxTotals[0]));
		$('#riskSummaryCov').text(Math.round(Math.random() * proActSummaryBoxTotals[0]));
		$('#riskSummaryVip').text(Math.round(Math.random() * proActSummaryBoxTotals[0]));

		$('#tradeSummaryMy').text(Math.round(Math.random() * proActSummaryBoxTotals[1]));
		$('#tradeSummaryDsk').text(Math.round(Math.random() * proActSummaryBoxTotals[1]));
		$('#tradeSummaryCov').text(Math.round(Math.random() * proActSummaryBoxTotals[1]));
		$('#tradeSummaryVip').text(Math.round(Math.random() * proActSummaryBoxTotals[1]));

		$('#stratSummaryMy').text(Math.round(Math.random() * proActSummaryBoxTotals[2]));
		$('#stratSummaryDsk').text(Math.round(Math.random() * proActSummaryBoxTotals[2]));
		$('#stratSummaryCov').text(Math.round(Math.random() * proActSummaryBoxTotals[2]));
		$('#stratSummaryVip').text(Math.round(Math.random() * proActSummaryBoxTotals[2]));

		$('#salesSummaryMy').text(Math.round(Math.random() * proActSummaryBoxTotals[3]));
		$('#salesSummaryDsk').text(Math.round(Math.random() * proActSummaryBoxTotals[3]));
		$('#salesSummaryCov').text(Math.round(Math.random() * proActSummaryBoxTotals[3]));
		$('#salesSummaryVip').text(Math.round(Math.random() * proActSummaryBoxTotals[3]));

		$('#perfSummaryMy').text(Math.round(Math.random() * proActSummaryBoxTotals[4]));
		$('#perfSummaryDsk').text(Math.round(Math.random() * proActSummaryBoxTotals[4]));
		$('#perfSummaryCov').text(Math.round(Math.random() * proActSummaryBoxTotals[4]));
		$('#perfSummaryVip').text(Math.round(Math.random() * proActSummaryBoxTotals[4]));

		$('#prTrdSummaryMy').text(Math.round(Math.random() * proActSummaryBoxTotals[5]));
		$('#prTrdSummaryDsk').text(Math.round(Math.random() * proActSummaryBoxTotals[5]));
		$('#prTrdSummaryCov').text(Math.round(Math.random() * proActSummaryBoxTotals[5]));
		$('#prTrdSummaryVip').text(Math.round(Math.random() * proActSummaryBoxTotals[5]));

		$('#systmSummaryMy').text(Math.round(Math.random() * proActSummaryBoxTotals[6]));
		$('#systmSummaryDsk').text(Math.round(Math.random() * proActSummaryBoxTotals[6]));
		$('#systmSummaryCov').text(Math.round(Math.random() * proActSummaryBoxTotals[6]));
		$('#systmSummaryVip').text(Math.round(Math.random() * proActSummaryBoxTotals[6]));

		$('#mrktSummaryMy').text(Math.round(Math.random() * proActSummaryBoxTotals[7]));
		$('#mrktSummaryDsk').text(Math.round(Math.random() * proActSummaryBoxTotals[7]));
		$('#mrktSummaryCov').text(Math.round(Math.random() * proActSummaryBoxTotals[7]));
		$('#mrktSummaryVip').text(Math.round(Math.random() * proActSummaryBoxTotals[7]));

	});
	// end of proAct

	$('#riskSummaryBox')
		.mouseenter(function(){
		$('.risk').addClass('riskAlert');  
		})
		.mouseleave(function(){
		$('.risk').removeClass('riskAlert');	
		});

	$('#tradeSummaryBox')
		.mouseenter(function(){
		$('.trade').addClass('tradeAlert');  
		})
		.mouseleave(function(){
		$('.trade').removeClass('tradeAlert');	
		});

stratSummaryBox
salesSummaryBox
perfSummaryBox
prTrdSummaryBox
systmSummaryBox
mrktSummaryBox

	$('#clearAlerts').click(function(){
        $('.sideSearchAlerts').val("");
        // $('#filterIcon.mdi-filter').removeClass('blue');

      });

});
// end of doc ready


