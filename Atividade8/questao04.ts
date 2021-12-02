class Postagem {
    id: number;
    texto: string;
    likes: number;

constructor(id: number, texto: string) {
    this.id = id;
    this.texto = texto;
    }
    curtir(likes: number): void {
        this.likes = likes;
    }
    toString(): string {
    var log = this.texto;
    return log + "numero de Likes: " + this.likes.toString();
    }
}

class Microblog {
    arrayPosts: Postagem[] = [];

postar(post: Postagem): void {
    if (this.consultaIndice(post.id) == -1)
    this.arrayPosts.push(post);
    }


consultaIndice(numero: number): number {
    let indice: number = -1;
    for (let i: number = 0; i < this.arrayPosts.length; i++) {
    if (this.arrayPosts[i].id == numero) {
       indice = i;
        break;
            }
        }
    return indice;
    }


excluir(numero: number): void {
   let indice: number = this.consultaIndice(numero);


    for (let i: number = indice; i < this.arrayPosts.length; i++) {
            this.arrayPosts[i] = this.arrayPosts[i + 1];
        }
        this.arrayPosts.pop();
    }

curtir(likes: number, id: number): void {
    if (this.consultaIndice(id) != -1)
        this.arrayPosts[this.consultaIndice(id)].curtir(likes);
        else { console.log("Erro", id, ": Post nao encontrado") }
    }

maisCurtida(): Postagem {
    var maior = 0, maiorPost;
    for (let post of this.arrayPosts) {
        if (post.likes > maior) {
            maior = post.likes;
            maiorPost = post;
            }
        }
        return maiorPost;
    }

toString(): string {
    let logTotal: string = "   ";
    for (let post of this.arrayPosts) {
        logTotal += post.toString() + "  ";
        }
        return logTotal;
    }

imprimirPosts(): void {
    console.log(this.arrayPosts)
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

console.log(blog.toString());
