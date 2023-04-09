const preview = document.getElementById("preview");
const projectCollection = document.getElementsByClassName("project");
const descriptionDiv = document.getElementById("description");

let selectedProject = document.getElementsByClassName("project")[0];
let selectedPreview = document.getElementsByClassName("preview")[0];

const handleProjectSelection = function() {
    if (this !== selectedProject) {
        selectedProject.disabled = false;
        selectedProject.setAttribute("aria-pressed", "false");
        selectedPreview.style.display = "none";
        selectedProject = this;
        updateDetails();
    }
};

const updateDetails = function() {
    let projectId = selectedProject.id;
    selectedPreview = document.getElementById(`${projectId}-preview`);
    selectedProject.disabled = true;
    selectedProject.setAttribute("aria-pressed", "true");
    selectedPreview.style.display = "flex";
};

const addHandlers = function() {
    for (let i = 0; i < projectCollection.length; i++) {
    let currentProject = projectCollection[i];
    currentProject.onclick = handleProjectSelection;
    }
};

addHandlers();
updateDetails();
