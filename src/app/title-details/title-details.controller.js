export class TitleDetailController{

    constructor($routeParams, $log, titleService){
        'ngInject';
        this.selectedTitle = '';
        this.titleService = titleService;
        this.$routeParams = $routeParams;
        this.$log = $log;
        this.getSelectedTitle(this.$routeParams.id);
    }

    getSelectedTitle(id){
        this.selectedTitle = this.titleService.getSelectedTitle(id);
        this.$log.log('Selected Title::' + this.selectedTitle);        
    }
}