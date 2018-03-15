console.log("activate");
$(document).ready(function(){

    $("body").on("click",".smash",function(){

        console.log("trying to smash " + this.id);
        $.post("/smash",{
            id: this.id
        }).done((r)=>{
            location.reload();
        });

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