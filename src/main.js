// import { AlertError } from "./alert-error.js";

// document.addEventListener("DOMContentLoaded", function() {
//   const inputUser = document.getElementById("user");
//   const inputPassword = document.getElementById("password");

//   inputUser.addEventListener("input", () => AlertError.close());
//   inputPassword.addEventListener("input", () => AlertError.close());

//   const myForm = document.getElementById("myForm");

//   myForm.addEventListener("submit", (event) => {
//     event.preventDefault(); // Impede o envio do formulário

//     const inputUserValue = inputUser.value.trim();
//     const inputPasswordValue = inputPassword.value.trim();

//     if (inputUserValue === "" || inputPasswordValue === "") {
//       // Verifica se os campos de entrada estão vazios
//       AlertError.open("Por favor, preencha todos os campos.");
//     } else {
//       // Simula verificação das credenciais
//       if (inputUserValue === "usuario" && inputPasswordValue === "senha") {
//         // Credenciais corretas
//         console.log("Login bem-sucedido!"); // Apenas para depuração
//         window.location.href = "pagina-interna.html"; // Redireciona para a página interna
//       } else {
//         // Credenciais incorretas
//         AlertError.open("Usuário ou senha incorretos.");
//       }
//     }
//   });
// });
