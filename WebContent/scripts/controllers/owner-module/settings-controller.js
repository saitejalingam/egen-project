/**
 * Created by Daedalus on 8/12/2015.
 */

(function(){

    angular
        .module('settings')
        .controller('SettingsController', SettingsController);

    SettingsController.$inject = ['settingsService'];
    function SettingsController(settingsService){

        var setVm = this;
        setVm.mailingList = false;
        setVm.contactList = false;
        setVm.other = true;

        setVm.alerts = [
            { visible: false, type: 'success', msg: 'You have succesfully updated the Profile!' },
            { visible: false, type: 'success', msg: 'Setting have been updated!' },
            { visible: false, type: 'success', msg: 'Username has been updated' },
            { visible: false, type: 'success', msg: 'Password has been updated' }
        ];

        setVm.getMailing = function(){
            settingsService.getMailingList().then(function(data){
                console.log(data);
                setVm.mailingList = data;
            }, function(err){
                console.log(err);
            });
        };

        setVm.getContact = function(){
            settingsService.getContactList().then(function(data){
                console.log(data);
                setVm.contactList = data;
            }, function(err){
                console.log(err);
            });
        };


        setVm.changeUsername = function(flag){

            if(flag){
                settingsService.changeUser(setVm.newUse).then(function(data){
                    console.log(data);
                    setVm.alerts[2].visible = true;
                    setVm.newUse = null;
                }, function(err){
                    console.log(err);
                    alert("Error saving Username! Please try again!");
                });
            }
            else
                alert("New Username and Confirmed Username do not match!");
        };


        setVm.changePassword = function(flag){

            if(flag){
                settingsService.changePass(setVm.newPass).then(function(data){
                    console.log(data);
                    setVm.alerts[3].visible = true;
                    setVm.newPass = null;
                }, function(err){
                    console.log(err);
                    alert("Error saving Password! Please try again!");
                });
            }
            else
            alert("New Password and Confirmed Password do not match!");
        };

        settingsService.getProfile().then(function(data){
            setVm.info = data;
            setVm.info.open_time = new Date(data.open_time);
            setVm.info.close_time = new Date(data.close_time);
            console.log(setVm.info);
        }, function(err){
            console.log(err);
        });

        settingsService.getSettings().then(function(data){
            setVm.app_set = data;
            console.log(setVm.app_set);
        }, function(err){
            console.log(err);
        });

        setVm.updateProfile = function(){

                settingsService.updateProfile(setVm.info).then(function(data){
                    setVm.alerts[0].visible = true;
                    console.log(data);
                }, function(err){
                    console.log(err);
                });

        };

        setVm.updateSettings = function(flag){
            if(flag){
                settingsService.updateSettings(setVm.app_set).then(function(data){
                    setVm.alerts[1].visible = true;
                    console.log(data);
                }, function(err){
                    console.log(err);
                });
            } else
            alert("Overbook Capacity can't be less than Restaurant Capacity")
        };

        setVm.hideAlert = function(x){
            setVm.alerts[x].visible = false;
        }
    }

})();