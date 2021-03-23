// ! face - api app beslenmesi...

const video = document.getElementById("video");

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("./components/ArtificialFace/models"),
  faceapi.nets.faceLandmark68Net.loadFromUri("./components/ArtificialFace/models"),
  faceapi.nets.faceRecognitionNet.loadFromUri("./components/ArtificialFace/models"),
  faceapi.nets.faceExpressionNet.loadFromUri("./components/ArtificialFace/models")
]).then(startCamera());

function startCamera() {
  console.log("Canera Basladi");
  //   return false;
  navigator.getUserMedia(
    {
      video: {}
    },
    stream => (video.srcObject = stream),
    err => console.log(err)
  );
}

video.addEventListener("play", () => {
  const canvas = faceapi.createCanvasFromMedia(video);
  document.body.append(canvas);
  const boxSize = {
    width: video.width,
    height: video.height
  };

  faceapi.matchDimensions(canvas, boxSize);

  setInterval(async () => {
    //async
    // await
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();

    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    const resizedDetections = faceapi.resizeResults(detections, boxSize);

    faceapi.draw.drawDetections(canvas, resizedDetections);

    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);

    faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

    // console.log(detections);
  }, 100);
});