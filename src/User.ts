<<<<<<< HEAD
import faker from 'faker';
import { Mappable } from './CustomMap';

// we are using "implements" so class User satisfies all Mappable interface properties and types
export class User implements Mappable {

  name: string;
  location: {
    lat: number;
    lng: number;
  };

  color: string = 'red';

  // faker has lat and lng as strings. 
  // we are requesting numbers
// use parseFloat to convert from strings to numbers

constructor() {
  this.name = faker.name.firstName();
  this.location = {
    lat: parseFloat(faker.address.latitude()),
    lng: parseFloat(faker.address.longitude())
  }
  }
  markerContent(): string{
    return 'User Name: ${this.name}'
  }
=======
import faker from 'faker';


export class User {

  name: string;
  location: {
    lat: number;
    lng: number;
  };


  // faker has lat and lng as strings. 
  // we are requesting numbers
// use parseFloat to convert from strings to numbers

constructor() {
  this.name = faker.name.firstName();
  this.location = {
    lat: parseFloat(faker.address.latitude()),
    lng: parseFloat(faker.address.longitude())
  }
  }
>>>>>>> 1893759c39fd4fe608b9cc143765164a92ecc859
};