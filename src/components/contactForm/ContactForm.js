import React, {useState} from "react";

const ContactForm = ({setDatos}) => {
    const [person, setPerson] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');

    const confirmContact = (event) => {
    event.preventDefault();

    const ObjContact = {
        person,
        lastName,
        email,
        tel

    }
    setDatos(ObjContact)
    setPerson('')
    setLastName('')
    setEmail('')
    setTel('')
}

    return (
        <div>
                <h3>Complete el formulario</h3>
                <form onSubmit={confirmContact}>
                    <div>
                        <div>
                            <input
                                placeholder="Ingrese Nombre"
                                type="text"
                                value={person}
                                name="nombre"
                                onChange={({target}) => setPerson(target.value)}
                            ></input>
                        </div>
                        <div>
                            <input
                                placeholder="Ingrese Apellido"
                                type="text"
                                value={lastName}
                                name="apellido"
                                onChange={({target}) => setLastName(target.value)}
                            ></input>
                        </div>
                        <div>
                            <input
                                placeholder="Ingrese E-mail"
                                type="text"
                                value={email}
                                name="email"
                                onChange={({target}) => setEmail(target.value)}
                            ></input>
                        </div>    
                        <div>
                            <input
                                placeholder="Confirme E-mail"
                                type="text"
                                value={email}
                                name="email"
                                onChange={({target}) => setEmail(target.value)}
                            ></input>
                        </div>    
                        <div>
                            <input
                                placeholder="Ingrese n° celular"
                                type="number"
                                value={tel}
                                name="celular"
                                onChange={({target}) => setTel(target.value)}
                            ></input>
                        </div>    

                    </div>
                    <div>
                        <button type="submit"> Confirmar </button>
                    </div>
                </form>
            </div>    
    )
}

export default ContactForm;