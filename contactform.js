
$(".namediv").hide()
$(".emaildiv").hide()
$(".phonediv").hide()
$(".addressdiv").hide()

function  fori(){

    var j=0;

        if($("#nameid").val().length < 2){
        // $(".namediv").show()
        // $("#nameid").css({"border-bottom":"2px red solid"});
        j += 1;
        }

        if($("#emailid").val().indexOf("@") == -1 || $("#emailid").val().length < 6){
        // $(".emaildiv").show()
        // $("#emailid").css({"border-bottom":"2px red solid"});
        j += 10;
        }

        if(isNaN($("#phoneid").val()) || $("#phoneid").val().length != 10){
            // $(".phonediv").show()
            // $("#phoneid").css({"border-bottom":"2px red solid"});
            j += 100;
        }


        if($("#addressid").val().length <= 140){
        // $(".addressdiv").show()
        // $("#addressid").css({"border-bottom":"2px red solid"});
        j += 1000;
        }

        return j;
    }


   
 function validateform(){ 
     
    var i = fori();
    console.log(fori());


    $(".namediv").hide()
    $(".emaildiv").hide()
    $(".phonediv").hide()
    $(".addressdiv").hide()
    $("#nameid").css({"border-bottom":"2px #599a68 solid"});
    $("#emailid").css({"border-bottom":"2px #599a68 solid"});
    $("#phoneid").css({"border-bottom":"2px #599a68 solid"});
    $("#addressid").css({"border-bottom":"2px #599a68 solid"});


    if( i=== 0){
        alert("Form Submitted Successfully!");
        return true;
    }

    if(i=== 1){
        $(".namediv").show()
        $("#nameid").css({"border-bottom":"2px red solid"});
        return false;
    }

    if(i=== 10){
        $(".emaildiv").show()
        $("#emailid").css({"border-bottom":"2px red solid"});
        return false;
    }

    if(i=== 100){
        $(".phonediv").show()
        $("#phoneid").css({"border-bottom":"2px red solid"});
        return false;
    }

    if(i=== 1000){
        $(".addressdiv").show()
        $("#addressid").css({"border-bottom":"2px red solid"});
        return false;
    }

    if(i=== 11){
        $(".namediv").show()
        $("#nameid").css({"border-bottom":"2px red solid"});
        $(".emaildiv").show()
        $("#emailid").css({"border-bottom":"2px red solid"});
        return false;
    }

    if(i=== 101){
        $(".namediv").show()
        $("#nameid").css({"border-bottom":"2px red solid"});
        $(".phonediv").show()
        $("#phoneid").css({"border-bottom":"2px red solid"});
        return false;
    }

    if(i=== 1001){
        $(".namediv").show()
        $("#nameid").css({"border-bottom":"2px red solid"});
        $(".addressdiv").show()
        $("#addressid").css({"border-bottom":"2px red solid"});
        return false;
    }

    if(i=== 110){
        $(".emaildiv").show()
        $("#emailid").css({"border-bottom":"2px red solid"});
        $(".phonediv").show()
        $("#phoneid").css({"border-bottom":"2px red solid"});
        return false;
    }
 
    if(i=== 1010){
        $(".emaildiv").show()
        $("#emailid").css({"border-bottom":"2px red solid"});
        $(".addressdiv").show()
        $("#addressid").css({"border-bottom":"2px red solid"});
        return false;
    }

    if(i=== 1100){
        $(".phonediv").show()
        $("#phoneid").css({"border-bottom":"2px red solid"});
        $(".addressdiv").show()
        $("#addressid").css({"border-bottom":"2px red solid"});
        return false;
    }
    
    if(i=== 111){
        $(".namediv").show()
        $("#nameid").css({"border-bottom":"2px red solid"});
        $(".emaildiv").show()
        $("#emailid").css({"border-bottom":"2px red solid"});
        $(".phonediv").show()
        $("#phoneid").css({"border-bottom":"2px red solid"});
        return false;
    }

    if(i=== 1011){
        $(".namediv").show()
        $("#nameid").css({"border-bottom":"2px red solid"});
        $(".emaildiv").show()
        $("#emailid").css({"border-bottom":"2px red solid"});
        $(".addressdiv").show()
        $("#addressid").css({"border-bottom":"2px red solid"});
        return false;
    }

    if(i=== 1101){
        $(".namediv").show()
        $("#nameid").css({"border-bottom":"2px red solid"});
        $(".phonediv").show()
        $("#phoneid").css({"border-bottom":"2px red solid"});
        $(".addressdiv").show()
        $("#addressid").css({"border-bottom":"2px red solid"});
        return false;
    }

    if(i=== 1110){
        $(".emaildiv").show()
        $("#emailid").css({"border-bottom":"2px red solid"});
        $(".phonediv").show()
        $("#phoneid").css({"border-bottom":"2px red solid"});
        $(".addressdiv").show()
        $("#addressid").css({"border-bottom":"2px red solid"});
        return false;
    }

    if(i=== 1111){
        $(".namediv").show()
        $("#nameid").css({"border-bottom":"2px red solid"});
        $(".emaildiv").show()
        $("#emailid").css({"border-bottom":"2px red solid"});
        $(".phonediv").show()
        $("#phoneid").css({"border-bottom":"2px red solid"});
        $(".addressdiv").show()
        $("#addressid").css({"border-bottom":"2px red solid"});
        return false;
    }


   

}