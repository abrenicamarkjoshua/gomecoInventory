
function suggetion() {

     $('#sug_input').keyup(function(e) {

         var formData = {
             'product_name' : $('input[name=title]').val(),
			 'product_name_bad' : $('input[name=title_bad]').val()
         };

         if(formData['product_name'].length >= 1){

           // process the form
           $.ajax({
               type        : 'POST',
               url         : 'ajax.php',
               data        : formData,
               dataType    : 'json',
               encode      : true
           })
               .done(function(data) {
                   //console.log(data);
                   $('#result').html(data).fadeIn();
                   $('#result li').click(function() {

                     $('#sug_input').val($(this).text());
                     $('#result').fadeOut(500);

                   });

                   $("#sug_input").blur(function(){
                     $("#result").fadeOut(500);
                   });

               });

         } 
		 if(formData['product_name_bad'].length >= 1){

           // process the form
           $.ajax({
               type        : 'POST',
               url         : 'ajax_bad_order.php',
               data        : formData,
               dataType    : 'json',
               encode      : true
           })
               .done(function(data) {
                   //console.log(data);
                   $('#result_bad').html(data).fadeIn();
                   $('#result_bad li').click(function() {

                     $('#sug_input_bad').val($(this).text());
                     $('#result_bad').fadeOut(500);

                   });

                   $("#sug_input_bad").blur(function(){
                     $("#result_bad").fadeOut(500);
                   });

               });

         }
		 else {

           $("#result_bad").hide();

         };

         e.preventDefault();
     });

 }


  $('#sug-form').submit(function(e) {

      var formData = {
          'p_name' : $('input[name=title]').val()
      };

        // process the form
        $.ajax({
            type        : 'POST',
            url         : 'ajax.php',
            data        : formData,
            dataType    : 'json',
            encode      : true
        })
            .done(function(data) {
                //console.log(data);
                $('#product_info').html(data).show();
                total();
                $('.datePicker').datepicker('update', new Date());

            }).fail(function() {
                $('#product_info').html(data).show();
            });


      e.preventDefault();
  });
  $('#sug-form_bad').submit(function(e) {

      var formData = {
          'p_name_bad' : $('input[name=title_bad]').val()
      };

        // process the form
        $.ajax({
            type        : 'POST',
            url         : 'ajax_bad_order.php',
            data        : formData,
            dataType    : 'json',
            encode      : true
        })
            .done(function(data) {
                //console.log(data);
                $('#product_info_bad').html(data).show();
                total();
                $('.datePicker').datepicker('update', new Date());

            }).fail(function() {
                $('#product_info_bad').html(data).show();
            });


      e.preventDefault();
  });


  function total(){
    $('#product_info input').change(function(e)  {
            var price = +$('input[name=price]').val() || 0;
            var qty   = +$('input[name=quantity]').val() || 0;
            var total = qty * price ;
                $('input[name=total]').val(total.toFixed(2));
    });
  }
  $(document).ready(function() {
    $('.submenu-toggle').click(function () {
       $(this).parent().children('ul.submenu').toggle(200);
    });
    suggetion();
    total();
    $('.datePicker')
        .datepicker({
            format: 'yyyy-mm-dd',
            todayHighlight: true,
            autoclose: true
        });
  });
  