export class NoticiaVO{
    constructor(
        public id?:number,
        public titulo?:string,
        public sutitulo?:string,
        public texto?:string,
        public dtCriacao?:Date,
        public autor?:string,
        public imagem?:string
    ){}
}