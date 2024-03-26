// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Livin' on a Prayer", artist: "Bon Jovi", genre: "Rock" },
    { title: "Sweet Child o' Mine", artist: "Guns N' Roses", genre: "Rock" },
    { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },
    { title: "Thriller", artist: "Michael Jackson", genre: "Pop" },
    { title: "Stairway to Heaven", artist: "Led Zeppelin", genre: "Rock" }
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Pop",
    "Groot": "Rock"
};

// Function to generate playlist for each Guardian based on their genre preference
function generatePlaylist(guardian) {
    return songs.filter(song => song.genre === guardians[guardian]);
}

// Function to display playlists for each Guardian
function displayPlaylists() {
    const playlistsDiv = document.getElementById("playlists");

    for (const guardian in guardians) {
        const playlistDiv = document.createElement("div");
        playlistDiv.innerHTML = `<h2>${guardian}'s Playlist</h2>`;

        const playlist = generatePlaylist(guardian);

        for (const song of playlist) {
            const songDiv = document.createElement("div");
            songDiv.innerHTML = `<p>${song.title} - ${song.artist}</p>`;
            playlistDiv.appendChild(songDiv);
        }

        playlistsDiv.appendChild(playlistDiv);
    }
}

// Call the displayPlaylists function to display the playlists on the web page
displayPlaylists();

const songTitle = document.createElement