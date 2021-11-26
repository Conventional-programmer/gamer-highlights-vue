import axios from "axios";
class ImageService {
    baseUrl: string
    constructor()
    {
        const baseUrl = process.env.VUE_APP_BASE_URL;
        this.baseUrl= baseUrl+'image'
    }
    uploadImage(image: string)
    {
        const formData = new FormData();
        formData.append("file",image);
        formData.append("image",JSON.stringify({imageType:'PROFILE'}))
        return axios.post(this.baseUrl,formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((result) => {
            return result.data;
        })
    }
}
export default new ImageService();
