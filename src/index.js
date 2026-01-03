import fs from 'fs-extra';
import path from 'path';
import { prepareDirectories } from './generator/createStructure.js';
import { generateAIContent } from './ai/client.js';
import { buildPrompt } from './generator/promptBuilder.js';

async function main() {
  console.log("🚀 Iniciando geração do material de estudo...");

  const edital = await fs.readJson('./edital/edital.json');
  const biblio = await fs.readJson('./edital/bibliografia.json');

  await prepareDirectories(edital);

  for (const disc of edital.disciplinas) {
    for (const topico of disc.topicos) {
      const fileName = `${topico.toLowerCase().replace(/ /g, '-')}.md`;
      const filePath = path.join(process.cwd(), 'content', disc.slug, fileName);

      if (await fs.pathExists(filePath)) {
        console.log(`⏩ Pulando: ${topico} (já existe)`);
        continue;
      }

      console.log(`📝 Gerando conteúdo para: ${topico}...`);
      
      const prompt = buildPrompt(disc.nome, topico, biblio[disc.slug] || []);
      const content = await generateAIContent(prompt);

      const frontmatter = `---
title: "${topico}"
date: ${new Date().toISOString()}
draft: false
---

{{< toc >}}

${content}

---
### Bibliografia Sugerida
${(biblio[disc.slug] || []).map(b => `- ${b}`).join('\n')}
`;

      await fs.writeFile(filePath, frontmatter);
    }
  }
  console.log("✅ Processo concluído!");
}

main();