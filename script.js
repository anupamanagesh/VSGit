var testApp = angular.module('testApp', []);
testApp.controller('testController' , function ($scope, $http) {
  
     $scope.formData={};
   
   $scope.processForm = function() {
       
       var data= {email: $scope.formData.email,firstName:$scope.formData.firstName,lastName:$scope.formData.lastName,
           displayName:$scope.formData.displayName, description:$scope.formData.description,
        department:$scope.formData.department,team:$scope.formData.team}     

           $http.post("https://zware-ngnewapi.azurewebsites.net/api/anupama_rvce_at_gmail_com/profiles", data)
           .then(function successCallback(response){
               console.log("Successfully POST-ed data",response.data);
               $scope.formData.message=("Profile details saved successfully and the user id is:"+  response.data.userId);
           }, function errorCallback(response){
               console.log("POST-ing of data failed",response.data);
               $scope.formData.message="Profile details not saved successfully"
           });

   };

   $scope.retriveForm = function(){     
       $http.get("https://zware-ngnewapi.azurewebsites.net/api/anupama_rvce_at_gmail_com/profiles/" + $scope.formData.userId)
       .then(function successCallback(response){
           $scope.response = response;            
       }, function errorCallback(response){
           console.log("Unable to perform get request");
       });


   }
});

   
   
   

