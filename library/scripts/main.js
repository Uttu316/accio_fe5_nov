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
  let bookStore = $("#book_store");
  if (books && books.length) {
    //there are some books

    let cards = books.map((book) => {
      let card = createBookCard(book);
      return card;
    });

    bookStore.append(...cards); // dom manipluation should be one time
  } else {
    // there is no book
    names.innerHTML = "No books available";
  }
};

const createBookCard = (book) => {
  console.log(book);
  const { volumeInfo, saleInfo } = book;

  const {
    title,
    authors,
    imageLinks,
    description,
    ratingsCount = 5,
    publishedDate,
  } = volumeInfo;

  const { thumbnail } = imageLinks;
  const { retailPrice } = saleInfo;
  const { amount, countryCode = "INR" } = retailPrice || {};
  let writter = "Unkown";

  if (authors && authors.length) {
    writter = authors[0];
  }

  let card = $(`<div class="book_card">
          <div class="book_img_box">
            <img
              src=${thumbnail}
              class="book_img"
              alt=${title}
            />
          </div>
          <div class="book_card_content">
            <p class="book_title">${title}</p>
            <p class="book_description">
             ${description}
            </p>
            <p class="book_author">${writter}</p>
            <div class="book_price_date_section">
              <span>
                Pub:<span class="book_publish_date"> ${publishedDate}</span>
              </span>
             ${
               amount
                 ? `<span class="book_price"> ${Math.ceil(
                     amount
                   )} ${countryCode}</span>`
                 : `<span class="book_not_sale">Not For Sale</span>`
             }
            </div>
          </div>
          <p class="book_ratings">
            <span class="book_rating_star">${ratingsCount} star</span> Rating
          </p>
        </div>`);
  return card;
};

getBooks();
