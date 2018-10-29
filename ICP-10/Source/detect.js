var app = angular.module("facedetect", []);
app.controller("Ctrl1", function ($scope, $http) {

    $scope.url = "";
    
    


    $scope.getName = function () {
        $scope.name="";
        $scope.desc="";
        $http({
            method: 'GET',
            url: 'http://localhost:3000/get1?url=' + $scope.url
        }).then(function successCallback(response) {
            console.log(response.data);
            
           
            $scope.gender=response.data[0].faceAttributes.gender;
           $scope.age=response.data[0].faceAttributes.age;

        }, function errorCallback(response) {
            console.log(response);
        });
    }
});