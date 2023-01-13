window.onload = function () {

     if (window.matchMedia("(min-width: 1280px)").matches) {
         
     } 
     else {
          document.getElementById("main_body").style.display="none";
          document.getElementById("computer").style.display="block";
          document.body.style.backgroundImage='none';
     }

     const ar = []; //To store 16 random positions
     f = 0; //flag variable
     k = 0; //instead of array loop

     for (i = 0; i < 80; i++) //generating 80 random numbers
     {
          f = 0;
          if (k === 16) //ar[] will store 16 numbers
               break; //ar[] full

          num = Math.floor((Math.random() * 16) + 1); //random number 

          for (j = 0; j < 16; j++) { //checking if 'num' is already present or not
               if (num === ar[j])
                    f = 1;
          }

          if (f === 0) { //If not present then store it in ar[]
               ar[k] = num;
               ++k;
          }
     }

     for (i = 0; i < 8; i++) { //setting the innerhtml

          document.getElementById(ar[i]).innerHTML = (i + 1);
          document.getElementById(ar[i]).style.color = "rgba(255, 255, 255, 0.3)";

     }
     j = 1;

     for (i = 8; i < 16; i++) { //setting the innerhtml

          document.getElementById(ar[i]).innerHTML = j;
          document.getElementById(ar[i]).style.color = "rgba(255, 255, 255, 0.3)";
          j++;
     }

     function set_background() { //setting the background
          for (i = 0; i < 16; i++) {
               content = document.getElementById(ar[i]);
               if (content.innerHTML == 1) {
                    content.style.backgroundImage = "url('image1.webp')";
                    content.style.backgroundSize = "0";

               }
               else if (content.innerHTML == 2) {
                    content.style.backgroundImage = "url('image2.avif')";
                    content.style.backgroundSize = "0";
               }
               else if (content.innerHTML == 3) {
                    content.style.backgroundImage = "url('image3.webp')";
                    content.style.backgroundSize = "0";
               }
               else if (content.innerHTML == 4) {
                    content.style.backgroundImage = "url('image4.jpg')";
                    content.style.backgroundSize = "0";
               }
               else if (content.innerHTML == 5) {
                    content.style.backgroundImage = "url('image5.avif')";
                    content.style.backgroundSize = "0";
               }
               else if (content.innerHTML == 6) {
                    content.style.backgroundImage = "url('image6.webp')";
                    content.style.backgroundSize = "0";
               }
               else if (content.innerHTML == 7) {
                    content.style.backgroundImage = "url('image7.jpg')";
                    content.style.backgroundSize = "0";
               }
               else if (content.innerHTML == 8) {
                    content.style.backgroundImage = "url('image8.jpeg')";
                    content.style.backgroundSize = "0";
               }
          }

     }

     set_background();


}

const i_track = []; //position of the two clicks
const clicks = []; //innerhtml of two clicks

c = 0; //counter clicks

moves = 8; // 2 clicks = 1 move

const disappear_box = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //to store the disappear boxes

counter = 0; //index of disappear_box[]

const boxes = document.querySelectorAll('.box'); //nodelist containing all the boxes
const box_array = Array.from(boxes); //nodelist to array

for (let i = 0; i < boxes.length; i++) {

     boxes[i].addEventListener("click", function (e) { //after click

          boxes[i].style.backgroundSize = "cover"; //show background image
          clicks[c] = box_array[i].innerHTML; //store 2 clicks

          i_track[c] = i; //store position of 2 clicks
          c++;

          if (c === 2) { //after clicking 2 boxes
               c = 0;

               if (clicks[0] === clicks[1]) { //if both the clicks are same

                    if (i_track[0] != i_track[1]) { //but not the same box

                         boxes[i_track[0]].style.visibility = "hidden"; //disappear
                         boxes[i_track[1]].style.visibility = "hidden";
                         moves++;//more moves

                         disappear_box[counter] = boxes[i_track[0]].innerHTML;
                         disappear_box[counter + 1] = boxes[i_track[1]].innerHTML; //store the disappear boxes

                         counter += 2;
                    }

               }
               else { //if 2 clicks are not same
                    moves--; //less moves
                    const myTimeout = setTimeout(disappear, 500); //after half seconds 

                    function disappear() { //disappear the background images
                         boxes[i_track[0]].style.backgroundSize = "0";
                         boxes[i_track[1]].style.backgroundSize = "0";
                    }

               }
               //calculate and update the moves
               document.getElementById("avail_moves").innerHTML = moves;
               document.getElementById("used_moves").innerHTML = (8 - moves);

               if ((counter === 16) && moves != 0) { //Win
                    const disTimeout = setTimeout(game_over, 500);

                    function game_over() {
                         document.getElementById("win").style.visibility = "visible";
                         document.getElementById("main_body").style.visibility = "hidden";
                         document.getElementById("win_play").addEventListener("click", function (e) {
                              document.getElementById("win").style.visibility = "hidden";
                              location.reload();
                              document.getElementById("main_body").style.visibility = "visible";
                         });
                    }
               }
               else if ((moves === 0) && (counter != 16)) { //Lost
                    document.getElementById("lost").style.visibility = "visible";
                    document.getElementById("main_body").style.visibility = "hidden";
                    document.getElementById("lost_play").addEventListener("click", function (e) {
                         document.getElementById("lost").style.visibility = "hidden";
                         location.reload();
                         document.getElementById("main_body").style.visibility = "visible";
                    });
               }

          }
     });

}

document.getElementById("new_game").addEventListener("click", function (e) {
     location.reload();
});
document.getElementById("rules_btn").addEventListener("click", function (e) {
     document.getElementById("rules").style.visibility = "visible";
     document.getElementById("main_body").style.visibility = "hidden";
     document.getElementById("cross").addEventListener("click", function (e) {
          document.getElementById("rules").style.visibility = "hidden";
          document.getElementById("main_body").style.visibility = "visible";
     });
});


