var diaSemana = "Esta variavel mostra o dia da semana"

function semana(){
    diaSemana = new Date();
    diferenca = diaSemana.getTimezoneOffset();
    diferenca = diferenca * 60000
    UTC = Date.now()
    UTC = UTC - diferenca // GMT -3
    diaSemana = new Date(UTC);

    diaSemana = diaSemana.getUTCDay();
    if(diaSemana == 0){
        diaSemana = "DOMINGO"
    }else if(diaSemana == 1){
        diaSemana = "SEGUNDA"
    }else if(diaSemana == 2){
        diaSemana = "TERCA"
    }else if(diaSemana == 3){
        diaSemana = "QUARTA"
    }else if(diaSemana == 4){
        diaSemana = "QUINTA"
    }else if(diaSemana == 5){
        diaSemana = "SEXTA"
    }else if(diaSemana == 6){
        diaSemana = "SABADO"
    }
}

var diasMarcados = []

function pegaDias(){
    //Pegando Chacados
    var segunda = document.getElementById('segunda')
    if(segunda.checked == true && diasMarcados.indexOf(segunda.value) == -1){
        diasMarcados.push(segunda.value)
    }
    var terca   = document.getElementById('terca')
    if(terca.checked == true && diasMarcados.indexOf(terca.value)     == -1){
        diasMarcados.push(terca.value)
    }
    var quarta  = document.getElementById('quarta')
    if(quarta.checked == true && diasMarcados.indexOf(quarta.value)   == -1){
        diasMarcados.push(quarta.value)
    }
    var quinta  = document.getElementById('quinta')
    if(quinta.checked == true && diasMarcados.indexOf(quinta.value)   == -1){
        diasMarcados.push(quinta.value)
    }
    var sexta   = document.getElementById('sexta')
    if(sexta.checked == true && diasMarcados.indexOf(sexta.value)     == -1){
        diasMarcados.push(sexta.value)
    }
    var sabado  = document.getElementById('sabado')
    if(sabado.checked == true && diasMarcados.indexOf(sabado.value)   == -1){
        diasMarcados.push(sabado.value)
    }
    var domingo = document.getElementById('domingo')
    if(domingo.checked == true && diasMarcados.indexOf(domingo.value) == -1){
        diasMarcados.push(domingo.value)
    }


    //Desconsiderando desmarcados
    
    if(segunda.checked == false && diasMarcados.indexOf(segunda.value) != -1){
        var verificador = diasMarcados.indexOf(segunda.value)
        diasMarcados.splice(verificador, 1)
    }

    if(terca.checked == false && diasMarcados.indexOf(terca.value) !=     -1){
        var verificador = diasMarcados.indexOf(terca.value)
        diasMarcados.splice(verificador, 1)
    }

    if(quarta.checked == false && diasMarcados.indexOf(quarta.value) !=   -1){
        var verificador = diasMarcados.indexOf(quarta.value)
        diasMarcados.splice(verificador, 1)
    }

    if(quinta.checked == false && diasMarcados.indexOf(quinta.value) !=   -1){
        var verificador = diasMarcados.indexOf(quinta.value)
        diasMarcados.splice(verificador, 1)
    }

    if(sexta.checked == false && diasMarcados.indexOf(sexta.value) !=     -1){
        var verificador = diasMarcados.indexOf(sexta.value)
        diasMarcados.splice(verificador, 1)
    }

    if(sabado.checked == false && diasMarcados.indexOf(sabado.value) !=   -1){
        var verificador = diasMarcados.indexOf(sabado.value)
        diasMarcados.splice(verificador, 1)
    }

    if(domingo.checked == false && diasMarcados.indexOf(domingo.value) != -1){
        var verificador = diasMarcados.indexOf(domingo.value)
        diasMarcados.splice(verificador, 1)
    }


}




