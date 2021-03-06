/* eslint-disable no-unused-vars */

const $White = "#ffffff";
const $SecondaryWhite = "rgba(255, 255, 255, 0.85)";
// const $BorderGray = '#444b57';
const $LTGray = "#E6E7E8";
const $GrayBold = "#c0c1c2";
//
const $GrayBoldMedium = "#7d8084";
const $GrayMedium = "#4d5258"; //'#5a5c5f';
const $GrayMediumSubtle = "#3d3f40";
const $GraySubtle = "#292c2f"; //'#2f3132';
const $GrayVerySubtle = "#242627"; // '#3c3d42' #2f3746 // #646669
const $PrimaryGray = "#888e99";
const $LabelGray = $GrayBold;

const $BlueBold = "#2BB6FF"; // '#56D3FF'; //
const $BlueBoldMedium = "#17a0e8"; // '#188ECB'; //
const $BlueMedium = "#056CAA"; // '#1372AD'; //
const $BlueMediumSubtle = "#01579b"; //'#075D8E'; //'#066487'; // '#0C6096'; //
const $BlueSubtle = "#004c7d"; // '#144A74'; //'rgba(0, 170, 251, 0.32)';
const $BlueVerySubtle = "#163146"; // '#173E5B'; //'rgba(0, 170, 251, 0.2)';

const $CoolerBlueBold = "#7cb7ff";
const $CoolerBlueBoldMed = "#57A1FC";
const $CoolerBlueMedium = "#166faf";
const $CoolerBlueMedSubtle = "#266c9e";
const $CoolerBlueSubtle = "#235a82";
const $CoolerBlueVerySubtle = "#164669";

const $GreenBold = "#3affa5"; //'#00de83';   //'#55ff00';
const $GreenBoldMed = "#46cc8f";
const $GreenMedium = "#159A5D"; //'#0C9174'; //'#029a46'; //#008e3f  // #029a46 //#5ebf2d
const $GreenMedSubtle = "#008C63";
const $GreenSubtle = "#00654E"; //'rgba(0, 218, 97, 0.4)';
const $GreenVerySubtle = "#004232"; //'rgba(0, 218, 97, 0.4)';

const $YellowGreenBold = "#d7ff00";
const $YellowGreenBoldMed = "#bbde00";

const $YellowGreenMedium = "#7dbb08"; // color: #bbde00

const $YellowGreenMedSubtle = "#71A213";
const $YellowGreenSubtle = "#517A05"; // rgba(187, 222, 0, .5) color:
const $YellowGreenVerySubtle = "#304A00";
const $Orange = "#f39c13";
const $Yellow = "#FFCA41";
const $DTYellow = "#DFB525";
const $LTYellow = "#F1DEAC";
const $RedBold = "#ff6b6a";
const $RedMed = "#fd5c5b";
const $Disabled = "rgba(204, 204, 204, 0.15)";
const $BackgroundMainDark = "#1d1f20";
const $BackgroundDarker = "#070808"; //#323338

// SCROLLBAR ////////////

