//TODO: Create thumbnail images so that the user can click on them and see them in a fullscreen format

//TODO STEP1: store image data

//This is the rough outline we started with:
// const imageData = [
//     {
//         imgName: "Test 01 Original",
//         imageSRC: "value./img/content/test01original.jpg",
//         imageAlt: "Test 01 Original",
//     },

//     {
//         imgName: "Test 02 Original",
//         imageSRC: "value./img/content/test02original.jpg",
//         imageAlt: "Test 02 Original",
//     },

//     {
//         imgName: "Test 03 Original",
//         imageSRC: "value./img/content/test03original.jpg",
//         imageAlt: "Test 03 Original",
//     },

// ]

const imgData = [
  {
    imgClass: "nameTest01", //Do I want a different name for each size?
    imgSrc: {
      small: "./img/content/test01small.jpg",
      medium: "./img/content/test01medium.jpg",
      large: "./img/content/test01large.jpg",
      original: "./img/content/test01original.jpg",
    },
    imgAlt: "Test 01 ALT", //Do I want a different alt for each size?
  },

  {
    imgClass: "nameTest02", //Do I want a different name for each size?
    imgSrc: {
      small: "./img/content/test02small.jpg",
      medium: "./img/content/test02medium.jpg",
      large: "./img/content/test02large.jpg",
      original: "./img/content/test02original.jpg",
    },
    imgAlt: "Test 02 ALT", //Do I want a different alt for each size?
  },

  {
    imgClass: "nameTest03", //Do I want a different name for each size?
    imgSrc: {
      small: "./img/content/test03small.jpg",
      medium: "./img/content/test03medium.jpg",
      large: "./img/content/test03large.jpg",
      original: "./img/content/test03original.jpg",
    },
    imgAlt: "Test 03 ALT", //Do I want a different alt for each size?
  },
];

//TODO: pickedSize and wantSize() definitely need more consideration
//Variable that determines default size of fullscreen image
const pickedSize = "original";

// Function for updating size user wants image to display in fullscreen container
function wantSize(reqSize) {
  const array = ["small", "medium", "large", "original"];
  return reqSize;
}

//TODO: Do NOT forget this is how to properly reference objects within objects:
// console.log(imgData[0].imgSRC.small);

//TODO: STEP2: create thumbnail images
//This is the rough outline we started with:
// function createThumbnails(){
//     select the DOM element (thumbnail-container) to contain the thumbnails
//     this is a repetitive task --> for loop (for, forEach())...)
//     Loop task:
//     -create img element
//     - update src and alt attributes (properties) of the img element to match those in the array (parameters)
//     - give each img a className (img.className)
//     - add an event listener to each image --> the event handler of this event is the function you write to create the fullscreen images
//     - append the created images to the thumbnail-container

// }

function createThumbnails() {
  // select the DOM element (thumbnail-container) to contain the thumbnails
  const container = document.getElementById("thumbnail-container");
  // this is a repetitive task --> for loop (for, forEach())...)
  for (let i = 0; i <= imgData.length - 1; i++) {
    // Loop task:
    // -create img element
    const thumbnail = document.createElement("img");
    // - store properties as local variables
    const attSrc = imgData[i].imgSrc.small;
    const attAlt = imgData[i].imgAlt;
    const attClass = imgData[i].imgClass;
    // - update src and alt attributes (properties) of the img element to match those in the array (parameters)
    thumbnail.setAttribute("src", attSrc);
    thumbnail.setAttribute("alt", attAlt);
    //TODO: Come back to WIDTH and HEIGHT
    // thumbnail.setAttribute("width", "300");
    // - give each img a className (img.className)
    thumbnail.setAttribute("class", attClass);
    console.log(thumbnail);
    //TODO: - add an event listener to each image --> the event handler of this event is the function you write to create the fullscreen images
    //TODO: Add mouse hover EventListener here too
    thumbnail.addEventListener("click", createFullscreenImages);
    //   console.log(thumbnail.className);
    // console.log `USer clicked ${thumbnail}`;
    // handler

    // - append the created images to the thumbnail-container
    container.appendChild(thumbnail);
  }
}

//TODO THIS MIGHT ACTUALLY HELP
//TODO THIS MIGHT ACTUALLY HELP
//TODO THIS MIGHT ACTUALLY HELP
//TODO THIS MIGHT ACTUALLY HELP
//TODO THIS MIGHT ACTUALLY HELP

// const usethis = imgData.find(function (item) {
//   return item.imgClass === "nameTest01";
// });

// console.log(usethis);

// function imgFinder(className) {
//   return className;
// }

// const leg = imgData.find(imgFinder("nameTest01"));

// console.log(shit.findIndex(imgFinder("4")));

// console.log(imgFinder("fuck off"));

// function leg{
// imgData.find(imgFinder(clickedClass))
// }

//TODO /END OF EXAMPLE find()

//STEP3: create fullscreen images
function createFullscreenImages(thumbnail) {
  //this is the event handler
  //logs the HTML element object reference and also the derived class name, which is stored as a variable
  // console.log(thumbnail);
  // //TODO BACKUP START
  // const clickedImg = thumbnail.originalTarget;
  // const clickedSrc = clickedImg.src;
  // const clickedAlt = clickedImg.alt;
  // const clickedClass = clickedImg.className;

  // console.log(clickedImg);
  // console.log(clickedSrc);
  // console.log(clickedAlt);
  // console.log(clickedClass);

  // const getImgData = imgData.find(function (item) {
  //   return item.imgClass === clickedClass;
  // });

  // //TODO do NOT mess with the above!

  // const getImgSrc = getImgData.imgSrc;
  // const getImgAlt = getImgData.imgAlt;
  // const getImgPicked = getImgSrc[pickedSize];

  // console.log(getImgData);
  // console.log(getImgSrc);
  // console.log(getImgAlt);
  // console.log(getImgPicked);

  // //TODO BACKUP END
  //TODO if I want to use IDs for each image size, I can do so here as well

  const clickedImg = thumbnail.originalTarget;
  const attClass = clickedImg.className;

  const getImgData = imgData.find(function (item) {
    return item.imgClass === attClass;
  });

  const attSrc = getImgData.imgSrc;
  const attAlt = getImgData.imgAlt;
  const attImg = attSrc[pickedSize];

  console.log(attClass);
  console.log(attSrc);
  console.log(attAlt);
  console.log(attImg);

  //select the fullscreen-container
  const container = document.getElementById("fullscreen-container");
  //delete the current fullscreen image
  //if null is problematic, try "" instead
  container.innerHTML = null;
  //create image
  const fullsize = document.createElement("img");
  //update its values (properties)
  fullsize.setAttribute("src", attImg);
  fullsize.setAttribute("alt", attAlt);
  //add className for styling (making the image full screen)
  fullsize.setAttribute("class", attClass);
  //append the image to the container
  container.appendChild(fullsize);
}

// STEP3: create fullscreen images
// function createFullscreenImages() {
//   this is the event handler
//   select the fullscreen-container
//   delete the current fullscreen image
//   something like: fullscreenContainer.innerHTML = "" OR nul
//   create image
//   update its values (properties)
//   add className for styling (making the image full screen)
//   append the image to the container
// }

//add the createFullscreenImages function as the event handler of the event above

//call the createThumbnails function
createThumbnails(createFullscreenImages);
