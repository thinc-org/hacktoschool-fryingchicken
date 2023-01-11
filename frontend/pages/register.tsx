import { FormEvent, useRef, useState } from 'react';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../providers/AuthProvider';
import { ErrorDto } from '../types/dto';
import { api } from '../utils/axios';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Register: React.FC = () => {
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    setSubmitting(true);

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const passwordConfirm = passwordConfirmRef.current?.value;
    const role = roleRef.current?.value;

    if (!username || !password || !passwordConfirm) {
      toast.error('Please complete the form');
      setSubmitting(false);
      return;
    }

    if (password !== passwordConfirm) {
      toast.error('Passwords do not match');
      setSubmitting(false);
      return;
    }

    try {
      // console.log(username, password);
      await api.post(`/users`, {
        username,
        password,
        role,
      });
      console.log('Done!!');
      toast.success('Account created!');
      router.push('login');
    } catch (err) {
      if (err instanceof AxiosError) {
        const { response } = err as AxiosError<ErrorDto>;
        const message = response?.data.message;
        toast.error(message || 'Something went wrong');
        return;
      }
      toast.error('Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  if (isLoggedIn) return <div></div>;
  return (
    <main className="px-[8%] my-[3%] flex flex-col justify-between overflow-x-hidden md:flex-row text-center md:text-left">
      <div className="">
        <form onSubmit={handleSubmit}>
          <h1 className="text-cyan-dark font-bold text-center text-4xl">
            Register
          </h1>
          <div className="form-floating my-3 form-group">
            <input
              type="username"
              className="form-control"
              id="username"
              placeholder="name@example.com"
              ref={usernameRef}
            />
            {/* Label must be below Field and Error Message */}
            <label htmlFor="username">username </label>
          </div>

          {/* Password Form */}
          <div className="form-floating my-3 form-group">
            <input
              type="password"
              className="form-control"
              placeholder="password"
              id="password"
              ref={passwordRef}
            />
            <label htmlFor="password">Password</label>
          </div>

          {/* Confirmation Password Form */}
          <div className="form-floating my-3 form-group">
            <input
              type="password"
              className="form-control"
              id="conPassword"
              placeholder="password"
              ref={passwordConfirmRef}
            />
            <label htmlFor="conPassword">Confirm Password</label>
          </div>

          {/* Role Form */}
          <div className="form-floating my-3 form-group">
            <input
              type="role"
              className="form-control"
              id="role"
              placeholder="role"
              ref={roleRef}
            />
            <label htmlFor="role">Role</label>
          </div>
          <button
            className="text-xl content-center"
            type="submit"
            disabled={isSubmitting}
          >
            Sign Up
          </button>
        </form>
        <div className="row justify-content-center mt-3">
          <div className="col-3 text-center">
            <Link href="login" className="text-dark underline-offset-1">
              Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
