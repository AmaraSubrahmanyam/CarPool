/*
* Author: Subramanyam Amara
*/
export class Ride {
    constructor(
        public id?: number,
        public startsFrom = '',
        public endTo = '',
        public startDate = '',
        public startTime = '',
        public owner = '',
        public seats?: number,
        public vehicleType = '',
        public price = '') { }
}