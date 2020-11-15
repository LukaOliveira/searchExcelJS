//shows the results of the chosen modality
function showResult(){
    let data = $(this).text()
        let index;
        for(let i = 0; i < dados.length; i++){
            if(dados[i].Modalidade == data){
                index = i
                break;
            }
        }
        let chaves = Object.keys(dados[index])
        $('#blockShow').html("")
        $('#blockShow').slideUp(function(){
           for(let i = 0; i < chaves.length; i++){
                item = chaves[i]
                $('#blockShow').append("<span class='dataAluno'>"+chaves[i]+": "+dados[index][chaves[i]]+"</span><br/><br/>")
            } 
            
        })
        $('#blockShow').slideDown()
}

//searches the table for what is being typed
function searchAluno(){
    let busca = $('#search').val()
    busca = new RegExp(busca, "i")
    $('#blockShow').html("")


    $(dados).each(function(index, item){
        if($('#search').val() != ""){
            if(item.Modalidade.match(busca)){
                $('#blockShow').append('<div class="aluno">'+item.Modalidade+"</div><br/>")
                
                
            }
        }
    })
}

//Force update of local data
function forceUpdate(){
    forceUp = true;
    getJson()
}