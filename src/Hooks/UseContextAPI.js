import { useContext } from 'react';
import { myContextApi } from '../ContextAPI/ContextAPI';

const UseContextAPI = () => {
    return (
        useContext(myContextApi)
    );
};

export default UseContextAPI;