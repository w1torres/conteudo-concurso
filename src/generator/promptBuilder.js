export function buildPrompt(disciplina, topico, bibliografia) {
  return `
    Gere um material de estudo detalhado para o concurso da CGU.
    Disciplina: ${disciplina}
    Tópico: ${topico}
    Bibliografia de Referência: ${bibliografia.join(", ")}

    REQUISITOS:
    1. Use Markdown para formatação.
    2. Comece com um CONCEITO robusto.
    3. Liste PONTOS-CHAVE para prova (bullet points).
    4. Crie uma seção de "PEGADINHAS DE BANCA" com foco no estilo CEBRASPE (Certo/Errado).
    5. Não invente normas. Se não souber, cite a necessidade de consulta à lei seca.
    6. Mantenha um tom profissional e acadêmico.
    
    ESTRUTURA DE SAÍDA:
    ### Conceito
    ### Pontos-Chave
    ### Atenção: Pegadinhas de Banca
  `;
}