//Funcao pega horarios:
function pegahora(){
    iniciotr = document.getElementById('iniciotr').value;
    terminotr = document.getElementById('terminotr').value;
    }
    
    //Funcao do Relogio Display:
    var myVar = setInterval(myTimer ,1000);
    function myTimer() {
        var d = new Date(), displayDate;
       if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
          displayDate = d.toLocaleTimeString('pt-BR');
       } else {
          displayDate = d.toLocaleTimeString('pt-BR', {timeZone: 'America/Belem'});
       }
          document.getElementById("demo").innerHTML = `Horario de Brasilia: ${displayDate}`
    }




//AGENDAMENTO LOCAL
var horaAtual;
var transBox;

function tranmissaoin(){
   horaAtual = new Date();
   horaAtual = horaAtual.toLocaleTimeString();
   pegaDias();
      if(horaAtual == iniciotr && diasMarcados.indexOf(diaSemana) != -1){
         sound.play();
      }
}

//Funcao do audio:
var audio;
 function play(){
  sound.play();
}


//Escolhendo audio
function entraAudio(){
input.onchange = function(e){
var sound = document.getElementById('sound');

if(sound == '')
{
   alert('Nenhum arquivo de audio anexado.')
}else{

sound.src = URL.createObjectURL(this.files[0]);
      
      }
   }
}

//Funcao de termino da tranmissao:
function tranmissaoout(){
   if(horaAtual == terminotr){
      sound.pause();
   }
}

//Chamando a funcao de agendamento a cada 1 segundo:
var tmpinicio;
var tmpfim;
var aguardando = document.getElementById('aguardando');
var ageYes1 = 0; //Verifica se ja existe transmissão agendada.
var ageYes2 = 0; //Verifica se ja existe transmissão agendada.

function agendarLocal(){
pegahora();
setInterval(semana, 1000)
tmpinicio = setInterval(tranmissaoin, 1000)
tmpfim = setInterval(tranmissaoout, 1000)

}



//Selecionando opcaoes de reprodução.

function opcaoLocal(){

   var section = document.getElementById('displaySemantico');
   section.innerHTML=`            <section>

   <div>
       <center><h1 class="display-4">Agendamento local</h1></center>
   </div>
   <center><audio controls id="sound" ></audio></center>
   <input class="arquivo" type="file" id="input">
   
   <div id="relogioUser">
     <label>Inicio: </label><br><input type="time" name="hora" id="iniciotr" max="23:59:59" min="00:00:01" step="1"><br><br>
     <labeL>Termino:</label><br><input type="time" name="hora" id="terminotr" max="23:59:59" min="00:00:01" step="1"><br><br>
     </div>
   <div>

   <div class="custom-control custom-checkbox">
   <input type="checkbox" value="SEGUNDA" class="custom-control-input" id="segunda">
   <label class="custom-control-label" for="segunda">Segunda</label>
   </div>

   <div class="custom-control custom-checkbox">
   <input type="checkbox" value="TERCA" class="custom-control-input" id="terca">
   <label class="custom-control-label" for="terca">Terça</label>
   </div>

   <div class="custom-control custom-checkbox">
   <input type="checkbox" value="QUARTA" class="custom-control-input" id="quarta">
   <label class="custom-control-label" for="quarta">Quarta</label>
   </div>

   <div class="custom-control custom-checkbox">
   <input type="checkbox" value="QUINTA" class="custom-control-input" id="quinta">
   <label class="custom-control-label" for="quinta">Quinta</label>
   </div>

   <div class="custom-control custom-checkbox">
   <input type="checkbox" value="SEXTA" class="custom-control-input" id="sexta">
   <label class="custom-control-label" for="sexta">Sexta</label>
   </div>

   <div class="custom-control custom-checkbox">
   <input type="checkbox" value="SABADO" class="custom-control-input" id="sabado">
   <label class="custom-control-label" for="sabado">Sabado</label>
   </div>

   <div class="custom-control custom-checkbox">
   <input type="checkbox" value="DOMINGO" class="custom-control-input" id="domingo">
   <label class="custom-control-label" for="domingo">Domingo</label>
   </div>

   </div>
   <center><button type="button" onclick="agendarLocal();" class="btn btn-primary">Agendar</button></center>
</section>`
entraAudio();
      

}







//AGENDAMENTO POR LINK

