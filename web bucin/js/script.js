pindah = 1;
function ngga(){
    if(pindah == 1){
        Btn.style.top=400;
        Btn.style.left=300;
        pindah=2;
        }
        else if(pindah == 2){
            Btn.style.top=400;
            Btn.style.left=50;
            pindah=3;
        }
        else if(pindah == 3){
            Btn.style.top=3700;
            Btn.style.left=166;
            pindah=1;
        }
}