const{createApp}= Vue
createApp({
    data(){
        return{
            currentImage: 0,
            autoScroll: null,
            games:{
                images:[
                    'img/01.webp', //0
                    'img/02.webp', //1
                    'img/03.webp', //2
                    'img/04.webp', //3
                    'img/05.webp', //4
                ],
                // title:[
                //     '  ', //0
                //     '  ', //1
                //     '  ', //2
                //     '  ', //3
                //     '  ', //4
                // ],
                // text:[
                //     '  ', //0
                //     '  ', //1
                //     '  ', //2
                //     '  ', //3
                //     '  ', //4
                // ],
                title: 'nome gioco',
                text: 'testo lungo',
            }
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
                this.currentImage = this.games.images.length - 1
            }
        },

        // giu
        next(){
            this.currentImage++
            if(this.currentImage > this.games.images.length - 1){
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
