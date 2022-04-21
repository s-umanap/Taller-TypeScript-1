import { series } from "./data.js";
var seriesTable = document.getElementById("series");
var average = document.getElementById("promedio-temporadas");
mostrarSeries(series);
mostrarPromedio(series);
function mostrarSeries(series) {
    var seriesTbody = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<th scope=\"row\">".concat(serie.id, "</th>\n        <a href=").concat(serie.ulr, ">").concat(serie.nombre, "</a>\n        <td>").concat(serie.canal, "</td>\n        <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}
function mostrarPromedio(series) {
    var index = 0;
    var sum = 0;
    var trElement = document.createElement("tr");
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        sum += serie.temporadas;
        index++;
    }
    var prom = sum / index;
    trElement.innerHTML = "Seasons Average: ".concat(prom);
    average.appendChild(trElement);
}
