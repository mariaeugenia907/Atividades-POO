var Postagem = /** @class */ (function () {
    function Postagem(id, texto) {
        this.id = id;
        this.texto = texto;
    }
    Postagem.prototype.curtir = function (likes) {
        this.likes = likes;
    };
    Postagem.prototype.toString = function () {
        var log = this.texto;
        return log + "numero de Likes: " + this.likes.toString();
    };
    return Postagem;
}());
var Microblog = /** @class */ (function () {
    function Microblog() {
        this.arrayPosts = [];
    }
    Microblog.prototype.postar = function (post) {
        if (this.consultaIndice(post.id) == -1)
            this.arrayPosts.push(post);
    };
    Microblog.prototype.consultaIndice = function (numero) {
        var indice = -1;
        for (var i = 0; i < this.arrayPosts.length; i++) {
            if (this.arrayPosts[i].id == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Microblog.prototype.excluir = function (numero) {
        var indice = this.consultaIndice(numero);
        for (var i = indice; i < this.arrayPosts.length; i++) {
            this.arrayPosts[i] = this.arrayPosts[i + 1];
        }
        this.arrayPosts.pop();
    };
    Microblog.prototype.curtir = function (likes, id) {
        if (this.consultaIndice(id) != -1)
            this.arrayPosts[this.consultaIndice(id)].curtir(likes);
        else {
            console.log("Erro", id, ": Post nao encontrado");
        }
    };
    Microblog.prototype.maisCurtida = function () {
        var maior = 0, maiorPost;
        for (var _i = 0, _a = this.arrayPosts; _i < _a.length; _i++) {
            var post = _a[_i];
            if (post.likes > maior) {
                maior = post.likes;
                maiorPost = post;
            }
        }
        return maiorPost;
    };
    Microblog.prototype.toString = function () {
        var logTotal = "   ";
        for (var _i = 0, _a = this.arrayPosts; _i < _a.length; _i++) {
            var post = _a[_i];
            logTotal += post.toString() + "  ";
        }
        return logTotal;
    };
    Microblog.prototype.imprimirPosts = function () {
        console.log(this.arrayPosts);
    };
    return Microblog;
}());
var blog = new Microblog();
var post1 = new Postagem(1, "texto de bom dia!");
blog.postar(post1);
var post2 = new Postagem(2, "texto de boa tarde!");
blog.postar(post2);
var post3 = new Postagem(3, "texto de boa noite!");
blog.postar(post3);
var post4 = new Postagem(4, "texto com fotos");
blog.postar(post4);
blog.curtir(500, 1);
blog.curtir(250, 2);
blog.curtir(550, 3);
blog.curtir(600, 4);
console.log(blog.toString());
