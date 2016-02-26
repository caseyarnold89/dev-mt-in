var app = angular.module('devMtIn');

app.service('profileService2', function($http){
    
    var baseUrl = 'http://connections.devmounta.in';
    
    this.saveProfile = function(profile) {
        // localStorage.setItem('profile', JSON.stringify(profile));
        
        return $http({
            method: 'POST',
            url: baseUrl + '/api/profiles/',
            data: profile
        })
        .then(function(profileResponse){
            localStorage.setItem('profileId', JSON.stringify({ profileId: profileResponse.data._id }));
            console.log(profileResponse);
        })
        .catch(function(err) {
            console.error(err);
        });
    };
    
    this.checkForProfile = function(profileId) {
        //   if (localStorage.getItem('profile')) {
        //         return JSON.parse(localStorage.getItem('profile'));
        //   }
        //   else {
        //       return {
                    
        //       }
        //   }
        
        return $http({
            method: 'GET',
            url: baseUrl + '/api/profiles/' + profileId
        });
        
    };
    
    this.deleteProfile = function() {
        // localStorage.removeItem('profile');
        
        var profileId = JSON.parse(localStorage.getItem('profileId')).profileId;
        
        return $http({
            method: 'DELETE',
            url: baseUrl + '/api/profiles/' + profileId
        });
        
    };
    
})