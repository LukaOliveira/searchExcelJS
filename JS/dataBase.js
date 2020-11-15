var dados = "", forceUp = false

function checkLastUp(){

    let lastDateUp = localStorage.getItem("lastDateUp")
    if(lastDateUp == null){
        return true
    }else{
        let hourAct = new Date().getHours()
        if(lastDateUp != hourAct){
            return true;
        }else{
            return false;
        }
    }
    
}

function getJson() {
    if (checkLastUp() || forceUp) {
        console.log("Atulizando dados locais...")
        upDateEx()
        console.log("Dados atualizdos com sucesso!")
        if(forceUp){
            forceUp = false;
            alert("Dados locais atualizados com sucesso!")
            document.location.reload()
        }
    }else{
        dados = decrypt(localStorage.getItem("lastUp"))
        dados = dados.replace('°', "")
        dados = dados.replace('°', "")
        dados = JSON.parse(dados)
        console.log("Utilizando dados locais!")
    }
}



