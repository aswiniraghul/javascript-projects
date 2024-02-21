// Define your Book class here:

// Define your Manual and Novel classes here:


// Declare the objects for exercises 2 and 3 here:


// Code exercises 4 & 5 here:
// class Book {
//     constructor(title, author, copyrightDate, ISBN, numPages, timesCheckedOut, discarded) {
//         this.title = title;
//         this.author = author;
//         this.copyrightDate = copyrightDate;
//         this.ISBN = ISBN;
//         this.numPages = numPages;
//         this.timesCheckedOut = timesCheckedOut;
//         this.discarded = discarded;
//     }

//     updateCheckedOut() {
//         this.timesCheckedOut++;
//     }
// }

// class Manual extends Book {
//     constructor(title, author, copyrightDate, ISBN, numPages, timesCheckedOut, discarded) {
//         super(title, author, copyrightDate, ISBN, numPages, timesCheckedOut, discarded);
//     }

//     disposalCheck() {
//         const currentYear = new Date().getFullYear();
//         if (currentYear - this.copyrightDate > 5)
//             this.discarded = true;
//     }
// }

// class Novel extends Book {
//     constructor(title, author, copyrightDate, ISBN, numPages, timesCheckedOut, discarded) {
//         super(title, author, copyrightDate, ISBN, numPages, timesCheckedOut, discarded);
//     }

//     updateCheckedOut() {
//         super.updateCheckedOut();
//         if (this.timesCheckedOut > 100)
//             this.discarded = true;
//     }
// }

// // Creating objects for the provided books
// const prideAndPrejudice = new Novel(
//     "Pride and Prejudice",
//     "Jane Austen",
//     1813,
//     "1111111111111",
//     432,
//     32,
//     false
// );

// const shuttleManual = new Manual(
//     "Top Secret Shuttle Building Manual",
//     "Redacted",
//     2013,
//     "0000000000000",
//     1147,
//     1,
//     false
// );

// // Perform required actions
// prideAndPrejudice.updateCheckedOut(); // Increment check-out count
// shuttleManual.updateCheckedOut(); // Increment check-out count

// shuttleManual.disposalCheck(); // Check for disposal based on age

// console.log(prideAndPrejudice);
// console.log(shuttleManual);
class Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
       this.title = title;
       this.author = author;
       this.copyright = copyright;
       this.isbn = isbn;
       this.pages = pages;
       this.timesCheckedOut = timesCheckedOut;
       this.discarded = discarded;
    }
 
    checkout(uses=1) {
       this.timesCheckedOut += uses;
    }
 }
 
 class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
       super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
 
    dispose(currentYear){
       if (currentYear-this.copyright > 5) {
          this.discarded = 'Yes';
       }
    }
 }
 
 class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
       super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
 
    dispose(){
       if (this.timesCheckedOut > 100) {
          this.discarded = 'Yes';
       }
    }
 }
 let goodRead;
 let makingTheShip = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');
console.log(makingTheShip.checkout(5));
console.log(makingTheShip.dispose());
