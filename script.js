//Validação visual do formulário. Irá apresentar uma mensagem de envio de sucesso ou erro//

document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault(); //impede o envio real do formulário//


const name = document.getElementById("name").value.trim(); // serve para remover os espaços em 
// branco do início e do final//
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();

if(name && email && message){
    alert("Mensagem enviada com sucesso! Muito obrigado pelo contato.");
    this.reset(); // limpa os campos do formulário e reseta para o estado inicial//
}
else{
    alert("Por favor, preencha todos os campos do formulário!")
}
});