function getJokes(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://api.icndb.com/jokes/random/1', true);

    xhr.onload = function(){
        if (this.status === 200){
            const response = JSON.parse(this.responseText);
            // console.log();
            addJoke(response.value[0].joke)
            // addJoke();
        }
    }
    xhr.send();
}

getJokes();

function addJoke(text){
    document.getElementById('joke-text').innerHTML = `${text}`;
}


document.getElementById('refresh').addEventListener('click', (e)=>{
    getJokes();
    e.preventDefault();
});