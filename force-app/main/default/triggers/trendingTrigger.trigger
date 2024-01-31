trigger trendingTrigger on Trending__c (before insert, before update) {
    
    if(Trigger.isUpdate){
        // Trigger.new es una lista d etodos los registros nuevos (Max 200)
        // Trigger.old es una lista de todos los registro antiguos (Max 200)

        for(Trending__c newTrending : Trigger.new){
            Trending__c oldTrending = Trigger.oldMap.get(newTrending.Id);

            if(t.oldTrending.Last_Time_Avaliable__c != newTrending.Last_Time_Avaliable__c){

                Id movieId = newTrending.Movie__c;
                Integer daysToAdd = updateDate.getAvaliableInDays(movie);

                newTrending.Next_Time_Avaliable__c = newTrending.Last_Time_Avaliable__c.addDays(daysToAdd);
            }
        }
    }
}