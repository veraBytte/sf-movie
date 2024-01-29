public with sharing class MovieListService {
    @AuraEnabled(cacheable=true)

    public static List<Movie__c> getFilterMovies(String searchText) {
        String likeValue = '%' + searchText + '%';

        return [
            SELECT Id, Name, Rating__c, Director__c, Release_Date__c, Description__c, Image_Preview__c 
            FROM Movie__c
            WHERE Name LIKE : likeValue
        ];
    }
}