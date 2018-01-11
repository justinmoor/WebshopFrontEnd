export class User
{
    constructor(
        public id?:number,
        public voornaam?:string,
        public achternaam?:string,
        public email?:string,
        public wachtwoord?:string,
        public admin?:boolean
    ){
        
    }
}