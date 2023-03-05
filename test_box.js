//Variaveis das açoes

    var voar;
    var fumar;
    var beber;
    var transar;
    var drogas;



/*Variaveis das amizades 1*/


var pombinha;
var cachorro;
var urso;
var jegue;
var gato;



/* Variaveis das amizades 2*/

var aguia;
var lobo;
var bufalo;
var cavalo;
var leao;

/* Variveis das respostas*/

var voar_message;
var fumar_message;
var beber_message;
var transar_message;
var drogras_message;

//Funçoes das açoes....

//voar Sim
function gravarResposta1_S() {
    voar = 'Sim';
    document.getElementById('pergunta1').style.display = 'none';
    document.getElementById('pergunta2').style.display = 'block';
    document.querySelector('input[name="resposta1"]:checked').checked = false;
}
// voar não
function gravarResposta1_N() {
    voar = 'Não';
    document.getElementById('pergunta1').style.display = 'none';
    document.getElementById('pergunta2').style.display = 'block';
    document.querySelector('input[name="resposta1"]:checked').checked = false;

}
//Fumar sim
function gravarResposta2_S() {
    fumar = 'Sim';
    document.getElementById('pergunta2').style.display = 'none';
    document.getElementById('pergunta3').style.display = 'block';
    document.querySelector('input[name="resposta2"]:checked').checked = false;
}
//fumar não
function gravarResposta2_N() {
    fumar = 'Não';
    document.getElementById('pergunta2').style.display = 'none';
    document.getElementById('pergunta3').style.display = 'block';
    document.querySelector('input[name="resposta2"]:checked').checked = false;
}
// beber sim
function gravarResposta3_S() {
    beber = 'Sim';
    document.getElementById('pergunta3').style.display = 'none';
    document.getElementById('pergunta4').style.display = 'block';
    document.querySelector('input[name="resposta3"]:checked').checked = false;
}
// beber não
function gravarResposta3_N() {
    beber = 'Não';
    document.getElementById('pergunta3').style.display = 'none';
    document.getElementById('pergunta4').style.display = 'block';
    document.querySelector('input[name="resposta3"]:checked').checked = false;
}
//transar sim
function gravarResposta4_S() {
    transar = 'Sim';
    document.getElementById('pergunta4').style.display = 'none';
    document.getElementById('pergunta5').style.display = 'block';
    document.querySelector('input[name="resposta4"]:checked').checked = false;
}
//transar não
function gravarResposta4_N() {
    transar = 'Não';
    document.getElementById('pergunta4').style.display = 'none';
    document.getElementById('pergunta5').style.display = 'block';
    document.querySelector('input[name="resposta4"]:checked').checked = false;
}
// drogras sim
function gravarResposta5_S() {
    drogas = 'Sim';
    document.getElementById('pergunta5').style.display = 'none';
    document.getElementById('pergunta6').style.display = 'block';
    document.querySelector('input[name="resposta5"]:checked').checked = false;
}
// Drogras não
function gravarResposta5_N() {
    drogas = 'Não';
    document.getElementById('pergunta5').style.display = 'none';
    document.getElementById('pergunta6').style.display = 'block';
    document.querySelector('input[name="resposta5"]:checked').checked = false;
}


// Funçoes das amizades 1

