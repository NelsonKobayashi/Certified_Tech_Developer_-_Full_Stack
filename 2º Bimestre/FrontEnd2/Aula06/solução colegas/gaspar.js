
const listadeFelinos = [
    {
    title: 'O tigre',
    imgUrl: './imgs/tigre.jpeg',
    description: 'O Tigre (Panthera tigris) é uma das espécies da subfamília dos panterinos (família Felidae) pertencente ao gênero Panthera. Só é encontrado no continente asiático; É um predador carnívoro e é a maior espécie de felino do mundo, junto com o leão, podendo ambos atingir um tamanho comparável ao dos maiores fósseis de felinos.',
    createdAt: '2021-06-01T23:12:11.837Z'
    },
    {
    title: 'O leão',
    imgUrl: './imgs/leao.jpg',
    description: 'O leão (Panthera leo) é um mamífero carnívoro da família dos felídeos que é uma das cinco espécies do gênero Panthera. Leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África Subsaariana (com exceção das regiões de selva da costa atlântica e da Bacia do Congo) e em uma pequena área do noroeste da Índia',
    createdAt: '2021-05-05T23:12:11.837Z'
    },
    {
    title: 'O leopardo',
    imgUrl: './imgs/leopardo.jpg',
    description: 'O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felídeos. Como três dos outros gatos do gênero Panthera: o leão, o tigre e a onça, eles se caracterizam por uma modificação no osso hióide que lhes permite rugir. É também conhecida como pantera marrom e, quando tem a pelagem totalmente escura, como pantera negra (melânica).',
    createdAt: '2021-05-05T23:12:11.837Z'
    },
    {
    title: 'A pantera negra',
    imgUrl: './imgs/pantera-negra.jpg',
    description: 'A pantera negra é uma variação negra (melanismo) de várias espécies de grandes felinos, principalmente o leopardo (Pantherapardus) e a onça pintada (Panthera onca). Mas deve-se ressaltar que não é uma espécie nova, nem mesmo uma subespécie, é simplesmente uma variação negra desses animais.',
    createdAt: '2021-04-09T23:12:11.837Z'},
    {
    title: 'O jaguar',
    imgUrl: './imgs/jaguar.png',
    description: 'O jaguar, jaguar ou yaguareté (Panthera onca) é um felino carnívoro da subfamília dos Panterinos e gênero Panthera. É a única das cinco espécies atuais desse gênero encontradas na América. É também o maior felino da América e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo).',
    createdAt: '2021-05-18T23:12:11.837Z'
    },
    {
    title: 'O guepardo',
    imgUrl: './imgs/guepardo.jpg',
    description: 'O guepardo (Acinonyx jubatus) 1 é um membro atípico da família dos felídeos. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido, atingindo velocidade máxima de 115 km / h em corridas de até quatrocentos ou quinhentos metros.',
    createdAt: '2021-05-22T23:12:11.837Z'
    },
    ];


// Modificando conteúdo do title
document.title = 'Lista de Felinos';

// Mofificando conteúdo do header
document.querySelector('.tituloHeader').innerText = "Lista de Felinos";

// Criando variáveis para armazenar o conteúdo das tags h2, p, img e h5 que estão dentro do article na página index.html.
let h2 = document.querySelectorAll('h2');
let p = document.querySelectorAll('p');
let img = document.querySelectorAll('img');
let h5 = document.querySelectorAll('h5');

// Criando loop para atribuir os novos conteúdos da listadeFelinos as variáveis criadas anteriormente.
// No html temos 9 article e aqui na listadeFelinos temos 6 itens.
listadeFelinos.forEach((item, i) => {
    h2[i].innerHTML = listadeFelinos[i].title;
    p[i].innerHTML = listadeFelinos[i].description;
    img[i].src = listadeFelinos[i].imgUrl;
    h5[i].innerHTML = listadeFelinos[i].createdAt;
})