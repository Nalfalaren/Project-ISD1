import { z } from 'zod';
import { IUserSignUp } from '../interface/IUSerInfo';

const schema: z.ZodType<IUserSignUp> = z.object({
  full_name: z.string().min(1, { message: 'Tên không được để trống!' }).max(100, { message: 'Tên không được vượt quá 100 kí tự' }),
  email: z.string().email({ message: "Vui lòng nhập địa chỉ email hợp lệ" }),
  gender: z.string().min(1, { message: "Vui lòng nhập giới tính!" }),
  phone_number: z.string().min(1, { message: 'Số điện thoại không hợp lệ!' }),
  password: z.string().min(8, { message: 'Mật khẩu phải trên 8 kí tự' }).max(200, { message: 'Mật khẩu quá 200 kí tự' }),
})

export default schema;
