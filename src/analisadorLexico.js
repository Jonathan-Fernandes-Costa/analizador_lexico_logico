const TOKENS = [
    { token: 'ATRIBUICAO', pattern: /=/ },
    { token: 'AND', pattern: /\^/ },
    { token: 'OR', pattern: /v/ },
    { token: 'NOT', pattern: /!/ },
    { token: 'TRUE', pattern: /True/ },
    { token: 'FALSE', pattern: /False/ },
    { token: 'COMENTARIO', pattern: /\/\/.*/ },
    { token: 'ESPACO', pattern: /\s+/ },
    { token: 'IDENTIFICADOR', pattern: /[a-zA-Z][a-zA-Z0-9]*/ },
  ];
  
  export function analisadorLexico(inputString) {
    let tokensIdentificados = [];
    let index = 0;
  
    while (index < inputString.length) {
      let matched = false;
  
      for (let { token, pattern } of TOKENS) {
        let regex = new RegExp('^' + pattern.source);
        let match = inputString.slice(index).match(regex);
  
        if (match) {
          matched = true;
  
          if (token !== 'ESPACO' && token !== 'COMENTARIO') {
            tokensIdentificados.push({ token, value: match[0] });
          }
  
          index += match[0].length;
          break;
        }
      }
  
      if (!matched) {
        throw new Error(`Caractere inválido na posição ${index}: ${inputString[index]}`);
      }
    }
  
    return tokensIdentificados;
  }
