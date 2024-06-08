class validation {
    constructor(email){
        this.email=email;
    }

    validate(){
        let pattern = /[a-z0-9._]+@[a-z]+\.[a-z]/;
        

        if(this.email.search(pattern)==-1){
            alert("Please enter your valid email address");
        }
       
        
        else{
            alert("valid email address");
        }

    }
}