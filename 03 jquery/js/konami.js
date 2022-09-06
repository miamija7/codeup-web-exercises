"use strict";
$(function () {

/////////////////
// KONAMI CODE //
/////////////////
    let keyBuffer = "";
    const bufferLimit = 22;
    const konamiCode = "3838404037393739666513";

    $(document).keyup(function (event) {
        // store event keyCodes
        keyBuffer = (keyBuffer + ((event.keyCode).toString()));

        // trim buffer
        if (keyBuffer.length > 22) {
            keyBuffer = keyBuffer.substring(keyBuffer.length - bufferLimit);
        }

        // identify konami code
        if (keyBuffer === konamiCode) {
            alert("+ 30 LIVES!");
        }
    });

/////////////////
// LIVE HEADER //
/////////////////
    const pointsDisplay = document.querySelector(".points");
    const livesDisplay = document.querySelector(".lives");
    const timeDisplay = document.querySelector(".time");

    pointsDisplay.textContent = "000000";
    livesDisplay.textContent = "3";
    timeDisplay.textContent = "0";

// timer
    let timer = setInterval(function () {
        timeDisplay.textContent = (parseInt(timeDisplay.textContent) + 1).toString();
    }, 100)

// end timer after 10 minutes
    let timeout = setTimeout(function () {
        clearInterval(timer);
    }, 600000)

// keyup events for header
    $(document).keyup(function (event) {
        // header points handler
        let pointsEarned = parseInt(event.keyCode);
        pointsDisplay.textContent = ("0000" + (parseInt(pointsDisplay.textContent) + pointsEarned).toString());
        pointsDisplay.textContent = pointsDisplay.textContent.substring(pointsDisplay.textContent.length - 6);

        if (keyBuffer === konamiCode) {
            // header lives handler
            livesDisplay.textContent = (parseInt(livesDisplay.textContent) + 30).toString();
        }
    })

// pause game
    $(document).click(function () {
        alert("GAME PAUSED\n\nDirections:\nMove mario around!\nEarn points with key events.\nKonami code gets you more lives!\n\nclick ok to resume");
    })

/////////////////
//    MARIO    //
/////////////////
    let marioSelector = document.querySelector(".mario");
    let background = document.querySelector("body");

    window.addEventListener('load', () => {
        marioSelector.style.position = 'absolute';
        marioSelector.style.left = '50px';
        marioSelector.style.top = '200px';
        background.style.backgroundPositionX = 0;
    });

    window.addEventListener('keyup', (event) => {
        if (event.key === 'ArrowLeft') {
            marioSelector.classList.add("flip-horizontally");
            if (marioSelector.style.left.toString() !== '0px') {
                marioSelector.style.left = parseInt(marioSelector.style.left) - 50 + 'px';
            }
            background.style.backgroundPositionX = parseInt(background.style.backgroundPositionX) + 50 + 'px';

        } else if (event.key === 'ArrowRight') {
            marioSelector.classList.remove("flip-horizontally");
            if (marioSelector.style.left.toString() !== '1250px') {
                marioSelector.style.left = parseInt(marioSelector.style.left) + 50 + 'px';
            }
            background.style.backgroundPositionX = parseInt(background.style.backgroundPositionX) - 50 + 'px';

        } else if (event.key === 'ArrowUp') {
            if (marioSelector.style.top.toString() !== '0px')
                marioSelector.style.top = parseInt(marioSelector.style.top) - 50 + 'px';
        } else if (event.key === 'ArrowDown') {
            if (marioSelector.style.top.toString() !== '550px')
                marioSelector.style.top = parseInt(marioSelector.style.top) + 50 + 'px';
        }
    })

});