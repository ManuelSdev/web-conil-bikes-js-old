import { query } from '../db'

export const findUserByEmail = async ({ email }) => {
   const text = 'SELECT user_id FROM App_user WHERE user_email=$1'
   const values = [email]
   const rowMode = 'array'
   const { rows } = await query({ text, values, rowMode })
   const [userId] = rows.flat()
   return userId
}
