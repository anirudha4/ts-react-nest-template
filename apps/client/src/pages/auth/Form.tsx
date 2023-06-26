import Button from "@components/custom/Button"
import Field from "@components/custom/form/Field"
import { FormEvent } from "react"

type Props = {
    isLogin?: boolean
}
const Form = ({ isLogin }: Props) => {
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 py-2 pt-10">
            <Field id="email" name="email" label="Email" placeholder="Eg. john@email.com" />
            <Field type="password" id="password" name="password" label="Password" placeholder="********" />
            <Button>
                Log In
            </Button>
        </form>
    )
}
export default Form