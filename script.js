// Lista dos dias da semana
const dias = ["segunda", "terca", "quarta", "quinta", "sexta"];

// Esconde todas as seções de dias
function esconderTodos() {
    dias.forEach(dia => {
        const elemento = document.getElementById(dia);
        if (elemento) elemento.style.display = "none";

        // Remove a classe do botão ativo
        const btn = document.getElementById(`btn-${dia}`);
        if (btn) btn.classList.remove("ativo");
    });
}

// Mostra o dia escolhido com animação
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

// Feedback visual ao clicar nos botões "Adicionar"
document.addEventListener("DOMContentLoaded", () => {
    abrirDiaAtual();

    const botoesAdd = document.querySelectorAll(".btn-add");
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
