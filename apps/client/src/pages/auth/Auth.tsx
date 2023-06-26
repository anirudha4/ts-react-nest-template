import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
// 
import Form from './Form';
import { Logo } from '@components/common';
import { PATHS } from '@config/constants/paths';
// assets
import background from '@assets/gradient-background.jpg';

const Auth = () => {
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const isLogin = query.get('type') !== 'signup'
    const reverseLink = isLogin ? `${PATHS.AUTH}?type=signup` : `${PATHS.AUTH}?type=login`;
    return (
        <div className="flex">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', duration: .7 }}
                className="col-span-1 h-screen flex flex-col justify-center px-20 max-w-[600px] w-full"
            >
                <Logo size='lg' />
                <div className="mt-10 flex flex-col gap-2">
                    <div className='text-lg tracking-wide font-medium text-secondary-foreground'>
                        {isLogin ? <>Sign in to your Account</> : <>Create Account</>}
                    </div>
                    <AnimatePresence>
                        <span
                            className='text-md text-secondary-foreground'>
                            {!isLogin ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    Already have an account? <Link
                                        className='text-primary font-medium hover:underline duration-150'
                                        to={reverseLink}
                                    >
                                        Log In
                                    </Link>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    Don't have an account? <Link
                                        className='text-primary font-medium hover:underline duration-150'
                                        to={reverseLink}
                                    >
                                        Sign Up
                                    </Link> for a free forever
                                </motion.div>
                            )}
                        </span>
                    </AnimatePresence>
                </div>
                <Form isLogin={isLogin} />
            </motion.div>
            <div className="flex-1 h-screen">
                <img className='h-full w-full' src={background} alt="" />
            </div>
        </div>
    )
}
export default Auth