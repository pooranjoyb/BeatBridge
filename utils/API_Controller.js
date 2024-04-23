class API_Controller {

    constructor(client, secret) {
        this.client = client;
        this.secret = secret;
    }

    getToken = async() => {
        const res = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa( this.client + ':' + this.secret)
            },
            body: 'grant_type=client_credentials'
        });
        
        const data = await res.json();
        return data.access_token;
    }
    
    searchSong = async(song, token) => {
        
        const res = await fetch(`https://api.spotify.com/v1/search?q=${song}&type=track`, {
            method: 'GET',
            headers:{
                'Authorization': 'Bearer ' + token
            },
        });

        const data = await res.json();
        return data;
    }

    getTrack = async(song, token) => {
        const res = await fetch(song, {
            method: 'GET',
            headers:{
                'Authorization': 'Bearer ' + token
            },
        });

        const data = await res.json();
        return data;
    }
}

export default API_Controller;