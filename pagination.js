/*let valeurs = ["B1-01.JPG","B1-02.JPG","B1-03.JPG","B1-04.JPG","B1-05.JPG","B1-06.JPG","B1-07.JPG","B1-08.JPG","B1-09.JPG","B1-10.JPG","B1-11.JPG","B1-12.JPG","B1-13.JPG","B1-14.JPG",
"B1-15.JPG","B1-16.JPG","B1-17.JPG","B1-18.JPG","B1-19.JPG","B1-20.JPG","B1-21.JPG","B1-22.JPG","B1-23.JPG","B1-24.JPG","B1-25.JPG"];*/
let f=1
const MAX_FICHIERS = 25
let id_dossier = 1
let imagi=document.querySelector('.slide');
let  NEWPATH = `B${`${id_dossier}`.padStart(2, 0)}/B${id_dossier}-${`${f}`.padStart(2, 0)}.jpg`
let theDossier = document.getElementById('select-dossier')
img=document.getElementById('img')
theDossier.addEventListener("change", function(){
  id_dossier = this.value
  f=1;
  NEWPATH = `B${`${id_dossier}`.padStart(2, 0)}/B${id_dossier}-${`${f}`.padStart(2, 0)}.jpg`
this.classList.add("neub");
  img.src= NEWPATH;
})
id_dossier = theDossier.value



// fontion page suivant
// queryselector('')

let next = document.getElementsByClassName('aomine')
// NEWPATH = `B0${id_dossier}/B${id_dossier}-${`${f}`.padStart(2, 0)}.jpg`

function demarrer(){
    next[0].classList.add('feignal');
    next[1].classList.add('feignal');
    document.getElementsByClassName('demarrer')[0].classList.add('neub');
    document.slide.src=NEWPATH;
    //updateTimer()
    starttimmer();
  }
  function nextPage(){
    f++
    if(f>=MAX_FICHIERS){
      f=1
      
    }
    NEWPATH = `B${`${id_dossier}`.padStart(2, 0)}/B${id_dossier}-${`${f}`.padStart(2, 0)}.jpg`
      img.src=NEWPATH
       
    }


    next[1].addEventListener('click', nextPage );
    next[0].addEventListener('click', previous);
    document.getElementsByClassName('demarrer')[0].addEventListener('click', demarrer);
      

//Retourner en arrière

 function previous(){
    f--
    if(f<1){
      f = MAX_FICHIERS;
    }
    NEWPATH = `B${`${id_dossier}`.padStart(2, 0)}/B${id_dossier}-${`${f}`.padStart(2, 0)}.jpg`
    img.src=NEWPATH
        
  }
// barre de navigation
// on recupere la valeur de l input

// on cree un tableau , on insere tous les valeurs des fichiers dans un tableau

// reduce filter array.filter wala array.reduce , on verifie si chaque element se situant dans le tableau est egale 
// a la valeur de l input
// on retourne dans le html 

 /* document.getElementById("search").addEventListener("click", () => {
    let search = document.getElementById("barre").value 
    img.src = valeurs.filter((v) => (v.search(search) != -1))[0]

  })*/
//checkbox

const checkbox = document.createElement("input");
checkbox.type = "checkbox";
  const checkboxa = document.getElementById("cb1");
  checkbox.checked = true; // Check the checkbox
  checkbox.checked = false; // Uncheck the checkbox
  checkbox.addEventListener("change", function() {
console.log("Checkbox state: " + this.checked);
});

//timer
/*let compteur = 0;
let intervalId;

function updateTimer() {
    document.getElementById("timer").innerHTML = compteur;
    compteur++;
    if (compteur > 200) {
        clearInterval(intervalId);
        alert("Temps écoulé!");
      nextPage()
    }
}
intervalId = setInterval(updateTimer, 1000);*/

const departMinutes = 5
let temps = departMinutes * 60

const timerElement = document.getElementById("timer")
function starttimmer(){
  setInterval(() => {
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)
  
    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes
  
    timerElement.innerText = `${minutes}:${secondes}`
    temps = temps <= 0 ? 0 : temps - 1
  }, 1000)
}


let corrections = {
	b1 : ['BD', 'AD', 'B', 'BC', 'B', 'A', 'B', 'B', 'AD', 'B', 'C', 'BC', 'AD', 'AC', 'B', 'B', 'B', 'A', 'B', 'B', 'A', 'B', 'A', 'B', 'B'],
	b2 : ['AD', 'BD', 'BD', 'B', 'AD', 'A', 'AD', 'B', 'BD', 'B', 'B', 'BD', 'A', 'B', 'A', 'B', 'B', 'BC', 'A', 'B', 'A', 'A', 'AC', 'BD', 'BC'],
	b3 : ['BD', 'BC', 'B', 'BD', 'B', 'A', 'BC', 'B', 'A', 'BC', 'A', 'AD', 'B', 'BC', 'B', 'A', 'BC', 'A', 'B', 'B', 'A', 'A', 'AC', 'BD', 'B'],
	b4 : ['BD', 'AD', 'B', 'AD', 'AC', 'A', 'B', 'A', 'B', 'BC', 'B', 'B', 'A', 'B', 'A', 'B', 'B', 'A', 'BC', 'AD', 'C', 'A', 'BC', 'BD', 'BC'],
	b5 : ['AD', 'BD', 'BD', 'BC', 'AD', 'B', 'B', 'B', 'C', 'B', 'B', 'A', 'A', 'B', 'B', 'B', 'A', 'A', 'BD', 'B', 'A', 'A', 'BC', 'AD', 'AD'],
	b6 : ['AD', 'BD', 'B', 'A', 'B', 'A', 'B', 'B', 'AD', 'A', 'B', 'B', 'A', 'B', 'A', 'A', 'BD', 'AC', 'BC', 'AD', 'AC', 'A', 'A', 'A', 'AD'],
	b7 : ['AD', 'BD', 'BD', 'A', 'A', 'B', 'BD', 'B', 'B', 'A', 'B', 'B', 'B', 'BC', 'A', 'A', 'BC', 'B', 'A', 'A', 'B', 'B', 'B', 'AD', 'AC'],
	b8 : ['BD', 'A', 'BC', 'BC', 'AD', 'B', 'A', 'B', 'B', 'A', 'AD', 'A', 'BC', 'A', 'A', 'B', 'B', 'B', 'B', 'BC', 'A', 'BD', 'A', 'B', 'B'],
	b9 : ['AC', 'BD', 'AC', 'B', 'BD', 'A', 'A', 'A', 'B', 'B', 'BC', 'A', 'AD', 'B', 'AD', 'B', 'AD', 'BC', 'B', 'A', 'B', 'BC', 'A', 'BC', 'B'],
	b10 : ['AD', 'B', 'BD', 'B', 'BC', 'BC', 'AD', 'B', 'B', 'B', 'BC', 'B', 'BC', 'BD', 'BC', 'B', 'BD', 'B', 'BC', 'B', 'B', 'B', 'BC', 'A', 'BD'],
	b11 : ['AD', 'BD', 'BD', 'AD', 'A', 'B', 'A', 'B', 'BC', 'B', 'B', 'B', 'AC', 'A', 'B', 'AC', 'A', 'BC', 'A', 'BC', 'B', 'A', 'AD', 'B', 'A'],
	b12 : ['AD', 'BD', 'B', 'BC', 'B', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'BC', 'AD', 'B', 'BC', 'BC', 'A', 'A', 'B', 'A', 'A', 'B', 'BC', 'B'],
}

