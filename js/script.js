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

const app2 = new Vue(
    {
        el: '#app2',
        data: {
            counter: 0,
            photos: [
                'https://kastamonu.ru/upload/resize_cache/iblock/30b/1152_600_1/%D0%A3%D1%87%D0%B0%D1%81%D1%82%D0%BE%D0%BA%20%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B8%20%D0%B8%20%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D1%8F%20%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B0%20%D0%BB%D0%B0%D0%BC%D0%B8%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B9%20%D0%BF%D0%BB%D0%B8%D1%82%D1%8B.%20%D0%9E%D0%B1%D0%BE%D1%80%D1%83%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%20WEMHOENER.jpg',
                'https://kastamonu.ru/upload/resize_cache/iblock/d86/1152_600_1/%D0%A2%D1%80%D0%B5%D1%85%D1%81%D0%B5%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%BE%D1%85%D0%BB%D0%B0%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C.jpg',
                'https://kastamonu.ru/upload/resize_cache/iblock/50b/1152_600_1/%D0%A3%D1%87%D0%B0%D1%81%D1%82%D0%BE%D0%BA%20%D0%BA%D0%BE%D0%BD%D1%82%D0%BE%D1%80%D0%BE%D0%BB%D1%8F%20%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B0.jpg',
                'https://kastamonu.ru/upload/resize_cache/iblock/295/1152_600_1/HOMAG.jpg',
                'https://kastamonu.ru/upload/resize_cache/iblock/e6f/1152_600_1/Siempelkamp.jpg',
                'https://kastamonu.ru/upload/resize_cache/iblock/c27/1152_600_1/Dieffenbacher%20-%20%D0%B2%D1%82%D0%BE%D1%80%D0%B0%D1%8F%20%D0%BB%D0%B8%D0%BD%D0%B8%D1%8F.jpg',
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


