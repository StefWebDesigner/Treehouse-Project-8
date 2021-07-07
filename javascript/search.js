
const search = document.querySelector('#search');
// const feild_info = document.querySelectorAll('.text-container p');
// const feild_info = document.querySelectorAll('.card p');
//IT works but takes everything out
// const feild_info = document.querySelectorAll('main');
const feild_info = document.querySelector('.text-container p');


//IT could be that all are celebted and for this reason it all goes away


//SEARCH EVENT FUNCTION 
const handleSearch = event => {

    console.log('Entering the function');

    search.addEventListener('keyup', handleSearch);
    const searchTerm = event.target.value.toLowerCase();

    console.log('Listerner activated');

    
    feild_info.forEach( feild_var => {

        console.log('It has enteredd the forEach loop');

        const text = feild_var.textContent.toLowerCase();
        //this must be the issue
        const box = feild_var.parentElement;
        

        if (text.includes(searchTerm)) {
            box.style.display = "block";
            //attach the card

            console.log('In blocked');

        } else {
            box.style.display = "none";
            
            console.log('In none');

        }

    });
}

search.addEventListener('keyup', handleSearch);