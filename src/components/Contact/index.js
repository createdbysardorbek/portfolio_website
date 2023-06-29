import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import {useEffect, useRef, useState} from "react";
import emailjs from "@emailjs/browser"
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

function Contact() {
    const [letterClass, setLetterClass] = useState("text-animate");
    const refForm = useRef();

    useEffect(() => {
        return (setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 3000))
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_isksu6s', 'template_pyrq6e4', refForm.current, '6ew25X3vNQRzhjpa3')
            .then((result) => {
                alert("Message sent successfully!!")
                window.location.reload(false)
            }, (error) => {
                alert("Failed to send the message, please try again!")
            });
    };
    return (
        <>
            <div className={"container contact-page"}>
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
                            idx={15}
                            letterClass={letterClass}
                        />
                    </h1>
                    <p>
                        I'm interested in freelance opportunities - especially ambitious
                        or large projects. However, if you have other request or question,
                        don't hesitate to contact me using below form either.
                    </p>

                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className={"half"}>
                                    <input
                                        type="text"
                                        name={"from_name"}
                                        placeholder={"Name"}
                                        required
                                    />
                                </li>
                                <li className={"half"}>
                                    <input
                                        type="email"
                                        name={"email"}
                                        placeholder={"Email"}
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        type={"text"}
                                        placeholder={"Subject"}
                                        name={"subject"}
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        type="submit"
                                        className={"flat-button"}
                                        value={"SEND"}
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

            </div>
            <Loader type={"pacman"}/>
            <div className="info-map">
                Sardorbek Axadilloyev,
                <br/>
                Uzbekistan
                <br/>
                Mash'al, mash'al 119
                <br/>
                Kasan
                <br/>
                <span>
                    cr720051010@gmail.com
                </span>
            </div>
            <div className="map-wrap">
                <MapContainer center={[39.0379415, 65.5995656]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[39.0379415, 65.5995656]}>
                        <Popup>
                            Sardor lives here, come over for a cup of coffee :)
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </>
    )
}

export default Contact
