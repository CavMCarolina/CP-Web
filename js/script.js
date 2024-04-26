//Menu
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const menuItems = document.getElementById('menuItems');
  
    // menuButton.addEventListener('click', () => {
    //   if (menuItems.style.display === 'none') {
    //     menuItems.style.display = 'block';
    //   } else {
    //     menuItems.style.display = 'none';
    //   }
    // });
  
    menuButton.addEventListener('click', () => {
      menuItems.classList.toggle("show");
      menuItems.classList.toggle("hide");
    });
});
    
// const botao_menu = document.querySelector('.menu')
// const menu = document.querySelector('#menu')

// botao_menu.addEventListener("click", function(){
//     menu.classList.toggle("block");
//     menu.classList.toggle("none");
// });

//Salvar
document.addEventListener('DOMContentLoaded', () => {
const botaoSalvar = document.getElementById('botaoSalvar');
const iconeSalvar = document.getElementById('iconeSalvar');

const hospedagem = localStorage.getItem('hospedagem');
if (hospedagem) {
    iconeSalvar.style.stroke = 'red';
    iconeSalvar.style.fill = 'red';
}

botaoSalvar.addEventListener('click', function() {
    const hospedagem = localStorage.getItem('hospedagem');
    if (hospedagem) {
    localStorage.removeItem('hospedagem');
    iconeSalvar.style.stroke = 'currentColor';
    } else {
    localStorage.setItem('hospedagem', 'Domo Geodésico encantador no meio das montanhas!');
    iconeSalvar.style.stroke = 'red';
    }
});
});

//Galeria
let currentIndex = 0;
const images = document.querySelectorAll('#imagens img');
const totalImages = images.length;

function openLightbox(event) {
    if (event.target.tagName === 'IMG') {
        const clickedIndex = Array.from(images).indexOf(event.target);
        currentIndex = clickedIndex;
        updateLightboxImage();
        document.getElementById('lightbox').style.display = 'flex';
    }
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }
    updateLightboxImage();
}

function updateLightboxImage() {
    const lightboxImg = document.getElementById('lightbox-img');
    const thumbnailContainer = document.getElementById('thumbnail-container');

    lightboxImg.src = images[currentIndex].src;
    thumbnailContainer.innerHTML = '';

    images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image.src;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.classList.add('thumbnail');
        thumbnail.addEventListener('click', () => updateMainImage(index));
        thumbnailContainer.appendChild(thumbnail);
    });

    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails[currentIndex].classList.add('active-thumbnail');
}

function updateMainImage(index) {
    currentIndex = index;
    updateLightboxImage();
}

updateLightboxImage();

document.addEventListener('keydown', function (e) {
    if (document.getElementById('lightbox').style.display === 'flex') {
        if (e.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        }
    }
});

// Avaliação
document.addEventListener('DOMContentLoaded', function() {
const avaliacoes = [
    {
        nome: 'Alexandre',
        localizacao: 'São Paulo, Brasil',
        foto: 'https://media.licdn.com/dms/image/D4D03AQG89YEz7yUuVQ/profile-displayphoto-shrink_800_800/0/1678052871850?e=2147483647&v=beta&t=sfZaiMXtQk7yaaOCa1_i09D-PFU6T0vjg-ZnnPcyGIY',
        estrelas: 2,
        data: 'dezembro de 2023',
        detalhes: 'Ficou algumas noites',
        comentario: 'O espaço parece mais bonito pelas fotos, entretanto, o piso precisa ser arrumado, a pia da cozinha também precisa ser arrumada… O ofurô fica em um espaço não muito bom, o melhor seria ali na própria cabana, daria muito mais segurança de não ter bichos. Alem do mais, o ofuro nao funcionou na nossa estadia. Também, a limpeza deixou a desejar (tinha pó nas coisas, a toalha estava com odor…) E a internet, não funciona para quem quer trabalhar do espaço. Espaco caro para o que oferece.'
    },
    {
        nome: 'Susanna',
        localizacao: '7 anos no Airbnb',
        foto: 'https://a0.muscache.com/im/pictures/user/68231a9e-2dc7-4310-aef0-d0d66ae4b11d.jpg?im_w=240',
        estrelas: 5,
        data: 'dezembro de 2023',
        detalhes: 'Ficou algumas noites',
        comentario: 'Tivemos uma estadia maravilhosa na cúpula. O lugar é tranquilo e privado e absolutamente deslumbrante. A casa é confortável e tem tudo o que você precisa. Os anfitriões são muito simpáticos e tudo bem preparado para a nossa chegada. Nós realmente gostamos da nossa estadia no belo espaço e localização.'
    }
];

avaliacoes.forEach(avaliacao => {
    const avaliacaoDiv = document.createElement('div');
    avaliacaoDiv.className = 'avaliacao';

    const perfilDiv = document.createElement('div');
    perfilDiv.className = 'flex';

    const img = document.createElement('img');
    img.className = 'foto-redonda';
    img.src = avaliacao.foto;
    img.alt = 'perfil';

    const infoDiv = document.createElement('div');
    const nomeH3 = document.createElement('h3');
    nomeH3.textContent = avaliacao.nome;
    const localP = document.createElement('p');
    localP.textContent = avaliacao.localizacao;

    infoDiv.appendChild(nomeH3);
    infoDiv.appendChild(localP);

    perfilDiv.appendChild(img);
    perfilDiv.appendChild(infoDiv);

    const ul = document.createElement('ul');
    ul.className = 'flex alinhar';

    const estrelaPreenchida = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 0.5625rem; width: 0.5625rem; fill: var(--f-k-smk-x);" alt="estrelas-avaliação"><path fill-rule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"></path></svg>';
    const estrelaNao_Preenchida = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 0.5625rem; width: 0.5625rem; fill: #CFCFCF;"><path fill-rule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"></path></svg>';
    for (let i = 0; i < 5; i++) {
        const estrela = document.createElement('li');
        estrela.innerHTML = i < avaliacao.estrelas ? estrelaPreenchida : estrelaNao_Preenchida;
        estrela.style.color = i < avaliacao.estrelas ? 'currentcolor' : '#CFCFCF';
        ul.appendChild(estrela);
    }

    const dataLi = document.createElement('li');
    dataLi.style.width = '9rem';
    dataLi.style.paddingLeft = '1rem';
    dataLi.textContent = avaliacao.data;
    ul.appendChild(dataLi);

    const detalhesLi = document.createElement('li');
    detalhesLi.style.width = '12rem';
    detalhesLi.textContent = avaliacao.detalhes;
    ul.appendChild(detalhesLi);

    const comentarioP = document.createElement('p');
    comentarioP.textContent = avaliacao.comentario;

    avaliacaoDiv.appendChild(perfilDiv);
    avaliacaoDiv.appendChild(ul);
    avaliacaoDiv.appendChild(comentarioP);

    document.getElementById('avaliacao').appendChild(avaliacaoDiv);
});
});