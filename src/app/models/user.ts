import { Institution } from './institution';
import { Role } from './role';
export class User {
  id: number;
  institutionID: number;
  firstName: string;
  middleName: string;
  lastName: string;
  userName: string;
  phoneNo: string;
  email: string;
  institution: Institution;
  userType: string;
  role: Role;
  roleID: number;
  Password: string;
  status: string;
}
