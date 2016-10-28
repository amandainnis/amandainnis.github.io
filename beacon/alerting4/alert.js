
var totals = [ 464, 363, 101 ];

var allTotalSummaryBoxTotals = [ 64, 86, 44, 53, 57, 69, 42, 50 ];
var openTotalSummaryBoxTotals = [ 41, 73, 18, 38, 46, 51, 21, 35 ];
var closedTotalSummaryBoxTotals = [ 23, 13, 26, 15, 11, 18, 21, 15 ];
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
	$('#stockpit').hide();
	$('#stockpit2').hide();
	$('#stockpit3').hide();
	$('#clientpit').hide();

	////////// global threedot/////////////////// 
$('#threeDotContent').hide();

$('#threeDotWhiteAlert.mdi-dots-vertical').click(function(){
  $('#threeDotContent').show();
})

$('#threeDotContent').mouseleave(function(){
    $('#threeDotContent').hide();
  });


	$('#type').click(function(){
		$('.typeStockClient span').removeClass('selected');
		$(this).addClass('selected');
		$('#stockpit').hide();
		$('#stockpit2').hide();
		$('#stockpit3').hide();
		$('#clientpit').hide();
		$('#cockpit').show();
		
	});

	$('#stock').click(function(){
		$('.typeStockClient span').removeClass('selected');
		$(this).addClass('selected');
		$('#clientpit').hide();
		$('#cockpit').hide();
		$('#stockpit').hide();
		$('#stockpit3').hide();
		$('#stockpit2').show();

	});

	// $('#stock2').click(function(){
	// 	$('.typeStockClient span').removeClass('selected');
	// 	$(this).addClass('selected');
	// 	$('#clientpit').hide();
	// 	$('#cockpit').hide();
	// 	$('#stockpit').hide();
	// 	$('#stockpit3').hide();
	// 	$('#stockpit2').show();

	// });

	// $('#stock3').click(function(){
	// 	$('.typeStockClient span').removeClass('selected');
	// 	$(this).addClass('selected');
	// 	$('#clientpit').hide();
	// 	$('#cockpit').hide();
	// 	$('#stockpit').hide();
	// 	$('#stockpit2').hide();
	// 	$('#stockpit3').show();

	// });

    $('#client').click(function(){
		$('.typeStockClient span').removeClass('selected');
		$(this).addClass('selected');
		$('#cockpit').hide();
		$('#stockpit').hide();
		$('#stockpit2').hide();
		$('#stockpit3').hide();
		$('#clientpit').show();
		
	});

	// $('#allAlerts').click(function(){
	// 	$('.allOpenClosed span').removeClass('selected');
	// 	$(this).addClass('selected');
	// 	$('#riskSummary').text(allTotalSummaryBoxTotals[0]);
	// 	$('#tradeSummary').text(allTotalSummaryBoxTotals[1]);
	// 	$('#stratSummary').text(allTotalSummaryBoxTotals[2]);
	// 	$('#salesSummary').text(allTotalSummaryBoxTotals[3]);
	// 	$('#perfSummary').text(allTotalSummaryBoxTotals[4]);
	// 	$('#prTrdSummary').text(allTotalSummaryBoxTotals[5]);
	// 	$('#systmSummary').text(allTotalSummaryBoxTotals[6]);
	// 	$('#mrktSummary').text(allTotalSummaryBoxTotals[7]);


		
	// });

	// $('#openAlerts').click(function(){
	// 	$('.allOpenClosed span').removeClass('selected');
	// 	$(this).addClass('selected');
	// 	$('#riskSummary').text(openTotalSummaryBoxTotals[0]);
	// 	$('#tradeSummary').text(openTotalSummaryBoxTotals[1]);
	// 	$('#stratSummary').text(openTotalSummaryBoxTotals[2]);
	// 	$('#salesSummary').text(openTotalSummaryBoxTotals[3]);
	// 	$('#perfSummary').text(openTotalSummaryBoxTotals[4]);
	// 	$('#prTrdSummary').text(openTotalSummaryBoxTotals[5]);
	// 	$('#systmSummary').text(openTotalSummaryBoxTotals[6]);
	// 	$('#mrktSummary').text(openTotalSummaryBoxTotals[7]);

		

		

	// });

 //    $('#closedAlerts').click(function(){
	// 	$('.allOpenClosed span').removeClass('selected');
	// 	$(this).addClass('selected');
	// 	$('#riskSummary').text(closedTotalSummaryBoxTotals[0]);
	// 	$('#tradeSummary').text(closedTotalSummaryBoxTotals[1]);
	// 	$('#stratSummary').text(closedTotalSummaryBoxTotals[2]);
	// 	$('#salesSummary').text(closedTotalSummaryBoxTotals[3]);
	// 	$('#perfSummary').text(closedTotalSummaryBoxTotals[4]);
	// 	$('#prTrdSummary').text(closedTotalSummaryBoxTotals[5]);
	// 	$('#systmSummary').text(closedTotalSummaryBoxTotals[6]);
	// 	$('#mrktSummary').text(closedTotalSummaryBoxTotals[7]);

		
	// });


	// $('.dot').hide();

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

	// $('.summaryBox this')
	// 	.mouseenter(function(){
	// 	$('.blueMetric').addClass('metricDarker');  
	// 	})
	// 	.mouseleave(function(){
	// 	$('.blueMetric').removeClass('metricDarker');	
	// 	});


	// $('#riskSummaryBox').on('click', function(){
	// 	$('.alertRow').hide();
	// 	$('.alertRow.riskFeed').toggle();
	// });
