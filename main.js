$(document).ready(function(){
    $("form").on("submit", function(e){
        e.preventDefault()
        
        const novaTarefa = $("form input").val()
        const listaTarefa = $(`<li></li>`)
        $(`<li>${novaTarefa}</li>`).appendTo(listaTarefa)
        $(listaTarefa).appendTo("ul")
        $("form input").val("")

        $(listaTarefa).on("click", () => {
            $(listaTarefa).css("text-decoration" , "line-through")
        })
    })
})