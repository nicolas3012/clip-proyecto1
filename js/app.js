const array_of_guesses = [
  [
    "I am the beginning of the end, as well as the end of time and space. I am essential to creation and I surround every place. What am I?",
    "e",
    "You have seen and heard me many times.",
    "I am a letter."
  ],
  [
    "Nunca lo fui, pero siempre lo seré. Nadie me vio nunca, pero todos saben que existo. Le doy a la gente la motivación para mejorar cada día. ¿Qué soy yo?",
    "mañana",
    "Me renuevo constantemente.",
    "Para muchos vendran más, para otros pocos o ninguno."
  ],
  // [
  //   "Nunca fui, siempre seré, Nadie nunca me toco, ni nunca lo hará Y sin embargo, soy parte esencial para que todos puedan vivir y respirar.",
  //   "luna",
  //   "Aunque este muy lejos puedes verme.",
  //   "Tengo muchisimos años."
  // ],
  [
    "¿Qué viene una vez en un minuto, dos veces en un instante, pero nunca en mil años?",
    "t",
    "Tampoco viene en un año, mes o día.",
    "Soy una letra."
  ],
  [
    "¿Qué ha existido durante millones de años, pero nunca tiene más de un mes?",
    "luna",
    "Se mueve constantemente.",
    "Tiene fases."
  ],
  [
    "Yesterday is always before today. But there is a place where yesterday always follows today. Where?",
    "dictionary",
    "There is multiple of them in some places.",
    "There are many versions of this thing."
  ],
  [
    "¿Qué es negro cuando lo compra, rojo cuando lo usa y gris cuando lo tira?",
    "carbon",
    "Se vende por kilo.",
    "Sirve para cocinar y calentar."
  ],
  [
    "Llegan dos mujeres agarradas de la mano y el recepcionista les dice: -¿Lo que dice el reloj? A lo que ellas contestan: Si, gracias. Con vistas al mar.",
    "un cuarto para las dos",
    "Es un pedido.",
    "Es para lo que fueron a ese lugar."
  ],
  [
    "En un castillo redondo, doce caballeros de guardia están; un flaco lancero y un gordo escudero, marchan al compás.",
    "reloj",
    "El castillo puede ser otra figura.",
    "El flaco camina más rápido que el gordo."
  ],
  [
    "¿Qué cosa, qué cosa es? que vuela sin tener alas, y corre sin tener pies.",
    "tiempo",
    "No es un animal.",
    "No es una objeto fisico."
  ],
  [
    "Si mañana fuese ayer, hoy estaría tan cerca del domingo como si fuese mañana. Entonces, ¿qué día es hoy?",
    "domingo",
    "No es martes, ni miércoles.",
    "No es jueves, ni viernes."
  ]
]

var min = 0;
var max = array_of_guesses.length - 1;
console.log("cantidad de adivinanzas incluida esta " + (max+1));
var random_number = Math.round(Math.random() * (max - min) + min);
console.log("numero de adivinanza elegida " + random_number);
const guess_description = array_of_guesses[random_number][0];
const guess_answer = array_of_guesses[random_number][1];
console.log(guess_description)
console.log(guess_answer)
// array_of_guesses.splice(random_number, 1);
// max--;

let guess_text = document.querySelector(".guess-text");
guess_text.innerHTML = guess_description;
let right_answer = document.querySelector(".right-answer");
right_answer.innerHTML = guess_answer; //no borrar

let user_answer = document.querySelector(".user-answer");
const answer_input = document.querySelector(".answer-input");
const guess_btn = document.querySelector(".guess-btn");
let chances_left = document.querySelector(".chances-left");
let pista_1 = document.querySelector(".clue1");
let pista_2 = document.querySelector(".clue2");

pista_1.innerHTML = array_of_guesses[random_number][2];
pista_2.innerHTML = array_of_guesses[random_number][3];

array_of_guesses.splice(random_number, 1);
max--;

let correct_answer = false;
let intentos = 4;
chances_left.innerHTML = intentos;

let next_guess = document.querySelector(".next-guess");
let restart_game = document.querySelector(".restart-game");
let score_number = document.querySelector(".score-number");
let finish = document.querySelector(".finish");

let player_name = document.querySelector(".player-name");
let start_btn = document.querySelector(".start-btn");
let row1 = document.querySelector(".row1");
let row2 = document.querySelector(".row2");
let row3 = document.querySelector(".row3");
let row4 = document.querySelector(".row4");
let row5 = document.querySelector(".row5");

