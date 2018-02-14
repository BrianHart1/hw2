// Your code goes here:

let handleImageClick = function(event) {
  let theImage = jQuery(event.target)
  jQuery("#main-image").attr("src", theImage.attr("src"))
}

jQuery("img").on("click", handleImageClick)


// plain english says, when i click on an img, we are storing that
// image name/src and executing handleImageClick, then we are defining
// theImage as whatever the target of the click was (the image name/src),
// finally we are changing #main-image src attribute to the src of theImage,
// which was already been defined as whatever we clicked on
