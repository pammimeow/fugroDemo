app.controller('globalController', function($scope, $mdBottomSheet, $location, $mdSidenav,
 $mdDialog, $interval,  mainService, toastr){

  $scope.isLoaded = false;
  $scope.criticalNotif = {}
  $scope.criticalNotif.display = false;

  $interval(function() {
      mainService.getCriticalNotif().then(function (response) {     
          console.log(response); 
          $scope.criticalNotif = response.data;
          $scope.criticalNotif.display = true;
          toastr.error($scope.criticalNotif.message);
        }, function (error) {
      });

        console.log('update with timeout fired')
  }, 3000);

  mainService.getDataStructure().then(function (response) {     
          console.log(response);    
           mainService.allDevices = response;
           $scope.categories = [
                                  {
                                    "categoryName" : "All",
                                    "devices" : response
                                  }
                               ];

        }, function (error) {
            $location.path('/connectionLost');
  });

	$scope.menu = [
    {
      link : 'dashboard',
      title: 'Dashboard',
      icon: 'dashboard'
    },
    {
      link : 'management',
      title: 'Management',
      icon: 'settings', 
      submenu : [
        {
          title : "Data format",
          link : "dataformat", 
          menuItems : [
            {
              link : 'newDataFormat',
              title: 'new',              
            },
            {
              link : 'manageDataFormat',
              title: 'Manage',
            }
          ]
        },
        {
          title : "Sensors",
          link : "sensors", 
          menuItems : [
            {
              link : 'newSensor',
              title: 'new',              
            },
            {
              link : 'manageSensors',
              title: 'Manage',
            }
          ]
        },
        {
          title : "Devices",
          link : "devices", 
          menuItems : [
            {
              link : 'newDevice',
              title: 'new',              
            },
            {
              link : 'manageDevices',
              title: 'Manage',
            }
          ]
        },
        {
          title : "Categories",
          link : "categories", 
          menuItems : [
            {
              link : 'newCategory',
              title: 'new',              
            },
            {
              link : 'manageCategories',
              title: 'Manage',
            }
          ]
        }
      ]
    }
  ];
  $scope.admin = [
    {
      link : '#analytics',
      title: 'Analytics',
      icon: 'insert_chart'
    }
  ];

  //$scope.categories = mainService.deviceMenucategories;
  $scope.devices = mainService.devices;
  $scope.devices[0].isOpened = true;

  console.log("categories "+JSON.stringify($scope.categories));

  $scope.alert = '';
  $scope.showListBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
      template: '<md-bottom-sheet class="md-list md-has-header"> <md-subheader>Settings</md-subheader> <md-list> <md-item ng-repeat="item in items"><md-item-content md-ink-ripple flex class="inset"> <a flex aria-label="{{item.name}}" ng-click="listItemClick($index)"> <span class="md-inline-list-icon-label">{{ item.name }}</span> </a></md-item-content> </md-item> </md-list></md-bottom-sheet>',
      controller: 'ListBottomSheetCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' clicked!';
    });
  };
  
  $scope.showAdd = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      template: '<md-dialog aria-label="Mango (Fruit)"> <md-content class="md-padding"> <form name="userForm"> <div layout layout-sm="column"> <md-input-container flex> <label>First Name</label> <input ng-model="user.firstName" placeholder="Placeholder text"> </md-input-container> <md-input-container flex> <label>Last Name</label> <input ng-model="theMax"> </md-input-container> </div> <md-input-container flex> <label>Address</label> <input ng-model="user.address"> </md-input-container> <div layout layout-sm="column"> <md-input-container flex> <label>City</label> <input ng-model="user.city"> </md-input-container> <md-input-container flex> <label>State</label> <input ng-model="user.state"> </md-input-container> <md-input-container flex> <label>Postal Code</label> <input ng-model="user.postalCode"> </md-input-container> </div> <md-input-container flex> <label>Biography</label> <textarea ng-model="user.biography" columns="1" md-maxlength="150"></textarea> </md-input-container> </form> </md-content> <div class="md-actions" layout="row"> <span flex></span> <md-button ng-click="answer(\'not useful\')"> Cancel </md-button> <md-button ng-click="answer(\'useful\')" class="md-primary"> Save </md-button> </div></md-dialog>',
      targetEvent: ev,
    })
    .then(function(answer) {
      $scope.alert = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.alert = 'You cancelled the dialog.';
    });
  };

  $scope.selectedItem = $scope.menu[0].title;
  $scope.changeSelectedItem = function(title) {
    $scope.selectedItem = title;
  }
});