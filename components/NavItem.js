

const NavItem = ({itemNumber,text}) => {
    return (
        <div className={`nav-link nav-item${itemNumber}`}>
            <a>{text}</a>
        </div>
    )
}

export default NavItem
