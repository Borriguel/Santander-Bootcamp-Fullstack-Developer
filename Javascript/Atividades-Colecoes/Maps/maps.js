const usuarios = new Map();
usuarios.set("Batman", "Admin");
usuarios.set("Papa-Léguas", "Admin");
usuarios.set("Tyler Durden", "User");
usuarios.set("Sue Storm", "User");


function getAdmins(usuarios) {
    let admins = [];
    for ([chave, valor] of usuarios) {
        if (valor === "Admin"){
            admins.push(chave);
        }
    }
    return admins;
}

console.log(getAdmins(usuarios));