let wrong_sfx = document.querySelector(".wrong-sfx");
wrong_sfx.style.display = "none";
let right_sfx = document.querySelector(".right-sfx");
right_sfx.style.display = "none";
let winner_sfx = document.querySelector(".winner-sfx");
winner_sfx.style.display = "none";
let loser_sfx = document.querySelector(".loser-sfx");
loser_sfx.style.display = "none";
let berserk_op = document.querySelector(".berserk-op");
berserk_op.style.display = "none";
let vinland_saga_op = document.querySelector(".vinland-saga-op");
vinland_saga_op.style.display = "none";
let evangelion_op = document.querySelector(".evangelion-op");
evangelion_op.style.display = "none";

array_of_songs = [
  vinland_saga_op,
  berserk_op,
  evangelion_op
]


let rules = document.getElementsByClassName("rules");
let guess_number = document.querySelector(".guess-number");
let you_lose_btn = document.querySelector(".you-lose");

let buy_try = document.querySelector(".buy-try");

let game_section = document.getElementById("game-section");
let game_container = document.querySelector(".container");
let guess_title = document.getElementsByClassName("guess-title");
let user_answer_generic = document.querySelector(".user-answer-generic");
let chances = document.querySelector(".chances");
let main_guess_title = document.querySelector(".main-guess-title");
let score = document.querySelector(".score");

//let user_answer_result = document.querySelector(".user-answer-result");

  guess_btn.addEventListener("click", callback = () =>{
    //const new_span = document.createElement("SPAN");
    const spanContent = document.createTextNode(answer_input.value);
    // new_span.appendChild(spanContent);
    // user_answer.appendChild(new_span);
    user_answer.innerHTML = spanContent.textContent;
    console.log(right_answer.innerHTML);
    if (user_answer.textContent === right_answer.innerHTML) {
      console.log("yes!");
      right_sfx.play();
      correct_answer = true;
      user_answer.innerHTML += " es correcta, ¡Ganaste!";
      console.log(array_of_guesses.length)
      //guess_btn.style.display = "none";
      guess_btn.setAttribute("disabled",true);
      next_guess.removeAttribute("disabled");
      restart_game.removeAttribute("disabled");
      let current_score = score_number.innerHTML;
      current_score = parseInt(current_score);
      if(intentos == 4){
        // console.log(current_score);
        // console.log(current_score);
        score_number.innerHTML =  current_score + 10;
      }else if(intentos == 3){
        score_number.innerHTML = current_score + 8;
      }else if(intentos == 2){
        score_number.innerHTML = current_score + 5;
      }else if(intentos == 1){
        score_number.innerHTML = current_score + 1;
      }
      if(array_of_guesses.length === 0){
        next_guess.setAttribute("disabled", true);
        //restart_game.setAttribute("disabled", true);
        finish.removeAttribute("disabled");
        finish.click();
        finish.setAttribute("disabled", true);
      }
    } else {
      console.log("NO!");
      intentos--;
      chances_left.innerHTML = intentos;
      user_answer.innerHTML = user_answer.innerHTML + " es incorrecta.";
      console.log(intentos);
      wrong_sfx.play();
      if(intentos == 0){
        console.log("you loose!");
        user_answer.innerHTML = user_answer.innerHTML + " Perdiste.";
        // user_answer_result.innerHTML = "Perdiste, ¡Prueba otra vez!";
        //next_guess.removeAttribute("disabled");
        restart_game.removeAttribute("disabled");
        guess_btn.setAttribute("disabled",true);
        let riddle_reached = document.querySelector(".riddle-reached");
        let score_achieved = document.querySelector(".score-achieved");
        riddle_reached.innerHTML = guess_number.innerHTML;
        score_achieved.innerHTML = score_number.innerHTML
        you_lose_btn.removeAttribute("disabled");
        you_lose_btn.click();
        you_lose_btn.setAttribute("disabled",true);
        if(array_of_guesses.length === 0){
          next_guess.setAttribute("disabled", true);
          restart_game.setAttribute("disabled", true);
          finish.removeAttribute("disabled");
        }
      }
      if(intentos == 2){
        // pista_1.style.display="block";
        pista_1.style.visibility = "visible";
      } else if(intentos == 1){
        // pista_2.style.display="block";
        pista_2.style.visibility = "visible";
      }
    }
  })

const testColor = () =>{
  chances_left.style.color = "red";
}

