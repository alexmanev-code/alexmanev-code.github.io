

var acc = document.getElementsByClassName("accordion");
        var i;
        
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                } 
            });
        }

const showPopupBooks = document.querySelector('.show-popup.books');
const popupContainerBooks = document.querySelector('.popup-container.books');

const showPopupMovies = document.querySelector('.show-popup.movies');
const popupContainerMovies = document.querySelector('.popup-container.movies');

const showPopupGames = document.querySelector('.show-popup.games');
const popupContainerGames = document.querySelector('.popup-container.games');

const showPopupWorkout = document.querySelector('.show-popup.workout');
const popupContainerWorkout = document.querySelector('.popup-container.workout');

const showPopupSocial = document.querySelector('.show-popup.social');
const popupContainerSocial = document.querySelector('.popup-container.social');

const showPopupCoding = document.querySelector('.show-popup.prom');
const popupContainerCoding = document.querySelector('.popup-container.prom');

const closeBtnBooks = document.querySelector('.close-btn.books');
const closeBtnMovies = document.querySelector('.close-btn.movies');
const closeBtnGames = document.querySelector('.close-btn.games');
const closeBtnSocial = document.querySelector('.close-btn.social');
const closeBtnWorkout = document.querySelector('.close-btn.workout');
const closeBtnCoding = document.querySelector('.close-btn.prom');

showPopupBooks.onclick = () => {
    popupContainerBooks.classList.add('active');
}
closeBtnBooks.onclick = () => {
    popupContainerBooks.classList.remove('active');
}


showPopupMovies.onclick = () => {
    popupContainerMovies.classList.add('active');
}
closeBtnMovies.onclick = () => {
    popupContainerMovies.classList.remove('active');
}


showPopupGames.onclick = () => {
    popupContainerGames.classList.add('active');
}
closeBtnGames.onclick = () => {
    popupContainerGames.classList.remove('active');
}


showPopupWorkout.onclick = () => {
    popupContainerWorkout.classList.add('active');
}
closeBtnWorkout.onclick = () => {
    popupContainerWorkout.classList.remove('active');
}


showPopupSocial.onclick = () => {
    popupContainerSocial.classList.add('active');
}
closeBtnSocial.onclick = () => {
    popupContainerSocial.classList.remove('active');
}


showPopupCoding.onclick = () => {
    popupContainerCoding.classList.add('active');
}
closeBtnCoding.onclick = () => {
    popupContainerCoding.classList.remove('active');
}

