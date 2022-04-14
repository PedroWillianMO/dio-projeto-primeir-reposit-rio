function getAdmins(map) {
    let admins = [];
    for([key, value] of map){
        if(value=='Admin'){
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Pedro', 'Admin');
usuarios.set('Tiago', 'User');
usuarios.set('Fernanda', 'Admin');
usuarios.set('Renata', 'Admin');

console.log(getAdmins(usuarios));