
// function atencaoDeUmaAluna(frase,numeroDaAluna){
// 	// i = 0
// 	// frase = "Atenção aluna:"
// 	alert(frase+numeroDaAluna);
// 	// 0 Atenção aluna:
// }

// function chamarAtencaoDasAlunas(){
// 	for (var i = 0; i < 4; i++) {
// 		atencaoDeUmaAluna(i,"Atenção aluna:");
// 	}
// }

// chamarAtencaoDasAlunas();


var botaoMenuHamburguer = document.querySelector(".botao.menuHamburguer"); //(".botao.menuHamburguer") = parâmetro

function abrirMenu(){
	// declarar uma variável. pegar navegacaoPrimaria
	var menu = document.querySelector("#navegacaoPrimaria");

	//se estiver com o classname "menuHorizontal visivel", fechar o dropdown
	if(menu.className == "menuHorizontal visivel"){
		//Fechar o menuHorizontal

		//tornar a navegacaoPrimaria visível, adicionar a classe visivel
		menu.className = "menuHorizontal";
	}else{
		// tornar a navegacaoPrimaria Visivel, adicionar a classe visivel
		menu.className = "menuHorizontal visivel"
	}
}

botaoMenuHamburguer.onclick = abrirMenu;



///////////////////////////////////////////



//Minha 1a tentativa (errada):
//var botaoAmei = document.querySelector(".botao.amei");

//function ficarVermelho(){
//	var botao = document.querySelector(".botao.amei")

//	if(botao.className == "botaoAmei clicado"){
//		botao.className = "botaoAmei";
//	}

//	else{
//		botao.className = "botaoAmei"
//	}

//}

//botaoAmei.onclick = ficarVermelho;



//////////////////////////////////////////////////////////////////////



//Certo 1 (só pega o primeiro botao amei):
//var botaoAmei = document.querySelector(".botao.amei"); // .querySelector só consegue pegar UM elemento. Sempre um por vez. Se quiser pegar mais de um, colocar .querySelectorAll

//function ficarVermelho(){
//	botaoAmei.className = "botao amei clicado"
//}

//botaoAmei.onclick = ficarVermelho;



//////////////////////////////////////////////////////////////////////



//Certo 2 (pega todos os botoes amei):
//Array = coleção

//Botão amei
//Retorna um array de botao:
var botoesAmei = document.querySelectorAll(".botao.amei"); // .querySelector só consegue pegar UM elemento. Sempre um por vez. Se quiser pegar mais de um, colocar .querySelectorAll

function amar(){
	this.className = "botao amei clicado" //this representa o elemento que chamou a função amar, ou seja, representa o botoesAmei. Essa linha toda siginifca que o this vai mudar o nome da classe para "botao amei clicado"
}


//Nunca fazer dessa forma abaixo, é muiiiiiiito burro:
//botoesAmei[0].onclick = ficarVermelho;
//botoesAmei[1].onclick = ficarVermelho;
//botoesAmei[2].onclick = ficarVermelho;




//fazer assimmmmmm:
// o "i" aqui embaixo poderia ter qualquer outro nome mas, por padrão, todo mundo coloca "i" ("i" de index)
for (var i = 0; i < botoesAmei.length; i++) { //i++ = incremento = i+1 (eu até pdoeria escrever i = i+1)
	botoesAmei[i].onclick = amar;
}





//SLIDER
function criarUmBullet(numeroDoSlide){
	//Pegando o ul que vai inserir o li:
	var bulletUl = document.querySelector(".bullets ul");

	//Criando um novo li:
	var li = document.createElement("li");

	//Criando um button para inserir no li:
	var button = document.createElement("button");
	// Colocando uma classe no botão:
	button.className="bullet"; 

	//Parametro 1 = Nome da propriedade
	//Parametro 2 = Valor da propriedade
	button.setAttribute("data-slide",numeroDoSlide);


	//Inserindo o li no ul dos bullets
	li.appendChild(button); //appendChild = adicionar um filho ao pai (filho li ao pai bulletUl)
	bulletUl.appendChild(li); // inserindo o li (agora com um botão dentro dela) no ul dos bullets
}


function criarBulletsNoSlider(){
	//pegando todos os slides que estão dentro da #slider
	var slides = document.querySelectorAll("#slider .slide");
	var quantidadeSlides = slides.length; /* lenght = "comprimento" / ou seja: lenght = quantidade de classes "slide" */

	//Criar os bullets
	for (var i = 0; i < quantidadeSlides; i++) {  
		//Criar um bullet
		criarUmBullet(i);
	}
}


// Funções para os botoes
// Botao da seta esquerda
function voltarSlide(){

}
// Botao da seta direita
function avancarSlide(){
	//Qual slide que é o seguinte?
	var proximoSlideIndex = slideIndexAtivo + 1;
	var proximoSlideOrdem = proximoSlideIndex + 1;

	//Mostrar o slide
	var proximoSlide = document.querySelector("#slider .slide:nth-child("+proximoSlideOrdem+")");
	proximoSlide.classList.add("ativo");

	//Desaparecer com o slide que estava ativo
	var slideAtual = document.querySelector("#slider .slide.ativo")
	slideAtual

	//Atualizar o slideIndexAtivo
	slideIndexAtivo = proximoSlideIndex;

}



function irParaOSlideCorrespondente(){
	//Pegar o slide com a classe ativo
	var slideAtivo = document.querySelector(".slide.ativo");

	//Desaparecer o slide ativo:
	slideAtivo.classList.remove ("ativo");

	//Aparecer slide correspondente
	// Transformar o texto em numero
	var slideIndex = parseInt( this.getAttribute("data-slide") ); 
	var numeroSlide = slideIndex+1;

	var slideCorrespondente = document.querySelector("#slider .slideBox .slide:nth-child("+numeroSlide+")");
	slideCorrespondente.classList.add("ativo");
}




function adicionarOnClickNosBotoes(){
	//Adicionando nas setas
	var botaoVoltar = document.querySelector(".seta.esquerda");
	botaoVoltar.onclick = voltarSlide;
	
	var botaoAvancar = document.querySelector(".seta.direita");
	botaoAvancar.onclick = avancarSlide;


	//Adicionando nos bullets
	var bullets = document.querySelectorAll("#slider .bullet");

	for (var i = 0; i < bullets.length; i++) {
		bullets[i].onclick = irParaOSlideCorrespondente;
	}
}






function alternarSlidesAutomaticamente(){

}

// Se o slide existe
// Se o slider é igual a null, ele não existe
var slider = document.querySelector("#slider");
if(slider != null){

//Criar os bullets de acordo com a quantidade de slides
	criarBulletsNoSlider(); // () é tipo um comando que executa a ação criarBulletsNoSlider
	adicionarOnClickNosBotoes();
	alternarSlidesAutomaticamente();
}



//FORMULARIO DE CONTATO

var fonte = document.querySelector('[data-contador-fonte]');
var destino = document.querySelector('[data-contador-destino]');

fonte.addEventListener('keyup', function() {
  var digitado = fonte.value.length;
  var restante = 100 - digitado;
  destino.textContent = restante;
});

var formulario = document.querySelector('form');

formulario.addEventListener('submit', function(evento) {
  alert('Minha mensagem é: ' + fonte.value);
  evento.preventDefault();
});

//FIM FORMULARIO DE CONTATO