const $ScrollbarTrackThumb = "rgba(243, 251, 255, 0.17)";
const $ScrollbarTrackThumbHover = "rgba(243, 251, 255, 0.27)";
export const DARK = {
  //   name: "dark",
  properties: {
    "--background-main": $BackgroundMainDark,
    "--background-subtle": $BackgroundMainDark,
    "--border-color": $GrayMediumSubtle,
    "--border-emphasis": $GrayMedium,
    "--emphasis-text": "white",
    "--regular-text": "rgba(255,255,255, .85)",
    "--blue-text": $BlueBold,
    "--green-text": $GreenBold,
    "--label-text": "rgba(240, 247, 255, 0.57)", //$GrayBold,
    "--red-text": $RedBold,
    "--loader-background": $BackgroundMainDark,
    "--navbar-bkgd": $GrayVerySubtle,
    "--nav-link-inactive": "#a2a7aa",
    "--tooltip-background": "#ecece5",
    "--tooltip-text": "black",
    "--toggle-text-inactive": $GrayBold,
    "--toggle-background": $GrayMedium,
    "--toggle-button": "#e4e6e6",
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
    "--cooler-blue-med-subtle": $CoolerBlueMedSubtle,
    "--cooler-blue-subtle": $CoolerBlueSubtle,
    "--cooler-blue-very-subtle": $CoolerBlueVerySubtle,
    "--gray-bold": $GrayBold,
    "--gray-bold-med": $GrayBoldMedium,
    "--gray-medium": $GrayMedium,
    "--gray-med-subtle": $GrayMediumSubtle,
    "--gray-subtle": $GraySubtle,
    "--gray-very-subtle": $GrayVerySubtle,

    "--light600-dark400": 400,
    "--light600-dark300": 300,
    "--light400-dark300": 300,
    "--light700-dark600": 600,
    "--light800-dark700": 700,
    "--lightSofiaMed-darkSofiaReg": "SofiaPro-Regular",
    "--lightSofiaBold-darkSofiaReg": "SofiaPro-Regular",
    "--lightSofiaBold-darkSofiaMed": "SofiaPro-Medium",

    "--radio-focus-offset": $BackgroundDarker,
    "--radio-focus": "rgba(40, 195, 255, 0.4)",
    "--checkbox-inner-check-color": $BackgroundMainDark,
    "--checkbox-radio-border-color": $GrayMedium,
    "--checkbox-subtle-border": "#2f3132",
    "--checkbox-subtle-focus": $BlueMedium,
    "--checkbox-background": $BlueBold,
    "--inner-check-subtle": $GreenBold,
    "--dropdown-background": "#262829",
    "--outline-btn-text-gray": $GrayBold,
    "--outline-btn-border-gray": "#545b5f",
    "--outline-btn-text-accent": $BlueBold,
    "--outline-btn-border-accent": $BlueBold,
    "--outline-btn-border-green": $GreenBoldMed,
    "--outline-btn-bkgd": "transparent",
    "--solid-btn-bkgd-gray": $GrayMedium,
    "--solid-btn-bkgd-accent": $BlueMedium,
    "--solid-btn-bkgd-accent-hvr": "#0b9dd4",
    "--icon-button-color": $GrayBold,

    "--input-background": "rgba(255, 255, 255, 0.06)",
    "--input-border": "rgba(255, 255, 255, 0.09)",
    "--placeholder-text": "rgba(255, 255, 255, 0.6)",
    "--code-background": "#2d3031",
    "--nav-border": "#575c5a",
    "--nav-box-shadow": "0px 0px 6px 0px rgba(0, 0, 0, 0.46), 0px 4px 9px 0 rgba(0, 0, 0, 0.58)",

    "--scrollbar-track-thumb": $ScrollbarTrackThumb,
    "--scrollbar-track-thumb-hover": $ScrollbarTrackThumbHover,
    // really great color for background #4a2f51
    "--analytics-bkgd": "#3f3646", //"#463b4f",
    "--alphaCap-bkgd": "#2e3233", //"#415458", //"#4e6786"
    "--crb-bkgd": "#37395a",
    "--alerting-bkgd": "#3b3b44",
    "--alerting-red-bkgd": "rgb(218, 76, 76)",
    "--alerting-orange-background": "#e77901",
    "--alerting-title-text": "#fba123",
    "--icon-card-bkgd": "#1e5045",
    "--info-footer": "rgba(255, 255, 255, 0.14)",
    "--loader": "white",
    "--crb-btn-bkgd": "transparent",
    "--crb-dd": "#484a71",
    "--crb-btn-border": $GreenBoldMed,
    "--crb-btn-text": $GreenBold,
    "--crb-btn-hover": "#159573",
    "--crb-btn-red-bkgd": "transparent", //$GreenMedium,
    "--crb-btn-red-border": "#fd5c5b",
    "--crb-btn-red-text": "#ff6b6a",
    "--crb-btn-red-hover": "#c94959", // this should be actual hover"#ff6b6a",

    "--comm-services": "#0d8a6f", //"#009C5D",
    "--con-discretionary": "#da5969", //"#e36262", //"#F85F5E", //"#ab3bb3", //"rgb(214, 86, 86)", //"#E4668A",
    "--con-staples": "#FBAB3B", //"#F3BD63",
    "--energy": "#9ECA00", //"#58A2FD",
    "--financials": "#007B85",
    "--healthcare": "#E59BB4", //"#D98BA5",
    "--industrials": "#486ADC",
    "--info-tech": "#9757FA", //"#9D60DC",
    "--materials": "#E77803",
    "--real-estate": "#A895C6", //"#8982A2"
    "--utilities": "#9c813b", //"#4BE4D5"

    "--ag-zebra": $GrayVerySubtle,
    "--animation-cell-change": "#007553",
    "--contact-button-bkgd": "transparent",
    "--contact-button-border": "var(--real-estate)",
    "--linkedin-button-bkgd-hover": "transparent",
    "--linkedin-button-text-hover": "var(--blue-bold-med)",
    "--linkedin-button-border-hover": "var(--blue-bold-med)",
    "--email-icon-button-bkgd-hover": "transparent",
    "--email-icon-button-text-hover": "#ef5252",
    "--email-icon-button-border-hover": "#ef5252",
    "--wireframe1": "var(--utilities)",
    "--wireframe2": "rgb(168 149 198 / 78%)",
  },
};
