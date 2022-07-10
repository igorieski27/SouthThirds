(function () {
    console.log("Extensão carregada! Buscando informações da div...");
    // pegando o player do yt (pela classe da div)
	var box = document.getElementsByClassName("video-stream")[0];
    // criando um canvas sobre o player
    var canvas = document.createElement("canvas");
    // pegando altura e largura do canvas
	canvas.width = box.videoWidth;
	canvas.height = box.videoHeight;
    // calculando a posição das duas linhas verticais
    var lv1 = canvas.width / 3;
    var lv2 = lv1*2;
    console.log("Posição da primeira linha vertical: "+lv1);
    console.log("Posição da segunda linha vertical: "+lv2)
    var tag_id = document.getElementsByClassName('html5-video-container')[0];
    //isnerindo uma tag de style pra poder modificar os atributos dos elementos q to inserindo ali embaixo
    tag_id.insertAdjacentHTML('afterbegin','<style> #canva {   z-index: -1; position:relative; } .overlayteste{ z-index: -1; position:relative; }</style>');
    // aqui eu inseri 2 elementos, o canva é pra sr um canvas pra testar o método draw (nao funciona)
    tag_id.insertAdjacentHTML('afterbegin', '<canvas id="canva" height="1280" width="720"></canvas>');
    // aqui é só um H1 com um texto escrito no player, esse aqui funciona, porém ao dar play no video ele some
    tag_id.insertAdjacentHTML('afterbegin', '<h1 class="overlayteste"> TESTE DE SOBREPOSIÇAO </h1>')
    draw(lv1,lv2);
})();

// função de teste  q peguei na net pra desenhar a linha (não ta funcionando kkkkk)
function draw(lv1, lv2) {
    const canvas = document.querySelector('#canva');

    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');

    // set line stroke and line width
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;

    // draw a red line
    ctx.beginPath();
    ctx.moveTo(0, lv1);
    ctx.lineTo(0, lv1);
    ctx.stroke();

}


