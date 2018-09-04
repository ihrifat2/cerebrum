check0();
check1();
check2();
check3();
check4();
check5();
check6();
check7();
check8();

/*  STEP 1  */

var q1 = 0;
var q2 = 0;
var q3 = 0;
var q4 = 0;


/* For Question 1 */

$(document).ready(function(){
    $('.assessment0').on('click',function(){
        var data = $(".assessment0:checked").val();
        q1 = 1;

        check0();
            
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 2 */

$(document).ready(function(){
    $('.assessment1').on('click',function(){
        var data = $(".assessment1:checked").val();
        q2 = 1;

        check0();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 3 */

$(document).ready(function(){
    $('.assessment2').on('click',function(){
        var data = $(".assessment2:checked").val();
        q3 = 1;

        check0();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 4 */

$(document).ready(function(){
    $('.assessment3').on('click',function(){
        var data = $(".assessment3:checked").val();
        q4 = 1;

        check0();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

function check0(){
    if (q1 == 1 && q2 == 1 && q3 == 1 && q4 == 1) {
        document.getElementById("btnStep1").removeAttribute("disabled");
    } else {
        document.getElementById("btnStep1").setAttribute("disabled", true);
    }
}

/*  STEP 2  */

var q5 = 0;
var q6 = 0;
var q7 = 0;
var q8 = 0;



/* For Question 5 */

$(document).ready(function(){
    $('.assessment4').on('click',function(){
        var data = $(".assessment4:checked").val();
        q5 = 1;

        check1();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});


/* For Question 6 */

$(document).ready(function(){
    $('.assessment5').on('click',function(){
        var data = $(".assessment5:checked").val();
        q6 = 1;

        check1();
            
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 7 */

$(document).ready(function(){
    $('.assessment6').on('click',function(){
        var data = $(".assessment6:checked").val();
        q7 = 1;

        check1();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 8 */

$(document).ready(function(){
    $('.assessment7').on('click',function(){
        var data = $(".assessment7:checked").val();
        q8 = 1;

        check1();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

function check1(){
    if (q5 == 1 && q6 == 1 && q7 == 1 && q8 == 1) {
        document.getElementById("btnStep2").removeAttribute("disabled");
    } else {
        document.getElementById("btnStep2").setAttribute("disabled", true);
    }
}

/*  STEP 3  */

var q9 = 0;
var q10 = 0;
var q11 = 0;
var q12 = 0;
var q13 = 0;

/* For Question 9 */

$(document).ready(function(){
    $('.assessment8').on('click',function(){
        var data = $(".assessment8:checked").val();
        q9 = 1;

        check2();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});


/* For Question 10 */

$(document).ready(function(){
    $('.assessment9').on('click',function(){
        var data = $(".assessment9:checked").val();
        q10 = 1;

        check2();
            
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 11 */

$(document).ready(function(){
    $('.assessment10').on('click',function(){
        var data = $(".assessment10:checked").val();
        q11 = 1;

        check2();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 12 */

$(document).ready(function(){
    $('.assessment11').on('click',function(){
        var data = $(".assessment11:checked").val();
        q12 = 1;

        check2();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 13 */

$(document).ready(function(){
    $('.assessment12').on('click',function(){
        var data = $(".assessment12:checked").val();
        q13 = 1;

        check2();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

function check2(){
    if (q9 == 1 && q10 == 1 && q11 == 1 && q12 == 1 && q13 == 1) {
        document.getElementById("btnStep3").removeAttribute("disabled");
    } else {
        document.getElementById("btnStep3").setAttribute("disabled", true);
    }
}

/*  STEP 4  */

var q14 = 0;
var q15 = 0;
var q16 = 0;
var q17 = 0;
var q18 = 0;
var q19 = 0;

/* For Question 14 */

$(document).ready(function(){
    $('.assessment13').on('click',function(){
        var data = $(".assessment13:checked").val();
        q14 = 1;

        check3();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});


/* For Question 15 */

$(document).ready(function(){
    $('.assessment14').on('click',function(){
        var data = $(".assessment14:checked").val();
        q15 = 1;

        check3();
            
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 16 */

$(document).ready(function(){
    $('.assessment15').on('click',function(){
        var data = $(".assessment15:checked").val();
        q16 = 1;

        check3();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 17 */

$(document).ready(function(){
    $('.assessment16').on('click',function(){
        var data = $(".assessment16:checked").val();
        q17 = 1;

        check3();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 18 */

$(document).ready(function(){
    $('.assessment17').on('click',function(){
        var data = $(".assessment17:checked").val();
        q18 = 1;

        check3();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 19 */

$(document).ready(function(){
    $('.assessment18').on('click',function(){
        var data = $(".assessment18:checked").val();
        q19 = 1;

        check3();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

function check3(){
    if (q14 == 1 && q15 == 1 && q16 == 1 && q17 == 1 && q18 == 1 && q19 == 1) {
        document.getElementById("btnStep4").removeAttribute("disabled");
    } else {
        document.getElementById("btnStep4").setAttribute("disabled", true);
    }
}

/*  STEP 5  */

var q20 = 0;
var q21 = 0;
var q22 = 0;
var q23 = 0;
var q24 = 0;
var q25 = 0;
var q26 = 0;
var q27 = 0;
var q28 = 0;
var q29 = 0;

/* For Question 20 */

$(document).ready(function(){
    $('.assessment19').on('click',function(){
        var data = $(".assessment19:checked").val();
        q20 = 1;

        check4();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 21 */

$(document).ready(function(){
    $('.assessment20').on('click',function(){
        var data = $(".assessment20:checked").val();
        q21 = 1;

        check4();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 22 */

$(document).ready(function(){
    $('.assessment21').on('click',function(){
        var data = $(".assessment21:checked").val();
        q22 = 1;

        check4();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 23 */

$(document).ready(function(){
    $('.assessment22').on('click',function(){
        var data = $(".assessment22:checked").val();
        q23 = 1;

        check4();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 24 */

$(document).ready(function(){
    $('.assessment23').on('click',function(){
        var data = $(".assessment23:checked").val();
        q24 = 1;

        check4();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 25 */

$(document).ready(function(){
    $('.assessment24').on('click',function(){
        var data = $(".assessment24:checked").val();
        q25 = 1;

        check4();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 26 */

$(document).ready(function(){
    $('.assessment25').on('click',function(){
        var data = $(".assessment25:checked").val();
        q26 = 1;

        check4();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 27 */

$(document).ready(function(){
    $('.assessment26').on('click',function(){
        var data = $(".assessment26:checked").val();
        q27 = 1;

        check4();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 28 */

$(document).ready(function(){
    $('.assessment27').on('click',function(){
        var data = $(".assessment27:checked").val();
        q28 = 1;

        check4();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 29 */

$(document).ready(function(){
    $('.assessment28').on('click',function(){
        var data = $(".assessment28:checked").val();
        q29 = 1;

        check4();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

function check4(){
    if (q20 == 1 && q21 == 1 && q22 == 1 && q23 == 1 && q24 == 1 && q25 == 1  && q26 == 1 && q27 == 1 && q28 == 1 && q29 == 1) {
        document.getElementById("btnStep5").removeAttribute("disabled");
    } else {
        document.getElementById("btnStep5").setAttribute("disabled", true);
    }
}

/*  STEP 6  */

var q30 = 0;
var q31 = 0;
var q32 = 0;
var q33 = 0;
var q34 = 0;
var q35 = 0;
var q36 = 0;
var q37 = 0;

/* For Question 30 */

$(document).ready(function(){
    $('.assessment29').on('click',function(){
        var data = $(".assessment29:checked").val();
        q30 = 1;

        check5();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 31 */

$(document).ready(function(){
    $('.assessment30').on('click',function(){
        var data = $(".assessment30:checked").val();
        q31 = 1;

        check5();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 32 */

$(document).ready(function(){
    $('.assessment31').on('click',function(){
        var data = $(".assessment31:checked").val();
        q32 = 1;

        check5();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 33 */

$(document).ready(function(){
    $('.assessment32').on('click',function(){
        var data = $(".assessment32:checked").val();
        q33 = 1;

        check5();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 34 */

$(document).ready(function(){
    $('.assessment33').on('click',function(){
        var data = $(".assessment33:checked").val();
        q34 = 1;

        check5();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 35 */

$(document).ready(function(){
    $('.assessment34').on('click',function(){
        var data = $(".assessment34:checked").val();
        q35 = 1;

        check5();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 36 */

$(document).ready(function(){
    $('.assessment35').on('click',function(){
        var data = $(".assessment35:checked").val();
        q36 = 1;

        check5();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 37 */

$(document).ready(function(){
    $('.assessment36').on('click',function(){
        var data = $(".assessment36:checked").val();
        q37 = 1;

        check5();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

function check5(){
    if (q30 == 1 && q31 == 1 && q32 == 1 && q33 == 1 && q34 == 1 && q35 == 1  && q36 == 1 && q37 == 1) {
        document.getElementById("btnStep6").removeAttribute("disabled");
    } else {
        document.getElementById("btnStep6").setAttribute("disabled", true);
    }
}

/*  STEP 7 */

var q38 = 0;
var q39 = 0;
var q40 = 0;
var q41 = 0;

/* For Question 38 */

$(document).ready(function(){
    $('.assessment37').on('click',function(){
        var data = $(".assessment37:checked").val();
        q38 = 1;

        check6();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 39 */

$(document).ready(function(){
    $('.assessment38').on('click',function(){
        var data = $(".assessment38:checked").val();
        q39 = 1;

        check6();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 40 */

$(document).ready(function(){
    $('.assessment39').on('click',function(){
        var data = $(".assessment39:checked").val();
        q40 = 1;

        check6();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 41 */

$(document).ready(function(){
    $('.assessment40').on('click',function(){
        var data = $(".assessment40:checked").val();
        q41 = 1;

        check6();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

function check6(){
    if (q38 == 1 && q39 == 1 && q40 == 1 && q41 == 1) {
        document.getElementById("btnStep7").removeAttribute("disabled");
    } else {
        document.getElementById("btnStep7").setAttribute("disabled", true);
    }
}

/*  STEP 8 */

var q42 = 0;
var q43 = 0;
var q44 = 0;
var q45 = 0;

/* For Question 42 */

$(document).ready(function(){
    $('.assessment41').on('click',function(){
        var data = $(".assessment41:checked").val();
        q42 = 1;

        check7();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 43 */

$(document).ready(function(){
    $('.assessment42').on('click',function(){
        var data = $(".assessment42:checked").val();
        q43 = 1;

        check7();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 44 */

$(document).ready(function(){
    $('.assessment43').on('click',function(){
        var data = $(".assessment43:checked").val();
        q44 = 1;

        check7();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 45 */

$(document).ready(function(){
    $('.assessment44').on('click',function(){
        var data = $(".assessment44:checked").val();
        q45 = 1;

        check7();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

function check7(){
    if (q42 == 1 && q43 == 1 && q44 == 1 && q45 == 1) {
        document.getElementById("btnStep8").removeAttribute("disabled");
    } else {
        document.getElementById("btnStep8").setAttribute("disabled", true);
    }
}

/*  STEP 8 */

var q46 = 0;
var q47 = 0;
var q48 = 0;
var q49 = 0;
var q50 = 0;
var q51 = 0;
var q52 = 0;
var q53 = 0;

/* For Question 46 */

$(document).ready(function(){
    $('.assessment45').on('click',function(){
        var data = $(".assessment45:checked").val();
        q46 = 1;

        check8();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 47 */

$(document).ready(function(){
    $('.assessment46').on('click',function(){
        var data = $(".assessment46:checked").val();
        q47 = 1;

        check8();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 48 */

$(document).ready(function(){
    $('.assessment47').on('click',function(){
        var data = $(".assessment47:checked").val();
        q48 = 1;

        check8();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 49 */

$(document).ready(function(){
    $('.assessment48').on('click',function(){
        var data = $(".assessment48:checked").val();
        q49 = 1;

        check8();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});


/* For Question 50 */

$(document).ready(function(){
    $('.assessment49').on('click',function(){
        var data = $(".assessment49:checked").val();
        q50 = 1;

        check8();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 51 */

$(document).ready(function(){
    $('.assessment50').on('click',function(){
        var data = $(".assessment50:checked").val();
        q51 = 1;

        check8();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 52 */

$(document).ready(function(){
    $('.assessment51').on('click',function(){
        var data = $(".assessment51:checked").val();
        q52 = 1;

        check8();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 53 */

$(document).ready(function(){
    $('.assessment52').on('click',function(){
        var data = $(".assessment52:checked").val();
        q53 = 1;

        check8();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

function check8(){
    if (q46 == 1 && q47 == 1 && q48 == 1 && q49 == 1 && q50 == 1 && q51 == 1 && q52 == 1 && q53 == 1) {
        document.getElementById("btnStep9").removeAttribute("disabled");
    } else {
        document.getElementById("btnStep9").setAttribute("disabled", true);
    }
}