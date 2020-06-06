const IMAGES = document.querySelectorAll("img");    // find all of the images in the document
const SIZES = {                                             // define constant mapping for the image types and their associated width values
    showcase: "100vw",
    reason: "(max-width: 799px) 100vw, 372px",
    feature: "(max-width: 799px) 100vw, 558px",
    story: "(max-width: 799px) 100vw, 670px"
};


function makeSrcSet(imgSrc) {
    let markup = [];    // initialize markup to empty array
    let width = 400;    // initialize width to smallest size

    for (let i = 0; i < 5; i++) {
        markup[i] = imgSrc + "-" + width + ".jpg " + width + "w";   // form markup text using image src and width
        width += 400;   // increment width to next width size
    }

    return markup.join();           // return comma-separated list version of markup array
}

// loop through each image
for (let i = 0; i < IMAGES.length; i++) {
    let imgSrc = IMAGES[i].getAttribute("src");     // get the src path for each image
    imgSrc = imgSrc.slice(0, -8);                   // strip off the last 8 characters of the src path for each image
    let srcSet = makeSrcSet(imgSrc);                // call the makeSrcSet function
    IMAGES[i].setAttribute("srcset", srcSet);
    // console.log(srcSet);                            // display comma-separated markup list

    let type = IMAGES[i].getAttribute("data-type");     // get data-type attribute of each image
    let sizes = SIZES[type];                        // set sizes using the data-type attribute and the associated value of the SIZES dictionary / mapping
    IMAGES[i].setAttribute("sizes", sizes);
    // console.log(sizes);
}