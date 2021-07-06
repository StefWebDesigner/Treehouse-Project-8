

// global variables
const urlAPI = `https://randomuser.me/api/?results=12&inc=name, picture,
email, location, phone, dob &noinfo &nat=US`
const gridContainer = document.querySelector(".grid-container");
const overlay = document.querySelector(".overlay");
const modalContainer = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");
let employees = [];
const form = document.querySelector('#myInput');


// fetch data from API
fetch(urlAPI)
.then(res => res.json())
.then(res => res.results)
.then(displayEmployees)
.catch(err => console.log(err))

function displayEmployees(employeeData) {
    employees = employeeData;
    // store the employee HTML as we create it
    let employeeHTML = '';
    // loop through each employee and create HTML markup
    employees.forEach((employee, index) => {
    let name = employee.name;
    let email = employee.email;
    let city = employee.location.city;
    let picture = employee.picture;
    // template literals make this so much cleaner!
    employeeHTML += `
    <div class="card" data-index="${index}">
    <img class="avatar" src="${picture.large}" />
    <div class="text-container">
    <h2 class="name">${name.first} ${name.last}</h2>
    <p class="email">${email}</p>
    <p class="address">${city}</p>
    </div>
    </div>
    `
    });


    gridContainer.innerHTML = employeeHTML;
}




// search_bar.addEventListener('search', mySearch);



// search_bar.addEventListener('submit',  => {
//     console.log('I listen');

//         // let input_results = e.target ;
//         const total_name_arr = employees.name;
//         let selected_name = [];

//         total_name_arr.forEach(chosen_name => {
//             let results_employees = chosen_name.toUpperCase();
//             selected_name.push(results_employees);
//         });
      
//         console.log(selected_name);

//         // if not found




// });




function displayModal(index) {
    // use object destructuring make our template literal cleaner
    //****** This is how to look at mulitp results of the api result  */
    let { name, dob, phone, email, location: { city, street, state, postcode
    }, picture } = employees[index];
    let date = new Date(dob.date);

    const modalHTML = `
    <img class="avatar" src="${picture.large}" />
    <div class="text-container">
        <h2 class="name">${name.first} ${name.last}</h2>
        <p class="email">${email}</p>
        <p class="address">${city}</p>
        <hr />
        <p>${phone}</p>
        <p class="address">${street.number} ${street.name}, ${state} ${postcode}</p>
        <p>Birthday:
    ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
    </div>
    `;

    overlay.classList.remove("hidden");
    modalContainer.innerHTML = modalHTML;
    };

//Dump Files
// const modalContainer = document.querySelector(".modal-content");
// const modalClose = document.querySelector(".modal-close");

//Create a visible variable and change these
//This is wher to hook up the lightbox
gridContainer.addEventListener('click', e => {
    // make sure the click is not on the gridContainer itself
    if (e.target !== gridContainer) {
    // select the card element based on its proximity to actual element clicked
    const card = e.target.closest(".card");
    const index = card.getAttribute('data-index');

    displayModal(index);
    }
});
    
modalClose.addEventListener('click', () => {
    overlay.classList.add("hidden");
});

//Search bar functionality

form.addEventListener('search', search_bar);

function search_bar() {
    preventDefault();
    let input_result = e.target;
    const total_name_arr = employees.name;
    const demo_var = document.querySelector('#demo');

    //Filtering Process
    let letter_names_filter = total_name_arr.filter(letter_names_filter_item => {
        //First stage
        if (letter_names_filter_item.charAt(0) === input_result) {
            return true
            console.log('Search bar - 1st stage');
        //Second stage
        } else if (letter_names_filter_item.charAt(1) === input_result) {
            return true
            console.log('Search bar - 2st stage');
        //Third stage
        } else if (letter_names_filter_item.charAt(2) === input_result) {
            return true
            console.log('Search bar - 3st stage');
        } else {
            console.log('I got nothin');
            return false
        }

        return search_bar();
        demo_var.innerHTML = "You search for: " + letter_names_filter.value;
    });

        
        //I need to return this to the data

        //I need to conect this to the variable

        
    //if statement for first position


    // total_name_arr.forEach(first_letter_names_var => {
    //     first_letter_names.push(first_letter_names_var);
    //     return true
    //     }
        
    // });

    //Do the character thing with several positions
    //Add something to make the content hidden
    // modalContainer.classList.remove("hidden");


//ADV Javascript Arrays part 2
// const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
// let s_names = [];

// names.forEach(s_names_items => {
//   //the first position of the string
//   if (s_names_items.charAt(0) === 'S') {
//       s_names.push(s_names_items);
//       }
  
// });


// search_bar.addEventListener('submit',  => {
//     console.log('I listen');

//         // let input_results = e.target ;
//         const total_name_arr = employees.name;
//         let selected_name = [];

//         total_name_arr.forEach(chosen_name => {
//             let results_employees = chosen_name.toUpperCase();
//             selected_name.push(results_employees);
//         });
      
//         console.log(selected_name);

//         // if not found