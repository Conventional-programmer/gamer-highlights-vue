import axios from 'axios'

class SentenceService {
    getRandomSentence()
    {
        return axios.get<string>('https://sentence.azurewebsites.net/api/HttpTriggerCSharpGettingStarted?code=50bLjSRh9Dg/ZFwUXMSxlXEvSTAtsyRzR6DfJj2KtMbXR6mhTUpHRA==').then((response) =>{
            return response.data;
        });
    }
}
export default new SentenceService();
