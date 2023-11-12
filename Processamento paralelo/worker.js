// worker.js
self.addEventListener('message', function(e) {
  // Recebe dados da página principal
  var data = e.data;

  // Realiza algum processamento pesado
  var result = processData(data);

  // Envia o resultado de volta para a página principal
  self.postMessage(result);
});

function processData(data) {
  // Simula algum processamento demorado
  var result = data.map(function(item) {
    return item * 2;
  });

  return result;
}
