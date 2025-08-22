document.getElementById('admissionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('fullname').value;
    document.getElementById('studentName').textContent = name;
    document.getElementById('admissionForm').classList.add('hidden');
    document.getElementById('confirmation').classList.remove('hidden');
});
