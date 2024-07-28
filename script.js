//your JS code here. If required.

document.getElementById('ageForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Retrieve form values
            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;

            // Validate form inputs
            if (name === '' || age === '') {
                alert('All fields are required.');
                return;
            }

            // Function to create a promise for age validation
            function validateAge(name, age) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (age >= 18) {
                            resolve(`Welcome, ${name}. You can vote.`);
                        } else {
                            reject(`Oh sorry ${name}. You aren't old enough.`);
                        }
                    }, 4000);
                });
            }

            // Call the promise and handle resolution/rejection
            validateAge(name, age)
                .then(message => {
                    alert(message);
                })
                .catch(errorMessage => {
                    alert(errorMessage);
                });
        });
