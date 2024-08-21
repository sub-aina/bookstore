const rollnumber = "230778";

document.getElementById("myform").addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("Submitting data");

    const data = document.getElementById("myform");
    const form = new FormData(data);
    console.log(form)
    const promise = fetch(`https://api.assignment3.rohanhussain.com/books/${rollnumber}`, {
        method: "POST",
        body: form
    });

    promise.then(response => {
        if (response.ok) {
            alert("Form submitted");
        } else {
            alert("Failed to submit form");
        }
    }).catch(() => {
        alert("Network error");
    })

});

const listelement = document.getElementById("mylist");
async function getdata() {

    const data = await fetch(`https://api.assignment3.rohanhussain.com/books/${rollnumber}`);

    const parseddata = await data.json();

    listelement.innerHTML = "";

    const books = parseddata.books;
    for (let i = 0; i < books.length; i++) {
        const book = books[i];

        const newlist = document.createElement("li");

        newlist.innerHTML = `<h5>Name: ${book.title}</h5> 
        <h5>Author: ${book.author}</h5> 
        <h5>Price: ${book.price}</h5> <br>`;

        listelement.appendChild(newlist);
    }

}