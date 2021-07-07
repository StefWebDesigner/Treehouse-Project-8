
const search = document.querySelector('#search');
// const feild_info = document.querySelectorAll('.text-container p');
// const feild_info = document.querySelectorAll('.card p');
//IT works but takes everything out
// const feild_info = document.querySelectorAll('main');


//SEARCH EVENT FUNCTION 
const handleSearch = event => {
    //make it show the .name somewhere
    // const feild_info = document.querySelectorAll('.text-container p');
    const feild_info = document.querySelectorAll('h2.name');
    const searchTerm = event.target.value.toLowerCase();

    //TEST 
    console.log('Entering the function');
    
    //FOREACH LOOP
    feild_info.forEach( feild_var => {

        //TEST
        console.log('It has enteredd the forEach loop');

        const text = feild_var.textContent.toLowerCase();
        //Need to go up to two parent elements
        // const box = feild_var.parentElement.parentElement; 
        const box = feild_var.parentElement.parentElement;        
       

        if (text.includes(searchTerm)) {
            box.style.display = "block";

            //TEST
            console.log('In blocked');

        } else {
            box.style.display = "none";
            
            //TEST
            console.log('In none');
        }
    });
}


search.addEventListener('keyup', handleSearch);
console.log('Listerner activated');


        //NEed to think about the filter will look after it is filtered though!!!!! --- Extra Credit!
