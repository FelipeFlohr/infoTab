/**
 * Com o TypeScript é possível utilizar o sistema
 * de importações de módulos. Para exportar um código
 * utiliza-se a palavra-chave "export", e para impor-
 * tar utiliza-se "import". O TypeScript também oferece
 * IntelliSense nas importações.
 */
import "./styles/index.css";
import * as bootstrap from "bootstrap";

bootstrap;

console.log("Olá, mundo!");

/**
 * Para o arquivo ser referenciado no final da compilação,
 * é necessário estar exportando ao menos um código. Como o
 * nosso arquivo de entrada não está exportando nada, apenas
 * usamos o "export {}" vazio.
 */
export {}