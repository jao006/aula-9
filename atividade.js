function temaBrasil() {
  document.body.className = 'brasil';
  document.getElementById('titulo').innerText = 'Bem-vindo ao Brasil🐆';
  document.getElementById('paragrafo1').innerText = 'O Brasil é famoso pelo futebol, pela Amazônia e por suas comidas e culturas.';
  document.getElementById('paragrafo2').innerText = 'A capital do Brasil é Brasília.';

  document.getElementById('galeria').innerHTML = `
    <img src="https://preview.redd.it/d56uxw52zsd51.png?auto=webp&s=573be0cb6c87872574dfa3cde0a4647435ef161c"  alt="Brasil">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/330px-Cidade_Maravilhosa.jpg"  alt="Rio de Janeiro">
    <img src="https://cop.dol.com.br/wp-content/uploads/2024/09/amazonia-1068x639.webp" alt="Amazônia">
    <img src="https://www.penaestrada.blog.br/wp-content/uploads/2021/02/comidas-tipicas-do-brasil-cozinha.jpg.webp" alt="Comida brasileira">
    <img src="https://amazonasatual.com.br/wp-content/uploads/2023/06/Lucas-Paqueta.jpg" alt="Futebol">
  `;
}

function temaArgentina() {
  document.body.className = 'argentina';
  document.getElementById('titulo').innerText = 'Bienvenidos a Argentina';
  document.getElementById('paragrafo1').innerText = 'A Argentina é conhecida pelo tango, pela culinária e pela Patagônia.';
  document.getElementById('paragrafo2').innerText = 'A capital da Argentina é Buenos Aires.';

  document.getElementById('galeria').innerHTML = `
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Coat_of_arms_of_Argentina.svg/724px-Coat_of_arms_of_Argentina.svg.png  " alt="Argentina">
    <img src="https://intercruzeiros.com.br/wp-content/uploads/2024/03/Cruzeiros-para-Argentina-e-Uruguai-.jpeg" alt="Buenos Aires">
    <img src="https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/nationalgeographic_2744265.jpg?w=1900&h=1267" alt="Patagônia">
    <img src="https://st2.depositphotos.com/8348572/11686/v/950/depositphotos_116863844-stock-illustration-argentine-couple-performing-tango-dance.jpg" alt="Tango Argentino">
    <img src="https://i0.wp.com/folhametropolitana.com.br/site/wp-content/uploads/2022/12/Selecao-Argentina-de-Futebol.jpg?resize=1170%2C642&ssl=1" alt="Futebol">
  `;
}
