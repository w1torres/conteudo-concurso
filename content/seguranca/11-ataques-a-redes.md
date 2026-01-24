---
title: "11. Ataques a redes"
date: 2026-01-24T20:33:07.230Z
---

# 11. Ataques a redes

## 1. Especificações Técnicas e Arquitetura

Ataques a redes são ações maliciosas destinadas a interromper a normalidade dos serviços de rede, roubar dados, ou de outra forma prejudicar indivíduos ou organizações. Eles podem variar desde simples inconveniências até graves violações de segurança.

- **DoS e DDoS (Denial of Service e Distributed Denial of Service):** visam sobrecarregar recursos de rede, tornando-os indisponíveis.
- **Botnets:** redes de computadores infectados controlados remotamente para executar ataques em larga escala.
- **Phishing:** tentativas de enganar usuários para roubar credenciais ou informações sensíveis.
- **Zero-day:** explora vulnerabilidades desconhecidas dos desenvolvedores ou fabricantes.
- **Ping da morte:** envio de pacotes malformados para desestabilizar ou derrubar sistemas.
- **UDP Flood:** inundação da rede com pacotes UDP para esgotar recursos do servidor.
- **MAC/IP/ARP Spoofing:** falsificação de endereços para interceptar ou redirecionar o tráfego de rede.
- **Buffer Overflow:** exploração de um excesso de dados em um buffer para executar código malicioso.
- **SQL Injection:** inserção de código SQL malicioso em consultas para manipular ou acessar dados não autorizados.
- **XSS (Cross-Site Scripting):** injeção de scripts maliciosos em sites para executar no navegador do usuário.
- **DNS Poisoning:** corrompimento da resolução de nomes de domínio para redirecionar usuários para sites maliciosos.

## 2. Detalhamento Técnico Avançado (Deep Dive)

- **DoS/DDoS:** Utiliza múltiplos sistemas comprometidos (botnets) para gerar um volume de tráfego insustentável para o alvo.
- **Botnets:** Operam através do controle de um "botmaster" que comanda a rede de bots infectados, muitas vezes para realizar ataques DDoS.
- **Phishing:** Emprega técnicas de engenharia social, frequentemente através de emails ou mensagens que imitam entidades confiáveis.
- **Zero-day:** Requer uma vigilância constante e uma rápida resposta às ameaças emergentes, dado que não existem correções ou mitigação conhecidas no momento da descoberta.
- **UDP Flood:** Não requer uma conexão estabelecida, tornando-o mais difícil de filtrar e rastrear.
- **MAC/IP/ARP Spoofing:** Explora a confiança inerente nos protocolos de rede, permitindo ataques como "man-in-the-middle".
- **Buffer Overflow:** Pode ser mitigado através da programação defensiva, como a verificação de limites em buffers.
- **SQL Injection:** Prevenível através do uso de consultas parametrizadas e práticas de codificação segura.
- **XSS:** Mitigado por meio da validação e sanitização de entrada de dados do usuário e implementação de políticas de segurança de conteúdo.
- **DNS Poisoning:** Requer a implementação de segurança adicional, como DNSSEC, para garantir a autenticidade das respostas DNS.

## 3. Implementação e Operação (O "Mão na Massa")

**Comandos/Scripts:**

- **Detecção de ARP Spoofing:**
  ```bash
  arp -a
  ```
  Verifique entradas duplicadas com diferentes endereços IP, indicando possível spoofing.

- **Mitigação de SQL Injection (Exemplo em SQL):**
  ```sql
  SELECT * FROM users WHERE username = ? AND password = ?
  ```
  Utilize placeholders (`?`) para prevenir injeção.

**Protocolos e Regras:**

- **TLS Handshake:** Processo de negociação criptográfica entre cliente e servidor para estabelecer uma comunicação segura.
- **Normalização de Dados:** Aplicação de regras de 1FN, 2FN, e 3FN para organizar dados em um banco de dados relacional.

