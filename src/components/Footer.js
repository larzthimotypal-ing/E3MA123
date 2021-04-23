const Footer = ({text,urlSource,iconName,websiteSource}) => {
    return (
        <footer>
            <p className="first">{text}</p>
            <p><a className="icon-source" href={urlSource} target="_blank">{iconName}</a> by {websiteSource}</p>
        </footer>
    )
}

export default Footer