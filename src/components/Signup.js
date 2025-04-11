import axios from 'axios';
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Loading status changed:", loading);
  }, [loading]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axios.post('https://67dc8ab9e00db03c40685892.mockapi.io/users', data);
      console.log('Success', data);
      reset(); // Clear form
    } catch (error) {
      console.error('Error', error);
    } finally {
      setLoading(false);
    }
  };

  const password = watch("password");

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder='Email'
          {...register("email", {
            required: "Email is required"
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          type='password'
          placeholder='Password'
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters"
            }
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <input
          type='password'
          placeholder='Confirm Password'
          {...register("confirmPassword", {
            required: "Confirm password is required",
            validate: value =>
              value === password || "Passwords do not match",
            minLength: {
              value: 8,
              message: "Confirm password must be at least 8 characters"
            }
          })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
