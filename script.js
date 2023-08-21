let inputText = document.querySelector('#tasksinput');
let addButton = document.querySelector('#add');
let taskList = document.querySelector('.addedtask');

addButton.onclick = function() {
    if (inputText.value.length === 0) {
        alert('Please enter the text!');
    } else {
        let newDiv = `
            <div class="addedtask">
                <p>${inputText.value}
                    <button id="editbtn">Edit</button>
                    <button id="deletebtn">Delete</button>
                </p>
            </div>
        `;

        taskList.insertAdjacentHTML('beforeend', newDiv); 
        inputText.value = '';

        let deleteButtons = document.querySelectorAll('#deletebtn');
        
        deleteButtons.forEach(function(deleteButton) {
        deleteButton.addEventListener('click', function() {
            deleteButton.parentElement.remove();
            });
        });

        let editButtons = document.querySelectorAll('#editbtn');

        editButtons.forEach(function(editButton) {
            editButton.addEventListener('click', function() {
                let oldtext = editButton.parentElement.firstChild;
                let editedText = oldtext.textContent;
                oldtext.textContent = inputText.value;
                inputText.value = editedText;
                });
            });

    }
};

