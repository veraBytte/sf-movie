import { LightningElement, wire } from 'lwc';
import getAllMovies from '@salesforce/apex/MovieListService.getAllMovies';

export default class MovieList extends LightningElement {

    @wire(getAllMovies)
    movies;

    //movies.data -> Contains the data returned from the Apex method
    //movies.error -> Contains the error returned from the Apex method
}