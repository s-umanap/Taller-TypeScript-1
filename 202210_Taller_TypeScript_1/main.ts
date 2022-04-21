import {Serie} from "./serie.js";

import {series} from "./data.js"


let seriesTable:HTMLElement = document.getElementById("series")!;
let average: HTMLElement = document.getElementById("promedio-temporadas")!;

mostrarSeries(series);
mostrarPromedio(series);


function mostrarSeries(series: Serie[]):void{
    let seriesTbody: HTMLElement = document.createElement("tbody");
    for(let serie of series)
    {   
        let trElement:HTMLElement = document.createElement("tr");
        trElement.innerHTML=`<th scope="row">${serie.id}</th>
        <a href=${serie.ulr}>${serie.nombre}</a>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>`;
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}
    

function mostrarPromedio(series:Serie[]):void{
    let index: number = 0;
    let sum: number = 0;
    let trElement:HTMLElement = document.createElement("tr");
    for(let serie of series)
    {   
        sum += serie.temporadas;
        index++;
    }
    let prom: number = sum/index;
    trElement.innerHTML = `Seasons Average: ${prom}`;
    average.appendChild(trElement);

}
   
