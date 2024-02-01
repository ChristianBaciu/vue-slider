const{createApp}= Vue
createApp({
    data(){
        return{
            currentImage: 0,
            autoScroll: null,
            slides:[
                {
                    image: 'img/01.webp',
                    game: 'Spiderman',
                    text: 'Spiderman Spiderman Spiderman Spiderman',
                },
                {
                    image: 'img/02.webp',
                    game: 'Ratchet & Clank',
                    text: 'Ratchet & Clank Ratchet & Clank Ratchet & Clank Ratchet & Clank',
                },
                {
                    image: 'img/03.webp',
                    game: 'Fortnite',
                    text: 'Fortnite Fortnite Fortnite Fortnite',
                },   
                {
                    image: 'img/04.webp',
                    game: 'Stray',
                    text: 'Stray Stray Stray Stray',
                },   
                {
                    image: 'img/05.webp',
                    game: 'Avengers',
                    text: 'Avengers Avengers Avengers Avengers',
                },
    
            ]

        }
    },
    created(){
        this.activeInterval()
    },
    methods:{

        
        // su
        prev(){
            this.currentImage--
            if(this.currentImage < 0){
                this.currentImage = this.slides.length - 1
            }
        },

        // giu
        next(){
            this.currentImage++
            if(this.currentImage > this.slides.length - 1){
                this.currentImage = 0
            }
        },

        // tempo scorrimento immagine
        activeInterval(){
            this.autoScroll = setInterval( ()=>{
                this.next()
            },3000) // ogni 3 s
        },

        // con @mouseover="stopInterval" passandoci sopra col mouse l'immagine si blocca
        stopInterval(){
            clearInterval(this.autoScroll)
        },

        // con @click="changeImage(index)" al click cambiamo immagine
        changeImage(index){
            this.currentImage = index
        },

    }
}).mount('#app')
