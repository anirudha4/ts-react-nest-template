import { Link } from 'react-router-dom';
import { PATHS } from '@config/constants/paths';
// 
import Form from './Form';
import { Logo } from '@components/common';
// assets
import background from '@assets/gradient-background.jpg';

const Auth = () => {
    return (
        <div className="flex">
            <div className="col-span-1 h-screen flex flex-col justify-center px-20 max-w-[600px] w-full">
                <Logo size='lg' />
                <div className="mt-10 flex flex-col gap-2">
                    <div className='text-lg tracking-wide font-medium text-secondary-foreground'>Sign in to your account</div>
                    <span className='text-md text-secondary-foreground'>Don't have an account? <Link className='text-primary font-medium hover:underline duration-150' to={PATHS.AUTH}>Sign up</Link> for a free trial</span>
                </div>
                <Form isLogin />
            </div>
            <div className="flex-1 h-screen">
                <img className='h-full w-full' src={background} alt="" />
            </div>
        </div>
    )
}
export default Auth