'use strict';

angular.module('workingHoursTrello')
	.directive('yearlyDir', function ($rootScope, apiS, monthS, yearS, nationalityS, holidayS) {
		return {
			link : function(scope, element, attrs){

				// Initialize Function Section
				var initialize = function(){
					let moment_original = $rootScope.moment.clone();
					scope.thisDate = moment_original;
					scope.months = [
						{month: "Jan", value: 1},{month: "Feb",value:2},
						{month:"Mar", value: 3},{month:"Apr", value: 4},{month:"May", value: 5},{month:"Jun", value: 6},
						{month: "Jul", value: 7},{month:"Aug", value:8},{month:"Sep", value: 9},{month:"Oct",value:10}, {month:"Nov",value:11},{month:"Dec", value:12}
						];	
				};
				initialize();

				scope.getMonthlyToWork = (memberId, month) => {
					let country = nationalityS.membersNationality(memberId, $rootScope.calendarCards, $rootScope.calendarLists);
					let toWork = monthS.monthsNeedtoWork(scope.thisDate.year(), month); /** get the total days to work whith holiday not a factor  */
					return holidayS.datesWithoutHoliday(country, $rootScope.dt.year, $rootScope.calendarLists, $rootScope.calendarCards, toWork);
				}
				scope.getYearlyToWork = (memberId) => {
					let country = nationalityS.membersNationality(memberId, $rootScope.calendarCards, $rootScope.calendarLists);
					let toWork = yearS.yearsNeedToWork($rootScope.dt.year, scope.months); /** get the total days to work whith holiday not a factor  */
					return holidayS.datesWithoutHoliday(country, $rootScope.dt.year, $rootScope.calendarLists, $rootScope.calendarCards, toWork);
				}
				scope.showMonthly = (work, toWork) => (work != 0) ? work+' / '+toWork : '-';

			},
			restrict: "EA",
			replace: true,
			scope: {},
			templateUrl: "../template/statistics/directives/yearlyDir.html" /** if Initialize from workTimist.html */
			// templateUrl: "../../template/statistics/directives/yearlyDir.html"
		}
	});
