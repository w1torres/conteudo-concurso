import fs from 'fs-extra';
import path from 'path';

export async function prepareDirectories(edital) {
  const baseContentPath = path.join(process.cwd(), 'content');
  await fs.ensureDir(baseContentPath);

  for (const disc of edital.disciplinas) {
    const discPath = path.join(baseContentPath, disc.slug);
    await fs.ensureDir(discPath);
    
    // Cria o arquivo index da disciplina para o Hugo
    const indexContent = `---\ntitle: "${disc.nome}"\nweight: 1\n---\n\nSelecione um tópico para estudar.`;
    await fs.writeFile(path.join(discPath, '_index.md'), indexContent);
  }
}