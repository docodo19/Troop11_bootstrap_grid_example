namespace bootstrap1.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
    }


    export class AboutController {
        public message = 'Hello from the about page!';
        public myPosition;

        constructor(private $geolocation:any, private $scope:ng.IScope){
            this.getCurrentLocation();

        }

        getCurrentLocation(){
            //let self = this;
            this.$geolocation.getCurrentPosition({
                timeout: 60000
            }).then((position) => {
                this.myPosition = position.coords;
            });
        }

    }

}
