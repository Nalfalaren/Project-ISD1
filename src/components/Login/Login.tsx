import { Paper, Container, TextField, Button, Icon } from '@mui/material';
import React, { useContext } from 'react';
import { IUserInfo } from '../../interface/IUSerInfo';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ClickTheme.tsx';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import schema from '../../validation/SignInVal.ts';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const click = useContext(ThemeContext)
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<IUserInfo>({resolver: zodResolver(schema)})

  const submitForm = async (data : IUserInfo) => {
    console.log(data);
    try{
    const response = await fetch('http://localhost:8686/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    const userLogIn = await response.json();
    console.log("Server response:", userLogIn);
    navigate('/')
    }catch(error){
      console.error(error);
    }
  }
  
  return (
    <div>
      <Container>
        <Paper elevation={3} className='md:px-[30px] md:py-[20px] md:w-[600px] w-8/10 py-[10px] px-[15px]  absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[50%]'>
          <h1 className='sm:text-3xl font-bold pb-8 text-2xl '>Đăng nhập</h1>
          <form className='flex flex-col justify-center align-center gap-[20px] text-lg' onSubmit={handleSubmit(submitForm)}>
            <label htmlFor='account' className='text-lg'>Số điện thoại hoặc địa chỉ email *</label>
            <TextField className='bg-login_input' id="outlined-basic" label="Tài khoản" variant="outlined" type='text' {...register("email")}/>
            {errors.email && <span className='text-red-500 font-bold'>{errors.email.message}</span>}
            <label htmlFor='password' className=''>Mật khẩu *</label>
            <div className='relative'>
            <TextField className='bg-login_input w-full' id="filled-basic" label="Password" variant="outlined" type={click.isClicked ? 'text' : 'password'} {...register("password")}/>
            {click.isClicked ? <VisibilityIcon onClick={click.handleClick} className='absolute right-3 bottom-4'></VisibilityIcon> : <VisibilityOffIcon className='absolute right-3 bottom-4' onClick={click.handleClick}></VisibilityOffIcon>}
            </div>
            {errors.password && <span className='text-red-500 font-bold'>{errors.password.message}</span>}
            <Button variant="contained" type='submit' className='md:w-3/10' style={{backgroundColor: '#9A917A', paddingBlock: '.8rem'}}>Đăng nhập</Button>
          </form>
          <div className='mt-[20px]'>
          <Link to="/forgot-password" className='font-bold text-f_pw'>Quên mật khẩu</Link>
          </div>
          <hr className='my-[30px] w-full'></hr>
          <div className='text-f_pw text-center'>
            <span>Chưa có tài khoản?<Link to="/sign_up"className='font-bold ml-[5px]'>Đăng ký</Link></span>
          </div>
        </Paper>
      </Container>
      {}
    </div>
  )
}

export default Login