//pombinha Sim
function gravarResposta6_S() {
    pombinha = 'Sim';
    document.getElementById('pergunta6').style.display = 'none';
    document.getElementById('pergunta7').style.display = 'block';
    document.querySelector('input[name="resposta6"]:checked').checked = false;
}
//pombinha Não
function gravarResposta6_N() {
    pombinha = 'Não';
    document.getElementById('pergunta6').style.display = 'none';

    // Oculta todas as outras perguntas que podem estar na tela
    document.getElementById('pergunta7').style.display = 'none';
    document.getElementById('pergunta8').style.display = 'none';
    document.getElementById('pergunta9').style.display = 'none';
    document.getElementById('pergunta10').style.display = 'none';

    // Mostra a pergunta 
    document.getElementById('pergunta11').style.display = 'block';
    document.querySelector('input[name="resposta11"]:checked').checked = false;
}
//Cachorro Sim
function gravarResposta7_S() {
    cachorro = 'Sim';
    document.getElementById('pergunta7').style.display = 'none';
    document.getElementById('pergunta8').style.display = 'block';
    document.querySelector('input[name="resposta7"]:checked').checked = false;
}
//Cachorro Não
function gravarResposta7_N() {
    cachorro = 'Não';
    document.getElementById('pergunta6').style.display = 'none';

    // Oculta todas as outras perguntas que podem estar na tela
    document.getElementById('pergunta7').style.display = 'none';
    document.getElementById('pergunta8').style.display = 'none';
    document.getElementById('pergunta9').style.display = 'none';
    document.getElementById('pergunta10').style.display = 'none';

    // Mostra a pergunta 
    document.getElementById('pergunta12').style.display = 'block';
    document.querySelector('input[name="resposta12"]:checked').checked = false;
}

//urso Sim
function gravarResposta8_S() {
    urso = 'Sim';
    document.getElementById('pergunta8').style.display = 'none';
    document.getElementById('pergunta9').style.display = 'block';
    document.querySelector('input[name="resposta8"]:checked').checked = false;
}
//Urso Não
function gravarResposta8_N() {
    urso = 'Não';
    document.getElementById('pergunta6').style.display = 'none';

    // Oculta todas as outras perguntas que podem estar na tela
    document.getElementById('pergunta7').style.display = 'none';
    document.getElementById('pergunta8').style.display = 'none';
    document.getElementById('pergunta9').style.display = 'none';
    document.getElementById('pergunta10').style.display = 'none';

    // Mostra a pergunta 11
    document.getElementById('pergunta13').style.display = 'block';
    document.querySelector('input[name="resposta6"]:checked').checked = false;
}

//jegue SIm 

function gravarResposta9_S() {
    jegue = 'Sim';
    document.getElementById('pergunta9').style.display = 'none';
    document.getElementById('pergunta10').style.display = 'block';
    document.querySelector('input[name="resposta9"]:checked').checked = false;
}

//jegue não

function gravarResposta9_N() {
    jegue = 'Não';
    document.getElementById('pergunta6').style.display = 'none';

    // Oculta todas as outras perguntas que podem estar na tela
    document.getElementById('pergunta7').style.display = 'none';
    document.getElementById('pergunta8').style.display = 'none';
    document.getElementById('pergunta9').style.display = 'none';
    document.getElementById('pergunta10').style.display = 'none';

    // Mostra a pergunta 
    document.getElementById('pergunta14').style.display = 'block';
    document.querySelector('input[name="resposta6"]:checked').checked = false;
}

//gato sim

function gravarResposta10_S() {
    gato = 'Sim';
    document.getElementById('pergunta10').style.display = 'none';
    document.getElementById('pergunta11').style.display = 'none';
    document.querySelector('input[name="resposta10"]:checked').checked = false;
}

//gato não

function gravarResposta10_N() {
    gato = 'Não';
    document.getElementById('pergunta6').style.display = 'none';

    // Oculta todas as outras perguntas que podem estar na tela
    document.getElementById('pergunta7').style.display = 'none';
    document.getElementById('pergunta8').style.display = 'none';
    document.getElementById('pergunta9').style.display = 'none';
    document.getElementById('pergunta10').style.display = 'none';

    // Mostra a pergunta 11
    document.getElementById('pergunta15').style.display = 'block';
    document.querySelector('input[name="resposta6"]:checked').checked = false;
}


