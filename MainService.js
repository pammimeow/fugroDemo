app.service('mainService', function($http, $q, toastr) {
    this.employees = [
      "Lara Jordan",
      "Andy Ferris",
      "Shane Rowatt",
      "Adrian Howchin",
      "Ross Batten",
      "Mark Cocquio",
      "Ryan Fechney",
      "Grant Jennings",
      "Glen Ross Sampson",
      "Jacapo Sabbatini",
      "Johan Resenbrink",
      "Andrew Goodchild",
      "Andrew Hickey",
      "Javier Panchi",
      "Kenji Suzuoki",
      "Heather Roberts",
      "Timothy Horvat",
      "Lightman Wang",
      "Courtney Sowter",
      "Laurence Proctor",
      "Clancy Sinclair",
      "Mehdi Releh",
      "Reza Farid",
      "Ross Cruickshank",
      "Nigel Stewart"
    ];

    this.parkingSpots = [
      "Bay # 3 - outside",
      "Bay # 4 - outside",
      "Bay # 5 - outside",
      "Bay # 6 - outside",
      "Bay # 43 - basement park",
      "Bay # 45 - basement park",
      "Bay # 46 - basement park",
      "Bay # 47 - basement park",
      "Bay # 48 - outside(next to basement entrance)",
      "Bay # 49 - outside(next to basement entrance)"      
    ];

    this.allocations = [];

});