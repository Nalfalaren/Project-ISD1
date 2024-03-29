import { z, ZodType } from 'zod';
import { IUserInfo } from '../interface/IUSerInfo';

type OmitRoleId = Omit<IUserInfo, 'role'>;

const schema: ZodType<OmitRoleId> = z.object({
  username: z.string().email({message: 'Tài khoản Email không hợp lệ!'}),
  password: z.string().min(8, {message: 'Mật khẩu phải trên 8 kí tự'}),
})

export default schema;