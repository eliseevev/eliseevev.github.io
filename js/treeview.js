function checkParentInputsUpToTree(labelId) {
    let labelElement = document.getElementById(labelId);

    // Check if the label element exists 
    if (labelElement) {
        let parent = labelElement.parentElement;

        // Traverse up the DOM tree until reaching ul.tree or the body element 
        while (parent && parent.tagName !== 'BODY' && !parent.classList.contains('tree-toggle')) {
            if (parent.tagName === 'LI') {
                let inputElement = parent.querySelector('input[type="checkbox"]');
                if (inputElement) {
                    inputElement.checked = true;
                }
            }
            parent = parent.parentElement;
        }
    } else {
        console.log('Label element with ID ' + labelId + ' not found.');
    }
}

function checkAllTreeInputs() {
    // Select all checkbox inputs within the ul with class 'tree' 
    const checkboxes = document.querySelectorAll('.tree-toggle[type="checkbox"]');

    // Iterate over the NodeList and set each checkbox to checked 
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = true;
    });
}

function uncheckAllTreeInputs() {
    // Select all checkbox inputs within the ul with class 'tree' 
    const checkboxes = document.querySelectorAll('.tree-toggle[type="checkbox"]');

    // Iterate over the NodeList and set each checkbox to checked 
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });
}

