export class NoticiaVO{
    constructor(
        public id?:string,
        public titulo?:string,
        public subtitulo?:string,
        public texto?:string,
        public dtCriacao?:Date,
        public autor?:string,
        public imagem?:string
    ){}
}