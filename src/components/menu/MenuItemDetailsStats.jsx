

export const MenuItemDetailsStats = ({ stat, icon}) => {

    return(
        <div className="d-flex me-4">
            <i className={icon}></i>
            <p>{stat}</p>
        </div>
    )
}