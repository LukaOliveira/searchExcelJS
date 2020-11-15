//Checks data when starting the page
getJson()

$('#search').keyup(function(){
    searchAluno()

    $('.aluno').click(showResult)
})

$('#forceUp').click(forceUpdate)

