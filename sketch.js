var w1,w2,w3;
function setup(){
createCanvas(2000,600);
w1 = ("Things needed will be1: eggs2: chicken wings with skin on.3: marination4: breading,5: flour,6: sauce (your choice)7: frying oil.8: frying pan");
w2 = ( "1: first you will take the marination, eggs, flour, and breading and put them in  different a bowl.2: you take the chicken and dip it in marination, then eggs, then, flour then breading.3: you put the chicken in the frying pan with oil for 3-5 minutes. 4: reapeat multiple times.5: enjoy.");
w3 = ("So Chicken wings are fried wings of a chicken.when woy take a bite you taste millions of flavors in one bite.On average one person will eat 8-12 wings a meal.");
}
function draw(){
background(255);
textSize(20);
text(w1,20,300);
text(w2,20,500);
text(w3,20,100);
}