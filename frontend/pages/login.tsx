import { FormEvent, useRef, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '../providers/AuthProvider';
import axios from 'axios';
import { NextResponse } from 'next/server';

type Props = {};

const Login: React.FC<Props> = () => {
  const { isLoggedIn, login } = useAuth();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setSubmitting] = useState(false);
  const [role, setRole] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    setSubmitting(true);

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    useEffect(() => {
      const getRole = async () => {
        const res = await axios.get('http://localhost:3001/myinfo');
        const prop = await res.data;
        setRole(prop);
      };
      getRole();
    }, []);

    if (!email || !password) {
      toast.error('Please enter email and password');
      setSubmitting(false);
      return;
    }

    try {
      await login(email, password);
      toast.success('Log in successfully!');
      NextResponse.redirect('mycourse');
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
            เข้าสู่ระบบ
          </h1>
          <div className="form-floating my-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              name="email"
              placeholder="name@example.com"
              ref={emailRef}
            />
            <label htmlFor="floatingInput">Email </label>
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
            เข้าสู่ระบบ
          </button>
        </form>
        <div className="row justify-content-center mt-3">
          <div className="col-3 text-center">
            <a href="register" className="text-dark underline-offset-1">
              สมัครใช้บริการ
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
