export default class BusinessError extends Error {
    code:number;
    constructor(code:number,msg:string){
       super(msg)
       this.code =code;
    }
}
