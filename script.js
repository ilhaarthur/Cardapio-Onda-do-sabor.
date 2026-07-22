const produtos = [
    // SEGUNDA-FEIRA
    {
        dia: "segunda",
        categoria: "Lanches",
        nome: "Batata Frita com Nuggets",
        preco: "R$ 10,00",
        imagem: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=500&q=80"
    },
    {
        dia: "segunda",
        categoria: "Salgados",
        nome: "Folhado de Presunto e Queijo",
        preco: "R$ 7,00",
        imagem: "https://images.unsplash.com/photo-1626803775151-61d756612f97?auto=format&fit=crop&w=500&q=80"
    },
    {
        dia: "segunda",
        categoria: "Doces",
        nome: "Alfajor",
        preco: "R$ 5,00",
        imagem: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=500&q=80"
    },

    // TERÇA-FEIRA
    {
        dia: "terca",
        categoria: "Lanches",
        nome: "Mini Pizza (Calabresa / Frango c/ Catupiry)",
        preco: "R$ 5,00",
        imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80"
    },

    // QUARTA-FEIRA
    {
        dia: "quarta",
        categoria: "Doces",
        nome: "Bolo de Chocolate (Brigadeiro ou Ninho)",
        preco: "R$ 6,00",
        imagem: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80"
    },
    {
        dia: "quarta",
        categoria: "Bebidas",
        nome: "Chocolate Quente Gourmet (Ao Leite / Ninho)",
        preco: "R$ 5,50",
        imagem: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=500&q=80"
    },

    // QUINTA-FEIRA
    {
        dia: "quinta",
        categoria: "Salgados",
        nome: "Pastel de Carne",
        preco: "R$ 7,50",
        imagem: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80"
    },
    {
        dia: "quinta",
        categoria: "Salgados",
        nome: "Pastel de Carne com Queijo",
        preco: "R$ 8,00",
        imagem: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80"
    },
    {
        dia: "quinta",
        categoria: "Salgados",
        nome: "Pastel de Presunto e Queijo",
        preco: "R$ 7,00",
        imagem: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80"
    },
    {
        dia: "quinta",
        categoria: "Doces",
        nome: "Alfajor",
        preco: "R$ 5,00",
        imagem: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=500&q=80"
    },

    // SEXTA-FEIRA
    {
        dia: "sexta",
        categoria: "Salgados",
        nome: "Pastel de Carne",
        preco: "R$ 7,50",
        imagem: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80"
    },
    {
        dia: "sexta",
        categoria: "Salgados",
        nome: "Pastel de Carne com Queijo",
        preco: "R$ 8,00",
        imagem: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80"
    },
    {
        dia: "sexta",
        categoria: "Salgados",
        nome: "Pastel de Presunto e Queijo",
        preco: "R$ 7,00",
        imagem: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80"
    },
    {
        dia: "sexta",
        categoria: "Doces",
        nome: "Alfajor",
        preco: "R$ 5,00",
        imagem: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=500&q=80"
    },

    // TODOS OS DIAS / BEBIDAS (Apenas a Pitchulinha R$ 3,00 conforme o folheto)
    {
        dia: "todos",
        categoria: "Bebidas",
        nome: "Pitchulinha (Coca-Cola / Sprite)",
        preco: "R$ 3,00",
        imagem: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80"
    }
];

// Lista de dias válidos
const dias = ["segunda", "terca", "quarta", "quinta", "sexta"];

// Esconde todas as seções de dias
function esconderTodos() {
    dias.forEach(dia => {
        const elemento = document.getElementById(dia);
        if (elemento) elemento.style.display = "none";

        const btn = document.getElementById(`btn-${dia}`);
        if (btn) btn.classList.remove("ativo");
    });
}

// Mostra o dia escolhido
function mostrarDia(dia) {
    esconderTodos();

    const elemento = document.getElementById(dia);
    const btnAtivo = document.getElementById(`btn-${dia}`);

    if (elemento) {
        elemento.style.display = "flex";
    }

    if (btnAtivo) {
        btnAtivo.classList.add("ativo");
    }
}

// Identifica o dia atual do sistema
function abrirDiaAtual() {
    const hoje = new Date().getDay();
    let dia = "segunda";
    let texto = "Confira nosso cardápio!";

    switch (hoje) {
        case 1:
            dia = "segunda";
            texto = "Hoje é Segunda-feira 🌊";
            break;
        case 2:
            dia = "terca";
            texto = "Hoje é Terça-feira 🍕";
            break;
        case 3:
            dia = "quarta";
            texto = "Hoje é Quarta-feira 🍰";
            break;
        case 4:
            dia = "quinta";
            texto = "Hoje é Quinta-feira 🥟";
            break;
        case 5:
            dia = "sexta";
            texto = "Hoje é Sexta-feira 🎉";
            break;
        default:
            dia = "segunda";
            texto = "Bem-vindo à Onda do Sabor!";
    }

    mostrarDia(dia);

    const mensagem = document.getElementById("mensagem-dia");
    if (mensagem) {
        mensagem.innerHTML = texto;
    }
}

// Interatividade dos botões de adicionar
document.addEventListener("DOMContentLoaded", () => {
    abrirDiaAtual();

    const botoesAdd = document.querySelectorAll(".btn-add, .btn-adicionar");
    botoesAdd.forEach(btn => {
        btn.addEventListener("click", () => {
            const textoOriginal = btn.innerText;
            btn.innerText = "Adicionado! ✓";
            btn.style.background = "#ff9800";

            setTimeout(() => {
                btn.innerText = textoOriginal;
                btn.style.background = "#00b894";
            }, 1500);
        });
    });
});