const change_guess = () =>{
  var random_number = Math.round(Math.random() * (max - min) + min);
  console.log(random_number)
  const guess_description = array_of_guesses[random_number][0];
  //console.log(guess_description);
  //const guess_answer = array_of_guesses[random_number][1];
  right_answer.innerHTML = array_of_guesses[random_number][1];
  pista_1.innerHTML = array_of_guesses[random_number][2];
  pista_2.innerHTML = array_of_guesses[random_number][3];
  pista_1.style.visibility = "hidden";
  pista_2.style.visibility = "hidden";
  //console.log(guess_answer);
  if(array_of_guesses.length == 1){
    array_of_songs[1].pause();
    array_of_songs[2].play();
    game_section.classList.add("evangelion");
    game_container.classList.add("evangelion");
  }
  if(array_of_guesses.length == 2){
    array_of_songs[0].pause();
    array_of_songs[1].play();
    game_section.classList.add("berserk");
    game_container.classList.add("berserk");
  }
  if(array_of_guesses.length == 3){
    array_of_songs[0].play();
    game_section.classList.add("vinland");
    game_container.classList.add("vinland");
  }
  console.log("ESTE ES EL NUMERO DE RESTANTES:");
  console.log(array_of_guesses.length);
  array_of_guesses.splice(random_number, 1);
  //console.log(array_of_guesses.length);
  guess_text.innerHTML = guess_description;
  //right_answer.innerHTML = guess_answer;
  intentos = 4;
  chances_left.innerHTML = intentos;
  max--;
  console.log(max);
  console.log(array_of_guesses);
  //console.log(guess_answer);
  //console.log(array_of_guesses[random_number][1]);
  user_answer.innerHTML = "_ _ _ _ _";
  answer_input.value = "";
  guess_btn.removeAttribute("disabled");
  restart_game.setAttribute("disabled", true);
  next_guess.setAttribute("disabled", true);
  let current_guess_number = guess_number.innerHTML;
  current_guess_number = parseInt(current_guess_number);
  guess_number.innerHTML = current_guess_number + 1;
  buy_try.removeAttribute("disabled");
  game_section.classList.add("palette6");
  game_container.classList.add("palette6");
  guess_text.classList.add("palette6");
  pista_1.classList.add("palette6");
  pista_2.classList.add("palette6");
  guess_title[0].classList.add("palette6");
  guess_title[1].classList.add("palette6");
  user_answer_generic.classList.add("palette6");
  user_answer.classList.add("palette6");
  chances.classList.add("palette6");
  chances_left.classList.add("palette6");
  main_guess_title.classList.add("palette6");
  score.classList.add("palette6");
  score_number.classList.add("palette6");

  // return array_of_guesses[random_number][1];
}

//let winner_name = document.querySelector(".winner-name");
let player_name_in_modal = document.getElementsByClassName("player-name-in-modal");

const start_game = () =>{
  row1.style.display = "flex";
  row2.style.display = "flex";
  row3.style.display = "flex";
  row4.style.display = "flex";
  row5.style.display = "none";
  // let h4_content = document.createTextNode(player_name.value);
  // let winner_name = document.querySelector(".winner-name");
  const h4_content = document.createTextNode(player_name.value);
  //console.log(h4_content.textContent);
  //let winner_name = document.querySelector(".winner-name");
  //winner_name.innerHTML = h4_content.textContent;
  player_name_in_modal[0].innerHTML = h4_content.textContent;
  player_name_in_modal[1].innerHTML = h4_content.textContent;
  // for(r in rules){
  //   r.style.display = "none";
  // }
  rules[0].style.display = "none";
  rules[1].style.display = "none";
  rules[2].style.display = "none";
  rules[3].style.display = "none";
  rules[4].style.display = "none";
  rules[5].style.display = "none";
  rules[6].style.display = "none";
  rules[7].style.display = "none";
}

const buy_try_func = () =>{
  console.log("MENSAJEEE");
  //console.log(score_number.textContent);
  console.log(chances_left)
  if(score_number.innerHTML >= 2 && chances_left.innerHTML < 4){
    //buy_try.removeAttribute("disabled");
    let current_score2 = score_number.innerHTML;
    current_score2 = parseInt(current_score2);
    console.log(score_number);
    score_number.innerHTML = current_score2 - 2;

    let tries = chances_left.innerHTML;
    tries = parseInt(tries);
    chances_left.innerHTML = tries + 1;
    console.log(score_number);
  }else if(chances_left.innerHTML >= 4){
    buy_try.setAttribute("disabled", true);
    console.log("Ya tienes 4 intentos, sería un desperdicio de puntos comprar ahora por eso no te lo permito.")
  }else{
    buy_try.setAttribute("disabled", true);
    console.log("No tienes suficientes puntos para compar intentos.")
  }
}

//const finish = () =>{
  //document.querySelector(".finish").setAttribute("onclick", "javascript: testColor();");
  // document.getElementsByClassName("finish")[0].innerHTML = "asdasdadasd";

//}


