<<<<<<< HEAD
// import { User } from './User';
// import { Company } from './Company'

// const user = new User();
// console.log(user);

// const company = new Company();
// console.log(company);


import { CustomMap  } from "./CustomMap";
import { Company } from "./Company";
import { User } from './User';

// const customMap = new CustomMap();
// console.log(customMap)


const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

// customMap.addUserMarker(user);
// customMap.addCompanyMarker(company);

customMap.addMarker(user);
customMap.addMarker(company);

console.log(company)
=======
import { User } from './User';

const user = new User();
console.log(user);

>>>>>>> 1893759c39fd4fe608b9cc143765164a92ecc859
