const select = document.getElementById("filtroPontosTuristicos");
const opcoesSelect = select.options;
const boxCards = document.getElementsByClassName("extern_box_card");

select.addEventListener("change", function () {
    Filtrar(this.value);
});

function Filtrar(selecao){

    if(selecao == "todos"){
        for(let i = 0; i < boxCards.length; i++){
            boxCards[i].style.display = "block";
        }
    }
    else{
        for(let i = 0; i < opcoesSelect.length; i++){
            for(let j = 0; j < boxCards.length; j++){
                if(boxCards[j].classList.contains(opcoesSelect[i].value)){
                    if (selecao == opcoesSelect[i].value){
                        boxCards[j].style.display = "block";
                    }
                    else{
                        boxCards[j].style.display = "none";
                    }
                }
            }
        }
    }
}