import { FormEvent, useRef, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '../providers/AuthProvider';
import { api } from '../utils/axios';
import { NextResponse } from 'next/server';
import { useRouter } from 'next/router';
import Link from 'next/link';

type Props = {};

const Login: React.FC<Props> = () => {
  const router = useRouter();
  const { isLoggedIn, login } = useAuth();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setSubmitting] = useState(false);
  const [role, setRole] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    setSubmitting(true);

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!username || !password) {
      toast.error('Please enter username and password');
      setSubmitting(false);
      return;
    }

    try {
      await login(username, password);
      toast.success('Log in successfully!');
      router.push('/');
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
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
            Login
          </h1>
          <div className="form-floating my-3">
            <input
              type="username"
              className="form-control"
              id="floatingInput"
              name="username"
              placeholder="name@example.com"
              ref={usernameRef}
            />
            <label htmlFor="floatingInput">username </label>
          </div>

          <div className="form-floating my-3">
            <input
              name="password"
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              ref={passwordRef}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button
            className="text-xl content-center"
            type="submit"
            disabled={isSubmitting}
          >
            Sign In
          </button>
        </form>
        <div className="row justify-content-center mt-3">
          <div className="col-3 text-center">
            <Link href="register" className="text-dark underline-offset-1">
              Register
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
