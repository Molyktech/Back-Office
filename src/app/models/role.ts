import { Privilege } from './privilege';

export class Role{
    id:number;
    institutionID:number;
    name:string;
    code:string;
    privileges:Privilege[]
}