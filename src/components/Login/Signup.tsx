import React, { useContext} from 'react'
import { Paper, Container, TextField, Button } from '@mui/material';
import { ThemeContext } from '../../context/ClickTheme.tsx';
import { Link } from 'react-router-dom';
import { IUserSignUp } from '../../interface/IUSerInfo.ts';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import SuccessfulMessage from './SuccessfulMessage.tsx';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {z } from 'zod';
import schema from '../../validation/SignUpVal.ts';
const Signup = () => {
  const click = useContext(ThemeContext);

  const schema: z.ZodType<IUserSignUp> = z.object({
    userFullName: z.string().min(1, { message: 'Tên không được để trống!' }).max(100, { message: 'Tên không được vượt quá 100 kí tự' }),
    email: z.string().email({ message: "Vui lòng nhập địa chỉ email hợp lệ" }),
    gender: z.string().min(1, { message: "Vui lòng nhập giới tính!" }),
    phoneNumber: z.string().min(1, { message: 'Số điện thoại không hợp lệ!' }),
    password: z.string().min(8, { message: 'Mật khẩu phải trên 8 kí tự' }).max(200, { message: 'Mật khẩu quá 200 kí tự' }),
    confirmPassword: z.string().min(8, { message: 'Mật khẩu phải trên 8 kí tự' }).max(200, { message: 'Mật khẩu quá 200 kí tự' }),
  })

  const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm<IUserSignUp>({resolver: zodResolver(schema)})

  const onInvalid = (errors: any) => console.error(errors)
  const onSubmit = async (data : IUserSignUp) => {
    try {
      console.log("Form submitted with data:", data);
  
      const response : any = await fetch('http://localhost:8686/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("Server response:", result);
  
      click.handleClickSignUp();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  
   
  return (
    <div>
      <Container>
        <Paper elevation={3} className='md:px-[30px] md:py-[20px] md:w-[600px] w-8/10 py-[10px] px-[15px] absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[50%] md:mt-0 mt-[200px]'>
          <h1 className='sm:text-3xl font-bold pb-8 text-2xl text-center'>Đăng ký</h1>
          <form onSubmit={handleSubmit(onSubmit, onInvalid)} >
            <div className='flex flex-col justify-center align-center gap-[10px] text-lg'>
              <div className='flex flex-col justify-center align-center gap-[10px] text-lg'>
                <label htmlFor='Họ và tên' className='text-lg'>Họ và tên *</label>
                <TextField className='bg-login_input ' id="outlined-basic" placeholder='Họ của bạn' variant="outlined" type='text' {...register('full_name', { required: `${errors.full_name}` })} />
                {errors.full_name && (
                  <span className='text-red-500 font-bold text-xs w-full'>{errors.full_name.message}</span>
                )}
                <label htmlFor='Email'>Email *</label>
                <TextField className='bg-login_input' id="filled-basic-email" placeholder="Tên của bạn" variant="outlined" type='text' {...register('email')} />
                {errors.email && <span className='text-red-500 font-bold text-xs'>{errors.email.message}</span>}
                <label htmlFor='Số điện thoại'>Số điện thoại *</label>
                <TextField className='bg-login_input' id="filled-basic-sdt" placeholder="Số điện thoại" variant="outlined" type='text' {...register('phone_number')} />
                {errors.phone_number && <span className='text-red-500 font-bold text-xs'>{errors.phone_number.message}</span>}
              </div>
              <div className='flex flex-col justify-center align-center gap-[10px] text-lg'>
                <label htmlFor='Giới tính'> Giới tính *</label>
                <select className='bg-login_input p-4 border border-0 border-solid border-login_input hover:border-gray' {...register('gender')}>
                  <option selected disabled value="">Giới tính</option>
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                  <option value="Khác">Khác</option>
                </select>
                {errors.gender && <span className='text-red-500 font-bold text-xs'>{errors.gender.message}</span>}
                <label htmlFor='Mật khẩu' {...register('password')}>Mật khẩu *</label>
                <div className='relative'>
                  <TextField className='bg-login_input w-full' id="filled-basic-mk" placeholder="Mật khẩu" variant="outlined" type={click.clickVisibleSignUp ? 'text' : 'password'} {...register('password')} />
                  {click.clickVisibleSignUp ? <VisibilityIcon onClick={click.handleVisibleSignUp} className='absolute right-3 bottom-4'></VisibilityIcon> : <VisibilityOffIcon onClick={click.handleVisibleSignUp} className='absolute right-3 bottom-4'></VisibilityOffIcon>}
                </div>
                {errors.password && <span className='text-red-500 font-bold text-xs'>{errors.password.message}</span>}
                
            </div>
            </div> 
            <div className='flex flex-col justify-between mx-8 mt-8 gap-[10px]'>
              <Button type="submit" variant="contained" className='w-full' style={{ backgroundColor: '#9A917A' }} disabled={isSubmitting}>Đăng ký</Button>
              <Link to="/login" className='p-1 text-f_pw underline w-full text-center'>Đã có tài khoản?</Link>
            </div>
          </form>
        </Paper>
        {click.clickSignUp && <SuccessfulMessage></SuccessfulMessage>}
      </Container>
    </div>
  )
}

export default Signup
