
const search = document.querySelector('#search');

//SEARCH EVENT FUNCTION 
const handleSearch = event => {
    //make it show the .name somewhere
    const feild_info = document.querySelectorAll('h2.name');
    const searchTerm = event.target.value.toLowerCase();
    
    //FOREACH LOOP
    feild_info.forEach( feild_var => {

        const text = feild_var.textContent.toLowerCase();
        const box = feild_var.parentElement.parentElement;

        if (text.includes(searchTerm)) {

           if (box.style.display = "flex") {
            box.classList.add("display-block");
           }

        } else {
            if (box.style.display = "none") {
                box.classList.remove("display-block");
            }

        }
    });
}

search.addEventListener('keyup', handleSearch);
console.log('Listerner activated');