// Animais 2
//Aguia Sim
function gravarResposta11_S(){
    aguia = 'Sim';
    document.getElementById('pergunta11').style.display = 'none';
    document.getElementById('pergunta7').style.display = 'block';
    document.querySelector('input[name="resposta11"]:checked').checked = false;
}
//Aguia Não
function gravarResposta11_N(){
    aguia = 'Não';
    document.getElementById('pergunta11').style.display = 'none';
    document.getElementById('pergunta7').style.display = 'block';
    document.querySelector('input[name="resposta11"]:checked').checked = false;
}
//lobo sim
function gravarResposta12_S(){
    lobo = 'Sim';
    document.getElementById('pergunta12').style.display = 'none';
    document.getElementById('pergunta8').style.display = 'block';
    document.querySelector('input[name="resposta12"]:checked').checked = false;
}
//lobo não
function gravarResposta12_N(){
    lobo = 'Não';
    document.getElementById('pergunta12').style.display = 'none';
    document.getElementById('pergunta8').style.display = 'block';
    document.querySelector('input[name="resposta12"]:checked').checked = false;
}
//buffalo sim
function gravarResposta13_S(){
    bufalo = 'Sim';
    document.getElementById('pergunta13').style.display = 'none';
    document.getElementById('pergunta9').style.display = 'block';
    document.querySelector('input[name="resposta13"]:checked').checked = false;
}
//bufalo nao
function gravarResposta13_N(){
    bufalo = 'Não';
    document.getElementById('pergunta13').style.display = 'none';
    document.getElementById('pergunta9').style.display = 'block';
    document.querySelector('input[name="resposta13"]:checked').checked = false;
}
//cavalo sim
function gravarResposta14_S(){
    cavalo = 'Sim';
    document.getElementById('pergunta14').style.display = 'none';
    document.getElementById('pergunta10').style.display = 'block';
    document.querySelector('input[name="resposta14"]:checked').checked = false;
}
//cavalo nao
function gravarResposta14_N(){
    cavalo = 'Não';
    document.getElementById('pergunta14').style.display = 'none';
    document.getElementById('pergunta10').style.display = 'block';
    document.querySelector('input[name="resposta14"]:checked').checked = false;
}
// leao sim
function gravarResposta15_S(){
    leao = 'Sim';
    document.getElementById('pergunta15').style.display = 'none';
    document.getElementById('pergunta11').style.display = 'none';
    document.querySelector('input[name="resposta15"]:checked').checked = false;
}
// leao nao
function gravarResposta15_N(){
    leao = 'Não';
    document.getElementById('pergunta15').style.display = 'none';
    document.getElementById('pergunta11').style.display = 'none';
    document.querySelector('input[name="resposta15"]:checked').checked = false;
}


/* Saida de dados*/

