const Contact = require('../model/Contact')
const databaseMySql = require('../config/db');
FormatPhone = require('../utils/format')

module.exports = {
    async createmacapa(req, res){
        try {
            await databaseMySql.sync();
           
            const contacts = req.body.contacts
            let resultCreate

            for (let i = 0; i < contacts.length; i++) {
                const item = contacts[i];
                let phone = FormatPhone(item.cellphone);
                let name = item.name.toUpperCase();
                
                resultCreate = await Contact.create({
                    nome: name || '',
                    celular: phone || '', 
                })                    
            }

            if(resultCreate){
                res.status(200).send('Dados Inseridos com sucesso!')
            }           
            
        } catch (error) {
            res.status(500).send('Erro ao inserir os dados')
            console.log(error)
        }
    }
}