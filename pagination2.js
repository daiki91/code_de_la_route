let valeurs = ["B02/B1-02.JPG","B02/B1-02.JPG","B02/B1-03.JPG","B02/B1-04.JPG","B02/B1-05.JPG","B02/B1-06.JPG","B02/B1-07.JPG","B02/B1-08.JPG","B02/B1-09.JPG","B02/B1-10.JPG","B02/B1-11.JPG","B02/B1-12.JPG","B02/B1-13.JPG","B02/B1-14.JPG",
"B02/B1-15.JPG","B02/B1-16.JPG","B02/B1-17.JPG","B02/B1-18.JPG","B02/B1-19.JPG","B02/B1-20.JPG","B02/B1-21.JPG","B02/B1-22.JPG","B02/B1-23.JPG","B02/B1-24.JPG","B02/B1-25.JPG"];

let dossier = ''

let vals = [`${dossier}/bo_1.png`]




img=document.getElementById('img')

// fontion page suivant
// queryselector('')

let f=0
let next = document.getElementsByClassName('aomine')



function demarrer(){
    next[0].classList.add('feignal');
    next[1].classList.add('feignal');
    document.getElementsByClassName('demarrer')[0].classList.add('neub');

    img.src=valeurs[f];
  }
   function nextPage(){
      f++
      if(f>=valeurs.length){
        f=0

      }
      img.src=valeurs[f]
       
    }


    next[1].addEventListener('click', nextPage );
    next[0].addEventListener('click', previous);
    document.getElementsByClassName('demarrer')[0].addEventListener('click', demarrer);
      

//Retourner en arrière

 function previous(){
    f--
    if(f<=0){
      f = valeurs.length - 1;
    }
    img.src=valeurs[f]
        
  }
// barre de navigation
// on recupere la valeur de l input

// on cree un tableau , on insere tous les valeurs des fichiers dans un tableau

// reduce filter array.filter wala array.reduce , on verifie si chaque element se situant dans le tableau est egale 
// a la valeur de l input
// on retourne dans le html 

  document.getElementById("search").addEventListener("click", () => {
    let search = document.getElementById("barre").value 
    img.src = valeurs.filter((v) => (v.search(search) != -1))[0]

  })
//checkbox

const checkbox = document.createElement("input");
checkbox.type = "checkbox";
  const checkboxa = document.getElementById("cb1");
  checkbox.checked = true; // Check the checkbox
  checkbox.checked = false; // Uncheck the checkbox
  checkbox.addEventListener("change", function() {
console.log("Checkbox state: " + this.checked);
});