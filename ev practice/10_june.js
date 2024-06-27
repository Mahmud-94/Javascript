class validation {
    constructor (mail){
        this.gmail=mail;
       
    }

    validate(){
        let pattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/i;

        if(this.gmail.search(pattern)==-1){
            alert("Email address is wrong");
        }

        else{
            alert("Email address is correct");
        }
    }


}