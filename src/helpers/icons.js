import { 
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faSpinner,
    faPlusCircle,
    faPhone,
    faEnvelope,
    faMapMarkedAlt,
    faLock,
    faPlusSquare,
    faBlog
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";


const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faTrash, faSpinner, faPlusCircle, faPhone,
        faEnvelope, faMapMarkedAlt, faLock, faPlusSquare, faBlog);
}

export default Icons;