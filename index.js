var song = document.getElementById("stop-play");
var images = document.getElementById("images");
var bgimage = document.getElementById("click");
var Namess = document.getElementById('name');
var Artists = document.getElementById('Artist'); 
const drawerContent = document.querySelector(".drawer-content");





function playOrPause() {
    if (song.paused) {
        song.play();
        bgimage.style.content = "url('./pause.png')";


    } else {
        song.pause();
        bgimage.style.content = "url('./play.png')";


    }
}

let music_list =[

    {
        'Name':'Rose Linn - SNAP (Lyrics)',
        'Artist':'Linn',
        'path':'./Rosa Linn - SNAP (Lyrics)(MP3_160K).mp3',
    },


    {
        'Name':"Indila - Love Story(MP3_160K)",
        'Artist' : 'indila',
        'path':'./Indila - Love Story(MP3_160K).mp3',
    },

    {
        'Name':'Rocking A Cardigan',
        'Artist':"Cardigan",
        'path':'./Rocking A Cardigan In Atlanta (Remix)(MP3_320K).mp3',
    },

   
    {
        'Name':'JVSTIN-CLANDESTION',
        'Artist':'JUSTIN',
        'path': './JVSTIN - CLANDESTINA (TikTok Remix)(MP3_160K).mp3'
    },

    {
        'Name':'Lowry_Into_Your_Arms_',
        'Artist': 'Witt Lowry',
        'path':'./Witt_Lowry_Into_Your_Arms_Lyrics_ft_Ava_Max_No_RapMP3_160K.mp3'
    },
    {
        'Name':"Basta_Boi_Remix_Tiktok",
        'Artist':'Alfons',
        'path':'./Basta_Boi_Remix_Tiktok_Basta_Boi_Alfons_Basta_Boi_LirikMP3_160K.mp3',

    },

    {
        'Name': "onion meera lesson mera-instagram-verson",
        'Artist':'instagram',
        'path':'./instasamka_onion_mera_instagram_version_отключаю_телефон_tiktok.mp3'
    },
     
    {
        'Name':'Coolio_Gangstas_Paradise_feat',
        'Artist':'Tommy Boy',
        'path':'./Coolio_Gangsta_s_Paradise_feat_L_V_Official_Music_VideoMP3_160K.mp3'
    }
 

]

let image_list = ['./snap.jpeg', './love.jpeg','./Monkey.jpeg','./beat.jpeg','./intoyourarms.jpeg','./basta.jpeg','./bankcard.jpeg','./download (6).jpeg'];


let current_image_index = 0;

function nextImage() {
    if (current_image_index >= image_list.length - 1) {
        current_image_index = 0;
    } else {
        current_image_index++;
    }
    images.style.content = "url('" + image_list[current_image_index] + "')";
}

function previousImage() {
    if (current_image_index <= 0) {
        current_image_index = image_list.length - 1;
    } else {
        current_image_index--;
    }
    images.style.content = "url('" + image_list[current_image_index] + "')";
}




let curr_index = 0;

function forward(){
    curr_index++;
    if(curr_index >= music_list.length){
        curr_index=0;
    }

    let currentSong = music_list[curr_index];
    song.src = currentSong.path;
    let names = currentSong.Name;
    let Artist = currentSong.Artist;
    Namess.textContent = names;
    Artists.textContent = Artist;
    nextImage();
    song.load();
    song.play();
    bgimage.style.content = "url('./pause.png')";
    

}

function backward(){
    curr_index--;
    if(curr_index < 0){
        curr_index = music_list.length - 1;
    }
    let currentSong = music_list[curr_index];

    song.src = currentSong.path;
    let names = currentSong.Name;
    let Artist = currentSong.Artist;
    Namess.textContent = names;
    Artists.textContent = Artist;
    previousImage()
    song.load();
    song.play();
    bgimage.style.content = "url('./pause.png')";

}

function openDrawer() {
    if (drawerContent.style.width === "250px") {
        drawerContent.style.width = "0";
    } else {
        drawerContent.style.width = "250px";
    }
}

function closee(){
    if(drawerContent.style.width === "250px"){
        drawerContent.style.width = "0";

    }
    else{
        drawerContent.style.width = "0";

    }
    

}
