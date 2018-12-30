export class TitleController{

    constructor($location, titleService){
        'ngInject';
        this.titles = [];
        this.testValue = '';
        this.selectedTitle = '';
        this.titleService = titleService;
        this.selectedFilter = '';
        this.$location = $location;
        this.populateTitles();
    }

    populateTitles() {
        this.titles = this.titleService.getTitles();
    }

    updateSelection(title){
        this.selectedTitle = title;
        this.$location.path('/title/' + title.id + '/detail');
    }

    callMethod(){
        alert('111');
        console.log('Method called');
    }
}

