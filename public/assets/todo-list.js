$(document).ready(function(){
  $('form').on('submit', function(e){

      var item = $('form input');
      var itemValue = item.val();
      
      if (itemValue.indexOf(',') > -1) {
        var todo = {item: itemValue};
        
        $.ajax({
          type: 'POST',
          url: '/todo',
          data: todo,
          success: function(data){
            // response got from `todoController.js` file
            console.log('POST ', data);
            //do something with the data via front-end framework
            location.reload();
          }
        });

      } else {
        alert ('Please enter the `name, relation`')
      }

      return false;

  });

  $('li').on('click', function(){
      var itemId = $(this).data('key');
      var item = $(this).text().trim().replace(/ /g, "-");

      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          console.log('DELETE ', data);
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
