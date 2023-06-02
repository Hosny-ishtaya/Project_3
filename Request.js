import fs from 'fs'
import { filterr, printMoveis } from './Operations.js';
import {inputMoveis} from './Operations.js';
import {update} from './Operations.js';
import { deletee } from './Operations.js';


const readMovie=()=>{
         let data=fs.readFileSync("Movies.json","utf-8");
        let objData=JSON.parse(data)
         printMoveis(objData.movies);
}

const addMovie=()=>{

     let data=fs.readFileSync("Movies.json","utf-8");
     let objData=JSON.parse(data)
     objData.movies.push(inputMoveis())

     fs.writeFileSync("Movies.json",JSON.stringify(objData),"utf-8")

}

const updateMovie=()=>{
    let data=fs.readFileSync("Movies.json","utf-8");
    let objData=JSON.parse(data)
    fs.writeFileSync("Movies.json",JSON.stringify(update(objData)),"utf-8")

}

const deleteMovie=()=>{
    let data=fs.readFileSync("Movies.json","utf-8");
    let objData=JSON.parse(data)
    fs.writeFileSync("Movies.json",JSON.stringify(deletee(objData)),"utf-8")

}

const filterMovie=()=>{
    let data=fs.readFileSync("Movies.json","utf-8");
    let objData=JSON.parse(data)
    filterr(objData);

}

export{
    readMovie,
    addMovie,
    updateMovie,
    deleteMovie,
    filterMovie
}
