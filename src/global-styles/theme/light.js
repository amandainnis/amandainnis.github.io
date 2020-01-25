/* eslint-disable no-unused-vars */

const $White = "#ffffff";
const $GrayVerySubtle = "#F6F6F6";
const $GraySubtle = "#E6E7E8";
const $GrayMediumSubtle = "#CCCCCC";
const $GrayMedium = "#A7A9AC";
// const $MDMDGray = '#A8A9AC';
const $GrayBoldMedium = "#808285";
const $GrayBold = "#58595B";
const $Black = "#000";

const $BlueBold = "#007dac";
const $BlueBoldMedium = "#2199c5";
const $BlueMedium = "#00AEEF";
const $BlueMediumSubtle = "#6DCFF6";
const $BlueSubtle = "#ADE1FA";
const $BlueVerySubtle = "#EBF5FA";

const $CoolerBlueBold = "#166faf";
const $CoolerBlueBoldMed = "#2295e0";
const $CoolerBlueMedium = "#44b5ff"; //'#59a2fd';
const $CoolerBlueSubtle = "#266c9e";
const $CoolerBlueMediumSubtle = "#266c9e";
const $CoolerBlueVerySubtle = "#235a82";

const $GreenBold = "#148f77"; //''#55b500';
const $GreenBoldMed = "#17a589";
const $GreenMedium = "#1abc9c";
const $GreenMedSubtle = "#4CCBB2";
const $GreenSubtle = "#A2E4D6"; //'#9df3cc';
const $GreenVerySubtle = "#C9EFE8"; //'#9df3cc';

const $YellowGreenBold = "#618012"; // color: #bbde00
const $YellowGreenBoldMed = "#819c3c"; // color: #bbde00
const $YellowGreenMedium = "#8dc63f";
const $YellowGreenMedSubtle = "#A5D267"; // color: #bbde00
const $YellowGreenSubtle = "#b4dc7c"; // color: #bbde00
const $YellowGreenVerySubtle = "#DEEFC8"; // color: #bbde00

const $RedBold = "#e23837";
const $RedMed = "#fd5c5b";

// $red-background: #dc8b8f;
// $blue-background: #638fc9;
// $heatMapRed1: #DC8B8F;
// $heatMapRed2: #E6B6B9;
// $heatMapRed3: #EFD8D9;
// $heatMapGreen1: #0CC3A5;
// $heatMapGreen2: #81DECF;
// $heatMapGreen3: #BBEBE3;
// $comm-services: #6f43f7;
// $con-discretionary:#e98d92;
// $con-staples: #F3BD63;
// $energy: #58A2FD;
// $financials: #4ac4b1;
// $healthcare: #e4b0b3;
// $industrials: #2A78D8;
// $info-tech: #9D60DC;
// $materials: #FFA610;
// $real-estate: #8982A2;
// // $real-estate: #829aa2;
// $utilities: #4BE4D5;
// // $utilities: #b98888;
// $execSvcs: #4ac4b1;
// $line-chart-mouse-line: #333333;
// $opt-group-background: #f1f2f4;
// $CVthisYearBar: #bb8ff1;
// $CVthisYearBarHighlight: rgba(166, 92, 255, 0.59);
// $CVlastYearBarHighlight: rgba(88, 162, 253, 0.76);

// SCROLLBAR ////////////

const $ScrollbarTrackThumb = "rgba(0, 0, 0, 0.06)";
const $ScrollbarTrackThumbHover = "rgba(0, 0, 0, 0.16)";

export const LIGHT = {
  //   name: "light",
  properties: {
    "--background-main": $White,
    "--background-subtle": $GrayVerySubtle,
    "--border-color": $GraySubtle,
    "--border-emphasis": $GrayMedium,
    "--emphasis-text": $Black,
    "--regular-text": "#333333",
    "--label-text": "#818386",
    "--blue-text": $BlueMedium,
    "--green-text": $GreenBold,
    "--red-text": $RedBold,
    "--loader-background": $White,
    "--navbar-bkgd": $GrayVerySubtle,
    "--nav-link-inactive": "#9b9ba5",
    "--tooltip-background": "#273d3c",
    "--tooltip-text": "white",
    "--toggle-text-inactive": $GrayBoldMedium,
    "--toggle-background": $GrayMediumSubtle,
    "--toggle-button": "white",
    "--selected-row": $BlueVerySubtle,
    "--row-hover": $GraySubtle,

    "--green-bold": $GreenBold,
    "--green-bold-med": $GreenBoldMed,
    "--green-medium": $GreenMedium,
    "--green-med-subtle": $GreenMedSubtle,
    "--green-subtle": $GreenSubtle,
    "--green-very-subtle": $GreenVerySubtle,

    "--yellow-green-bold": $YellowGreenBold,
    "--yellow-green-bold-med": $YellowGreenBoldMed,
    "--yellow-green-medium": $YellowGreenMedium,
    "--yellow-green-med-subtle": $YellowGreenMedSubtle,
    "--yellow-green-subtle": $YellowGreenSubtle,
    "--yellow-green-very-subtle": $YellowGreenVerySubtle,

    "--red-bold": $RedBold,
    "--blue-bold": $BlueBold,
    "--blue-bold-med": $BlueBoldMedium,
    "--blue-medium": $BlueMedium,
    "--blue-med-subtle": $BlueMediumSubtle,
    "--blue-subtle": $BlueSubtle,
    "--blue-very-subtle": $BlueVerySubtle,
    "--cooler-blue-bold": $CoolerBlueBold,
    "--cooler-blue-bold-med": $CoolerBlueBoldMed,
    "--cooler-blue-medium": $CoolerBlueMedium,
    "--cooler-blue-med-subtle": $CoolerBlueMediumSubtle,
    "--cooler-blue-subtle": $CoolerBlueSubtle,
    "--cooler-blue-very-subtle": $CoolerBlueVerySubtle,
    "--gray-bold": $GrayBold,
    "--gray-bold-med": $GrayBoldMedium,
    "--gray-medium": $GrayMedium,
    "--gray-med-subtle": $GrayMediumSubtle,
    "--gray-subtle": $GraySubtle,
    "--gray-very-subtle": $GrayVerySubtle,
    "--light600-dark400": 600,
    "--light600-dark300": 600,
    "--light400-dark300": 400,
    "--light700-dark600": 700,
    "--light800-dark700": 800,
    "--lightSofiaMed-darkSofiaReg": "SofiaPro-Medium",
    "--lightSofiaBold-darkSofiaReg": "SofiaPro-Bold",
    "--lightCircularBook-darkCircularReg": "Circular-Book",
    "--lightCircularMed-darkCircularReg": "Circular-Medium",
    "--lightCircularMed-darkCircularBook": "Circular-Medium",
    "--lightCircularBold-darkCircularBook": "Circular-Bold",
    "--lightCircularBold-darkCircularMedium": "Circular-Bold",

    "--radio-focus-offset": "white",
    "--radio-focus": "rgba(88, 162, 253, 0.28)",
    "--checkbox-radio-border-color": $GrayMediumSubtle,
    "--checkbox-inner-check-color": $White,
    "--checkbox-background": $BlueMedium,
    "--checkbox-subtle-border": $GraySubtle,
    "--checkbox-subtle-focus": $BlueMediumSubtle,
    "--dropdown-background": "white",
    "--inner-check-subtle": $Black,
    "--outline-btn-text-gray": $GrayBoldMedium,
    "--outline-btn-border-gray": $GrayMediumSubtle,
    "--outline-btn-text-accent": $BlueMedium,
    "--outline-btn-border-accent": $BlueMediumSubtle,
    "--outline-btn-border-green": $GreenBoldMed,
    "--outline-btn-bkgd": "white",
    "--solid-btn-bkgd-gray": $GrayMedium,
    "--solid-btn-bkgd-accent": $BlueMedium,
    "--solid-btn-bkgd-accent-hvr": $BlueMediumSubtle,
    "--icon-button-color": $GrayBoldMedium,

    "--input-background": "rgba(255, 255, 255, 0.66)",
    "--input-border": "rgba(0, 0, 0, 0.11)",
    "--placeholder-text": $GrayMedium,
    "--code-background": "#393a3c",
    "--nav-border": "#c9cbca",
    "--nav-box-shadow":
      "0px 0px 6px 0px rgba(0, 0, 0, 0.09), 0px 4px 9px 0 rgba(0, 0, 0, 0.1)",

    "--scrollbar-track-thumb": $ScrollbarTrackThumb,
    "--scrollbar-track-thumb-hover": $ScrollbarTrackThumbHover,

    "--analytics-bkgd": "#F0F4C3", //"#f27c7c",
    "--alphaCap-bkgd": "#fbd8d8", //"#498fe6",
    "--crb-bkgd": "antiquewhite", //"#e2e2e2",
    "--alerting-bkgd": "#c8e4d0", //"#dde4df", //"#9a90ae"
    "--alerting-red-bkgd": "rgb(255, 130, 130)",
    "--alerting-orange-background": "#fdb338",
    "--alerting-title-text": "#333333",
    "--icon-card-bkgd": "#d9d6f0",
    "--info-footer": "rgba(0, 0, 0, 0.14)",
    "--loader": "rgba(0,0,0, .6)",
    "--crb-dd": "#fdf9f4",
    "--crb-btn-bkgd": "transparent", //$GreenMedium,
    "--crb-btn-border": $GreenMedium,
    "--crb-btn-text": "#13997d",
    "--crb-btn-hover": $GreenBoldMed,
    "--crb-btn-red-bkgd": "transparent", //$GreenMedium,
    "--crb-btn-red-border": "#fd5c5b",
    "--crb-btn-red-text": "#f04746",
    "--crb-btn-red-hover": "#f66767",
    "--comm-services": "#1abc9c", //"#0C9174",
    "--con-discretionary": "rgb(255, 126, 80)", //"#E4668A",
    "--con-staples": "#cd853f", //"#F3BD63",
    "--energy": "#02aef1", //"#58A2FD",
    "--financials": "#5db977", //"#13727C",
    "--healthcare": "#D98BA5",
    "--industrials": "#2A78D8",
    "--info-tech": "#997edc", //"#9D60DC",
    "--materials": "#FFA610",
    "--real-estate": "#c3b935", //"#8982A2",
    "--utilities": "#27d0bf", //"#4BE4D5",

    "--ag-zebra": $GrayVerySubtle,
    "--animation-cell-change": "#A0dfac"
  }
};