// var filter = false;







// $('#riskSummaryBox').on('click', function(){
// 	if (filter === true) {
// 		$('#riskSummaryBox').toggleClass('summaryClick');
// 		$('.alertRow.riskFeed').toggle();
// 		console.log("filter");
// 	}
// 		else {
// 			console.log(filter);
// 		}
// 	});









//////////////////  FUNCTIONAL BUT BEGINS WITH HIDDEN FEED   ////////////////////////

// $('.alertRow').hide();

	
// $('#riskSummaryBox').on('click', function(){
// 	if ($('#riskSummaryBox').hasClass('summaryClick')) {
//     $('.alertRow').show();
//     $('#riskSummaryBox').removeClass('summaryClick');
	
// 	} else { 
// 	    $('#riskSummaryBox').addClass('summaryClick');
// 	    $('.alertRow').hide();
// 	    $('.alertRow.riskFeed').show();
// 	}
	
// });

var counter = 0;


$( '#cockpit' ).on( 'click', '.summaryBox', function( event ) {
	
    if (counter == 1 && $(this).hasClass('summaryClick')){
    	$(this).removeClass('summaryClick');
    	counter -= 1;
    }
    else if (counter == 0){
    	$(this).addClass('summaryClick');
		counter += 1;
	}
	else if (counter == 1 && (!$(this).hasClass('summaryClick'))){
		counter += 0;
		$('.summaryBox').removeClass('summaryClick');
		$(this).addClass('summaryClick');

	}
	console.log(counter);
});




$('#riskSummaryBox').on('click', function(){ 
	if (counter == 1 && $('#riskSummaryBox').hasClass('summaryClick')) {
	 $('.alertRow').show();
	} 
	else {
	$('.alertRow').hide();
    $('.alertRow.riskFeed').show();
	}
});

$('#tradeSummaryBox').on('click', function(){ 
	if (counter == 1 && $('#tradeSummaryBox').hasClass('summaryClick')) {
    $('.alertRow').show();
	}
	else {
	$('.alertRow').hide();
    $('.alertRow.tradeFeed').show(); 
	} 
	
});



$('#stratSummaryBox').on('click', function(){
	if (counter == 1 && $('#stratSummaryBox').hasClass('summaryClick')) {
    $('.alertRow').show();
	} 
	else { 
    $('.alertRow').hide();
    $('.alertRow.stratFeed').show();
	}
	
});

$('#salesSummaryBox').on('click', function(){
	if (counter == 1 && $('#salesSummaryBox').hasClass('summaryClick')) {
    $('.alertRow').show();
	} 
	else { 
    $('.alertRow').hide();
    $('.alertRow.salesFeed').show();
	}
	
});

