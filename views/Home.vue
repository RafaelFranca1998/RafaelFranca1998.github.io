<template>
<div>
    <v-carousel>
        <v-carousel-item v-for="imageSlide in imagesSlide" :key="imageSlide.id"
        :src="imageSlide.src">
            <div class="title">{{imageSlide.title}}</div>
        </v-carousel-item>
    </v-carousel>

    <v-container grid-list-lg text-xs-center>
        <v-layout v-for="post in posts" :key="post.text">
            <v-flex xs12>
                <v-card dark :color="post.backgroundColor">
                    <img :src="post.image" class="postImage">
                    <v-card-text>{{post.text}}</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            imagesSlide: [
                // Dados do banco
                {
                    title: 'Titulo 1',
                    src: 'http://zanetticoaching.com.br/wp-content/uploads/2017/11/saude.jpg',
                    id: '1',
                },
                {
                    title: 'Titulo 2',
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnkn8ELPZ4G9N0lVFt-4YDNdht3sRAmZqJWxPTZdcCd0VuIDXc',
                    id: '2',
                },
                {
                    title: 'Titulo 3',
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIfmajjRUL0dOsQQt2_ewrNqPsgepvKS4fqaSBDi0RhvxnJJYR',
                    id: '3',
                },
            ],
            posts: [
                // Dados do banco
                {
                    image: 'https://www.insidesources.com/wp-content/uploads/2015/12/bigstock-Healthcare-and-medicine-concep-109955468-300x300.jpg',
                    text: '1 Laboris sunt sit quis occaecat esse deserunt non consequat amet. Laborum laborum pariatur minim velit incididunt sunt eu. Elit Lorem pariatur occaecat deserunt eu irure pariatur.',
                    backgroundColor: '#41a2D3',
                },
                {
                    image: 'https://www.insidesources.com/wp-content/uploads/2015/12/bigstock-Healthcare-and-medicine-concep-109955468-300x300.jpg',
                    text: '2 Laboris sunt sit quis occaecat esse deserunt non consequat amet. Laborum laborum pariatur minim velit incididunt sunt eu. Elit Lorem pariatur occaecat deserunt eu irure pariatur.',
                    backgroundColor: '#4512D3',
                },
                {
                    image: 'https://www.insidesources.com/wp-content/uploads/2015/12/bigstock-Healthcare-and-medicine-concep-109955468-300x300.jpg',
                    text: '3 Laboris sunt sit quis occaecat esse deserunt non consequat amet. Laborum laborum pariatur minim velit incididunt sunt eu. Elit Lorem pariatur occaecat deserunt eu irure pariatur.',
                    backgroundColor: '#451c23',
                },
                {
                    image: 'https://www.insidesources.com/wp-content/uploads/2015/12/bigstock-Healthcare-and-medicine-concep-109955468-300x300.jpg',
                    text: '4 Laboris sunt sit quis occaecat esse deserunt non consequat amet. Laborum laborum pariatur minim velit incididunt sunt eu. Elit Lorem pariatur occaecat deserunt eu irure pariatur.',
                    backgroundColor: '#d23',
                },
            ],
        };
    },
};
</script>

<style>
.title {
    position: absolute;
    bottom: 50px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
}

.postImage {
    width: 80%;
    height: 50vh;
    margin-top: 15px;
}
</style>
