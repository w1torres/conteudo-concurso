---
title: "9. Criptografia"
date: 2026-01-24T20:31:59.073Z
---

# 9. Criptografia

## 1. Especificações Técnicas e Arquitetura

Criptografia é o estudo e aplicação de técnicas matemáticas para garantir a segurança da informação, especialmente na proteção de dados em trânsito e em repouso, e na implementação de assinaturas digitais. Os componentes principais incluem algoritmos de criptografia, chaves criptográficas e sistemas de gerenciamento de chaves. A criptografia se baseia em conceitos fundamentais como confidencialidade, integridade, autenticação e não repúdio.

## 2. Detalhamento Técnico Avançado (Deep Dive)

- **Assinatura Digital:** Utiliza um par de chaves assimétricas para garantir a autenticidade e a integridade de uma mensagem. O remetente assina a mensagem com sua chave privada, e o receptor verifica a assinatura com a chave pública do remetente.
- **Proteção de Dados em Trânsito:** Utiliza protocolos como TLS (Transport Layer Security) para criptografar dados que estão sendo transferidos por uma rede, prevenindo interceptações maliciosas.
- **Proteção de Dados em Repouso:** Envolve a criptografia de dados armazenados em dispositivos ou na nuvem, utilizando algoritmos como AES (Advanced Encryption Standard) para garantir que os dados sejam inacessíveis sem a chave de criptografia correta.

## 3. Implementação e Operação (O "Mão na Massa")

**Comandos/Scripts:**

- **Gerar um par de chaves RSA para assinatura digital:**
  ```bash
  openssl genpkey -algorithm RSA -out private_key.pem
  openssl rsa -pubout -in private_key.pem -out public_key.pem
  ```
- **Assinar um documento:**
  ```bash
  openssl dgst -sha256 -sign private_key.pem -out document.sig document.txt
  ```
- **Verificar a assinatura de um documento:**
  ```bash
  openssl dgst -sha256 -verify public_key.pem -signature document.sig document.txt
  ```

**Protocolos e Regras:**

- **TLS Handshake:** Processo pelo qual as partes negociam a versão do protocolo, selecionam algoritmos criptográficos, autenticam-se mutuamente e estabelecem chaves de sessão criptografadas.

## 4. Análise CEBRASPE (Foco em Pegadinhas e Nuances)

A CEBRASPE costuma cobrar a aplicação prática e teórica da criptografia com foco na segurança da informação, especialmente em contextos governamentais. É comum encontrar questões que testam o entendimento sobre a diferença entre criptografia simétrica e assimétrica, além da aplicação de assinaturas digitais e a importância da gestão de chaves. Uma pegadinha comum é confundir a função de hash com criptografia, ou não entender a diferença entre criptografia em repouso e em trânsito.

## 5. Tabela de Referência Técnica (Quick Lookup)

| Comandos/Regras                      | O que faz/O que valida                        | Observação Técnica importante para a prova         |
|--------------------------------------|-----------------------------------------------|----------------------------------------------------|
| `openssl genpkey -algorithm RSA`     | Gera um par de chaves RSA                     | Importante para assinatura digital                 |
| `openssl dgst -sha256 -sign`         | Assina digitalmente um documento              | SHA-256 é um algoritmo de hash seguro              |
| `openssl dgst -sha256 -verify`       | Verifica a assinatura de um documento         | Garante a integridade e autenticidade do documento |
| TLS Handshake                        | Estabelece uma conexão segura                 | Fundamental para a proteção de dados em trânsito   |
| AES                                  | Algoritmo de criptografia para dados em repouso| Segurança de dados armazenados                     |

## 6. Simulado Técnico (Estilo CEBRASPE – Certo ou Errado)

1. **(Certo ou Errado)** A criptografia assimétrica utiliza o mesmo par de chaves para criptografar e descriptografar uma mensagem.
   
   - **Errado.** A criptografia assimétrica utiliza um par de chaves, uma pública e uma privada, onde a chave pública é usada para criptografar e a privada para descriptografar.

2. **(Certo ou Errado)** O protocolo TLS é utilizado para garantir a segurança de dados em repouso.

   - **Errado.** O TLS (Transport Layer Security) é utilizado para proteger dados em trânsito, não em repouso.

3. **(Certo ou Errado)** A assinatura digital garante a confidencialidade da mensagem assinada.

   - **Errado.** A assinatura digital garante a autenticidade e integridade da mensagem, mas não sua confidencialidade.

4. **(Certo ou Errado)** O uso de funções de hash é suficiente para garantir a segurança de dados armazenados.

   - **Errado.** Funções de hash garantem a integridade dos dados, mas não a confidencialidade. Para proteger dados em repouso, é necessária a criptografia.

5. **(Certo ou Errado)** A gestão de chaves é um componente crítico na infraestrutura de criptografia, requerendo processos seguros de geração, armazenamento, distribuição e destruição de chaves.

   - **Certo.** A gestão de chaves é fundamental para a segurança da criptografia, pois as chaves são o elemento que permite a criptografia e descriptografia dos dados.

## 7. Bibliografia e Documentação Oficial

- **RFC 8446** - The Transport Layer Security (TLS) Protocol Version 1.3: https://tools.ietf.org/html/rfc8446
- **OpenSSL Documentation**: https://www.openssl.org/docs/
- **NIST Special Publication 800-57** - Recommendation for Key Management: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-57pt1r4.pdf
