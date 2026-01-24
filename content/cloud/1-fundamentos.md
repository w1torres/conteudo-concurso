---
title: "1. Fundamentos"
date: 2026-01-24T20:33:35.855Z
---

# 1. Fundamentos de Computação em Nuvem

## 1. Especificações Técnicas e Arquitetura

A computação em nuvem oferece recursos de TI sob demanda através da internet, com pagamento conforme o uso. Existem três principais modelos de serviço: Infraestrutura como Serviço (IaaS), Plataforma como Serviço (PaaS) e Software como Serviço (SaaS). As arquiteturas de nuvem podem ser públicas, privadas ou híbridas, e os serviços podem ser orquestrados seguindo o paradigma da Arquitetura Orientada a Serviços (SOA) ou através de microsserviços. Conceitos chave incluem elasticidade, escalabilidade e alta disponibilidade (HA).

## 2. Detalhamento Técnico Avançado (Deep Dive)

- **IaaS** fornece recursos de computação virtualizados, como VMs, armazenamento e redes. Usuários gerenciam o SO, mas não o hardware.
- **PaaS** oferece um ambiente de desenvolvimento e implantação, gerenciando o hardware e o sistema operacional, permitindo aos usuários focar no desenvolvimento de aplicativos.
- **SaaS** disponibiliza software como um serviço acessível via navegador, sem necessidade de instalação ou manutenção pelo usuário.

Nuvem **pública** é operada por terceiros, **privada** é exclusiva de uma organização, e **híbrida** combina ambos, otimizando recursos e segurança.

**SOA** é um estilo de arquitetura de software que permite a integração e a interoperabilidade entre serviços distintos. **Microsserviços** são uma abordagem para desenvolver uma única aplicação como um conjunto de pequenos serviços, cada um executando em seu próprio processo e se comunicando com mecanismos leves.

**Elasticidade** permite a um sistema adaptar-se automaticamente à carga de trabalho, adicionando ou removendo recursos conforme necessário. **Escalabilidade** refere-se à capacidade de um sistema em lidar com um aumento de carga. **HA** envolve sistemas e componentes configurados de forma redundante para garantir disponibilidade contínua.

## 3. Implementação e Operação (O "Mão na Massa")

**Comandos/Scripts:**

```bash
# Exemplo de comando para criar uma instância EC2 na AWS (IaaS)
aws ec2 run-instances --image-id ami-0abcdef1234567890 --count 1 --instance-type t2.micro

# Exemplo de comando para escalar um serviço no Azure (PaaS)
az appservice plan update --name myAppServicePlan --resource-group myResourceGroup --number-of-workers 4

# Exemplo de comando para verificar a saúde de um serviço (HA)
kubectl get componentstatus
```

**Contexto TCU:** A fiscalização de contratações de serviços em nuvem pelo TCU envolve a verificação da conformidade com os princípios de economicidade, eficiência e eficácia. A escolha entre IaaS, PaaS e SaaS deve ser justificada com base nas necessidades específicas da entidade e na análise de custo-benefício.

## 4. Análise CEBRASPE (Foco em Pegadinhas e Nuances)

A CEBRASPE pode cobrar o entendimento das diferenças sutis entre elasticidade e escalabilidade, ou entre nuvem privada e híbrida. Uma pegadinha comum é afirmar que PaaS não permite controle algum sobre o ambiente de execução, quando na verdade permite algum grau de configuração.

## 5. Tabela de Referência Técnica (Quick Lookup)

| Comandos/Regras           | O que faz/O que valida          | Observação Técnica importante |
|---------------------------|---------------------------------|-------------------------------|
| `aws ec2 run-instances`   | Cria instância EC2 na AWS       | IaaS, Elasticidade            |
| `az appservice plan update` | Escala serviço no Azure        | PaaS, Escalabilidade          |
| `kubectl get componentstatus` | Verifica saúde do serviço    | HA, Microsserviços            |

## 6. Simulado Técnico (Estilo CEBRASPE – Certo ou Errado)

1. **(Certo/Errado)** A escalabilidade é uma característica exclusiva da nuvem pública.
2. **(Certo/Errado)** Em um modelo PaaS, o usuário tem controle total sobre o sistema operacional da instância.
3. **(Certo/Errado)** Microsserviços podem ser considerados uma evolução da arquitetura SOA.
4. **(Certo/Errado)** Elasticidade refere-se exclusivamente à capacidade de reduzir recursos em resposta a uma diminuição da demanda.
5. **(Certo/Errado)** Uma arquitetura de nuvem híbrida não pode utilizar serviços SaaS de um provedor de nuvem pública.

**Gabarito:**

1. Errado. A escalabilidade também pode ser alcançada em nuvens privadas e híbridas.
2. Errado. O controle sobre o sistema operacional é limitado em PaaS.
3. Certo. Microsserviços são uma forma de implementar SOA com serviços mais granulares e independentes.
4. Errado. Elasticidade também envolve aumentar recursos em resposta a um aumento da demanda.
5. Errado. Uma arquitetura híbrida pode integrar serviços SaaS de provedores de nuvem pública com infraestruturas privadas.

## 7. Bibliografia e Documentação Oficial

- AWS Documentation: https://aws.amazon.com/documentation/
- Azure Documentation: https://docs.microsoft.com/en-us/azure/
- Kubernetes Documentation: https://kubernetes.io/docs/
- NIST Definition of Cloud Computing: https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf
