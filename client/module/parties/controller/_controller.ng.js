angular
    .module('parties.controller', [])
    .controller('partiesController', partiesController);

function partiesController($scope, $meteor) {
    $scope.parties = $meteor.collection(Parties);

    $scope.newParty = {
        name: '',
        description: ''
    };

    $scope.addnewParty = function () {
        $scope.parties.save($scope.newParty);

        $scope.newParty.name = '';
        $scope.newParty.description = '';
    };

    $scope.remove = function (party) {
        $scope.parties.remove(party);
    };

    $scope.removeAll = function () {
        $scope.parties.remove();
    };
}