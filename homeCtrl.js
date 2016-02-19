var app = angular.module('devMtIn');

app.controller('homeCtrl', function($scope, profileService2, friendService) {
    
    //    $scope.myProfile = profileService2.checkForProfile();
    
          $scope.checkForProfile = function() {
                var profileId = JSON.parse(localStorage.getItem('profileId'));

                if (profileId) {
                    profileService2.checkForProfile(profileId.profileId)
                    .then(function(profile) {
                        $scope.myProfile = profile.data;
                        console.log($scope.myProfile);
                    })
                    .catch(function(err) {
                        console.error(err);
                    });
          	    }
          };
          
          $scope.checkForProfile();
            
    
	//    $scope.checkForProfile = function() {
    //         var profileId = JSON.parse(localStorage.getItem('profileId'));

    //         if (profileId) {
    //             profileService.checkForProfile(profileId.profileId)
    //             .then(function(profile) {
    //                 $scope.myProfile = profile.data;
    //                 friendService.findFriendsFriends(profile.data); // Finding second level friends.
    //             })
    //             .catch(function(err) {
    //                 console.error(err);
    //             });
    //         }
    //     }
        // $scope.checkForProfile = function() {
        //     var profileId = JSON.parse(localStorage.getItem('profileId'));

        //     if (profileId) {
        //         profileService.checkForProfile(profileId.profileId)
        //         .then(function(profile) {
        //             $scope.myProfile = profile.data;
        //             friendService.findFriendsFriends(profile.data);
        //         })
        //         .catch(function(err) {
        //             console.error(err);
        //         });
        //     }
        // }
        
    //     $scope.checkForProfile = profileService.checkForProfile;
        
       
    //    $scope.checkForProfile();
	      
       $scope.sortOptions = [
           {
                display: 'Ascending',
                value: false
            },
            {
                display: 'Descending',
                value: true
            }
       ];
       
	   $scope.editing = false; 
       
       $scope.saveProfile = function(profile){
           profileService2.saveProfile(profile);
           $scope.editing = false;
       };
       
       $scope.deleteProfile = function() {
           profileService2.deleteProfile()
        //    $scope.myProfile = profileService2.checkForProfile();
           .then(function(deletedProfile) {
               localStorage.removeItem('profileId');
               $scope.myProfile = {};
           })
           .catch(function(err){
               console.error(err);
           });
        
        
        
        //    .then(function(deletedProfile) {
        //        localStorage.removeItem('profileId');
        //        $scope.myProfile = {};
        //    })
        //    .catch(function(err){
        //      console.error(err);  
        //    });
       };
       
       $scope.findFriend = function(query) {
           friendService.findFriends($scope.myProfile._id, query)
           .then(function(response) {
               $scope.potentialFriends = response;
           })
       };
       
       $scope.addFriend = function(friendId) {
           friendService.addFriend($scope.myProfile._id, friendId)
           .then(function(){
               $scope.checkForProfile();
           })
       }
	    
       $scope.removeFriend = function(friendId) {
           friendService.removeFriend($scope.myProfile._id, friendId)
           .then(function() {
               $scope.checkForProfile();
           })
       }
       

});