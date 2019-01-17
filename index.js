
window.onload = function () {
    const img = document.getElementsByTagName("img")[0];
    const random = Math.floor(Math.random() * 3) + 1  
    img.src = `people${random}.jpg`
}


function find() {
    const faceDetector = new FaceDetector();
    const img = document.getElementsByTagName("img")[0];
    faceDetector
        .detect(img)
        .then(function (detectedFaces) {
            if (detectedFaces && detectedFaces.length) {
                detectedFaces.forEach(function (face) {
                    const { width, height, top, left } = face.boundingBox;
                    let mark = document.createElement('div');
                    mark.classList.add('face');
                    mark.style.cssText = `
                    width: ${width}px;
                    height: ${height}px;
                    top:${top}px;
                    left:${left}px;
                    position: absolute;
                    border: 1px solid blue;
                    `
                    document.getElementById('container').appendChild(mark);
                })
            }
            else {
                alert('There is no detected face in image');
            }
            console.log('detected faces', detectedFaces)
        })
    //console.log(x)
}