import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Ride } from './rides';

export class RidesData implements InMemoryDbService {

    createDb() {
        const rides: Ride[] = [
            {
                'id': 1,
                'startsFrom': 'Hitech City',
                'endTo': 'SR Nagar',
                'startDate': '7-12-2018',
                'startTime' :'',
                'owner': 'Subbu',
                'seats': 1
            },
            {
                'id': 2,
                'startsFrom': 'Raidurgam',
                'endTo': 'Kukatpally',
                'startDate': '8-12-2018',
                'startTime' :'5:30',
                'owner': 'Venu',
                'seats': 2
            },
            {
                'id': 3,
                'startsFrom': 'DLF',
                'endTo': 'Lingam pally',
                'startDate': '9-12-2018',
                'startTime' :'7:00',
                'owner': 'Pami',
                'seats': 3
            },
            {
                'id': 4,
                'startsFrom': 'Wave Rock',
                'endTo': 'Mani Konda',
                'startDate': '10-12-2018',
                'startTime' :'8:00',
                'owner': 'Suresh',
                'seats': 4
            },
            {
                'id': 5,
                'startsFrom': 'Finacial District',
                'endTo': 'LB Nagar',
                'startDate': '11-12-2018',
                'startTime' :'9:00',
                'owner': 'Hari',
                'seats': 5
            }
        ];
        return { rides };
    }
}
