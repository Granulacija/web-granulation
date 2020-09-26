<template>
  <div id="app">
    <img id="myVideo" src="http://172.20.10.4:8080/video" crossorigin="anonymous">

    <router-view/>

  </div>
</template>
<script>
const handpose = require('@tensorflow-models/handpose');

require('@tensorflow/tfjs-backend-webgl');
let model;
async function main() {
  // Load the MediaPipe handpose model.
  model = await handpose.load();
  // Pass in a video stream (or an image, canvas, or 3D tensor) to obtain a
  // hand prediction from the MediaPipe graph.

}
setInterval(async () => {

  if (!model) return;

  const predictions = await model.estimateHands(document.querySelector("#myVideo"));

  if (predictions.length > 0) {
    console.log(JSON.stringify(predictions.map(e => e.boundingBox.topLeft)))
    console.log(JSON.stringify(predictions.map(e => e.boundingBox.bottomRight)))
    /*
    `predictions` is an array of objects describing each detected hand, for example:
    [
      {
        handInViewConfidence: 1, // The probability of a hand being present.
        boundingBox: { // The bounding box surrounding the hand.
          topLeft: [162.91, -17.42],
          bottomRight: [548.56, 368.23],
        },
        landmarks: [ // The 3D coordinates of each hand landmark.
          [472.52, 298.59, 0.00],
          [412.80, 315.64, -6.18],
          ...
        ],
        annotations: { // Semantic groupings of the `landmarks` coordinates.
          thumb: [
            [412.80, 315.64, -6.18]
            [350.02, 298.38, -7.14],
            ...
          ],
          ...
        }
      }
    ]
    */

    // for (let i = 0; i < predictions.length; i++) {
    //   const keypoints = predictions[i].landmarks;
    //
    //   // Log hand keypoints.
    //   for (let i = 0; i < keypoints.length; i++) {
    //     const [x, y, z] = keypoints[i];
    //     console.log(`Keypoint ${i}: [${x}, ${y}, ${z}]`);
    //   }
    // }
  }
},100)
main();
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
/* Style the video: 100% width and height to cover the entire window */
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

/* Add some content at the bottom of the video/page */
.content {
  position: fixed;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
}

/* Style the button used to pause/play the video */
#myBtn {
  width: 200px;
  font-size: 18px;
  padding: 10px;
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
}

#myBtn:hover {
  background: #ddd;
  color: black;
}
</style>
