// https://stephen-king-api.onrender.com/?ref=public_apis&utm_medium=website

// let url = "https://stephen-king-api.onrender.com/api/books"
// const bookList = document.getElementById("bookList");

// let result;
// const request = async (url) => {
//     let response = await fetch(url).then((value) => {
//         // console.log(value.json())
//         return value.json()
//     })
//     .then((response)=>{
//         console.log(response.data)
//     })
// };

// request("https://stephen-king-api.onrender.com/api/books");

// let request = async (url) => {
//     let res = await fetch(url)
//         .then((val) => val.json())
//         .then((res) => {
//             let books = res.data.map(book => ({
//                 id: book.id,
//                 title: book.title
//             }));
//             console.log(books);
//         })
//         .catch((error) => console.error("Error fetching data:", error));
// };

// request("https://stephen-king-api.onrender.com/api/books");
// let para = document.querySelector(".para")
// var final;

let apiData;
let request = async (url) => {
    let res = await fetch(url)
        .then((val) => val.json())
        .then((response) => {
            apiData = response.data
             
            let tablebodyDta = document.querySelector('#booksTable tbody');
            apiData.map((item)=>{
                let row = document.createElement('tr')
                let idROW = document.createElement('td')
                let yearrow = document.createElement('td')
                
                idROW.innerText = item.id
                yearrow.innerText = item.Year

                row.appendChild(idROW)
                row.appendChild(yearrow)
 
                tablebodyDta.appendChild(row)

            })

            return response.data
        })
    console.log(res);

}

request("https://stephen-king-api.onrender.com/api/books")




// let showData = response.data.map(book=>({
//     id:book.id,
//     title:book.title
// }));

// let booksData = []; // Variable to store id and year outside the function

// let request = async (url) => {
//     let res = await fetch(url)
//         .then((val) => val.json())
//         .then((response) => {
//             if (response.data && Array.isArray(response.data)) {
//                 booksData = response.data.map(book => ({
//                     id: book.id,
//                     year: book.year
//                 }));
//                 console.log("Books Data:", booksData); // Check the stored data
//             } else {
//                 console.error("Unexpected API response structure:", response);
//             }
//         })
//         .catch((error) => console.error("Error fetching data:", error));
// };

// request("https://stephen-king-api.onrender.com/api/books");

// // Wait for a moment to see the stored data (since the function is async)
// setTimeout(() => console.log("Stored booksData:", booksData), 2000);
