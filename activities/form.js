document.getElementById('myForm').addEventListener('submit', function(event){
    const formDate = {
        fullname: fullname,
        password: document.getElementsById('password').value,
        remember: document.getElementById('remember').checked,
        state:document.getElementById('state').value,
        class: document.querySelector('input [name"class]:checked') ? document.querySelector('input[name="class"]:checked').checked : null
    };

    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById('message').innerHTML = response.message;
            document.getElementById('myForm').innerHTML = "";
            alert('Form submitted successfully.');
                } else if (xhr.readyState === 4 ) {
                    alert('Error submitting form.');
                }
                
            };
            xhr.send(JSON.stringify(formData));
        });    



