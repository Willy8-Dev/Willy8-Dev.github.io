function toggleDarkMode(){
    var x = document.getElementById("body");
    
    if(x.style.backgroundColor === "#353535"){
        x.style.backgroundColor = "#fff";
    }
    else{
        x.style.backgroundColor = "#353535"
    }
}