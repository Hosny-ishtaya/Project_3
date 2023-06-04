import { updateMovie, addMovie, deleteMovie, filterMovie, fetchData } from './Request.js'
import { readMovie } from './Request.js'
import prompt from 'prompt-sync';
const input = prompt();

const printmenu = () => {
  console.log(`-----Cenema-----
1)Read Movies.
2)Add Movie.
3)Update Movie.
4)Delete Movie.
5)Search Movies.
6)Fetch data API.
9)Exit.
----------------`)

}

async function executeAsyncFunctions() {
  let userInput = '';

  while (userInput !== 'exit') {
    printmenu();
    userInput = input('Enter an option or "exit" to quit:');

    switch (userInput) {
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
      case "6":
        await fetchData();
        break;
      case '9':
      case 'exit':
        console.log('Exiting...');
        break;
      default:
        console.log('Invalid option');
    }
  }

  console.log('Loop exited');
}

executeAsyncFunctions()
  .then(() => {
    console.log('All async functions completed');
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });


