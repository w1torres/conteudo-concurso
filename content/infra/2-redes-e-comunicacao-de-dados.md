---
title: "2. Redes e Comunicação de Dados"
date: 2026-01-24T20:17:10.291Z
---

# 2. Redes e Comunicação de Dados

## 1. Especificações Técnicas e Arquitetura

### TCP (Transmission Control Protocol)
- **Resumo:** Protocolo de controle de transmissão que oferece um serviço de entrega de dados ponto a ponto, confiável e orientado à conexão.
- **Componentes Principais:** Segmento TCP, Número de Sequência, Número de Confirmação, Flags (SYN, ACK, FIN), Janela de Congestionamento.
- **Conceitos Fundamentais:** Garante a entrega de dados na ordem correta através do estabelecimento de uma conexão (handshake de três vias) e controle de fluxo.

### UDP (User Datagram Protocol)
- **Resumo:** Protocolo de datagrama de usuário que oferece um serviço de entrega de dados sem conexão e com esforço mínimo.
- **Componentes Principais:** Datagrama UDP, Portas de Origem e Destino.
- **Conceitos Fundamentais:** Não garante a entrega, a ordem ou a integridade dos dados, sendo mais rápido e eficiente para aplicações que toleram perda de dados.

## 2. Detalhamento Técnico Avançado (Deep Dive)

### TLS (Transport Layer Security) e SSL (Secure Sockets Layer)
- **Conceitos Técnicos Aprofundados:** Protocolos de segurança projetados para fornecer comunicações seguras sobre uma rede de computadores. TLS é o sucessor do SSL.
- **Regras Operacionais:** Utilizam criptografia assimétrica para a troca de chaves, seguida de criptografia simétrica para a comunicação.
- **Boas Práticas:** Sempre utilizar a versão mais recente (TLS 1.3) para garantir as melhores práticas de segurança.

### OSPF (Open Shortest Path First)
- **Conceitos Técnicos Aprofundados:** Protocolo de roteamento baseado em estado de link que usa o algoritmo de Dijkstra para calcular o caminho mais curto.
- **Regras Operacionais:** Divisão de uma rede em áreas OSPF para otimizar o tráfego e a escalabilidade.
- **Boas Práticas:** Configurar áreas de stub e NSSA (Not So Stubby Area) para reduzir o número de rotas propagadas.

## 3. Implementação e Operação (O "Mão na Massa")

### Comandos/Scripts

**Configuração OSPF em um roteador Cisco:**
```bash
router ospf 1
 network 192.168.1.0 0.0.0.255 area 0
```

**Verificação de sessão TLS com OpenSSL:**
```bash
openssl s_client -connect www.exemplo.com:443
```

### Protocolos e Regras

**Handshake TLS:**
1. **ClientHello:** O cliente envia uma lista de versões de TLS suportadas, métodos de criptografia e outros parâmetros.
2. **ServerHello:** O servidor escolhe a configuração e envia de volta ao cliente.
3. **Certificate:** O servidor envia seu certificado para autenticação.
4. **Key Exchange:** Troca de chaves para estabelecer uma chave simétrica.
5. **Finished:** Mensagens para verificar o início da sessão segura.

### Exemplos de Output/Logs

**Log de conexão OSPF:**
```
%OSPF-5-ADJCHG: Process 1, Nbr 192.168.1.2 on GigabitEthernet0/1 from LOADING to FULL, Loading Done
```

## 4. Análise CEBRASPE (Foco em Pegadinhas e Nuances)

- A CEBRASPE frequentemente testa o conhecimento sobre a diferença entre TLS e SSL, enfatizando a importância de conhecer as versões e suas vulnerabilidades.
- Uma pegadinha comum é afirmar que o UDP garante a entrega de dados, o que é incorreto.

## 5. Tabela de Referência Técnica (Quick Lookup)

| Comandos/Regras            | O que faz/O que valida            | Observação Técnica         |
|----------------------------|-----------------------------------|----------------------------|
| `router ospf 1`            | Inicia a configuração do OSPF     | Usado em roteadores Cisco  |
| `openssl s_client -connect`| Inicia uma sessão TLS             | Verifica a configuração TLS|

## 6. Simulado Técnico (Estilo CEBRASPE – Certo ou Errado)

1. **(Certo/Errado)** O protocolo TLS utiliza criptografia assimétrica durante toda a sessão de comunicação para garantir a segurança dos dados.
2. **(Certo/Errado)** Em uma configuração OSPF, todos os roteadores dentro da mesma área devem ter o mesmo valor de custo para garantir o balanceamento de carga.
3. **(Certo/Errado)** O protocolo ICMP é utilizado primariamente para reportar erros na entrega de pacotes IP.
4. **(Certo/Errado)** VLANs podem ser configuradas para segmentar redes lógicas sem a necessidade de hardware adicional.
5. **(Certo/Errado)** O protocolo SFTP utiliza o mesmo canal de comando e dados do FTP para transferência de arquivos.

**Gabarito:**
1. Errado. O TLS utiliza criptografia assimétrica apenas para a troca de chaves no início da sessão. Após isso, a comunicação é criptografada usando criptografia simétrica.
2. Errado. O valor de custo em OSPF é utilizado para determinar o melhor caminho; não é necessário que todos os roteadores na mesma área tenham o mesmo valor de custo.
3. Certo. O ICMP é utilizado para enviar mensagens de erro e operacionais sobre a rede.
4. Certo. VLANs permitem a segmentação de redes lógicas independentemente da localização física dos dispositivos, sem necessidade de hardware adicional.
5. Errado. O SFTP (SSH File Transfer Protocol) utiliza o SSH para transferir arquivos, garantindo uma conexão segura, diferentemente do FTP que separa os canais de comando e dados.

## 7. Bibliografia e Documentação Oficial

- **RFC 791** - Internet Protocol
- **RFC 793** - Transmission Control Protocol
- **RFC 768** - User Datagram Protocol
- **RFC 5246** - The Transport Layer Security (TLS) Protocol Version 1.2
- **RFC 8446** - The Transport Layer Security (TLS) Protocol Version 1.3
- **Cisco OSPF Design Guide** - https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/7039-1.html
- **OpenSSL Documentation** - https://www.openssl.org/docs/

