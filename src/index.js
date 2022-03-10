import memeMaker from "@erickwendel/meme-maker";

const options = {
  image: "./src/assets/img/input/meme-01.webp", // Required
  outfile: "./src/assets/img/output/meme-01-dep.webp", // Required
  topText: "TODAY IM", // Required
  bottomText: 'AN ASSssss',           // Optional
  font: './../impact.ttf',      // Optional
  fontSize: 50,                   // Optional
  fontFill: '#FFF',               // Optional
  textPos: 'center',              // Optional
  strokeColor: '#000',            // Optional
  strokeWeight: 2                 // Optional
};

memeMaker(options)
  .then((_) => {
    console.log("Image saved: " + options.outfile);
  })
  .catch((error) => console.log(error));
