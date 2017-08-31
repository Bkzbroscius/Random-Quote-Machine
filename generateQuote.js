//Generate a quote when user clicks button and diplay it
$(document).ready(function() {
    $("#randomQuoteButton").on("click", function(){
 $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function (json) {
        $("#result").html(json.quote +"<br><br>"+ "---" + json.author);
          
      });
      
    });

  });

//Post a quote to Twitter
$(document).ready (function() {
       $("#btnTweet").click(function() {
       var quote = $("#result").text();
       var tweetUrl = 'https://twitter.com/share?text=' +
       encodeURIComponent(quote);
       window.open(tweetUrl);
       });
});
