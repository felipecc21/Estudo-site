var operacao = prompt("Qual operação deseja realizar? ");
	var numero1 = prompt("Insira o primeiro número: ");
	var numero2 = prompt("Insira o segundo número: ");
	var resultadoOperacao = 0;

	//Variaveis para validar os operadores

	var operacoesValidasSoma = ["Soma", "Somar", "soma", "somar", "+"];
	var operacoesValidasSubtracao = ["subtrair", "subtração", "Subtrair", "Subtração", "-"];
	var operacoesValidasDivisao = ["Divisão", "Dividir", "divisão", "dividir", "divisao","/"]
	var operacoesValidasMultiplicacao = ["Multiplicação", "Multiplicar", "multiplicação", "multiplicar", "*"];


	// Verificando o operador

	if (operacoesValidasSoma.includes(operacao)) {
		resultadoOperacao = soma(numero1, numero2);
	}
	

	if (operacoesValidasSubtracao.includes(operacao)) {
		resultadoOperacao = subtracao(numero1, numero2);
	}

	if (operacoesValidasDivisao.includes(operacao)) {
		resultadoOperacao = divisao(numero1, numero2);
	}

	if (operacoesValidasMultiplicacao.includes(operacao)) {
		resultadoOperacao = multiplicacao(numero1, numero2);
	}




	alert("O resultado da operação é: " + resultadoOperacao);

	// Funçoes

	function soma(numero1, numero2) {
		return parseInt(numero1) + parseInt(numero2);
	}

	function subtracao(numero1, numero2) {
		return parseInt(numero1) - parseInt(numero2);
	}

	function divisao(numero1, numero2) {
		return parseInt(numero1) / parseInt(numero2);
	}

	function multiplicacao(numero1, numero2) {
		return parseInt(numero1) * parseInt(numero2);
	}