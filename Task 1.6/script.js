const descriptions = {
    "introduction": "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    "Prerequisutes": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.",
    "Modules": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
    "Solving common CSS problems": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
    "Working with CSS": "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, etc.",
    "Adding CSS": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
    "See also": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined."
};

function updateDescription(displayType) {
    document.getElementById('display-type').textContent = displayType;
    document.getElementById('description').innerHTML = descriptions[displayType];
}

document.getElementById("introduction").addEventListener('click', function() {
    updateDescription("introduction");
});

document.getElementById("Prerequisutes").addEventListener('click', function() {
    updateDescription("Prerequisutes");
});

document.getElementById("Modules").addEventListener('click', function() {
    updateDescription("Modules");
});

document.getElementById("Solving common CSS problems").addEventListener('click', function() {
    updateDescription("Solving common CSS problems");
});

document.getElementById("Working with CSS").addEventListener('click', function() {
    updateDescription("Working with CSS");
});

document.getElementById("Adding CSS").addEventListener('click', function() {
    updateDescription("Adding CSS");
});

document.getElementById("See also").addEventListener('click', function() {
    updateDescription("See also");
});