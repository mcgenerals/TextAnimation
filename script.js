function createTextAnimation(txt,elid,intvl,noreset){
    const ani = new Animation(txt,elid);
    setInterval(ani.upd,intvl);
}

class Animation {
    constructor(text,elementId,noreset) {
        this.text = text;
        this.elementId = elementId;
        this.cur = "";
        this.noreset = noreset;
        this.ended = false;
        this.i = 0;
        this.spl = this.text.split("");
        this.upd = this.upd.bind(this);
    }

    upd(){
        if(this.cur==this.text){
            this.cur = "";
            this.i = 0;
            if(this.noreset){ this.ended = true; }
            document.getElementById(this.elementId).innerHTML = "";
            return;
        }
        if( this.ended ){
            return;
        }
        this.spl = this.text.split("");
        this.cur += this.spl[this.i];
        this.i++;
        document.getElementById(this.elementId).innerHTML = this.cur;
    }
    // © 2023 MCGENERALS
}
