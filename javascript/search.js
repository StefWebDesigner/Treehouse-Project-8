
const search = document.querySelector('#search');

//SEARCH EVENT FUNCTION 
const handleSearch = event => {
    //make it show the .name somewhere
    const feild_info = document.querySelectorAll('h2.name');
    const searchTerm = event.target.value.toLowerCase();

    //TEST 
    console.log('Entering the function');
    
    //FOREACH LOOP
    feild_info.forEach( feild_var => {

        //TEST
        console.log('It has enteredd the forEach loop');

        const text = feild_var.textContent.toLowerCase();
        //Maybe I have to adda style.---- stuff to box
        //options >> style.filter
        const box = feild_var.parentElement.parentElement;
            //if one only showns - centered
            //if many shown -- do your normal thing

        if (text.includes(searchTerm)) {

            //maybe some like var::after or something

            box.style.display = "block";
        //    if (box.style.display = "block") {
        //     box.classList.add("display-block");
        //    }

            //TEST
            console.log('In blocked');

        } else {
            box.style.display = "none";
            // if (box.style.display = "none") {
            //     box.classList.remove("display-block");
            // }

            //TEST
            console.log('In none');
        }
    });
}


search.addEventListener('keyup', handleSearch);
console.log('Listerner activated');


        //NEed to think about the filter will look after it is filtered though!!!!! --- Extra Credit!
