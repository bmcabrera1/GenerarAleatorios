let generateButton = document.getElementById('generate_btn')

let randomInput = document.getElementById('input_number')

generateButton.addEventListener('click', async() => {
    try{
        let response = await fetch('http://localhost:3000/', {
            method: 'GET',
            headers: {"Content-Type":"application/json",}
        });
        let data = await response.json();
        randomInput.value = JSON.stringify(data)
    }catch (error){
        console.error(error)
    }
    
})
