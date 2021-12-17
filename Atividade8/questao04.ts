class Postagem {
    chave: number;
    texto: string;
    like: number;

constructor(id: number, texto: string, like: number) {
    this.chave = id;
    this.texto = texto;
    }
    curtir(like: number): void {
        this.like = like;
    }
    String(): string {
    var log = this.texto;
    return log + "numero de Likes: " + this.like.String();
    }
}

class Microblog {
    array: Postagem[] = [];

postar(post: Postagem): void {
    if (this.consultaIndice(post.chave) == -1)
    this.array.push(post);
    }

consultaIndice(numero: number): number {
    let indice: number = -1;
    for (let i: number = 0; i < this.array.length; i++) {
    if (this.array[i].chave == numero) {
       indice = i;
        break;
            }
        }
    return indice;
    }

excluir(numero: number): void {
   let indice: number = this.consultaIndice(numero);

    for (let i: number = indice; i < this.array.length; i++) {
            this.array[i] = this.array[i + 1];
        }
        
    }

curtir(like: number, chave: number): void {
    if (this.consultaIndice(chave) != -1)
        this.array[this.consultaIndice(chave)].curtir(like);
        else { console.log("Erro", chave, ": Post nao encontrado") }
    }

maisCurtida(): Postagem {
    var maior = 0, maiorPost;
    for (let post of this.array) {
        if (post.like > maior) {
            maior = post.like;
               }
        }
        return maiorPost;
    }

String(): string {
    let logTotal: string = "   ";
    for (let post of this.array) {
        logTotal += post.String() + "  ";
        }
        return logTotal;
    }

imprimirPosts(): void {
    console.log(this.array)
    }
}
let blog: Microblog = new Microblog();

let post1: Postagem = new Postagem(1, "texto de bom dia!");
blog.postar(post1);

let post2: Postagem = new Postagem(2, "texto de boa tarde!");
blog.postar(post2);

let post3: Postagem = new Postagem(3, "texto de boa noite!");
blog.postar(post3);

let post4: Postagem = new Postagem(4, "texto com fotos");
blog.postar(post4);

blog.curtir(500, 1);
blog.curtir(250, 2);
blog.curtir(550, 3);
blog.curtir(600, 4);

console.log(blog.String());