$('#perfSummaryBox').on('click', function(){
	if (counter == 1 && $('#perfSummaryBox').hasClass('summaryClick')) {
    $('.alertRow').show();
	} 
	else { 
    $('.alertRow').hide();
    $('.alertRow.perfFeed').show();
	}
	
});

$('#prTrdSummaryBox').on('click', function(){
	if (counter == 1 && $('#prTrdSummaryBox').hasClass('summaryClick')) {
    $('.alertRow').show();
	} 
	else { 
    $('.alertRow').hide();
    $('.alertRow.prTrdFeed').show();
	}
	
});

$('#systmSummaryBox').on('click', function(){
	if (counter == 1 && $('#systmSummaryBox').hasClass('summaryClick')) {
    $('.alertRow').show();
	} 
	else { 
    $('.alertRow').hide();
    $('.alertRow.sysFeed').show();
	}
	
});

$('#mrktSummaryBox').on('click', function(){
	if (counter == 1 && $('#mrktSummaryBox').hasClass('summaryClick')) {
    $('.alertRow').show();
	} 
	else { 
    $('.alertRow').hide();
    $('.alertRow.mktFeed').show();
	}
	
});







// $('#tradeSummaryBox').on('click', function(){
// 		$('#tradeSummaryBox').toggleClass('summaryClick');
// 		$('.alertRow').toggle();
// 		$('.alertRow.tradeFeed').toggle();
// 	});

// $('#stratSummaryBox').on('click', function(){
// 		$('#stratSummaryBox').toggleClass('summaryClick');
// 		$('.alertRow').toggle();
// 		$('.alertRow.stratFeed').toggle();
// 	});

// $('#salesSummaryBox').on('click', function(){
// 		$('#salesSummaryBox').toggleClass('summaryClick');
// 		$('.alertRow').toggle();
// 		$('.alertRow.salesFeed').toggle();
// 	});

// $('#perfSummaryBox').on('click', function(){
// 		$('#perfSummaryBox').toggleClass('summaryClick');
// 		$('.alertRow').toggle();
// 		$('.alertRow.perfFeed').toggle();
// 	});

// $('#prTrdSummaryBox').on('click', function(){
// 		$('#prTrdSummaryBox').toggleClass('summaryClick');
// 		$('.alertRow').toggle();
// 		$('.alertRow.prTrdFeed').toggle();
// 	});

// $('#systmSummaryBox').on('click', function(){
// 		$('#systmSummaryBox').toggleClass('summaryClick');
// 		$('.alertRow').toggle();
// 		$('.alertRow.sysFeed').toggle();
// 	});

// $('#mrktSummaryBox').on('click', function(){
// 		$('#mrktSummaryBox').toggleClass('summaryClick');
// 		$('.alertRow').toggle();
// 		$('.alertRow.mktFeed').toggle();
// 	});
////////end //////////  FUNCTIONAL BUT BEGINS WITH HIDDEN FEED   ///////// end///////////////


// $( '#cockpit' ).on( 'click', '.summaryBox', function( event ) {
// 	console.log( "You began the filter!" );
// 	filter = true;
// 	$('.alertRow').hide();
// 	$('#riskSummaryBox').on('click', function(){
// 		$('.riskFeed').show();
// 	});

// 	if (filter) {
// 	$('#riskSummaryBox').on('click', function(){
// 		$('.alertRow.riskFeed').show();
// 	});

// }

// });



 
// function() {
    
//     $( this ).click( function() { console.log( "This is after click 1" ); } );
// };



// 	$('#tradeSummaryBox')
// 		.mouseenter(function(){
// 		$('.trade').addClass('tradeAlert');  
// 		})
// 		.mouseleave(function(){
// 		$('.trade').removeClass('tradeAlert');	
// 		});

// stratSummaryBox
// salesSummaryBox
// perfSummaryBox
// prTrdSummaryBox
// systmSummaryBox
// mrktSummaryBox

	$('#clearAlerts').click(function(){
        $('.sideSearchAlerts').val("");
        // $('#filterIcon.mdi-filter').removeClass('blue');

      });

});
// end of doc ready


