angular.module("devMtIn").service("profileService", function($http) {
    
       var baseUrl = 'http://connections.devmount.ain/'
       
       this.saveProfile = function(profile) {
  localStorage.setItem('profile', JSON.stringify(profile));
}

    
    //    this.saveProfile = function(profile) {
    //        return $http({ // Requests that your profile be added to the database
    //             method: 'POST'
    //             , url: baseUrl + 'api/profiles/'
    //             , data: profile
    //        })
    //        .then(function(profileResponse) { // What to do after a response comes back from the server.
    //             localStorage.setItem('profileId', JSON.stringify({ profileId: profileResponse.data._id })); // Save our unique _id to local storage
    //             console.log(profileResponse);
    //        })
    //        .catch(function(err) {
    //             console.error(err);
    //        });
    //    }
    this.checkForProfile = function() {
        if (localStorage.getItem('profile')) {
            return JSON.parse(localStorage.getItem('profile'));
        }
        return {
            friends: [{name: 'Ryan'}, {name: 'Bryan'}, {name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}]
      
        }
    }
    
    // this.checkForProfile = function(profileId) {
    //     return $http({
    //          method: 'GET',
    //             url: baseUrl + 'api/profiles/' + profileId
    //         });
    //    };
       
       this.deleteProfile = function() {
           var profileId = JSON.parse(localStorage.getItem('profileId')).profileId;
           
           return $http({
               method: 'DELETE',
               url: baseUrl + 'api/profiles/' + profileId
           });
       };
       

})
