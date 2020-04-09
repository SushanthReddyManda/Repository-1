
$(".namediv").hide()
$(".emaildiv").hide()
$(".phonediv").hide()
$(".addressdiv").hide()

    function funcname(){
        if($("#nameid").val().length < 2){
         $(".namediv").show()
         $("#nameid").css({"border-bottom":"2px red solid"});
            return funcemail();
        }else{
            return funcemail();
        }
    }

    function funcemail(){
        if($("#emailid").val().indexOf("@") == -1 || $("#emailid").val().length < 6){
         $(".emaildiv").show()
         $("#emailid").css({"border-bottom":"2px red solid"});
            return funcphone();
        }else{
            return funcphone();
        }
    }

    function funcphone(){
        if(isNaN($("#phoneid").val()) || $("#phoneid").val().length != 10){
             $(".phonediv").show()
             $("#phoneid").css({"border-bottom":"2px red solid"});
            return funcaddress();
        }else{
            return funcaddress();
        }
    }

    function funcaddress(){
        if($("#addressid").val().length <= 140){
         $(".addressdiv").show()
         $("#addressid").css({"border-bottom":"2px red solid"});
            return returnfunc();
        }else{
            return returnfunc();
        }
    }

    function returnfunc(){
    if($("#nameid").val().length < 2 ||  isNaN($("#phoneid").val()) || $("#phoneid").val().length != 10  || $("#emailid").val().indexOf("@") == -1 || $("#emailid").val().length < 6   || $("#addressid").val().length <= 140   ){
        return false;
    }else{
        alert("Your Information Saved Successfully");
         return true;
    }
}

 function validateform(){ 
    $(".namediv").hide()
    $(".emaildiv").hide()
    $(".phonediv").hide()
    $(".addressdiv").hide()
    $("#nameid").css({"border-bottom":"2px #599a68 solid"});
    $("#emailid").css({"border-bottom":"2px #599a68 solid"});
    $("#phoneid").css({"border-bottom":"2px #599a68 solid"});
    $("#addressid").css({"border-bottom":"2px #599a68 solid"});

    return funcname();

 }

