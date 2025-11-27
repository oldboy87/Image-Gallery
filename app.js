//TODO: Create thumbnail images so that the user can click on them and see them in a fullscreen format

//STEP1: store image data

const imageData = [
    {
        imgName: "value",
        imageSRC: "external url OR local relative path",
        imageAlt: "value",
    },

    {
        imgName: "value",
        imageSRC: "external url OR local relative path",
        imageAlt: "value",
    },

    {
        imgName: "value",
        imageSRC: "external url OR local relative path",
        imageAlt: "value",
    },
]

//STEP2: create thumbnail images
function createThumbnails(){
    //select the DOM element (thumbnail-container) to contain the thumbnails
    //this is a repetitive task --> for loop (for, forEach())...)
    //Loop task:
    // -create img element
    // - update src and alt attributes (properties) of the img element to match those in the array (parameters)
    // - give each img a className (img.className)
    // - add an event listener to each image --> the event handler of this event is the function you write to create the fullscreen images
    // - append the created images to the thumbnail-container

}

//STEP3: create fullscreen images
function createFullscreenImages(){
    //this is the event handler
    // select the fullscreen-container
    //delete the current fullscreen image
    // something like: fullscreenContainer.innerHTML = "" OR nul
    //create image
    //update its values (properties)
    //add className for styling (making the image full screen)
    //append the image to the container
}

//add the createFullscreenImages function as the event handler of the event above
//call the createThumbnails function