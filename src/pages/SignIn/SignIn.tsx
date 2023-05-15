// STYLES E ICONE
import './styles.scss';
import { GoogleLogo } from '@phosphor-icons/react'
// HOOKS
import { useState } from 'react'
// FIREBASE
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'
import { auth } from '../../services/firebase'

export default function SignIn() {
    const [user, setUser] = useState<User>({} as User)

    function handleGoogleSignIn() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="container">
            <div className='user'>
                {user.photoURL ? (
                    <img src={user.photoURL} alt="Foto usuário" />
                ) : ""}
                <strong>{user.displayName}</strong>
                <strong>{user.email}</strong>
            </div>

            <h1>Acesse sua conta</h1>
            <span>
                Utilizando autenticação social, por exemplo, autenticação com a Google você <br />
                facilita a vida do usuario permitindo utilizar sua aplicação sem fazer cadastro.
            </span>
            <button type="button" className="button" onClick={handleGoogleSignIn}>Entrar com Google
                <GoogleLogo /></button>
        </div>
    )
}