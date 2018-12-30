export class TitleService {
    constructor($http, $log, heroes){
        'ngInject';
        
        this.$http = $http;
        this.$log = $log;
        this.heroes = heroes;
    }

    getTitles(){
        return this.heroes;
    }

    getSelectedTitle(selectedId){
        // return new Promise((resolve, reject) => {
            const title = this.heroes.filter((title) => title.id == selectedId);
            return title[0];
            // if(title){
            //     resolve(title);
            // }
            
        // });
    }
}