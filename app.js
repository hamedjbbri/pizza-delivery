$(document).ready(function(){

    // Makes button Enable
    $("input[name='pizza-size']").change(function(){
        if($('#small').is(":checked") || $('#medium').is(":checked") || $('#large').is(":checked")) {
            $("#next1").removeAttr('disabled')
        }
    })  

    $('.sec-btn').click(function(){ 
        $(this).parent().parent().next().slideToggle();
    }) 

    $('#next1').on('click', function(){
        $("#collapseOne").slideUp()            
        $("#collapseTwo").slideDown()            
    })

    //  Accardion Topping
    $('input[type="checkbox"]').on('change', function(){
         if($('#mashroom').prop("checked") || $('#cheese').prop("checked") || $('#bacon').prop("checked")){
               $('#next2').removeAttr('disabled');
         } 
             else if(!$('#mashroom').prop("checked") && !$('#cheese').prop("checked") && !$('#bacon').prop("checked")){
           $('#next2').attr('disabled', 'true'); 
             
        }      

    })


    $('#next2').on('click', function(){
        $("#collapseTwo").slideUp()            
        $("#collapseThree").slideDown()            
    })

    // Accardion personal Information
    $('#gridCheck').on('change', function(){
        $(this).prop('checked') ? $('#addtocart').removeAttr('disabled') :  $('#addtocart').attr('disabled','true')
    })
    
    $('#addtocart').on('click', function(e){
         e.preventDefault();
    
         const radiobtns = $('input[type="radio"]')
         let selectedRadioBtn ;
         for (let i = 0; i < radiobtns.length; i++) {
             if(radiobtns[i].checked){
                selectedRadioBtn = radiobtns[i].value;
             }
            
        }

        const checkboxes = $('input.topping')
        let selectedCheckboxes = [] ;
        for (let i = 0; i < checkboxes.length; i++) {
            if(checkboxes[i].checked){
                selectedCheckboxes.push(checkboxes[i].value);
            }
       }

       
       const email = $('#inputEmail4').val();
       const inputPassword4 = $('#inputPassword4').val();
       const inputAddress = $('#inputAddress').val();
       const inputAddress2 = $('#inputAddress2').val();
       const inputCity = $('#inputCity').val();
       const inputState = $('#inputState').val();
       const inputZip = $('#inputZip').val();
      

        $(".container").slideUp(1000);

        setTimeout(function(){
            $('.order-summary').removeAttr('display');
            $('.order-summary').slideDown(1000);
               
        }, 1000);
  

        selectedCheckboxes.forEach(topping => {
            const p = document.createElement('p');
            p.innerText = topping;

            $('.order').append(p);
                    });
          
        $('.size').html(`<b>Pizza size :</b> ${selectedRadioBtn}`);
    
        $('.address').html(`<b>Address</b> 
              
 


             ${inputAddress} , ${inputAddress2},${inputCity}, ${inputState}, ${inputZip}

            `);
        
    })
 
   
    $("#form1").on("submit", function(e){
        e.preventDefault();
        
    //    const small = $('#small').val();
    //     const medium = $('#medium').val();
    //     const large = $('#large').val();
    //     const mashroom = $('#mashroom').val();
    //     const bacon = $('#bacon').val();
    //     const small = $('#small').val();
    //     const small = $('#small').val();
 
    })




})