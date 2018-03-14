console.log("activate");
$(document).ready(function(){

    $("body").on("click",".smash",function(){

        console.log("trying to smash " + this.id);

    });

    $("form").on("submit",function(){

    });

});