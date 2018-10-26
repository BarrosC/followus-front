export class PessoaVO{
    constructor(
        public id?:number,
        public nome?:string,
        public idade?:number,
        public tipoEsportista?:string,
        public userId?:string,
        public dtCriacao?:Date,
        public foto?:string
    ){}
}