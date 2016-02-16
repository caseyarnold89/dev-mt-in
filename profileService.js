angular.module("devMtIn").service("profileService", function($http) {
    
       var baseUrl = 'http://connections.devmount.ain/'
    
	   this.saveProfile = function(profile) {
           return $http({
               method: 'POST', //Request method
               url: baseUrl + 'api/profiles/', //URL we are making request to
               data: profile //The data we are requesting be posted
           })
           .then(function(profileResponse) { // What to do after a response comes back from the server.
                localStorage.setItem('profileID', JSON.stringify({profileId: profileResponse.data._id})); //save unique id to local storage
           })
           .catch(function(err) {
               console.error(err);
           });
       } 
       
       this.checkForProfile = function(profileId) {
            return $http({
                method: 'GET',
                url: baseUrl + 'api/profiles/' + profileId
            })  
       };
       
       this.deleteProfile = function() {
           var profileId = JSON.parse(localStorage.getItem('profileId')).profileId;
           
           return $http({
               method: 'DELETE',
               url: baseUrl + 'api/profiles/' + profileId
           });
       };
       

})