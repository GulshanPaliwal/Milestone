import { LightningElement, api, track } from 'lwc';


export default class Milestoneview extends LightningElement {
    @api recordId;
    


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