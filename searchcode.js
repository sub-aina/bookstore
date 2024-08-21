const rollnumber = "230778";

const listelement = document.getElementById("searchlist");

async function searchitem() {

    const query = document.getElementById("searched").value;

    console.log("search function called");

    const data = await fetch(`https://api.assignment3.rohanhussain.com/books/search/${rollnumber}?query=${query}`);

    const newelement = await data.json();

    listelement.innerHTML = "";
    searchContainer.style.display = "block";

    const books = newelement.books;
    console.log("Books property:", books);

    if (books.length == 0) {
        const newlist = document.createElement("h5");
        newlist.innerHTML = "NO DATA FOUND";
        newlist.style.color = "white";
        listelement.appendChild(newlist);

    }
    else {
        for (let i = 0; i < books.length; i++) {
            const book = books[i];
            const newlist = document.createElement("li");

            newlist.innerHTML = `<h5>Name: ${book.title}</h5> 
        <h5>Author: ${book.author}</h5> 
        <h5>Price: ${book.price}</h5> <br>`;
            newlist.style.color = "white";

            listelement.appendChild(newlist);
        }
    }

}











