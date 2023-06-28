import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import * as z from "zod";
import { AnimatePresence, motion } from "framer-motion";
import { BiError } from "react-icons/bi";
import { useForm } from "react-hook-form";

import Button from "@components/custom/Button"
import Field from "@components/custom/form/Field"
import Alert from "@components/custom/Alert";
import { PATHS } from "@config/constants/paths";

type Props = {
    isLogin?: boolean,
}

const signupSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
});

type signupFormValues = z.infer<typeof signupSchema>

const loginSchema = signupSchema.omit({ name: true })

type loginFormValues = z.infer<typeof loginSchema>

const Form = ({ isLogin }: Props) => {
    // hooks
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState
    } = useForm<signupFormValues>({
        resolver: zodResolver(isLogin ? loginSchema : signupSchema)
    });

    const onSubmit = async (values: signupFormValues | loginFormValues) => {
        if (isLogin) {
            navigate(PATHS.DASHBOARD);
        } else {
            navigate(PATHS.AUTH + '?type=login')
        }
    }

    return (
        <AnimatePresence>
            <motion.form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 py-2 pt-10">
                {false && (
                    <Alert className='gap-2 mt-4'>
                        <BiError size={18} />
                        {''}
                    </Alert>
                )}
                {!isLogin && (
                    <motion.div initial={{ opacity: 0, translateX: -100 }} animate={{ opacity: 1, translateX: 0 }} exit={{ opacity: 0, translateX: -100 }}>
                        <Field error={formState.errors.name} id="name" {...register('name', { required: true })} label="Name" placeholder="Eg. John Doe" />
                    </motion.div>
                )}
                <Field error={formState.errors.email} id="email" {...register('email')} label="Email" placeholder="Eg. john@email.com" />
                <Field error={formState.errors.password} id="password" {...register('password')} type="password" name="password" label="Password" placeholder="********" />
                <Button>
                    {isLogin ? 'Log In' : 'Sign Up'}
                </Button>
            </motion.form>
        </AnimatePresence>
    )
}
export default Form