/* Voar*/ switch (true) {
    case (voar === 'Sim' && pombinha === 'Sim'):
        voar_message = 'Era uma vez um mamute chamado Max que sonhava em voar. Ele passava horas olhando para os pássaros no céu, desejando poder se juntar a eles nas alturas. Um dia, enquanto Max observava os pássaros, uma pombinha pousou em sua tromba. Max ficou surpreso, mas curioso, e começou a conversar com a pombinha. Com o tempo, Max e a pombinha se tornaram amigos inseparáveis. Max contava a ela seus sonhos de voar, enquanto a pombinha lhe ensinava sobre os ventos e as correntes de ar. Max ficava cada vez mais determinado em alcançar seu sonho de voar, e a pombinha o incentivava Um dia, Max decidiu que era hora de tentar voar. Ele se preparou da melhor maneira que pôde, com asas improvisadas de galhos e folhas amarrados às suas costas. A pombinha voou ao seu lado, encorajando-o a tentar. Max correu em direção a um penhasco e saltou, com as asas batendo desesperadamente. Infelizmente, ele não conseguiu decolar e caiu de volta para a terra. O impacto foi tão forte que ficou lesado. <br> ';
        break;
    case (voar === 'Sim' && aguia === 'Sim'):
        voar_message = 'Era uma vez um mamute chamado Max que sonhava em voar. Ele passava horas olhando para o céu, imaginando como seria sentir o vento em suas costas enquanto voava pelas nuvens. Um dia, enquanto caminhava pelo campo, Max viu uma águia pousada em uma árvore próxima. Max se aproximou devagar, com medo de assustar a águia, mas ela não parecia se importar com sua presença. Com o tempo, Max e a águia se tornaram amigos, com Max contando a ela sobre seu sonho de voar e a águia explicando como voava. A águia era uma grande amiga, sempre encorajando Max a continuar perseguindo seu sonho. Um dia, Max decidiu que era hora de tentar voar. Ele construiu asas improvisadas com galhos e folhas, enquanto a águia assistia, pronta para ajudá-lo se necessário. Max se preparou, correu em direção a um penhasco e saltou. As asas de Max bateram furiosamente e ele sentiu o vento em seu rosto. Ele estava voando! A águia voou ao seu lado, guiando-o pelo céu enquanto Max sentia uma alegria indescritível. Eles voaram juntos por horas, Max finalmente realizando seu sonho de voar. Quando finalmente aterrissaram, Max agradeceu a águia e percebeu que, mesmo que nunca pudesse voar sozinho como ela, ele era grato por ter um amigo tão maravilhoso como a águia. <br> ';
        break;
    case (voar === 'Sim'):
        voar_message = 'Há muito tempo, em uma terra distante, havia um mamute solitário chamado Max. Ele passava horas olhando para o céu, sonhando em voar e imaginando como seria sentir o vento em suas costas enquanto flutuava pelas nuvens. Infelizmente, Max não tinha amigos ou companheiros que pudessem ajudá-lo a realizar seu sonho. Ele tentou construir asas improvisadas com galhos e folhas, mas todas as vezes que tentou voar, acabava caindo dolorosamente no chão. Sem ajuda, Max nunca conseguiu realizar o seu sonho de voar e continuou a viver sua vida solitária, desejando poder alcançar as alturas. <br>';
        break;
    case (pombinha === 'Sim'):
        voar_message = 'Em uma floresta distante, havia um mamute chamado Max e sua amiga pombinha. A pombinha ficava perturbando Max, por ele não querer voar, com isso estava sempre fazendo bullying com ele. Max se sentia constantemente diminuído e humilhado pela pombinha, que não percebia o quão doloroso era para ele ser ridicularizado por algo que não tinha interesse. Por mais que Max gostasse da pombinha, ele não conseguia mais suportar o bullying constante que estava sofrendo. Um dia, Max não aguentou mais e decidiu que era hora de encarar seus medos. Ele subiu em uma árvore alta e saltou, com a intenção de voar. Mas como era de se esperar, ele caiu no chão, ficando ferido. <br>';
        break;
    case (aguia === 'Sim'):
        voar_message = 'Era uma vez, em uma floresta mágica, um mamute chamado Max que não tinha interesse em voar e preferia ficar com seus pés firmes no chão. Ele tinha uma amiga , que sempre o incentivava a tentar voar, mesmo sabendo que ele não tinha interesse nisso. A águia acreditava que voar era uma das melhores coisas do mundo e queria compartilhar essa experiência com seu amigo Max. Ela sabia que ele tinha medo de altura, mas também sabia que ele era forte e corajoso o suficiente para superar esse medo. Com o tempo, a águia percebeu que estava sendo insistente demais e respeitou a decisão de Max em não querer voar. Ela continuou sendo uma amiga leal e os dois passaram a aproveitar outros momentos juntos, como caminhar pela floresta e admirar a paisagem. <br>';
        break;
    default:
        voar_message = 'Era uma vez um mamute chamado Max, que nunca havia se interessado em voar. Ele passava seus dias caminhando pela floresta em busca de comida e água para sobreviver. Max era muito solitário e não tinha amigos para conversar ou passar o tempo. Dia após dia, Max seguia a mesma rotina monótona e sem graça. Ele não tinha nada que a animasse e sua vida parecia sem sentido. Ele não sabia o que fazer para mudar sua situação, mas também não tinha a energia ou motivação para tentar algo novo. <br>';
        break;
}
document.getElementById("voarMessage").innerHTML = voar_message;

