import fs from 'fs'
import { filterr, printMoveis,inputMoveis,update,deletee} from './Operations.js';


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

const fetchData=async ()=>{

   await fetch("https://www.omdbapi.com/?apikey=a61cc832&t=spider+man",{method:"Get"})
    .then(async(res)=>{
        await new Promise(resolve => setTimeout(resolve, 2000));
        const data= await res.json()
        console.log(res.status);
        console.log(data.Title)

        let mov = {
            "name": data.Title,
            "director": data.Director,
            "relase_year": data.Year,
            "genre": data.Genre
        }

        let dataa=fs.readFileSync("Movies.json","utf-8");
        let objData=JSON.parse(dataa)
        objData.movies.push(mov)
   
        fs.writeFileSync("Movies.json",JSON.stringify(objData),"utf-8")

    }).catch((err)=>{
        console.log(err.data);
    })

    await new Promise(resolve => setTimeout(resolve, 2000));
   
}

export{
    readMovie,
    addMovie,
    updateMovie,
    deleteMovie,
    filterMovie,
    fetchData,
}
