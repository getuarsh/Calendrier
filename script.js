window.addEventListener("DOMContentLoaded", () =>{

    const section = document.querySelector("section")

    const nbBox = 24;

    let colors = ["#165b33ce",
                 "#146B3Ace",
                 "#FBB229ce",
                 "#EA4630ce",
                 "#BB2528ce",
                 "#2997BBce",
                 "#196882ce"]


        let numeros = Array.from({length:24},(k,v) => v + 1)
        let shuffle = numeros.sort(() => Math.random() - 0.5)
        console.log(shuffle);

        
        for(let i = 1; i <= nbBox; i++){



            // creer un element de type div
    
            let box = document.createElement("div");
    
            let image =document.createElement("img");
    
    
    
            //on attribut le calsse box a cet elelment
    
            box.classList.add("box");
    
    
    
            image.classList.add("image");
    
            
    
            image.src = "./img/image" +i+ ".jpg"
    
            
    
            //on ajoute du contenue dans l'elemt box
    
            box.innerHTML = shuffle[i-1];
    
    
    
            // recupère un index aléatoire dans le tableau de couleurs "colors"
    
            let randomIndex = Math.floor(Math.random() * colors.length)
    
    
    
            //attibue une couleur de fond à l'indice aléatoire à la div "box"
    
            box.style.backgroundColor = colors[randomIndex]
    
    
    
            //on ajoute l'element box dans la section
    
            box.appendChild(image)
    
            section.appendChild(box);
    
    
    
            box.addEventListener("click", () =>{
    
                box.classList.toggle("active");
    
     
        })
    }
})