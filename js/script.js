const app = new Vue(
    {
        el: '#app',
        data: {
            counter: 0,
            photos: [
                'img/jumbo.jpg',
                'img/kasta.jpg',
                'img/slider.jpg',
            ]
        },
        methods: {
            nextPhoto(){
                (this.counter == this.photos.length - 1) ? this.counter = 0 
                : this.counter++;
            },
            prevPhoto(){
                if(this.counter == 0){
                    this.counter = this.photos.length - 1 
                } else {
                    this.counter--;
                }
                }
        }
    }
);

