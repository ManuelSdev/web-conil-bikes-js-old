import { query } from '../db'

export const findUserByEmail = async ({ email }) => {
   const text = 'SELECT * FROM App_user WHERE user_email=$1'
   const values = [email]
   const rowMode = 'array'
   const {
      rows: [user],
   } = await query({ text, values })
   // const [user] = rows.flat()
   //console.log('userId en findUserByEmail -> ', user)
   return user
}
export const findUserIdByEmail = async ({ email }) => {
   console.log('email en findUserIdByEmail -> ', email)
   const text = 'SELECT user_id FROM App_user WHERE user_email=$1'
   const values = [email]
   const rowMode = 'array'
   try {
      const { rows } = await query({ text, values, rowMode })
      console.log('rows en findUserIdByEmail -> ', rows)
      const [userId] = rows.flat()
      return userId
   } catch (error) {
      throw new Error(error)
   }
}
export const findUserRole = async ({ email }) => {
   const text = 'SELECT user_role FROM App_user WHERE user_email=$1'
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
