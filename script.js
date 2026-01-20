document.addEventListener("alpine:init", () => {
    Alpine.data("alpine", () => ({

        menu: false,
        accordion: null,
        subscriptions: [
            {
                name: "Estratégia alimentar (sem vídeo)",
                description: "Indicada para quem busca orientação objetiva e ajustes de rota pontuais, sem aprofundamento ou acompanhamento contínuo",
                price: "R$ 190",
                type: "- (pix ou 1x cartão)",
                link: "",
                included: [
                    "Questionário pré-atendimento",
                    "Entendimento da rotina alimentar e dos objetivos",
                    "Direcionamentos alimentares práticos e estratégicos com base nas informações fornecidas",
                    "Esclarecimento de dúvidas pontuais sobre a aplicação das orientações já utilizadas",
                ],
            },
            {
                name: "Atendimento online (com vídeo)",
                description: "Indicada para quem busca um direcionamento alimentar mais aprofundado, com espaço para esclarecimento de dúvidas e feedbacks por um período definido, sem acompanhamento estruturado",
                price: "R$ 300",
                type: "- (pix ou 2x cartão)",
                link: "",
                included: [
                    "Questionário pré-atendimento",
                    "Encontro online individual para entendimento aprofundado da rotina alimentar e dos objetivos",
                    "Direcionamento alimentar individualizado",
                    "Respostas via WhatsApp relacionadas exclusivamente à aplicação das orientações fornecidas no encontro",
                    "Esclarecimento de dúvidas pontuais",
                    "Feedbacks gerais sobre a aplicação do direcionamento proposto",
                    "Respostas via WhatsApp relacionadas exclusivamente à aplicação das orientações fornecidas no encontro",
                ],
            },
            {
                name: "Plano Essencial - 90 Dias",
                description: "Desenvolvido especialmente para fisiologia e necessidades das mulheres",
                price: "R$ 560",
                type: "- (pix ou 3x cartão)",
                link: "",
                included: [
                    "Questionário pré-atendimento",
                    "2 encontros de orientação alimentar, realizados dentro desse período",
                    "1 encontro inicial online individual para entendimento aprofundado da rotina alimentar e dos objetivos",
                    "1 encontro de acompanhamento",
                    "Revisão e ajuste do direcionamento alimentar no segundo encontro",
                    "Direcionamento alimentar de caráter educativo, adequado a cada fase do processo",
                    "Esclarecimento de dúvidas de forma contínua por 90 dias, restritas à aplicação do direcionamento proposto",
                ],
            },
            {
                name: "Plano Premium - 6 Meses",
                description: "Desenvolvido especialmente para fisiologia e necessidades das mulheres",
                price: "R$ 1.000",
                type: "- (pix ou 4x cartão)",
                link: "",
                included: [
                    "4 encontros de orientação alimentar, realizados dentro desse período",
                    "1 encontro inicial",
                    "3 encontros de acompanhamento",
                    "Evolução progressiva do direcionamento alimentar conforme cada encontro",
                    "Envio de feedbacks sobre a aplicação do direcionamento",
                    "Esclarecimento de dúvidas pontuais relacionadas às orientações fornecidas",
                    "Respostas via WhatsApp restritas à aplicação do direcionamento proposto",
                ],
            },
        ],
        questions: [
            {
                title: "Qual a diferença entre o atendimento com vídeo e sem vídeo?",
                response: "No atendimento com vídeo, o encontro acontece ao vivo, permitindo uma conversa mais aprofundada, troca direta, esclarecimento imediato de dúvidas e melhor entendimento da rotina. No atendimento sem vídeo, o direcionamento é feito com base nas informações fornecidas via questionário, com retorno orientativo por escrito, sem encontro ao vivo.",
            },
            {
                title: "O atendimento sem vídeo substitui o atendimento com vídeo?",
                response: "Não. O atendimento sem vídeo é uma opção mais objetiva, indicada para quem já tem alguma organização e busca direcionamento prático. O atendimento com vídeo permite maior aprofundamento, troca em tempo real e acompanhamento mais próximo.",
            },
            {
                title: "Posso escolher qualquer opção independentemente do meu objetivo?",
                response: "Sim. Todas as opções oferecem direcionamento alimentar de caráter educativo. A escolha depende do nível de acompanhamento, do tempo disponível e da necessidade de esclarecimento de dúvidas ao longo do processo.",
            },
            {
                title: "Há acompanhamento contínuo entre os encontros?",
                response: "Não. O acompanhamento contínuo não faz parte dos atendimentos. Nos planos Plus e Premium, há espaço para esclarecimento de dúvidas e envio de feedbacks dentro do período contratado, conforme descrito em cada opção.",
            },
            {
                title: "Os ajustes no direcionamento são feitos a qualquer momento?",   
                response: "Não. Os ajustes no direcionamento alimentar acontecem exclusivamente nos encontros previstos em cada plano. Fora desses momentos, são oferecidos apenas esclarecimentos sobre a aplicação do que já foi orientado.",
            },
        ],

    }))
})
