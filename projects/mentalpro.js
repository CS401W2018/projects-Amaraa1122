document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const phonenumber = document.getElementById('phonenumber').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;



    if (!fullname) {
        alert("Enter your name.");
        return;
    }

    if (!age|| age < 18 ) {
        alert("You need to be 18 and over");
        return;
    }

    if (!phonenumber) {
        alert ("Enter your phone number!");
        return;
    }

    if (!email) {
        alert("Enter your personal email.");
        return;
    };

    const formData = {
        name: fullname,
        phone: phonenumber,
        email: email,
        age: age
    };
    
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200){
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML  = response.message;
            alert("Form submitted successfully!");
        } else if (xhr.readyState === 4) {
            alert("Error submitting form.");
        } 
    };
    xhr.send(JSON.stringify(formData));       
    console.log(formData);
});




















// document.getElementById('myForm').addEventListener("submit", function(event) {
//     event.preventDefault();

//     const formData = {
//         fullname: document.getElementById("fullname").value,
//         phonenumber: document.getElementById("phonenumber").value,
//         password: document.getElementById("password").value,
//         age: document.getElementById('age').value
//     };

//     if (!fullname) {
//         alert("Enter your name.");
//         return;
//     }

//     if (!age|| age <18 ) {
//         alert("You need to be 18 and over");
//         return;
//     }

//     if (formData.fullname.length < 3 ) {
//         alert("Name must be at least 3 characters long.");
//         return;
//     }

//     if (!phonenumber) {
//         alert ("Enter your phone number!");
//         return;
//     }

//     if (!email) {
//         alert("Enter your personal email.");
//         return;
//     };





//     console.log(formData);

//     // const formData = {
//     //     name: fullname,
//     //     phone: phonenumber,
//     //     email: email,
//     //     age: age
//     // };
    
    
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "submit.json", true);
//     xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200){
//             alert("Form submitted successfully!");
//         } else if (xhr.readyState === 4) {
//             alert("Error submitting form.");
//         }
            
//     };

//     xhr.send(JSON.stringify(formData));       
//     console.log(formData);

// });