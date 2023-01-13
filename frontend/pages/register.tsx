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
  const roleRef = useRef<HTMLSelectElement>(null);
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

  if (isLoggedIn) router.push('/');
  return (
    <main className="px-[8%] my-[3%] flex flex-col justify-between overflow-x-hidden md:flex-row text-center md:text-left">
      <div className="mx-auto w-[80%] sm:w-[60%] md:w-[40%] lg:w-[20%]">
        <form
          onSubmit={handleSubmit}
          className="items-center daisy-form-control"
        >
          <h1 className="text-cyan-dark font-bold text-center text-4xl">
            Register
          </h1>
          <label className="daisy-input-group my-[7%] daisy-input-group-vertical">
            <span>username</span>
            <input
              type="text"
              placeholder="username"
              required
              ref={usernameRef}
              className="daisy-input daisy-input-bordered"
            />
          </label>
          <label className="daisy-input-group my-[7%] daisy-input-group-vertical">
            <span>password</span>
            <input
              type="password"
              placeholder="password"
              required
              ref={passwordRef}
              className="daisy-input daisy-input-bordered"
            />
          </label>
          <label className="daisy-input-group my-[7%] daisy-input-group-vertical">
            <span>Confirm Password</span>
            <input
              type="password"
              placeholder="password"
              required
              ref={passwordConfirmRef}
              className="daisy-input daisy-input-bordered"
            />
          </label>

          {/* Role Form */}
          <select
            className="select select-bordered w-full max-w-xs border-black border-2 rounded-md py-2 px-4"
            required
            ref={roleRef}
            name="role"
          >
            <option value="">Select Roles</option>
            <option value="student">student</option>
            <option value="instructor">instructor</option>
          </select>
          <button
            className="text-cyan-dark font-bold text-base bg-cyan-light rounded-full max-w-max px-[5%] py-[2%] my-[4%] hover:bg-cyan-dark hover:text-white transition-all duration-300 disabled:bg-grey-dark disabled:transition-none disabled:text-white"
            type="submit"
            disabled={isSubmitting}
          >
            Sign Up
          </button>
        </form>
        <div className="row justify-content-center mt-3">
          <div className="col-3 text-center">
            <Link
              href="login"
              className="text-dark underline-offset-1 hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
