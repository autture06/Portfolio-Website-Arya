import { Link } from 'react-router-dom';
import x from '../assets/icons/x.svg';

const CloseButton = () => {
    return (
        <Link to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <img src={x} alt="Close" width={20} height={20} style={{ fill: "grey" }}/>
        </Link>
    );
};

export default CloseButton