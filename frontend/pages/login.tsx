import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

import { useAuth } from '../providers/AuthProvider';

export default function Login() {
  const router = useRouter();
  const { isLoggedIn, login } = useAuth();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setSubmitting] = useState(false);

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

  if (isLoggedIn) router.push('/');
  return (
    <main className="px-[8%] my-[3%] flex flex-col mx-auto justify-between overflow-x-hidden md:flex-row text-center md:text-left">
      <div className="mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center daisy-form-control"
        >
          <h1 className="text-cyan-dark font-bold text-center text-4xl">
            Login
          </h1>
          <label className="daisy-input-group daisy-input self-start p-0 my-[5%]">
            <span>username</span>
            <input
              type="text"
              placeholder="username"
              required
              ref={usernameRef}
              className="daisy-input daisy-input-bordered"
            />
          </label>
          <label className="daisy-input-group p-0">
            <span>password</span>
            <input
              type="password"
              placeholder="password"
              required
              ref={passwordRef}
              className="daisy-input daisy-input-bordered"
            />
          </label>

          <button
            className="text-cyan-dark font-bold text-base bg-cyan-light rounded-full max-w-max px-[5%] py-[2%] my-[4%] hover:bg-cyan-dark hover:text-white transition-all duration-300"
            type="submit"
            disabled={isSubmitting}
          >
            Sign In
          </button>
        </form>
        <div className="row justify-content-center mt-3">
          <div className="col-3 text-center">
            <Link
              href="register"
              className="text-dark underline-offset-1 hover:underline"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
