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


  } );//jquery