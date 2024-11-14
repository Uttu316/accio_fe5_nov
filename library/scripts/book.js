const getBook = async () => {
  const bookId = new URLSearchParams(location.search).get("id"); // get bookid from URL search params

  try {
    if (!bookId) throw new Error("BookId is not valid"); // if no book id in URL then throw

    const res = await api({
      path: "/books/" + bookId,
    }); // load data for a book with given id

    if (!res || (res && !res.data)) throw new Error("BookId is not valid"); // if no data found then throw

    let book = res.data; // data found
    showBook(book); // show book data
  } catch (e) {
    notFound(e);
  }
};
const notFound = (e) => {
  const message = e.message;
  $("#book_detials").html(`${message},Go to Home`);
};

const showBook = (book) => {
  const { volumeInfo, id, saleInfo } = book;

  const {
    title,
    subtitle,
    authors,
    imageLinks,
    description,
    ratingsCount = 5,
    publishedDate,
  } = volumeInfo;
  document.title = title;
  $("#book_title").html(title);
  subtitle && $("#book_subtitle").html(subtitle);
};
getBook();
