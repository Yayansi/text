const submitbtn = document.getElementById("sbmt-btn");




const mainContainer = document.getElementById("main-container");




const thankYouComponent = document.getElementById("thankyou-component");


const ratingbtns = document.querySelectorAll(".btn")


let ratingScore = document.querySelector(".dynamic-number");



let defaultScore = 0;


submitbtn.addEventListener("click", submitScore);

//ratig button event listner
ratingbtns.forEach((btn) =>{

    btn.addEventListener("click", ratingBtnClick)
})



function submitScore(e){
e.preventDefault();

mainContainer.style.display = "none";
    thankYouComponent.style.display = "block";
    ratingScore.textContent = defaultScore;
}
 

function ratingBtnClick(e){

if(e.target.classList.contains ("btn")){
    e.target.classList.toggle("active");
}
defaultScore = e.target.textContent;
ratingScore.textContent = defaultScore;
}