import React, { useState } from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { logIn, signUp } from '../../actions/AuthAction';

const Auth = () => {
    const dispatch = useDispatch()
    const loading = useSelector((state)=>state.authReducer.loading)
    const [isSignUp, setIsSignUp] = useState(true);
    console.log(loading)
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        password: "",
        confirmpass: "",
        username: ""
    });

    const [confirmPass, setConfirmPass] = useState(true)
    const hadleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignUp) {
            data.password === data.confirmpass 
            ? dispatch(signUp(data)) 
            : setConfirmPass(false)
        } else
        {
            dispatch(logIn(data))
        }
    }

    const resetForm = () => {
        setConfirmPass(true);
        setData({
            firstname: "",
            lastname: "",
            password: "",
            confirmpass: "",
            username: ""
        });
    };
    return (
        <div className="Auth">
            {/* Left Side */}
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>Proyecto de verano</h1>
                    <h1>A FullStack</h1>
                    <h6>Explora vainas y movidas</h6>
                </div>
            </div>
            {/* Right Side */}
            <div className="a-right">
                <form className="infoForm authForm" onSubmit={handleSubmit}>
                    <h3>{isSignUp ? "Registro" : "Iniciar sesión"}</h3>

                    {isSignUp && (
                        <div>
                            <input
                                type="text"
                                placeholder="Nombre"
                                className="infoInput"
                                name="firstname"
                                onChange={hadleChange}
                                value={data.firstname}
                            />
                            <input
                                type="text"
                                placeholder="Apellido"
                                className="infoInput"
                                name="lastname"
                                onChange={hadleChange}
                                value={data.lastname}
                            />
                        </div>
                    )}

                    <div>
                        <input
                            type="text"
                            className="infoInput"
                            name="username"
                            placeholder="Usuario"
                            onChange={hadleChange}
                            value={data.username}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            className="infoInput"
                            name="password"
                            placeholder="Contraseña"
                            onChange={hadleChange}
                            value={data.password}
                        />
                        {isSignUp && <input
                            type="password"
                            className="infoInput"
                            name="confirmpass"
                            placeholder="Confirmar contraseña"
                            onChange={hadleChange}
                            value={data.confirmpass}
                        />}

                    </div>
                    <span style={{ display: confirmPass ? "none" : "block", color: "red", fontSize: "14px", alignSelf: "flex-end", marginRight: "5px" }}>
                        * Las contraseñas no coinciden
                    </span>
                    <div>
                        <span style={{ fontSize: "16px", cursor: "pointer" }} onClick={() => { setIsSignUp((prev) => !prev); resetForm() }}>
                            {isSignUp ? "¿Ya tienes una cuenta? Inicia sesión." : "¿No tienes una cuenta? Regístrate."}
                        </span>
                    </div>
                    <button className="button infoButton" type="submit"disabled={loading}>
                        {loading? "Cargando..." : isSignUp ? "Regístrate" : "Inicia sesión"}
                    </button>
                </form>
            </div>
        </div>
    );
};


export default Auth
