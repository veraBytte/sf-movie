import { LightningElement, api } from 'lwc';
import { NavigationMixin } from "lightning/navigation";

export default class Premiere extends NavigationMixin(LightningElement){
    @api movie;

    get isGoodMovie(){
        return this.movie.Rating__c.includes('Buena') || this.movie.Rating__c.includes('Muy Buena');
    }

    navigateToRecordViewPage() {
      // View a custom object record.
      this[NavigationMixin.Navigate]({
        type: "standard__recordPage",
        attributes: {
          recordId: this.movie.Id,
          actionName: "view",
        },
      });
    }
}