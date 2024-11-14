// Arrays of data
const subjects = ["The cat", "A dog", "A bird", "The programmer", "An artist"];
const verbs = ["jumps over", "runs around", "flies above", "codes", "paints"];
const objects = ["the fence", "the park", "the tree", "the computer", "the canvas"];

// Function to generate a random message
function generateMessage() {
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const object = objects[Math.floor(Math.random() * objects.length)];
    
    const message = `${subject} ${verb} ${object}.`;
    
    document.getElementById("message").innerText = message;
}