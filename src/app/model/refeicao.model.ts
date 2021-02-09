export class Refeicao{
    id: string;
    nome: string;
	categoria: string;
	area: string;
	imagem: string;
    instrucoes: string;
    
    constructor(id: string,nome: string,categoria: string,area: string,imagem: string,instrucoes: string){
    this.id = id;
    this.nome = nome;
    this.categoria = categoria;
    this.area = area;
    this.imagem = imagem;
    this.instrucoes = instrucoes;
    }
}