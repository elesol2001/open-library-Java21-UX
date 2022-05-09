export async function searchAuthor(author) {

    // query for author objects
    let response = await fetch(
        `https://openlibrary.org/search/authors.json?q=${author}`
    );
    let obj = await response.json();
    if (obj.numFound > 0) {
        const books = await findBooksByAuthorKey(obj.docs[0].key);
        setItemsInList(books, "#books");
    }
}
export async function findBooksByAuthorKey(key) {
    const LIMIT = 500;
    let safeKey = encodeURIComponent(key);

    // query for works by author based on the authors key
    let response = await fetch(
        `https://openlibrary.org/authors/${safeKey}/works.json?limit=${LIMIT}`
    );
    let obj = await response.json();
    return obj.entries;
}

export function findCharactersInBooks(books) {
    const people = new Set();
    for (const book of books) {
        if (book.subject_people) {
            for (const name of book.subject_people) {
                people.add(name);
            }
        }
    }
    return people;
}

export function setItemsInList(items, listSelector) {
    const list = document.querySelector(listSelector);
    if (list) {
        list.innerHTML = "";
        for (const item of items) {
            const li = document.createElement("li");
            li.innerText = item.title;
            list.append(li);
        }
    }
}

//const searchAuthorButton = document.getElementById("searchAuthor");
//searchAuthorButton.addEventListener("click", searchAuthorForPeople);