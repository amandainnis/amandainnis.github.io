var userChoice = prompt("Do you choose rock, paper or scissors?");   //one variable is attached to the prompt from questionning a user
var computerChoice = Math.random();   /*the other variable (computerChoice) is attached to this pre-existing function called Math.random, but that 
                                      has to be broken down into 3*/ 
if (computerChoice < 0.34) {  // if Math.random generates a # below this, it gets rock
	computerChoice = "rock";
} 
  else if(computerChoice <= 0.67) {   //otherwise (else IF) on the condition its below or equal to .67 it gets paper
	computerChoice = "paper";
} 
  else {
	computerChoice = "scissors";   //otherwise (else) (cause there are no other choices left), its scissors
} 
  console.log("Computer: " + computerChoice);   //now console, tell me what the computer chose

                                              //NOW we have to see who wins!  sounds like a compare function

var compare = function(choice1, choice2) {    /*Compare needs two variables to function, also, 
                                            compare isn't pre-existing so it starts as a brand new function*/
                                            //new functions need a name:  var compare = function(choice1, choice2) NO SEMICOLON what the fuck?!
                                            //ESCAPE side note: where the fuck did choice 1 & 2 come from?  
                                            //sounds like a good idea to summarize user and computers multivariate choices into one variable*/ 
                                            //BACK to function, so after the LACK of SEMICOLON we do the CURLY BRACES to contain the ifs and elses 
                                            //if (choice===choice2)  NO SEMICOLON CURLY BRACES return "the result is a tie" <--that is a string

if (choice1===choice2) {return "The result is a tie!";}
else if (choice1==="rock") {                                //that was easy, now, what if choice 1 is rock? if choice 2 is rock, we already figured that out, its a tie
                                                            // choice 2 could be two other options and those would return two different results
                                                            //Escape: we are saying return rather than console.log, because we want the function to 
                                                            //return something and not necessarily print something out which is what console does 
                                                            //(its visual, and thats why I like console.log)
                                                            //BACK to function, two options and two results sounds like an if else function
                                                            //WHICH MEANS A FUNCTION WITHIN A FUNCTION
            if (choice2==="scissors") {return "rock wins";}
            else {return "paper wins";}
    }//end of function inside function
else if (choice1==="paper") {
       if (choice2==="rock") {return "paper wins";}
        else {return "scissors wins";}
   }//end of function inside function
else if (choice1==="scissors") {
       if (choice2==="rock") {return "rock wins"; }
       else if (choice2==="paper") {return "scissors wins";}
   }//end of function inside func
};//end of compare function

compare(userChoice, computerChoice);                    //this calls the function, but replaces 2 variables withuserChoice and computerChoice