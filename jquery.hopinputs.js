/**
 * HopInputs jquery plugin
 *
 * hop to next input upon maxlength
 * Usage $(form.ssn1).hopinputs({hopLength: 3, hopToInput: form.ssn2}); 
 *  or $(form.ssn1).hopinputs({hopLength: 3);
 *  or $(form.ssn1).hopinputs();  //maxlength of ssn1 is 3
 */
(function ($) {
    jQuery.fn.hopinputs = function(opts){ 
       if (!opts){ opts = {} }
       if (!opts.hopLength){
           opts.hopLength = 'USE_MAXLENGTH';   
       }
       if (!opts.hopToInput){
          opts.hopToInput = 'NEXT_INPUT';  
       }
        
       $(this).each(function(){ 
          var hoplen, hopipt;
          if (opts.hopLength == 'USE_MAXLENGTH'){
             hoplen = $(this).attr('maxlength');
          }else{
             hoplen = opts.hopLength;   
          }
          if (!hoplen){
             //console.log('opts.hopLength or maxlength attribute are not defined');
             return $(this);
          }
          
          if (opts.hopToInput == 'NEXT_INPUT'){
             hopipt = $(this).next(':input');
          }else{
             hopipt = $(opts.hopToInput);
          }
          
          $(this).keyup(function(){
             if ($(this).val().length >= hoplen){
                
                if (hopipt.length == 1){
                   hopipt.focus();
                   //hopipt.select();
                }else{
                   $(this).blur(); //invalid input to hop to, just blur
                }
             }
          });
       });
       
       return $(this);
    }
})(jQuery);
