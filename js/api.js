// (function($){

// //fetch a random quote post
// // $('body').append('');
// // submit a new quote with the form using ajax
// // e prevent default

// //history api,

  
// })(jQuery);

jQuery( function( $ ) {
var lastpage = ''
  $( '#new-quote-button' ).on( 'click', function ( e ) {
   lastpage = document.URL;
    e.preventDefault();
    $.ajax( {
      method: 'GET',
      url: 'http://localhost:3000/project5/wp-json/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function ( data ) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $( '.entry-title' ).html( "&mdash; " + post.title.rendered );    
        $( '.entry-content' ).html( post.content.rendered );
      console.log(post);
        if(post._qod_quote_source !== '' && post._qod_quote_source_url !== ''){
            $('.source').html('<a href="' + post._qod_quote_source_url + '"> ' + post._qod_quote_source + '</a>');

        }else if (post._qod_quote_source !== '' && post._qod_quote_source_url == '') {
            $('.source').html(post._qod_quote_source)

        }else{
            $('.source').html('')
        }
        history.pushState(null, null, post.link);
      }
      } );//ajax
    } );
    $(window).on('popstate', function() {
      if(window.location.hash.indexOf('qm-overview' ) ===1){
        return false;
      }else{
        window.location.replace(lastpage);
      }//else
    });//popstate

    $('#submission-button').on('click', function(event) {
    
      var quoteData = {
        status: 'pending',
        title: $('#quote-author').val(),
        content: $('#quote-content').val(),
        _qod_quote_source: $('#quote-source').val(),
        _qod_quote_source_url: $('#quote-source-url').val()
      }

      event.preventDefault();
      $.ajax({
         method: 'POST',
         url: api_vars.root_url + 'wp/v2/posts/',
         data: quoteData,

         beforeSend: function(xhr) {
            xhr.setRequestHeader( 'X-WP-Nonce', api_vars.nonce );
         },

         success: function() {
           $('#quote-submission-form').hide('slow');
           $('.entry-title').after('<p>'+api_vars.success+'</p>');
         },//success

         error: function() {
          $('#quote-submission-form').hide('slow');
          $('.entry-title').after('<p>'+api_vars.failure+'</p>');
         }//error

      })//ajax
   });//submit button on click

  } );//jquery