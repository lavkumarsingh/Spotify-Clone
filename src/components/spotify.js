
// authincation api
export const authEndPoint = "https://accounts.spotify.com/authorize";

// redirect uri

const redirectUri = "http://localhost:3000/";

const clintId = "ffdfd6dd17e34bb9aa71a22295e34c38";

// permitions
const scopes = [
    "user-read-currently-playing",
    "user-modify-playback-state",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read"
];

export const getTokenFromUrl = () => {
    return window.location.hash
}

export const loginUrl = `${authEndPoint}?client_id=${clintId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`; 