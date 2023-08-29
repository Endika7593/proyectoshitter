import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>Proyecto de verano</h1>
                    <h1>A FullStack</h1>
                    <h6>Explora vainas y movidas</h6>
                </div>
            </div>

            <LogIn />
        </div>
    );
};
function LogIn() {
    return (
        <div className="a-right">
            <form className="infoForm authForm">
                <h3>Log In</h3>

                <div>
                    <input
                        type="text"
                        placeholder="Usuario"
                        className="infoInput"
                        name="username"
                    />
                </div>

                <div>
                    <input
                        type="password"
                        className="infoInput"
                        placeholder="Contraseña"
                        name="password"
                    />
                </div>

                <div>
                    <span style={{ fontSize: "14px" }}>
                        ¿No tienes una cuenta? Regístrate.
                    </span>
                    <button className="button infoButton">Login</button>
                </div>
            </form>
        </div>
    );
};
function SignUp() {
    return (
        <div className="a-right">
            <form className="infoForm authForm">



                <h3>Registro</h3>

                <div>
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="infoInput"
                        name="name"
                    />
                    <input
                        type="text"
                        placeholder="Apellido"
                        className="infoInput"
                        name="lastname"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        className="infoInput"
                        name="username"
                        placeholder="Usuario"
                    />
                </div>

                <div>
                    <input
                        type="text"
                        className="infoInput"
                        name="password"
                        placeholder="Contraseña"
                    />
                    <input
                        type="text"
                        className="infoInput"
                        name="confirmpass"
                        placeholder="Confirmar contraseña"
                    />
                </div>

                <div>
                    <span style={{ fontSize: "16px" }}>¿Ya tienes una cuenta? Inicia sesión.</span>
                </div>
                <button className="button infoButton" tpe="submit">Regístrate</button>
            </form>
        </div>
    )
}

export default Auth
