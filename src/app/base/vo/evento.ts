import { PessoaSimplificadaVO } from './pessoa-simplificada';

export class EventoVO{
    constructor(
        public id?:string,
        public titulo?:string,
        public descricao?:string,
        public endereco?:string,
        public dataEvento?:Date,
        public horaEvento?:number,
        public dataCriacao?:Date,
        public distancia?:number,
        public tipoEvento?:string,
        public criador?:PessoaSimplificadaVO,
        public participantes?:Array<PessoaSimplificadaVO>,
        public imagem?:string
    ){}
}