/*fumar*/  switch (true) {
            case (fumar === 'Sim' && cachorro === 'Sim'):
                fumar_message = 'Ele passou então a morar em uma caverna e era assombrado por um desejo estranho: fumar um cigarro. Certo dia, ele encontrou um cachorro perdido em sua caverna e os dois se tornaram amigos rapidamente. O cachorro, sendo um bicho malandro e conhecedor das vielas da cidade, conseguiu juntar uma pilha de bitucas de cigarro para Max. Com uma fita, ele fixou as bitucas na ponta da tromba do mamute e disse: "Agora é só chegar perto da fogueira e puxar com força". Max seguiu o conselho do cachorro e deu uma tragada, sentindo um breve êxtase que foi seguido de tosse e engasgo. O cachorro, parecendo mais uma hiena naquele momento, gargalhou da desgraça do amigo mamute. Desde então, Max foi apelidado de Max cinzeiro. Há boatos que ele teve cancer depois daquele dia.  ';
                break;

            case (fumar === 'Sim' && lobo === 'Sim'):
                fumar_message = 'Então passou a andar frequentemente com seu amigo lobo, que se achava o mais inteligente dos animais, sempre exibindo seus pelos bem escovados e uma postura pomposa. Admirando essa pose intelectual do lobo, Max começou a considerar a ideia de fumar cigarros para se assemelhar ao amigo. No entanto, preocupado com a saúde do mamute, o lobo decidiu intervir. Ele levou Max para sua toca na encosta da montanha e, ao invés de oferecer um cigarro, ensinou a ele como degustar um charuto cubano. A partir desse dia, o mamute passou a ser considerado o mais intelectual dos animais, saboreando seu charuto enquanto andava pelos campos.  ';
                break;

            case (fumar === 'Sim'):
                fumar_message = '<br> Ele estava se sentindo solitário e frustrado, e acabou se entregando ao vício do tabagismo. Infelizmente, a vida pode ser difícil até mesmo para uma criatura gigante e forte como ele. Com o passar do tempo, o hábito de fumar tornou-se uma parte importante da rotina do mamute. Ele acendia um cigarro logo pela manhã e fumava vários outros ao longo do dia. Seus pulmões começaram a sofrer as consequências do vício, e sua saúde começou a piorar. Ele tossia com frequência e tinha dificuldades para respirar. Mas mesmo com esses problemas de saúde, o mamute não conseguia largar o cigarro. Ele se sentia preso ao vício e acreditava que o tabaco era a única coisa que o mantinha em pé.  ';
                break;

            case (cachorro === 'Sim'):
                fumar_message = 'Ele então decidiu viver uma vida mais sossegada, desfrutando das noites de sexta-feira na clareira perto da fogueira com outros animais. O cachorro, um velho conhecido, sempre estava lá, cercado de cadelas e bebidas, e provocava o mamute, dizendo que ele era careta por não agir como ele, e sempre insistia para que o mamute fumasse pelo menos um cigarro. O mamute negava veementemente, dizendo que sua tromba era sensível demais. No entanto, a insistência do cachorro era grande e, eventualmente, o mamute cedeu, pensando consigo mesmo: "Vou fumar só um pouquinho, não vai fazer mal". <br> Roney, o gambá contrabandista de cigarros, conseguiu comprar um pé de jambo, usando todo o dinheiro que o mamute gastava com ele.  ';
                break;

            case (lobo === 'Sim'):
                fumar_message = 'Levando a sua vida, o mamute passou a cultivar uma amizade profunda com o lobo, que parecia ser bastante intelectual e amante da leitura. Sempre que se encontravam, o lobo trazia consigo um cachimbo com fumo importado e, nos sábados, optava por ficar mais recluso na penumbra da fogueira apreciando o seu charuto cubano. Max gostava desses momentos, pois ali os dois amigos tinham devaneios e conversavam sobre a vida e seus rumos. A única coisa que incomodava Max era o cheiro forte do charuto. O lobo, percebendo a situação, decidiu que não iria mais fumar na presença do mamute, pois valorizava a amizade dos dois acima de tudo.  ';
                break;

            default:
                fumar_message = 'Passou então a levar uma vida solitária, sem cultivar amizades, e seguia seu caminho com passos pesados, deixando uma marca profunda em cada lugar por onde passava. Apesar de nunca ter sido atraído pelo vício do tabaco, preferindo manter seus pulmões livres daquela fumaça tóxica, ele ocasionalmente sentia-se incomodado com a solidão. À noite, quando as estrelas brilhavam no céu e a lua iluminava a escuridão, ouvia os risos e conversas dos outros animais que se reuniam em torno da fogueira e se perguntava se não deveria se juntar a eles. Mas  ele nem mesmo fumava, será que valeria a pena começar a fumar para se aproximar das pessoas. ” Besteiro ! Isso seria tolice, melhor deixar como está” pensou ele, fechando os olhos e adormecendo. ';
                break;
        }
        document.getElementById("fumarMessage").innerHTML = fumar_message;    
        
        

