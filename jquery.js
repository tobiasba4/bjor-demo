// javasript 


$("#my-button").click(function() {
console.log("knappen trycktes på")


$.get("https://api.github.com/zen", function(data, textstatus,){

console.log(textstatus);

$('#show server text').text(data);

}
);
