const IMAGES = document.querySelectorAll("img");    // find all of the images in the document

// loop through each image
for (let i = 0; i < IMAGES.length; i++) {
    let imgSrc = IMAGES[i].getAttribute("src");     // get the src path for each image
    imgSrc = imgSrc.slice(0, -8);   // strip off the last 8 characters of the src path for each image
    console.log(imgSrc);

    let type = IMAGES[i].getAttribute("data-type");     // get data-type attribute of each image
    console.log(type);
}