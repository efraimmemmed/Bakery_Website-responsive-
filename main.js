function navOpen() {
    let resMenu = document.getElementsByClassName("res-menu")[0];
    
    if (resMenu.style.right === "-50%") {
      resMenu.style.right = "0";
    } else {
      resMenu.style.right = "-50%";
    }
  }

  function navClose(){
    let resMenu = document.getElementsByClassName("res-menu")[0];
    if(resMenu.style.right === "0"){
        resMenu.style.right = "50%";
    }else{
        resMenu.style.right = "-50%";   
     }
  }
   