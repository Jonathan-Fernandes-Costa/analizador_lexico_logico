// eslint-disable-next-line no-undef
const TOKENS = [
  { token: 'PARENTESE_ABRE', pattern: /\(/ },
  { token: 'PARENTESE_FECHA', pattern: /\)/ },
  { token: 'OU', pattern: /\+/ },
  { token: 'E', pattern: /\*/ },
  { token: 'IMPLICA', pattern: /->/ },
  { token: 'SE_E_SO_SE', pattern: /<->/ },
  { token: 'NAO', pattern: /¬/ },
  { token: 'TRUE', pattern: /True/ },
  { token: 'FALSE', pattern: /False/ },
  { token: 'COMENTARIO', pattern: /\/\/[^\n]*/ },
  { token: 'ESPACO', pattern: /\s+/ },
  { token: 'IDENTIFICADOR', pattern: /[a-zA-Z0-9]{1,100}/ }
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
      return (`Caractere inválido na posição ${index}: ${inputString[index]}`);
    }
  }

  return tokensIdentificados;
}
