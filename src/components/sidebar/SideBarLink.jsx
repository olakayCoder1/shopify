import { Link, useNavigate } from 'react-router-dom';

function SideBarLink({Icon , linkName, linkHref ,isActive }) {
  if(window.location.pathname === linkHref){
    console.log('active', linkName)
  }
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    navigate(`${linkHref}`); 
  };

  return (
    <li>
        <Link to={linkHref} onClick={handleClick}
            className={`${window.location.pathname === linkHref ? "text-blue-700 bg-blue-100": "text-gray-900 hover:bg-gray-100 "} flex items-center p-2 text-base font-medium  rounded  group"`}
        >
            <Icon className="w-5 h-5 group-hover:text-gray-900"/>
            <span className="ml-3">{linkName}</span>
        </Link>
        </li>
  )
}

export default SideBarLink
