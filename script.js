function getAPI(pokemon) {
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        success: function (results) {
            criaPagina(results);
            
        }
    })
};

var botao = document.getElementById('submit');

 botao.addEventListener('click', function(event){
    event.preventDefault();
    var texto = document.getElementById('pk-name').value.toLowerCase();
    getAPI(texto);      
});
   
var divPokemon = document.querySelector('.poke-info')

function criaPagina(pokemonInfo) {
    divPokemon.style.display = "flex"
    divPokemon.innerHTML = `
    <h1>Nome: ${pokemonInfo.name}</h1>
    <h2>ID: ${pokemonInfo.id}</h2>
    <figure><img src="${pokemonInfo.sprites.front_default}" alt="imagem do pokemon"></figure>
    <h3>Habilidades: ${pokemonInfo.abilities[0].ability.name} / ${pokemonInfo.abilities[1].ability.name}</h3> 
    `
}




