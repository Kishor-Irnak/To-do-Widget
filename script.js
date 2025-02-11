document.addEventListener("DOMContentLoaded", () => {
    const noteInput = document.getElementById("note");
    const saveBtn = document.getElementById("saveBtn");

    // Load saved note
    noteInput.value = localStorage.getItem("note") || "";

    // Save note to LocalStorage
    saveBtn.addEventListener("click", () => {
        localStorage.setItem("note", noteInput.value);
        alert("Note Saved!");
    });
});
