var images =
["https://i.pinimg.com/564x/ec/0f/74/ec0f748088b968b746cb747b32023a8f.jpg", 
"https://media.istockphoto.com/vectors/father-with-two-daughter-vector-id844755824?s=612x612", 
"https://st2.depositphotos.com/1672707/11214/v/950/depositphotos_112149618-stock-illustration-two-smilling-sisters.jpg",
"https://media.istockphoto.com/vectors/back-view-of-two-cute-girls-hugging-friendship-day-vector-id825655396?s=612x612"];

var names = ["Swathi Brundavanam", "Venu Brundavanam", "Suhaila Brundavanam", "Manogna Brundavanam"];

var i = 0
function update(){
    i++;
    var numbers_of_family_member_in_array = 5
    if (i> numbers_of_family_member_in_array)
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}