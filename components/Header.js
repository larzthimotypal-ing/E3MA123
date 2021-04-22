import {ReactComponent as Logo} from '../birb.svg'
const Header = ({title}) => {
    return (
        <header>
            <span className="title">{title}</span>
            <Logo/> 

        </header>
    )
}

export default Header
