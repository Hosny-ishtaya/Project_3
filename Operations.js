
import prompt from 'prompt-sync';
const input = prompt();


const printMoveis = (obj) => {
    console.log(`----List Movies----
-------------------`)
    let i = 0;
    for (let key in obj) {
        console.log(`Movie Name:${obj[i].name}.
Movie director:${obj[i].director}
Movie relase :${obj[i].relase_year}
Movie genre:${obj[i].genre}
-------------------`)
        i++;

    }
}

const inputMoveis = () => {
    let name = input("Whats movie name?");
    let director = input("Whats director name?");
    let year = input("Whats relase year?");
    let genre = input("Whats movie genre?");

    let mov = {
        "name": name,
        "director": director,
        "relase_year": year,
        "genre": genre
    }

    return mov;
}

const update = (obj) => {
    let name = input("Write movie name that want to update your info:");
    console.log(name)
    let i = 0;
    let f = 0;
    for (let key in obj.movies) {
        if (obj.movies[i].name == name) {


            let name = input("Whats new movie name?");
            let director = input("Whats new director name?");
            let year = input("Whats new relase year?");
            let genre = input("Whats new movie genre?");

            obj.movies[i].name = name;
            obj.movies[i].director = director;
            obj.movies[i].relase_year = year;
            obj.movies[i].genre = genre;
            let f = 1;
            return obj;

        }


        i++;
    }

    if (f == 0) {
        console.log("Mybe movie not found or the name isn't correct")
    }


}
const deletee = (obj) => {
    let name = input("Write movie name that want to delete it:");
    let i = obj.movies.findIndex(item => item.name == name)
    obj.movies.splice(i, 1)
    return obj;
}

const filterr = (obj) => {
    console.log(`---Search choice---
1)Name
2)Genre
3)Year relase
4)Dirictor
-------------------`)
    let choice = input("What your choice:");
    switch(choice){
        case "1":
            let name = input("What the name:");
            let item=obj.movies.filter(item=>{
                return(
                  item.name ==name
                )
              });
              printMoveis(item);  

            break;
        case "2":
            let genre = input("What the genre:");
            let item2=obj.movies.filter(item=>{
                return(
                  item.genre ==genre
                )
              });
              printMoveis(item2);  
            break;
        case "3":
            let Yearrelase = input("What the Year relase:");
            let item3=obj.movies.filter(item=>{
                return(
                  item.relase_year ==Number(Yearrelase)
                )
              });
              printMoveis(item3);  
            break;
        case "4":
            let Dirictor = input("What the Dirictor:");
            let item4=obj.movies.filter(item=>{
                return(
                  item.director ==Dirictor
                )
              });
              printMoveis(item4);  
            break;                
    }
}



export {
    printMoveis,
    inputMoveis,
    update,
    deletee,
    filterr

}