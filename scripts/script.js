function peopleGallery(){
    let val = document.querySelector(".people").getAttribute('data-value');
    if (val==1){
        document.querySelector(".peopleGall").classList.add("gallVisibility");
        document.querySelector(".people").classList.add("picExit");
        document.querySelector(".people").classList.remove("pic");
        document.querySelector('#pplID').href = "#ppl";
        document.querySelector(".people").setAttribute("data-value", "0");
        document.querySelector(".people .txtExit").classList.add("txtExitVis");
        document.querySelector(".people .picText").classList.add("picTextNVis");
    }
    else{
        document.querySelector('#pplID').href = "#gallery";
        document.querySelector(".people").setAttribute("data-value", "1");
        document.querySelector(".peopleGall").classList.remove("gallVisibility");
        document.querySelector(".people").classList.remove("picExit");
        document.querySelector(".people").classList.add("pic");
        document.querySelector(".people .txtExit").classList.remove("txtExitVis");
        document.querySelector(".people .picText").classList.remove("picTextNVis");
    }  
};
function urbanGallery (){
     let val2 = document.querySelector(".urban").getAttribute('data-value');
        if (val2==1){
        document.querySelector(".urbanGall").classList.add("gallVisibility");
        document.querySelector(".urban").classList.add("picExit");
        document.querySelector(".urban").classList.remove("pic");
        document.querySelector('#urbID').href = "#urb";
        document.querySelector(".urban").setAttribute("data-value", "0");
        document.querySelector(".urban .txtExit").classList.add("txtExitVis");
        document.querySelector(".urban .picText").classList.add("picTextNVis");
        }
        else{
        document.querySelector('#urbID').href = "#gallery";
        document.querySelector(".urban").setAttribute("data-value", "1");
        document.querySelector(".urbanGall").classList.remove("gallVisibility");
        document.querySelector(".urban").classList.remove("picExit");
        document.querySelector(".urban").classList.add("pic");
        document.querySelector(".urban .txtExit").classList.remove("txtExitVis");
        document.querySelector(".urban .picText").classList.remove("picTextNVis");
        }
};
function animalsGallery(){
    let val3 = document.querySelector(".animals").getAttribute('data-value');
    console.log(val3);
    if (val3==1){
        document.querySelector(".animalsGall").classList.add("gallVisibility");
        document.querySelector(".animals").classList.add("picExit");
        document.querySelector(".animals").classList.remove("pic");
        document.querySelector('#aniID').href = "#ani";
        document.querySelector(".animals").setAttribute("data-value", "0");
        document.querySelector(".animals .txtExit").classList.add("txtExitVis");
        document.querySelector(".animals .picText").classList.add("picTextNVis");
    }
    else{
        document.querySelector('#aniID').href = "#gallery";
        document.querySelector(".animals").setAttribute("data-value", "1");
        document.querySelector(".animalsGall").classList.remove("gallVisibility");
        document.querySelector(".animals").classList.remove("picExit");
        document.querySelector(".animals").classList.add("pic");
        document.querySelector(".animals .txtExit").classList.remove("txtExitVis");
        document.querySelector(".animals .picText").classList.remove("picTextNVis");
    }
};
function natureGallery(){
    let val4 = document.querySelector(".nature").getAttribute('data-value');
    console.log(val4);
    if (val4==1){
        document.querySelector(".natureGall").classList.add("gallVisibility");
        document.querySelector(".nature").classList.add("picExit");
        document.querySelector(".nature").classList.remove("pic");
        document.querySelector('#natID').href = "#nat";
        document.querySelector(".nature").setAttribute("data-value", "0");
        document.querySelector(".nature .txtExit").classList.add("txtExitVis");
        document.querySelector(".nature .picText").classList.add("picTextNVis");
    }
    else{
        document.querySelector('#natID').href = "#gallery";
        document.querySelector(".nature").setAttribute("data-value", "1");
        document.querySelector(".natureGall").classList.remove("gallVisibility");
        document.querySelector(".nature").classList.remove("picExit");
        document.querySelector(".nature").classList.add("pic");
        document.querySelector(".nature .txtExit").classList.remove("txtExitVis");
        document.querySelector(".nature .picText").classList.remove("picTextNVis");
    }
};