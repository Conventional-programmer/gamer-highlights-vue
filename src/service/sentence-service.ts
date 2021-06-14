import axios from 'axios'

class SentenceService {
    getRandomSentence()
    {
        return axios.get<string>('https://cas-function.azurewebsites.net/api/HttpTriggerCSharpGettingStarted?code=hi4MpgE4cIx7KLpRqXjFzdVcqdvY5EO4ojby9bMLiVPODgi/tVw3Cg==').then((response) =>{
            return response.data;
        });
    }
}
export default new SentenceService();
