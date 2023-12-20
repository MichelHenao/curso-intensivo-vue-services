<template>
    <div>
        <h3>Listado de posts</h3>
        <ul class="post-list">
            <li v-for="post in posts" :key="post.id">{{ post.title }}</li>

        </ul>
    </div>
</template>

<script lang="ts" setup>
    import { onMounted } from 'vue';
    import postService from '../services/postService.';


            const service = new postService();
            const posts = service.getPosts();

            onMounted(async () =>{
                await service.fetchAll()
            })
</script>

<style scoped>
    .post-list{
        width: 95vh;
        height: 75vh;
        padding: 20px;
        list-style-type: none;
    }

    .post-list li{
        padding: 10px;
        width: 100%;
        border: 1px solid;
    }
</style>