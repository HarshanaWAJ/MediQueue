import {useState} from 'react';

function useLoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    

    return {
    username,
    setUsername,
    password,
    setPassword,
  };
}
export default useLoginForm;