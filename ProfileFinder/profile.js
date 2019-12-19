class profiles {
    constructor() {
        this.clientid = "";
        this.clientSecret = "";
    }
    async getProfile(username) {
        let profileResponse, profile;
        profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
        profile = await profileResponse.json();

        return { 
            profile
        }
    }
}