/*beber*/ switch (true) {

            case (beber === 'Sim' && urso === 'Sim'):
                beber_message = 'O tempo estava passando e já estava no inverno. Um dia, Max decidiu que queria experimentar o sabor do rum. Ele não sabia onde encontrar whisky, mas seu amigo Urso sabia onde havia uma destilaria abandonada que costumava produzir a bebida. Juntos, foram até a destilaria e encontraram algumas garrafas de whisky esquecidas. Eles beberam juntos, rindo e se divertindo. Max adorou o sabor do whisky e bebeu demais, ficando embriagado. Urso tentou ajudá-lo a voltar para casa, mas Max estava muito bêbado para andar corretamente e acabou caindo em um lago gelado. ';
                break;

            case (beber === 'Sim' && bufalo === 'Sim'):
                beber_message = 'O inverno estava especialmente rigoroso na floresta e Max, o mamute, estava passando muito frio, mesmo com seus grossos pelos. Ele decidiu que precisava beber algo para aquecer e pensou em ir até o velho alambique do Bob, o castor, para pegar um pouco de uísque. No entanto, Mark, seu amigo búfalo, interveio e disse que não seria uma boa ideia arriscar-se na neve pesada por algo tão perigoso. Em vez disso, eles decidiram falar com um velho contato de Mark, o Coiote, que costumava importar bebidas de fora. Mark encomendou algumas bebidas e eles esperaram pacientemente em sua caverna, aquecidos pela fogueira e pelas bebidas alcoólicas. A noite foi quente e agradável, e Max ficou feliz por ter tido uma boa opção para aquecer-se, sem precisar arriscar sua segurança na neve pesada. A amizade entre Max e Mark se fortaleceu ainda mais com essa aventura e eles continuaram a se divertir juntos, sempre com responsabilidade';
                break;

            case (beber === 'Sim'):
                beber_message = 'A Nebraska havia chegado mais cedo naquele ano. Mal se podia ver fora da caverna e, volta e meia, um brilho alaranjado de alguma fogueira era ofuscado pelo branco da neve. A mamute, em sua solidão de sempre, passou a observar o lado de fora da caverna e sentiu vontade de tomar alguma bebida alcoólica para se aquecer do frio e divagar em sua solidão. Lembrou do velho alambique do castor e decidiu ir até lá sozinho, mesmo sabendo que o lugar estava abandonado desde a batida policial do chefe de polícia Pompom Bufão. No entanto, decidiu arriscar mesmo assim. Mas não sabia que a forte tempestade de neve havia terminado de destruir o local. Chegando lá, ele testemunhou a força de uma tempestade e, vendo apenas madeiras e vidros quebrados cobertos pela neve, começou a revirar o local com a tromba em busca de algo aproveitável. Encontrou um pote com um líquido escuro e pegajoso. Sem muito se importar, enfiou a tromba ali e sugou todo o líquido. Mal sabia ele que aquilo era uísque paraguaio misturado com veneno para morcego. Tudo que se sabe é que o mamute foi visto pela redondeza vomitando e alucinando. ';
                break;

            case (urso === 'Sim'):
                beber_message = 'Ele nunca havia bebido bebidas alcoólicas em toda a sua vida e era conhecido por ser um mamute forte. Seu amigo de longa data, o urso chamado Baloo, era muito divertido e amigável. Baloo adorava festejar e beber muito e sempre tentava convencer Max a se juntar a ele nas suas bebedeiras. No começo, Max resistia às tentações de Baloo e insistia em ficar longe do álcool. No entanto, Baloo era uma má influência, sempre o pressionando para beber, prometendo que seria divertido e inofensivo. Certa noite, Baloo convenceu Max a ir a uma festa com ele. Max estava nervoso, mas acabou cedendo e aceitando beber um pouco de cerveja. Baloo, por outro lado, não se conteve e bebeu muito além de sua capacidade. A festa foi ficando cada vez mais animada, e Max acabou bebendo mais do que pretendia. Quando chegou a hora de ir para casa, ele se sentiu tonto e desorientado, mas confiante de que ainda conseguiria andar. No entanto, enquanto caminhava para casa, Max começou a sentir-se muito mal. Ele teve um ataque de diarreia e, para sua humilhação, acabou defecando em suas próprias pernas. Baloo ria descontroladamente e tirava fotos da cena constrangedora, enquanto Max tentava se recuperar do incidente embaraçoso.';
                break;

            case (bufalo === 'Sim'):
                beber_message = 'Ele estava forte e havia arrumado um emprego, e era conhecido por sua resistência em relação às bebidas alcoólicas. Max nunca havia bebido uma gota de álcool em toda a sua vida e não pretendia começar agora. Max tinha um amigo próximo, um búfalo chamado Bill. Bill era operário da mesma fábrica de tijolos em que Max trabalhava. Ao contrário de Max, Bill era um apreciador da bebida e dizia que o segredo do sucesso é ter o dia sim e o dia não. O time de hóquei dos esquilos, os Nuts on Ice, jogaria na região norte contra o time das marmotas, o Mountain Maulers. Eles iriam assistir ao jogo no bar do Alce, o Seu Valeriano. Bill estava se empolgando já que o time das marmotas estava levando uma surra e já estava começando a cambalear. Mas mesmo em seu estado ébrio, percebeu que Max estava ficando chateado com a situação. Em respeito ao amigo, encerrou a bebedeira. Max, com grande entusiasmo, fez questão de pedir ao Seu Valeriano uma bela porção de milho cozido para os dois.';
                break;

            default:
                beber_message: 'Não bebe e nao tem amigos ';
                break;
        }
        
        document.getElementById("beberMessage").innerHTML  = beber_message;

