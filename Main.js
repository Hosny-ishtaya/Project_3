import {updateMovie,addMovie,deleteMovie,filterMovie} from './Request.js'
import {readMovie} from './Request.js'
import prompt from 'prompt-sync';
const input=prompt();

const printmenu=()=>{
  console.log(`-----Cenema-----
1)Read Movies.
2)Add Movie.
3)Update Movie.
4)Delete Movie.
5)Search Movies
9)Exit.
----------------`)

}

 const Main=()=>{
  let exit=0;
 while(true){
  printmenu();
  const choice =input("What your Choice?:")
  switch(choice){
  case "1":
    readMovie()
     break;
  case "2":
    addMovie()
    break;
  case "3":
    updateMovie();
    break;
  case "4":
    deleteMovie();
    break;
  case "5":
    filterMovie();
    break;     
   case "9":
    exit=1;
    break;  
 }

 if(exit==1) break
}

}

Main();