import { PATHS } from '@config/constants/paths'
import { BiSolidBolt } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
type Props = {
    variant?: 'sm' | 'md' | 'lg',
    full?: boolean
}

const LOGO_VARIANT_MAP = {
    sm: 20,
    md: 24,
    lg: 28
}
const Logo = ({ variant = 'md', full = true }: Props) => {
    return (
        <NavLink to={PATHS.HOME} className="flex items-center gap-1">
            <BiSolidBolt size={LOGO_VARIANT_MAP[variant]} className='text-primary' />
            {full && <div className="text-display font-extrabold text-xl text-primary tracking-wider">
                bolt
            </div>}
        </NavLink>
    )
}

export default Logo;