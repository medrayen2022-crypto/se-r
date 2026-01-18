function changer(){
    let val = document.getElementById("niveau").value;
    document.getElementById("aff").textContent=val;
}

function verif(nom){
    let i=0
    while(i<nom.length){
        if(!(("A"<=nom[i] && nom[i]<="Z" )||( "a"<=nom[i] && nom[i]<="z" ) || (nom[i]==" "))){
            alert("Votre nom doit être composé uniquement par des lettres ou des espaces !");
            return false;
        }
        i++;
    }
    return true;
}

function vnc(){
    let nom = document.getElementById("nc").value;
    let ch= nom.length
    if( ch<3 || ch>30 || verif(nom)==false){
        alert("Votre nom doit être entre 3 et 30 !");
        return false;
    }
    return true;
}

function vemail(){
    let ch=document.getElementById("email").value;
    if (ch.indexOf("@gmail.com") ===-1){
        alert("Vérifier votre email !");
        return false;
    }
    return true;
}

function verifnum(x) {
    let i = 0;
    while (i < x.length) {
        if (!(x[i]>="0" && x[i]<="9")) {
            alert("Le numéro de téléphone doit être composé uniquement des chiffres !");
            return false;
        }
        i++;
    }
    return true;
}

function vtel(){
    let x=document.getElementById("tel").value;
    if ( x.length<8 || verifnum(x)==false){
        alert("Votre numéro doit être composé de 8 chiffres !");
        return false;
    }
    return true;
}

function vdate(){
    let dn= new Date(document.getElementById("date").value);
    let now= new Date();
    if(dn>=now){
        alert("Vérifier votre date de naissance !");
        return false;
    }
    return true;
}

function vgenre(){
    let x=document.getElementById("homme").checked;
    let y=document.getElementById("femme").checked;
    if(x== true || y==true){
        return true;
    }
    alert("Veuillez cocher votre genre !");
    return false;
}

function vc(ch) {
    let i=0;
    while (i<ch.length){
        if(ch[i]==" "){
            alert("Votre mot de passe ne peut pas contenir des espaces !");
            return false;
        }
        i++;
    }
    return true;
}

function vmp(){
    let ch=document.getElementById("mdp").value;
    if(ch.length<4 || vc(ch)==false){
        alert("Votre mot de passe doit être >=4 !")
        return false;
    }
    return true;
}

function vni(){
    let ch1=document.getElementById("mdp").value;
    let ch2=document.getElementById("cmdp").value;
    if(ch1 != ch2){
        alert("Vérifier votre mot de passe !");
        document.getElementById("cmdp").value="";
        return false;
    }
    return true;
}

function vchoix(){
    let windows = document.getElementById("Windows").checked;
    let mac = document.getElementById("Mac").checked;
    let linux = document.getElementById("Linux").checked;
    if (windows==false && mac==false && linux==false){
        alert("Veuillez cocher votre  système d'exploitation préféré  !");
        return false;
    }
    return true;
}

function vcheckbox(){
    let x=document.getElementById("checkbox").checked;
    if(x==false){
        alert("Pour continuer, veuillez accepter les coockies !");
        return false;
    }
    return true;
}

function envoyer(){
    return vnc() && vdate() && vemail() && vtel() && vgenre() && vmp() && vni() && vchoix() && vcheckbox();

}
