<template>
  <div id="app">

<!--    <img id="video" src="http://localhost:8080/hand.jpg" crossorigin="anonymous">-->
        <img id="video" src="http://192.168.137.171:8080/video" crossorigin="anonymous">


    <canvas id="output" style=""></canvas>

    <!--    <img id="myVideo" src="http://172.20.10.4:8080/video" crossorigin="anonymous">-->

    <router-view/>

  </div>
</template>
<script>


const handpose = require('@tensorflow-models/handpose');
require('@tensorflow/tfjs-backend-webgl');
let model, ctx, canvas;
let fingerLookupIndices = {
  thumb: [0, 1, 2, 3, 4],
  indexFinger: [0, 5, 6, 7, 8],
  middleFinger: [0, 9, 10, 11, 12],
  ringFinger: [0, 13, 14, 15, 16],
  pinky: [0, 17, 18, 19, 20]
};


function drawPoint(y, x, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}
//new funcs
function drawKeypoints(keypoints) {
  const keypointsArray = keypoints;

  for (let i = 0; i < keypointsArray.length; i++) {
    const y = keypointsArray[i][0];
    const x = keypointsArray[i][1];
    drawPoint(x - 2, y - 2, 3);
  }

  const fingers = Object.keys(fingerLookupIndices);
  for (let i = 0; i < fingers.length; i++) {
    const finger = fingers[i];
    const points = fingerLookupIndices[finger].map(idx => keypoints[idx]);
    drawPath(points, false);
  }
}

function drawPath(points, closePath) {
  const region = new Path2D();
  region.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) {
    const point = points[i];
    region.lineTo(point[0], point[1]);
  }

  if (closePath) {
    region.closePath();
  }
  ctx.stroke(region);
}

setInterval(async () => {

  if (!model) return;
  let video = document.querySelector("#video");
  document.querySelector("#video").height = document.body.clientHeight;
  document.querySelector("#video").width = document.body.clientWidth;

  ctx.drawImage(
      video, 0, 0, video.width, video.height);

  const predictions = await model.estimateHands(video);

  if (predictions.length > 0) {
    const result = predictions[0].landmarks;
    drawKeypoints(result, predictions[0].annotations);
    console.log(JSON.stringify(predictions.map(e => e.boundingBox.topLeft)))
    console.log(JSON.stringify(predictions.map(e => e.boundingBox.bottomRight)))

  }
},16)
export default {
  name: 'App',
  methods: {
    async main() {
      // Load the MediaPipe handpose model.
      model = await handpose.load();
      // Pass in a video stream (or an image, canvas, or 3D tensor) to obtain a
      // hand prediction from the MediaPipe graph.

      canvas = document.getElementById('output');
      // canvas.width = canvas.height *
      //     (canvas.clientWidth / canvas.clientHeight);
      // videoHeight = 500;
      // videoWidth = 500;
      canvas.width = document.body.clientWidth;
      canvas.height = document.body.clientHeight;
      canvas.style.width = document.body.clientWidth;
      canvas.style.height = document.body.clientHeight;

      ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'red';
      ctx.fillStyle = 'red';

      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);


    }
  },
  mounted() {
    this.main()
  }
}

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
#video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  height: 100%;
  display: none;
}
canvas {
  position: fixed;
  top:0px;
  left:0px;
  width: 100%;
  height: 100%;
  z-index: -10;
  border: 1px solid black;
  /*visibility: hidden;*/
}
/*#canvas-wrapper {*/
/*  position: fixed;*/
/*  top:0;*/
/*  left:0;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  z-index: -10;*/
/*}*/

/*#canvas-wrapper, #scatter-gl-container {*/
/*  display: inline-block;*/
/*  vertical-align: top;*/

/*}*/

</style>
