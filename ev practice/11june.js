class mahmud {
    constructor(hassan, md){
        this.mail=hassan;
        this.pass=md;
    }

    update(){
        
            let pattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/i;
    
            if(this.mail.search(pattern)==-1){
                alert("Email address is wrong");
            }

            else if (this.pass.length < 6){
                alert("Password must be minimum 6 character") 

            }

            else{
                document.write("Email succesfully login");
            }

    }
}