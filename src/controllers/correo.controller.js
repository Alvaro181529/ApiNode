import { pool } from "../db.js";

export const getCorreo = async(req, res) =>{
  const [rows] = await pool.query('SELECT*FROM mensajes')
  res.send([rows])
} ;

export const createCorreo = async(req, res) => {
  const {name,description} = req.body
  const [rows] =await pool.query('INSERT INTO mensajes (name, description) VALUES (?,?)',[name, description])
  res.send({
    id: rows.insertId,
    name,
    description,
  })
};
export const updateCorreo = (req, res) => res.send("Actualizacion de datos");
export const deleteCorreo = (req, res) => res.send("Delate de datos");
