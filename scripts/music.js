var mobileNav = document.getElementById('mobileNav')

function toggleMenu() {
    mobileNav.classList.toggle('hidden')
}

//MUSIC ARRAY
var music = ["songs/freefall.mp3", "songs/agoraphobia.mp3", "songs/almost.mp3", "songs/eatyouryoung.mp3", "songs/worksong.mp3", "songs/stickseason.mp3", "songs/everywhere.mp3", "songs/birthday.mp3", "songs/comealong.mp3","songs/time.mp3","songs/cornfield.mp3","songs/merrygoround.mp3","songs/nothing.mp3","songs/justaman.mp3","songs/survive.mp3","songs/ruthlessness.mp3","songs/keepyourfriends.mp3","songs/wouldntyoulike.mp3","songs/falseconfidence.mp3","songs/consequences.mp3","songs/luminary.mp3","songs/solas.mp3","songs/millions.mp3","songs/curses.mp3","songs/achilles.mp3","songs/experience.mp3"];
var titles = ["It's Called: Freefall - Rainbow Kitten Surprise", "Agoraphobia - Autoheart", "Almost - Hozier", "Eat Your Young - Hozier", "Work Song - Hozier", "Stick Season - Noah Kahan", "Everywhere, everything - Noah Kahan", "Birthday Suit - Cosmo Sheldrake", "Come Along - Cosmo Sheldrake", "Time - Hans Zimmer", "Cornfield Chase - Hans Zimmer", "Merry Go Round of Life - Joe Hisaishi", "Nothing [Dr. Stockill] - Emilie Autumn", "Just a Man - Epic the Musical","Survive - Epic the Musical","Ruthlessness - Epic the Musical","Keep Your Friends Close - Epic the Musical","Wouldn't You like - Epic the Musical","False Confidence - Noah Kahan","The Consequence Of Imagination Is Fear - Junie & TheHutFriends","Luminary - Joel Sunny","Solas - Jamie Duffy","Millions Knives - Trigun Stampede","Curses - The Crane Wives","Achilles Come Down - Gang of Youth","Experience - Ludovico Einaudi"];


//array of all the album cover pictures
var vinyl = document.getElementById("vinyl");


vinyl.addEventListener("click", function () {
    playAudio(music);
})

//play/pause songs
function playAudio(music) {
    //get audioplayer
    var audioPlayer = document.getElementById('audioPlayer');

    //Picks a random integer for shuffling music array
    var shuffle = Math.floor(Math.random() * music.length);

    //Swap place holder title with randomly shuffled song title
    document.getElementById("title").textContent = titles[shuffle];

    //pause any already playing songs
    audioPlayer.pause();
    //assign the requested song to the audio player as a source
    audioPlayer.src = music[shuffle];
    //play song
    audioPlayer.play();
}

