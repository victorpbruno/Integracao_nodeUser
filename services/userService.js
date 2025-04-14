const cliente = require('../config/db');

exports.getAllUsers = async (req, res) => {
    try {
        let { data } = await cliente.supabase.from('usuario').select('*');
        res.send(data);
    } catch(error) {
        console.error(error);
    }
};

exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data, error } = await cliente.supabase
            .from('usuario')
            .select('*')
            .eq('id', id)
            .single();
        if (error) throw error;
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Erro ao buscar usuário por ID.' });
    }
};

exports.createUser = async (req, res) => {
    try {
        const { nome, email } = req.body;
        const { data, error } = await cliente.supabase
            .from('usuario')
            .insert([{ nome, email }])
            .select()
            .single();
        if (error) throw error;
        res.status(201).send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Erro ao criar usuário.' });
    }
};
