console.log("activate");
$(document).ready(function(){

    $("body").on("click",".smash",function(){

        console.log("trying to smash " + this.id);

    });

    $("form").on("submit",function(e){

        e.preventDefault();
        
        $.post("/new",{
            
            burger_name: $("#burger").val().trim()
        }).done((r)=>{

            location.reload();
            
        });

    });

});