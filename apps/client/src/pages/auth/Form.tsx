import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AnimatePresence, motion } from "framer-motion";

import Button from "@components/custom/Button"
import Field from "@components/custom/form/Field"

type Props = {
    isLogin?: boolean,
}
const loginSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
});

type formValues = z.infer<typeof loginSchema>

const Form = ({ isLogin }: Props) => {
    const {
        register,
        handleSubmit,
        formState
    } = useForm<formValues>({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = (formValues: formValues) => {
        console.log(formValues);
    }

    return (
        <AnimatePresence>
            <motion.form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 py-2 pt-10">
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