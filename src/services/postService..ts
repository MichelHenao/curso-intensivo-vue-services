import {ref, Ref} from 'vue'
import Ipost from '@/interfaces/Ipost'

class postService {
    private posts:Ref<Array<Ipost>>

    constructor(){
        this.posts = ref<Array<Ipost>>([])
    }

    getPosts ():Ref<Array<Ipost>>{
        return this.posts
    }

    async fetchAll(): Promise<void>{
        try{
            const url = 'https://jsonplaceholder.typicode.com/posts';
            const response = await fetch(url);
            const json = await response.json();
            this.posts.value = await json
        }catch(error){
            console.log(error)
        }
    }
}

export default postService