**Exemplos de Output/Logs:**

- **Log de tentativa de SQL Injection:**
  ```
  ' OR '1'='1
  ```
  Tentativa de login ou acesso a dados através da injeção.

## 4. Análise CEBRASPE (Foco em Pegadinhas e Nuances)

A CEBRASPE costuma cobrar a compreensão dos candidatos sobre a natureza e a mitigação de ataques específicos, muitas vezes focando em detalhes técnicos ou na aplicabilidade de medidas de segurança. É comum encontrar questões que testam o conhecimento sobre a implementação de práticas de segurança e a capacidade de identificar vulnerabilidades em cenários dados.

**Dicas de prova:**
- Esteja atento a questões que pedem a identificação do tipo de ataque com base em descrições de cenários.
- Questões sobre mitigação de ataques frequentemente requerem conhecimento de configurações específicas ou práticas de codificação segura.

## 5. Tabela de Referência Técnica (Quick Lookup)

| Comandos/Regras              | O que faz/O que valida           | Observação Técnica importante para a prova |
|------------------------------|----------------------------------|--------------------------------------------|
| `arp -a`                     | Verifica entradas ARP            | Útil para detecção de ARP Spoofing         |
| Consultas parametrizadas SQL | Prevenção contra SQL Injection   | Evita a execução de código SQL malicioso   |
| Validação de entrada         | Mitiga XSS e Injeção SQL         | Sanitização de dados do usuário            |
| DNSSEC                       | Segurança de DNS                 | Previne DNS Poisoning                      |
| TLS Handshake                | Estabelece comunicação segura    | Importante para a segurança de transmissões|

## 6. Simulado Técnico (Estilo CEBRASPE – Certo ou Errado)

1. **(Certo ou Errado)** O ataque de Ping da Morte é eficaz contra sistemas modernos, pois a maioria ainda não implementa limites de tamanho para pacotes ICMP.
   - **Resposta:** Errado. Sistemas modernos geralmente implementam proteções contra esse tipo de ataque.

2. **(Certo ou Errado)** A utilização de consultas parametrizadas é uma técnica eficaz na prevenção de ataques de injeção de SQL.
   - **Resposta:** Certo. Consultas parametrizadas ajudam a prevenir a execução de comandos SQL maliciosos.

3. **(Certo ou Errado)** Botnets são principalmente utilizadas para realizar ataques de phishing.
   - **Resposta:** Errado. Botnets são redes de computadores infectados usadas para uma variedade de ataques maliciosos, incluindo, mas não limitado a, DDoS.

4. **(Certo ou Errado)** DNS Poisoning pode ser mitigado com a implementação de HTTPS em todos os sites.
   - **Resposta:** Errado. DNS Poisoning é mitigado através de medidas como DNSSEC, não apenas HTTPS.

5. **(Certo ou Errado)** ARP Spoofing pode ser detectado pela observação de múltiplas respostas ARP para o mesmo endereço IP.
   - **Resposta:** Certo. Isso pode indicar uma tentativa de ARP Spoofing.

## 7. Bibliografia e Documentação Oficial

- RFC 2827 - Network Ingress Filtering: Defeating Denial of Service Attacks which employ IP Source Address Spoofing.
- OWASP Top 10 - A lista das 10 principais vulnerabilidades de segurança em aplicações web, incluindo SQL Injection e XSS.
- NIST Special Publication 800-61 - Guia para tratamento de incidentes de segurança cibernética, incluindo detecção e resposta a ataques.
- Documentação oficial do DNSSEC no site da IANA (Internet Assigned Numbers Authority).

Este material foi elaborado com base nas especificações técnicas e arquitetônicas dos ataques a redes, focando em detalhes operacionais e implementações práticas, conforme exigido pelo contexto de TI e fiscalização do TCU, e seguindo as diretrizes de cobrança da banca CEBRASPE.
