import dotenv from 'dotenv';

dotenv.config();
export const amadeusAuth = async() =>{
    const url = 'https://test.api.amadeus.com/v1/security/oauth2/token';
    try{
        const resp = await fetch(url, { 
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: 
            new URLSearchParams({
                grant_type: 'client_credentials',
                client_id: 'VgHkUSwrgcotE35AGdQUiRaGMOhvaqKz',
                client_secret : 'DQHgSu6a0uXAFquR'
            }), 
        });
        const data = await resp.json();
        if(data) return {token: data.access_token, success: true};
        else return {err: data.error, success: false};
    }
    catch(err){
        console.log(err)
    }
}