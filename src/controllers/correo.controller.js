import { pool } from "../db.js";

export const getCorreos = async(req, res) =>{
  const [rows] = await pool.query('SELECT*FROM mensajes')
  res.send([rows])
} ;

export const getCorreo = async (req, res) => {
  const [rows] = await pool.query("SELECT*FROM mensajes WHERE id =?",[
    req.params.id
  ]);
  if(rows.length<=0)return res.status(404).json({
    message:"not fund",
  })
  res.json(rows[0]);
};

export const createCorreo = async(req, res) => {
  const {name,description} = req.body
  const [rows] =await pool.query('INSERT INTO mensajes (name, description) VALUES (?,?)',[name, description])
  res.send({
    id: rows.insertId,
    name,
    description,
  })
};
export const deleteCorreo = async (req, res) => {
  const [result]= await pool.query("DELETE FROM mensajes WHERE id =?",[
    req.params.id
  ]);
  console.log(result);
  if(result.affectedRows <= 0)return res.status(404).json({
    message: "not fund",
  });
  res.sendStatus(204);
};

export const updateCorreo = async(req, res) =>{
  const {id}=req.params
  const {name, description}=req.body
  const [result] =await pool.query('UPDATE mensajes SET name = IFNULL(?,name),description= IFNULL(?,description) WHERE id = ?',[name,description,id])
  if (result.affectedRows===0)return res.status(404).json({
    message:"NOT Found"
  })
  const [rows] = await pool.query('SELECT *FROM mensajes WHERE id=?',[id])
  res.json(rows[0])
};
