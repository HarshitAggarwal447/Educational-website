var randomNumber1 = Math.floor(Math.random() * 6 + 1)

var randomDicImage = "./role_the_dice_image/Die-" + randomNumber1 + ".png"; // shows dice image from 1 to 6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDicImage);


var randomNumber2 = Math.floor(Math.random() * 6 + 1)

var randomDicImage2 = "./role_the_dice_image/Die-" + randomNumber2 + ".png"; // shows dice image from 1 to 6

var refress = document.querySelector("#for_refresh");
// var image2 = document.querySelectorAll("img")[1];  

// image2.setAttribute("src", randomDicImage);

document.querySelectorAll("img")[1].setAttribute("src", randomDicImage2) // this line is same as above two lines

if(randomNumber1>randomNumber2){
    document.querySelector("#change_html").innerHTML = "🎌PLAYER ONE WINS!";
}
else if(randomNumber1<randomNumber2) {
    document.querySelector("#change_html").innerHTML = "PLAYER TWO WINS!🎌";
} else {
    document.querySelector("#change_html").innerHTML = "🎌DRAW🎌";
}

// for_refresh
// refress.addEventListener('click', ref);
// function ref(){
//     document.querySelector("#for_refresh").load("#for_refresh")
// }