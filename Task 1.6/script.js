const descriptions = {
    "introduction": "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    "prerequisutes": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.",
    "modules": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
    "solvingCommonCssProblems": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
    "workingWithCss": "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, etc.",
    "addingCss": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
    "seeAlso": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined."
};

function updateDescription(displayType) {
    document.getElementById('display-type').textContent = displayType;
    document.getElementById('description').innerHTML = descriptions[displayType];
}

document.getElementById("introduction").addEventListener('click', function() {
    updateDescription("introduction");
});

document.getElementById("prerequisutes").addEventListener('click', function() {
    updateDescription("prerequisutes");
});

document.getElementById("modules").addEventListener('click', function() {
    updateDescription("modules");
});

document.getElementById("solvingCommonCssProblems").addEventListener('click', function() {
    updateDescription("solvingCommonCssProblems");
});

document.getElementById("workingWithCss").addEventListener('click', function() {
    updateDescription("workingWithCss");
});

document.getElementById("addingCss").addEventListener('click', function() {
    updateDescription("addingCss");
});

document.getElementById("seeAlso").addEventListener('click', function() {
    updateDescription("seeAlso");
});