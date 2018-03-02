// (function($){

// //fetch a random quote post
// // $('body').append('');
// // submit a new quote with the form using ajax
// // e prevent default

// //history api,

  
// })(jQuery);

jQuery( function( $ ) {

  $( '#new-quote-button' ).on( 'click', function ( e ) {
    e.preventDefault();
    $.ajax( {
      url: 'http://localhost:3000/project5/wp-json/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function ( data ) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $( '.entry-meta' ).text( post.title.rendered );
        $( '.entry-content' ).html( post.content.rendered );
      },
      cache: false
    } );
  } );
} );