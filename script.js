let ratings = JSON.parse(localStorage.getItem("ratings")) || [];
let comments = JSON.parse(localStorage.getItem("comments")) || [];
let hasRated = localStorage.getItem("hasRated");


// ======================
// RATING SYSTEM
// ======================

function rate(star) {

    if (hasRated) {
        return;
    }


    ratings.push(star);


    localStorage.setItem(
        "ratings",
        JSON.stringify(ratings)
    );


    localStorage.setItem(
        "hasRated",
        "true"
    );


    let stars = document.querySelector(".stars");

    if (stars) {
        stars.style.display = "none";
    }


    document.getElementById("rating-result").innerHTML =
        "Thank you for your feedback!";


    showRating();

}



// Display average rating

function showRating() {

    let averageBox = document.getElementById("average-rating");
    let resultBox = document.getElementById("rating-result");


    if (!averageBox || !resultBox) {
        return;
    }


    let total = ratings.length;


    if (total === 0) {

        averageBox.innerHTML = "⭐ 0.0";

        resultBox.innerHTML =
            "0 People Rated";

        return;

    }


    let sum = ratings.reduce(
        (total, rating) => total + rating,
        0
    );


    let average = (sum / total).toFixed(1);


    averageBox.innerHTML =
        "⭐ " + average;


    resultBox.innerHTML =
        total + " People Rated";

}



// ======================
// COMMENT SYSTEM
// ======================

function addComment() {

    let commentBox = document.getElementById("comment");


    if (!commentBox) {
        return;
    }


    let text = commentBox.value.trim();


    if (text === "") {

        alert("Please write a comment");

        return;

    }


    comments.push(text);


    localStorage.setItem(
        "comments",
        JSON.stringify(comments)
    );


    commentBox.value = "";


    showComments();

}



// Display comments

function showComments() {

    let commentArea = document.getElementById("comments");


    if (!commentArea) {
        return;
    }


    commentArea.innerHTML = "";


    comments.forEach(function(comment) {


        commentArea.innerHTML += `

            <div class="comment-card">

                <p>${comment}</p>

            </div>

        `;


    });

}



// ======================
// PAGE LOAD
// ======================


window.onload = function() {

    showRating();

    showComments();


    if (hasRated) {

        let stars = document.querySelector(".stars");

        if (stars) {
            stars.style.display = "none";
        }

    }

};