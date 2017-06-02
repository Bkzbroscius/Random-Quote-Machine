//Generate a quote when user clicks button and diplay it
$(document).ready(function() {
    $("#randomQuoteButton").on("click", function(){
 $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function (json) {
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