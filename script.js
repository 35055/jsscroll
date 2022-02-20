class SCROLL {
    constructor(option) {
        if(typeof option.element == 'string') {
            this.el = document.querySelector(option.element);
        }else if(option.element instanceof HTMLElement) {
            this.el = option.element
        }
        this.top = option.top;
        this.unit = option.unit
        this.el.style.position = 'fixed';
        this.el.style.top = this.scrollNumber() + 'px';
        window.addEventListener('scroll', () => this.scroll())
        window.addEventListener('resize', () => this.scroll())
    }
    // scrollY - берет расстояние от верха до скрола 
    scroll() {
        this.getUnit = this.scrollNumber();
        if(this.getUnit - scrollY > 0) {
           this.el.style.top = this.getUnit - scrollY + 'px';
        }else {
            this.el.style.top = 0;
        }
    }
    scrollNumber() {
        if(this.unit == 'px') {
            return this.top >= 0 ? this.top : 0;
        }else if(this.unit == '%' || this.unit == undefined) {
            return this.calc(window.innerHeight, this.top) - this.el.clientHeight
        }
    }
    calc(height, top) {
        return height * top / 100
    }

}

let scroll = new SCROLL({
    element: '.header__nav',
    top: 100,
})


console.log(window.innerHeight);




/////дз...../////


let title = document.querySelector('.header__content');

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

title.addEventListener('mouseover',() => {
    title.style.top = `${random(0,785)}px`;
    title.style.left = `${random(0,1250)}px`;
})