function agendarLink(){
    sound1 = document.getElementById('audio');
    var link = document.getElementById('linkRadio').value
    if(link == ''){
       alert("O campo de link esta vazio!")
    }else{
 
    pegaDias();
    pegahora();
    setInterval(semana, 1000)
    tmpinicioLink = setInterval(linkAudio, 1000)
    tmpfimLink = setInterval(pausarLink, 1000)
    
    }
 }
 
 var audio = document.querySelector('audio')
 function linkAudio(){
    horaAtual = new Date();
    horaAtual = horaAtual.toLocaleTimeString();
    var link = document.getElementById('linkRadio').value
    pegaDias();
    
    if(horaAtual == iniciotr && diasMarcados.indexOf(diaSemana) != -1){
       sound1 = document.getElementById('audio');
       sound1.src = link;
       sound1.play();
       
    }  
 
 }
 
 function pausarLink(){
    pegahora();
    if(horaAtual == terminotr){
      sound1.pause();
    }
 }
 
 function radioSenado(){
    var senado = document.getElementById('senado')
    senado.play();
 }
 
 
 function testarLink(){
    sound1 = document.getElementById('audio');
    var link = document.getElementById('linkRadio').value
    if(link == ''){
       alert('O campo de link esta vazio!')
    }else{
    sound1.src = link;
    sound1.play();
    alert('Não somos responsaveis pela integridade dos links inseridos.')
    }
 }
 
 
 
 var verificaAcaoLink = 0;
 function opcaoLink(){
 
    var section = document.getElementById('displaySemantico');
    section.innerHTML=` 
    
    <section>
 
    <div>
        <center><h1 class="display-4">Agendamento com link</h1></center>
    </div>
    <div id="link">
    <div id="relogioUser">
    <center>
    <label>Inicio: </label><input type="time" name="hora" id="iniciotr" max="23:59:59" min="00:00:00" step="1">
    <labeL>Termino:</label><input type="time" name="hora" id="terminotr" max="23:59:59" min="00:00:00" step="1">
    </center>
    </div>
      <input type="link" class="form-control" placeholder="http://demonstracao.exemplo.br:8000/stream.mp3" id="linkRadio"><br><br> 
     <center><audio controls id="audio" type="application/x-mpegURL"></audio></center>
        </div>
 
 
         <div class="custom-control custom-checkbox">
         <input type="checkbox" value="SEGUNDA" class="custom-control-input" id="segunda">
         <label class="custom-control-label" for="segunda">Segunda</label>
         </div>
 
         <div class="custom-control custom-checkbox">
         <input type="checkbox" value="TERCA" class="custom-control-input" id="terca">
         <label class="custom-control-label" for="terca">Terça</label>
         </div>
 
         <div class="custom-control custom-checkbox">
         <input type="checkbox" value="QUARTA" class="custom-control-input" id="quarta">
         <label class="custom-control-label" for="quarta">Quarta</label>
         </div>
 
         <div class="custom-control custom-checkbox">
         <input type="checkbox" value="QUINTA" class="custom-control-input" id="quinta">
         <label class="custom-control-label" for="quinta">Quinta</label>
         </div>
 
         <div class="custom-control custom-checkbox">
         <input type="checkbox" value="SEXTA" class="custom-control-input" id="sexta">
         <label class="custom-control-label" for="sexta">Sexta</label>
         </div>
 
         <div class="custom-control custom-checkbox">
         <input type="checkbox" value="SABADO" class="custom-control-input" id="sabado">
         <label class="custom-control-label" for="sabado">Sabado</label>
         </div>
 
         <div class="custom-control custom-checkbox">
         <input type="checkbox" value="DOMINGO" class="custom-control-input" id="domingo">
         <label class="custom-control-label" for="domingo">Domingo</label>
         </div>
 
        <div>
        <br>
        <button type="button" class="btn btn-success" onclick="testarLink();">TESTAR LINK</button> <button type="button" onclick="agendarLink(), obterMarcados();" class="btn btn-primary">AGENDAR</button><br><br>
        
        
 </section>
 
 `
 
 
 
    }