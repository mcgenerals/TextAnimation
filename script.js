function createTextAnimation(txt,elid,intvl){
    const ani = new Animation(txt,elid);
    setInterval(ani.upd,intvl);
}

class Animation {
    constructor(text,elementId) {
        this.text = text;
        this.elementId = elementId;
        this.cur = "";
        this.i = 0;
        this.spl = this.text.split("");
        this.upd = this.upd.bind(this);
    }

    upd(){
        if(this.cur==this.text){
            this.cur = "";
            this.i = 0;
            document.getElementById(this.elementId).innerHTML = "";
            return;
        }
        this.spl = this.text.split("");
        this.cur += this.spl[this.i];
        this.i++;
        document.getElementById(this.elementId).innerHTML = this.cur;
    }
    // © 2023 MCGENERALS
}
