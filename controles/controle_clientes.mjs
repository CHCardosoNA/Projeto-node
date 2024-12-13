import Cliente from "../modelos/cliente.mjs";

async function novo(req, res) {
    const criado = await Cliente.create({
        nome: req.body.nome,
        idade: req.body.idade
    });
    res.json(criado);
}

async function todos(req, res) {
    const todos = await Cliente.findAll();
    res.json(todos);
}

async function um(req, res){
    const um = await Cliente.findOne({
        where: {id: req.params.id }
    });
    res.json(um);
}

async function altera(req, res) {
    const cli = await Cliente.findOne({
        where: { id: req.body.id }
    });
    cli.nome = req.body.nome;
    cli.idade = req.body.idade;
    await cli.save();
    res.json(cli);
}

async function exclui(req, res) {
    const cli = await Cliente.findOne({
        where: { id: req.body.id }
    });
    await cli.destroy();
    res.json(cli);
}

export { novo, todos, altera, exclui, um };