/*transar*/ switch (true) {

            case (transar === 'Sim' && jegue === 'Sim'):
                transar_message = 'Bebe e é amigo do jegue';
                break;

            case (transar === 'Sim' && cavalo === 'Sim'):
                transar_message = 'Bebe e é amigo do cavalo';
                break;

            case (transar === 'Sim'):
                transar_message = 'Bebe e não tem amigos';
                break;

            case (jegue === 'Sim'):
                transar_message = 'Não Bebe e é amigo do jegue';
                break;

            case (cavalo === 'Sim'):
                transar_message =  'Não Bebe e é amigo do cavalo';
                break;

            default:
                transar_message = 'não transa e não tem amigos';
                break;
        }
        document.getElementById("transarMessage").innerHTML  = transar_message;

/*Drograr*/ switch (true) {

            case (drogas === 'Sim' && gato === 'Sim'):
                drogras_message = 'Bebe e é amigo do gato';
                break;

            case (drogas === 'Sim' && leão === 'Sim'):
                drogras_message = 'Bebe e é amigo do leão';
                break;

            case (drogas === 'Sim'):
                drogras_message = 'Bebe e não tem amigos';
                break;

            case (gato === 'Sim'):
                drogras_message = 'Não Bebe e é amigo do jegue';
                break;

            case (leão === 'Sim'):
                drogras_message = 'Não Bebe e é amigo do leão';
                break;

            default:
                drogras_message = 'não transa e não tem amigos';
                break;
        }
        document.getElementById("drogasMessage").innerHTML  = drogras_message;
