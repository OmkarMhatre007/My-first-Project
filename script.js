const form = document.getElementById('admissionForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect form data
    const admissionData = {
        fullname: document.getElementById('fullname').value,
        dob: document.getElementById('dob').value,
        house: document.getElementById('house').value,
        email: document.getElementById('email').value,
        reason: document.getElementById('reason').value
    };

    // Get previous submissions from localStorage or create new array
    let submissions = JSON.parse(localStorage.getItem('hogwartsSubmissions')) || [];
    submissions.push(admissionData);
    localStorage.setItem('hogwartsSubmissions', JSON.stringify(submissions));

    // Optionally redirect to a submissions page after submit:
    window.location.href = 'submissions.html';

    // Or, just reset the form and show confirmation
    // form.reset();
});
