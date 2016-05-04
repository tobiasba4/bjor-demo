// javasript 


$("#my-button").click(function() {
console.log("knappen trycktes på")


$.get("https://api.github.com/zen", function(data, textstatus,){

console.log(textstatus);
//visa texten
$('#show server text').text(data);



} ).fail(function(jqxhr, errorstatus) {console.log("request var fel")})




}
);
