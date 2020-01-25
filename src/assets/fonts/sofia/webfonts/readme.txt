go to fontforge
upload one version of each fontweight
look in OS/2 and the tab 'metrics'
make every fontweight have win ascent 1080 and descent 350 and match the hhead to the same ones but the hhead descent is negative
dont touch typo line cap or cap height or x height
https://stackoverflow.com/questions/11726442/font-rendering-line-height-issue-on-mac-pc-outside-of-element/39425906#39425906
https://www.williamrchase.com/post/font-height-differences-between-windows-and-mac/

the issue with this font was threefold:  
*everything was high up 
*windows and mac were different
*bold was treated differently than regular and it meant fonts weren't aligned bottom