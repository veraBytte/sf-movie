import { LightningElement, wire } from 'lwc';
import getAllMovies from '@salesforce/apex/MovieListService.getAllMovies';

export default class MovieList extends LightningElement {

    @wire(getAllMovies)
    movies;

    // movies.data --> datos devueltos por apex
    // movies.error --> Si error se almacena aqui


    // movies = [
    //     {
    //         Name : "Max Steel",
    //         Description : "Esta es mi descripcion",
    //         Image_Url: "https://play-lh.googleusercontent.com/FMfKk_6I6a3uPMKi03syTFs-PpSjsjNGbQN-oAoL3OJCpTs6MZBN4BLk4ax1ETZnOVj8",
    //         Tags: ["Terror","Accion","Suspenso"]
    //     },
    //     {
    //         Name : "Una casa embrujada",
    //         Description : "Esta es mi descripcion",
    //         Image_Url: "https://www.neoteo.com/wp-content/uploads/2008/03/casaembrujada.jpg",
    //         Tags: ["Terror","Accion","Suspenso"]
    //     },
    //     {
    //         Name : "El señor de los anillos",
    //         Description : "Esta es mi descripcion",
    //         Image_Url: "https://es.web.img3.acsta.net/pictures/22/10/04/16/26/1929878.jpg",
    //         Tags: ["Terror","Accion","Suspenso"]
    //     }
    // ]
}