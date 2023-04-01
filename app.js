const getVideos = async () => {
    const response = await fetch(
     "https://services.brid.tv/services/get/latest/26456/0/1/25/0.json"
    );
    const data = await response.json();
    console.log(data);
    const playerId = data.Player.id;
    console.log(playerId);
    const videos = data.Video;
    console.log(videos);
};

getVideos();



const playButton = document.getElementById("playButton");
const myVideo = document.getElementsByTagName("video");

playButton.onclick = function() {
    myVideo.play();
};

//padStart(2, "0") treba 2 ako nema stavi 0

// player = $bp()

// behavior: smooth