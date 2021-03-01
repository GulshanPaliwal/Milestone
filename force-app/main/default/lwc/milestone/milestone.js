import { LightningElement,track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import Milestone_OBJECT from '@salesforce/schema/Milestone__c';
import NAME_FIELD from '@salesforce/schema/Milestone__c.Name';
import Proj_FIELD from '@salesforce/schema/Milestone__c.Project__c';
import Edate_FIELD from '@salesforce/schema/Milestone__c.End_date__c';
import Pred_FIELD from '@salesforce/schema/Milestone__c.Predecessor_Milestone__c';
import Status_FIELD from '@salesforce/schema/Milestone__c.Status__c';
import Desc_Type_FIELD from '@salesforce/schema/Milestone__c.Milestone_description__c';
import Sdate_FIELD from '@salesforce/schema/Milestone__c.Start_date__c';

export default class AccountCreator extends NavigationMixin(LightningElement) {

    MilestoneObject = Milestone_OBJECT;
    myFields = [NAME_FIELD, Proj_FIELD, Sdate_FIELD, Edate_FIELD, Status_FIELD, Pred_FIELD,Desc_Type_FIELD];

    
    
    handleCreated(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Milestone__c',
                actionName: 'list'
            },
            
        });
    
    }
    navigateToList(){
        
    }

    @track openmodel = true;
    openmodal() {
        this.openmodel = true
    }
    closeModal() {
        this.openmodel = false
    } 
    saveMethod() {
        this.closeModal();
    }

   
}