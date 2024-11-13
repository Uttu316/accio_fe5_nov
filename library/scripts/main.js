const api = async () => {
  //calls a rest api which will load the data
  const URL = "https://api.freeapi.app/api/v1/public/books";

  try {
    const res = await fetch(URL); // return a response promise
    const data = await res.json(); // return JS object from response json
    return data;
  } catch (e) {
    console.log("Error", e, URL);
    throw e;
  }
};

const getBooks = async () => {
  try {
    const res = await api(); // waiting for api to complete
    if (res && res.data && res.data.data) {
      // res object has nested data and grandchild data property
      const books = res.data.data;
      showBooks(books);
      return;
    }
    throw new Error("Books data not recieved");
  } catch (e) {
    console.log(e);
  }
};

const showBooks = (books) => {
  let names = document.getElementById("names");
  if (books && books.length) {
    //there are some books

    let cards = books.map((book) => {
      let card = createBookCard(book);
      return card;
    });

    names.append(...cards); // dom manipluation should be one time
  } else {
    // there is no book
    names.innerHTML = "No books available";
  }
};

const createBookCard = (book) => {
  const title = document.createElement("p");
  title.classList.add("book_title");
  let name = book.volumeInfo?.title || "Book name";
  title.innerHTML = name;
  return title;
};
getBooks();
