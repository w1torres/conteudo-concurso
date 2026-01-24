---
title: "2. Design e Programação"
date: 2026-01-24T20:24:21.723Z
---

# 2. Design e Programação

## 1. Especificações Técnicas e Arquitetura

Design e programação envolvem a aplicação de padrões de design como os do Gang of Four (GoF) e GRASP para resolver problemas de software de forma eficiente e reutilizável. Concorrência, paralelismo, e multithreading são técnicas usadas para melhorar a performance de programas permitindo que múltiplas operações ou processos ocorram simultaneamente. A programação assíncrona permite que uma operação ocorra independentemente de outras operações principais, melhorando a responsividade do software.

## 2. Detalhamento Técnico Avançado (Deep Dive)

### Padrões de Design (GoF & GRASP)
- **GoF**: Define soluções reutilizáveis para problemas comuns em design de software. Inclui padrões como Singleton, Observer, Factory, e Strategy.
- **GRASP**: Fornece princípios básicos para atribuir responsabilidades em objetos, como baixo acoplamento, alta coesão, e fabricação de informação.

### Concorrência vs. Paralelismo
- **Concorrência**: Capacidade de um sistema gerenciar múltiplas operações ao mesmo tempo. Não necessariamente executa tarefas ao mesmo tempo, mas pode alternar entre tarefas.
- **Paralelismo**: Execução simultânea de múltiplas operações. Requer hardware com múltiplos núcleos de processamento.

### Multithreading e Programação Assíncrona
- **Multithreading**: Técnica para dividir uma tarefa em múltiplos threads que podem ser executados em paralelo, melhorando a performance do programa.
- **Programação Assíncrona**: Permite que tarefas sejam executadas em "background", melhorando a responsividade do aplicativo sem bloquear o usuário ou a UI.

## 3. Implementação e Operação (O "Mão na Massa")

### Exemplo de Multithreading em Java
```java
public class MultithreadingDemo extends Thread {
    public void run() {
        try {
            // Código para executar em paralelo
            System.out.println("Thread " + Thread.currentThread().getId() + " is running");
        } catch (Exception e) {
            // Tratamento de exceção
            System.out.println("Exception is caught");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        int n = 8; // Número de threads
        for (int i = 0; i < n; i++) {
            MultithreadingDemo object = new MultithreadingDemo();
            object.start();
        }
    }
}
```

### Programação Assíncrona em JavaScript
```javascript
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();
```

## 4. Análise CEBRASPE (Foco em Pegadinhas e Nuances)

A CEBRASPE costuma cobrar a compreensão dos conceitos de design e programação, especialmente a capacidade de identificar corretamente a aplicação dos padrões de design e as diferenças entre concorrência, paralelismo, e multithreading. Uma pegadinha comum é confundir concorrência com paralelismo, ou não entender a aplicabilidade dos padrões de design em cenários específicos.

## 5. Tabela de Referência Técnica (Quick Lookup)

| Comandos/Regras                   | O que faz/O que valida               | Observação Técnica importante para a prova         |
|-----------------------------------|--------------------------------------|----------------------------------------------------|
| Singleton (GoF)                   | Garante uma única instância          | Útil para conexões de banco de dados               |
| Observer (GoF)                    | Define uma dependência 1:N           | Importante para eventos e notificações             |
| Baixo Acoplamento (GRASP)         | Reduz dependências entre classes     | Facilita manutenção e testabilidade                |
| Multithreading                    | Executa múltiplas threads em paralelo| Melhora a performance em sistemas multicore        |
| Programação Assíncrona            | Executa operações em background      | Melhora a responsividade sem bloquear a UI         |

## 6. Simulado Técnico (Estilo CEBRASPE – Certo ou Errado)

1. **(C)** A programação assíncrona em JavaScript pode ser realizada utilizando as palavras-chave `async` e `await` para operações que retornam uma Promise.
2. **(E)** Em Java, o uso de multithreading não é possível em sistemas operacionais que não suportam paralelismo.
3. **(C)** O padrão Singleton do GoF é utilizado para garantir que uma classe tenha apenas uma instância e forneça um ponto de acesso global a ela.
4. **(E)** O padrão Observer é utilizado para garantir que um objeto permaneça em seu estado original, evitando alterações por outros objetos.
5. **(C)** Concorrência e paralelismo são conceitos que, embora relacionados, referem-se a diferentes estratégias para executar múltiplas tarefas ou processos.

## 7. Bibliografia e Documentação Oficial

- Gamma, E., Helm, R., Johnson, R., & Vlissides, J. (1995). Design Patterns: Elements of Reusable Object-Oriented Software. Addison-Wesley.
- Bloch, J. (2008). Effective Java (2nd ed.). Addison-Wesley.
- [MDN Web Docs - async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Oracle Java Documentation - Concurrency](https://docs.oracle.com/javase/tutorial/essential/concurrency/)
