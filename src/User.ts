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
};