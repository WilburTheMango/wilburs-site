function getColor() {
    
    const imageInput = document.getElementById('imageInput');
    const xInput = document.getElementById('xInput');
    const yInput = document.getElementById('yInput');
    const colorResult = document.getElementById('colorResult');
    // is an image selected?
    if (imageInput.files.length === 0) {
        colorResult.textContent = 'Please select an image.';
        return;
    }

    // Create an Image object, and a FileReader for selected file
    const image = new Image();
    const reader = new FileReader();

    // after its done loading:
    reader.onload = function (e) {
        // make the src of the Image to the result of the file reader
        image.src = e.target.result;

        // Define what to do once the image has finished loading
         image.onload = function () {
            // Create a canvas to draw the image
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0);

            // Call a function to update the color result based on user inputs
            updateColor(canvas, xInput, yInput, colorResult);
            
            // Display the drawn canvas on the document
            displayCanvas(canvas);
        };
    };
    reader.onerror = function (e) {
        colorResult.textContent = 'Error reading the image.';
    };
    // above and below functions just handle if a image is broken and lets the user know
    image.onerror = function () {
        colorResult.textContent = 'Error loading the image.';
    };

    // Read the selected image as a data URL
    reader.readAsDataURL(imageInput.files[0]);
}

// Function to update the color result
function updateColor(canvas, xInput, yInput, colorResult) {
    const x = parseInt(xInput.value, 10);
    const y = parseInt(yInput.value, 10);

    // Check if coordinates are within the image boundaries
    if (x >= 0 && x < canvas.width && y >= 0 && y < canvas.height) {
        // Get the color of the specified pixel
        const pixelData = canvas.getContext('2d').getImageData(x, y, 1, 1).data;
        const color = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;

        // Update the color result on the webpage
        colorResult.textContent = `Color at (${x}, ${y}): ${color}! Your image dimensions are ${canvas.width - 1},${canvas.height - 1}. Your seed for the tarot reading will be: ${pixelData[0] + pixelData[1] + pixelData[2] * (canvas.width * canvas.height)}`;
        const seed = calculateSeed(pixelData, canvas.width, canvas.height);
        document.getElementById('hiddenSeedInput').value = seed;
    } else {
        // Display a message for invalid coordinates
        colorResult.textContent = 'Invalid coordinates. Please enter values within the image boundaries.';
    }
}

// Function to display the drawn canvas on the document
function displayCanvas(canvas) {
    // Get the element where you want to append the drawn canvas
    const drawnCanvasContainer = document.getElementById('drawnCanvas');
    
    // Append the dynamically created canvas to the container
    // TODO: check if image is particularly large, (larger than screen) and resize it if (drawnCanvasContainer >= devices screen) 
    drawnCanvasContainer.width = canvas.width;
    drawnCanvasContainer.height = canvas.height;
    drawnCanvasContainer.getContext('2d').drawImage(canvas, 0, 0);
}
document.getElementById('xInput').addEventListener('input', function () {
    getColor();
});

document.getElementById('yInput').addEventListener('input', function () {
    getColor();
});
function calculateSeed(pixelData, imageWidth, imageHeight) {
    return pixelData[0] + pixelData[1] + pixelData[2] * (imageWidth * imageHeight);
}
document.getElementById('sendToTarotButton').addEventListener('click', function () {
    const seed = document.getElementById('hiddenSeedInput').value;

    if (seed !== '0') {
        window.location.href = `tarot.html?seed=${seed}`;
    } else {
        alert('The seed is zero. Please select a valid pixel location on your image.');
    }
});
