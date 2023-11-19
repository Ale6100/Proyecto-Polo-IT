import "./Contact.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import disabledButton from "../assets/disabledButton";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Button from "../components/Button";
import { useEffect } from "react";

const Contact = () => {

    useEffect(() => {
        document.title = "Polo IT - Contacto";
    }, [])

    /**
     * Muestra un mensaje exitoso o de error
     *
     * @param {string} text - El texto a mostrar en la notificación
     * @param {"error | success"} type - El tipo de notificación
     */
    const sendToast = (text, type) => toast[type](text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const handleSubmit = async (e) => {
        e.preventDefault()

        const form = e.target

        const button = form.lastChild

        const formData = new FormData(form)

        const name = formData.get("name")
        const email = formData.get("email")
        const phone = formData.get("phone")
        const message = formData.get("message")        

        if (!name || !email || !message) {
            return sendToast("Por favor, complete los campos requeridos", "error")
        }

        const body = {
            from: email,
            to: "alejandro_portaluppi@outlook.com", // "poloit@poloitbuenosaires.org.ar" //! No colocar el mail real del polo por el momento
            subject: `(Ignorar) - Formulario de contacto`,
            html: `
            <h2>Por favor, ignore este mail</h2>
            
            <p>Este mensaje ha sido enviado desde el formulario de contacto de <a href="https://proyecto-polo-it.netlify.app/" target="_blank" rel="noopener noreferrer">este</a> sitio web. </p>

            <p>El sitio se ha desarrollado con propósitos exclusivamente académicos como parte del proyecto "Aceleradora IT". Este proyecto involucra a egresados asociados con diversas empresas educativas, incluida EMPUJAR, a la cual nosotros (Grupo 7) pertenecemos.</p>

            <p>A continuación se mostrarán los datos introducidos</p>

            <div>
                <p>Nombre: ${name}</p>
                <p>Email: ${email}</p>
                <p>Teléfono: ${phone || "No propocionado (es el único campo opcional)"}</p>
                <p>Mensaje: ${message}</p>
            </div>
            `
        }

        disabledButton(button, true)
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/mail`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(res => res.json())

        if (res.status === "success") {
            sendToast("El mensaje ha sido enviado exitósamente", "success")
        } else {
            sendToast("Error, por favor intente de nuevo más tarde", "error")
        }
        disabledButton(button, false)
    }

    return (
        <section  className="section__contact-container">
            <div onSubmit={handleSubmit} className="section__contact-form">
                    <h1>Contacta con el Polo IT</h1>

                    <p>Completá los siguientes campos</p>

                    <form className="form-contact">
                        <div>
                            <label htmlFor="contact-name">Nombre<span>*</span></label>
                            <input type="text" id="contact-name" name="name" required />
                        </div>

                        <div>
                            <label htmlFor="contact-email">Email<span>*</span></label>
                            <input type="email" id="contact-email" name="email" required />
                        </div>

                        <div>
                            <label htmlFor="contact-phone">Teléfono</label>
                            <input type="number" id="contact-phone" name="phone" />
                        </div>

                        <div>
                            <label htmlFor="contact-message">Mensaje<span>*</span></label>
                            <textarea id="contact-message" name="message" required cols="30" rows="10"></textarea>
                        </div>

                        <Button contenido='Enviar' styleIdBtn='btn__submit-form' styleIdContainer='btn__submit-container'/>
                    </form>
                    <ToastContainer />
            </div>
            <div className="section__contact-info">
                <h2>Información adicional</h2>
                <p>Puedes ponerte en contacto directo con la empresa utilizando cualquiera de nuestras vías de comunicación o visitando nuestras oficinas centrales.</p>
                <div className="container__contact-icons">
                    <span><MdOutlineMail className="class-icons-contact"/>poloit@poloitbuenosaires.org.ar</span>
                    <span><FaWhatsapp className="class-icons-contact"/><a href="https://api.whatsapp.com/send/?phone=5491157826061&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="info-link">5491157826061</a></span>
                    <span><FaMapMarkerAlt className="class-icons-contact"/><a href="https://www.google.com/maps/place/Algarrobo+1041,+C1293ABA+CABA/@-34.658587,-58.4044062,13.5z/data=!4m10!1m2!2m1!1sAlgarrobo+1041+-+PB+Barco+B+++1293+CABA!3m6!1s0x95bccb1679eb4b7b:0xeeec132edf86aa0d!8m2!3d-34.6548332!4d-58.3794175!15sCidBbGdhcnJvYm8gMTA0MSAtIFBCIEJhcmNvIEIgICAxMjkzIENBQkGSARBnZW9jb2RlZF9hZGRyZXNz4AEA!16s%2Fg%2F11sk3lplgq?entry=ttu" className="info-link" target="_blank" rel="noreferrer">Algarrobo 1041 - PB Barco B 1293 CABA</a></span>
                </div>
            </div>
        </section>
    )
}

export default Contact
