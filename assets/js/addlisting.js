var current_fs, next_fs, previous_fs; //fieldsets
var animating = false; //flag to prevent quick multi-click glitches

$(".next").click(function(){
  if(animating || !validateForm()) return false; // Check if the form is valid before proceeding
  animating = true;
  
  current_fs = $(this).closest('fieldset');
  next_fs = current_fs.next();
  
  //activate next step on progressbar
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  
  //show the next fieldset
  next_fs.show(); 
  //hide the current fieldset with style
  current_fs.hide();
  animating = false;
});

$(".previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs = $(this).closest('fieldset');
  previous_fs = current_fs.prev();
  
  //de-activate current step on progressbar
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
  
  //show the previous fieldset
  previous_fs.show(); 
  //hide the current fieldset with style
  current_fs.hide();
  animating = false;
});

$(".submit").click(function(){
  // Show the thank you message
  $("fieldset").html("<h2>Thank You!</h2><p>Your form has been submitted.</p>");
  return false; // Prevent form submission
});

let cost = document.getElementById('sell-rent');
let listtype = document.getElementById('listtype');

listtype.addEventListener('change', function() {
    if (listtype.value === 'selling') {
        cost.placeholder = 'Selling Cost Rs.';
    } else {
        cost.placeholder = 'Renting Cost Rs.';
    }
});

// Address Autocomplete
function initAutocomplete() {
  var input = document.getElementById('address');
  var autocomplete = new google.maps.places.Autocomplete(input);
}


// Add this to your existing JavaScript
$("#preview-btn").click(function(event){
    event.preventDefault(); // Prevent the default form submission behavior
  
    var file = document.getElementById('file-input').files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $('#preview-image').attr('src', e.target.result);
        $('#image-preview').show();
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload an image before previewing.");
      $(this).removeClass("active"); // Reset the button state
    }
});

$("#close-preview-btn").click(function(event){
    event.preventDefault(); // Prevent the default form submission behavior
  
    $('#image-preview').hide();
});

// Validate the form
function validateForm() {
  var isValid = true;
  // Add your validation logic here
  // For example, check if required fields are not empty
  $("input[required]").each(function() {
    if ($(this).val() === "") {
      isValid = false;
      return false; // exit the loop early if a required field is empty
    }
  });
  return isValid;
}
