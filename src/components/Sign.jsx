import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styling from './Sign.module.css';
import Header from './Header';
import { Link } from 'react-router-dom';

const Sign = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const [registrationDone, setRegistrationDone] = useState(false);

  const onSubmit = (data) => {
    console.log(data);

    setRegistrationDone(true);
  };

  return (
    <div>
      <Header></Header>
      <h1 className={styling.header}>Create New Account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styling.formik}>
      {registrationDone && (
          <div className={styling.popup}>
            <p>Registration successful!</p>
          </div>
        )}
        <div>
          <input type="text" className={styling.data} placeholder="Your Name"{...register('NAME', {required: 'Enter Your Name',minLength: {value: 3,message: 'Name is too small ',},maxLength: {value: 30, message: 'Name is too large',}})}/>
          <p>{errors.NAME?.message}</p>
        </div>
        
            <br />
            <input type="email"  className={styling.data} placeholder='Your Email' {...register('ENTEREMAIL',{required:'Enter Your Email ', pattern:{value :/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/,message:'Enter a valid Email'}})} />
            <p>{errors.ENTEREMAIL?.message}</p>
            <br />

            <input type="Password"  className={styling.data} placeholder='Password' {...register('ENTERPASSWORD',{required:'Password is required',minLength:{ value: 10, message:'Password is too small'},pattern:{value: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,message: 'Your Password do not have an special character '}})} />
            <p>{errors.ENTERPASSWORD?.message}</p>
            <br />

        
        <input type="Password" className={styling.data} placeholder="Re-Enter your password"{...register('RENTERPASSWORD', {required: 'Re-Enter your password',validate: (value) =>value === getValues('ENTERPASSWORD') ||'RE-ENTER YOUR PASSWORD CORRECTLY',})}/>

        <p>{errors.RENTERPASSWORD?.message}</p>
        <br />
        <button className={styling.signup} type="submit">
          SIGN UP
        </button>
        <p className={styling.redirect}>
          You are already a member? <Link to="/">Click Here</Link>
        </p>

       
      </form>
    </div>
  );
};

export default Sign;
