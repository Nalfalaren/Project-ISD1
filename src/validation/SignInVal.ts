import { z, ZodType } from 'zod';
import { IUserInfo } from '../interface/IUSerInfo';

const schema: ZodType<IUserInfo> = z.object({
  username: z.string().min(1, {message: 'Email không được để trống!'}),
  password: z.string().min(8, {message: 'Mật khẩu phải trên 8 kí tự'}),
}).refine((data) => data.username.includes('@gmail.com'), {
  message: "Vui lòng nhập địa chỉ email hợp lệ",
  path: ["account"]
});

export default schema;