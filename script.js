document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
   
    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;
    var endereco = document.getElementById('endereco').value;
    var biografia = document.getElementById('biografia').value;
    
    
    document.getElementById('nome-usuario').textContent = nome;
    document.getElementById('idade-usuario').textContent = idade;
    document.getElementById('endereco-usuario').textContent = endereco;
    document.getElementById('biografia-usuario').textContent = biografia;
    
    
    document.getElementById('form').reset();
});
