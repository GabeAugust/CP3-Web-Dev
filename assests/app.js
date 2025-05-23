let products =[
    { nome: 'Mercedes classe a200 sedan', preco: '190.900', categoria: 'sedan', disponivel: true, img: 'https://images-ext-1.discordapp.net/external/RZvvQqyebo0BVo_JKdakWyhWN09Iu8sBop7ns39e5xY/https/cdn.motor1.com/images/mgl/8yEze/s3/2018-mercedes-a-class-hatchback-with-night-package.jpg?format=webp&width=976&height=549' },
    { nome: 'Mercedes classe a300 sedan', preco: '190.900', categoria: 'sedan', disponivel: true, img: 'https://images-ext-1.discordapp.net/external/E-Bbj1nRjpKROt96U_JXWdalh94xH18cyOZ-UtMgAZ0/%3Fq%3Dtbn%3AANd9GcTLN5IrNqBI4JN5G76amItKog_z5jyon7Lu_KOErV9gO0tQAx7g/https/encrypted-tbn0.gstatic.com/images?format=webp' },
    { nome: 'Mercedes-Benz CLA 250', preco: '219.900', categoria: 'sedan', disponivel: true, img: 'https://images-ext-1.discordapp.net/external/Co-d1Fc9OIIpDNb0QzF0RsT_WEEg244xCbNq9qO9Kwg/https/www.webmotors.com.br/wp-content/uploads/2020/06/03124927/Mercedes-Benz-A200-Sedan-49.jpg?format=webp&width=841&height=562' },

  // EQ Line
  { nome: 'Mercedes EQA 250 Elétrico 2023', preco: '312.552,00', categoria: 'eq', disponivel: true, img: 'https://images-ext-1.discordapp.net/external/3ppIdheBiUHA3MP7ROPM8tNLadTYadx6Q54j0gyNM4M/https/media.ed.edmunds-media.com/mercedes-benz/eqe/2023/oem/2023_mercedes-benz_eqe_sedan_amg-eqe_fq_oem_1_1600.jpg?format=webp&width=843&height=562' },
  { nome: '2025 Mercedes-Benz EQE', preco: '687.597,00', categoria: 'eq', disponivel: true, img: 'https://images-ext-1.discordapp.net/external/E_1Kzojryp3-ZtDvosHUTr0OHuySoAKXqjd9UU58pok/https/img.olx.com.br/images/79/792441226376191.jpg?format=webp' },
  { nome: 'Mercedes-Benz EQB 250', preco: '502.900', categoria: 'eq', disponivel: true, img: 'https://images-ext-1.discordapp.net/external/kje8zCEX9h08VG0HRx5CHON89hSqDc1CVDG82T97dFw/https/carwiki.de/wp-content/uploads/2021/12/800px-Mercedes-Benz_X243_IAA_2021_1X7A0109.jpg?format=webp' },

  // AMG
  { nome: 'Mercedes-AMG C 63', preco: '576.343', categoria: 'amg', disponivel: false, img: 'https://images-ext-1.discordapp.net/external/0OE7pdQwC74R6v7b2v6rY8lTfIafG8niPqVZu51esIU/https/revistacarro.com.br/wp-content/uploads/2022/06/Mercedes-AMG-ONE_4-1080x675.jpg?format=webp&width=899&height=562' },
  { nome: 'Mercedes-benz Amg Gt 63 2024', preco: '1.596.900', categoria: 'amg', disponivel: true, img: 'https://images-ext-1.discordapp.net/external/FyfpBdB9N5a24ddcNLq5H7A3MvQ0oB7mB0gs_ekMPFM/https/imprensa.mercedes-benz.com.br/storage/images/74e97bc17d9a2efde760007356cc1f6ceddec4c6.jpg?format=webp' },
  { nome: 'Mercedes-AMG One', preco: '10.620.000', categoria: 'amg', disponivel: true, img: 'https://images-ext-1.discordapp.net/external/f8qeRFgnvdSXHTY3W7jMElK9-nmCH_QB8BV5r0zd_Pc/https/uploads.vrum.com.br/2022/09/0b1c1fe8-2.jpg?format=webp&width=899&height=562' },
  { nome: 'AMG G 63 Grand Edition', preco: '2.200.000', categoria: 'amg', disponivel: true, img: 'https://images-ext-1.discordapp.net/external/y4AzVoNLAkLlvf_X-rn60vXHqlUoNY98zBL97n4dDOs/%3Fq%3Dtbn%3AANd9GcQCySTrO-vD5wyOhosmcCPGy6r3K0ZMEhp2FuJsws6-ownK4yN5/https/encrypted-tbn1.gstatic.com/images?format=webp' }
]

const form = document.getElementById('form')

const sedanSection = document.getElementById('sedan')
const eqSection = document.getElementById('eq')
const amgSection = document.getElementById('amg')

const cardsContainer = document.getElementById('cards-container')


// Assim que a página carrega faz um map no array "products" e dispara CreateCard() para cada um deles
window.onload = () =>{
    products.map((item)=>{
        createCard(item)
    })
}

// Evento acionado quando o usuário clicar no botão de filtrar, pegando o valor do select e também da checkbox
form.addEventListener('submit', (event)=>{
    event.preventDefault()

    const chosenCategory = document.getElementById('category').value
    const disponivel = document.getElementById('availability').checked


   filterProducts(chosenCategory, disponivel)
})

// Filtra os produtos de acordo com a categoria dos cards e do valor do select, além do valor da checkbox (se ela estiver true)
function filterProducts(chosenCategory, disponivel){
    let filterProducts = products.filter((item)=> item.categoria == chosenCategory.toLowerCase())

    if(disponivel){
        filterProducts = filterProducts.filter((item)=> item.disponivel == disponivel)
    }

    sedanSection.innerHTML = ""
    eqSection.innerHTML = ""
    amgSection.innerHTML = ""


    filterProducts.map((item)=>{
        createCard(item)
    })

}

// Função que cria os cards e verifica em qual seção ele vai ficar
function createCard(item){
    let card = document.createElement('div')
    card.className = 'card'

    if(!item.disponivel){
        card.classList.add('unavailable')
    }

    card.innerHTML = `
        <div class="card">
            <img src="${item.img}"/>
            <div class="card-about">
                <h2>${item.nome}</h2>
                <p>R$${item.preco}</p>
            </div>
        </div>
    `
    if(item.categoria == 'sedan'){
        sedanSection.appendChild(card)
    }

    if(item.categoria === 'eq'){
        eqSection.appendChild(card)
    }

    if(item.categoria == 'amg'){
        amgSection.appendChild(card)
    }
}