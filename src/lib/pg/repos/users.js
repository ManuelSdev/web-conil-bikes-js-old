import { query } from '../db'

export const findUserByEmail = async ({ email }) => {
   const text = 'SELECT user_id FROM App_user WHERE user_email=$1'
   const values = [email]
   const rowMode = 'array'
   const { rows } = await query({ text, values, rowMode })
   const [userId] = rows.flat()
   return userId
}

export const addUser = async ({ name, email, phone, role }) => {
   const text =
      'INSERT INTO App_user (user_name,user_email,user_phone,user_role) VALUES ($1,$2,$3,$4) RETURNING user_id'
   const values = [name, email, phone, role]
   const rowMode = 'array'
   const { rows } = await query({ text, values, rowMode })
   const [addedUserId] = rows.flat()
   return addedUserId
}
