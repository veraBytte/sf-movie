import { LightningElement, wire } from 'lwc';
import getFilterMovies from '@salesforce/apex/MovieListService.getFilterMovies';

export default class MovieList extends LightningElement {
    searchText;

    //Wire
    @wire(getFilterMovies,{ searchText: '$searchText'})
    movies;

    //movies.data -> Contains the data returned from the Apex method
    //movies.error -> Contains the error returned from the Apex method

    //Methods
    handleInputChange(e){
        const searchKey = e.target.value;
        if(searchKey.length >= 2 || searchKey.length === 0){
            this.searchText = searchKey;
        }
    }
}