import { useEffect, useState } from "react";
import "./Filter.css";
import { useNavigate } from "react-router-dom";

const estructuraFormLimpio = {
    bigdata: "indistinto",
    cloud: "indistinto",
    testing: "indistinto",
    softwarepropio: "indistinto",
    softwarepropioverticales: "indistinto",
    softwareterceros: "indistinto",
    softwaretercerosverticales: "indistinto",
    asesoriait: "indistinto",
    mantenimiento: "indistinto",
    actividadesexterior: "indistinto",
    capacitacion: "indistinto",
    consultoria: "indistinto"
}

const Filter = ({ setQueryParams, filterVisible }) => {
    const [formValues, setFormValues] = useState(estructuraFormLimpio)

    const [formLimpio, setFormLimpio] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        if (JSON.stringify(formValues) === JSON.stringify(estructuraFormLimpio)) {
            setFormLimpio(true);
        } else {
            setFormLimpio(false);
        }
    }, [formValues]);

    const CrearRadio = ({p, name}) => {
        return (
            <div>
                <p>{p}</p>
                
                <div className="container-divInputs">
                    <div>
                        <input type="radio" name={name} id={`filter-${name}-si`} value="true" defaultChecked={formValues[name] === "true" || ""}/>
                        <label htmlFor={`filter-${name}-si`}>Si</label>
                    </div>

                    <div>
                        <input type="radio" name={name} id={`filter-${name}-no`} value="false" defaultChecked={formValues[name] === "false" || ""} />                        
                        <label htmlFor={`filter-${name}-no`}>No</label>
                    </div>

                    <div>
                        <input type="radio" name={name} id={`filter-${name}-indistinto`} value="indistinto" defaultChecked={formValues[name] === "indistinto" || ""} />                        
                        <label htmlFor={`filter-${name}-indistinto`}>Indistinto</label>
                    </div>                            
                </div>
            </div>            
        )
    }

    const limpiar = () => {
        setFormValues(estructuraFormLimpio);
        navigate(`/company/1`);
        setQueryParams("");
    }

    const changeFilter = e => {
        setFormValues(prev => {
            return {...prev, [e.target.name]: e.target.value }
        });

        let query = "";

        for (const [key, value] of Object.entries(formValues)) {
            if (e.target.name === key) {
                query += `&${key}=${e.target.value}`;
            } else {
                query += `&${key}=${value}`;
            }
        }

        navigate(`/company/1`);
        setQueryParams(query);        
    }

    return (
        <section className={`container-filter ${filterVisible ? "filter-visible" : ""}`}>
            <h2>Categorías</h2>
                
            <form onChange={changeFilter}>
                

                <div className="container-divs">
                    <h4>Análisis de datos</h4>

                    <CrearRadio p={"Big Data"} name={"bigdata"} />

                    <CrearRadio p={"Cloud"} name={"cloud"} />

                    <CrearRadio p={"Testing"} name={"testing"} />
                </div>

                <div className="container-divs">
                    <h4>Software Propio</h4>

                    <CrearRadio p={"Software Propio"} name={"softwarepropio"} />

                    <CrearRadio p={"Software Propio Verticales"} name={"softwarepropioverticales"} />
                </div>

                <div className="container-divs">
                    <h4>Software de Terceros</h4>

                    <CrearRadio p={"Software de Terceros"} name={"softwareterceros"} />

                    <CrearRadio p={"Software de Terceros Verticales"} name={"softwaretercerosverticales"} />
                </div>

                <div className="container-divs">
                    <h4>Sector IT</h4>

                    <CrearRadio p={"Asesoría IT"} name={"asesoriait"} />

                    <CrearRadio p={"Mantenimiento y Soporte"} name={"mantenimiento"} />
                </div>

                <div className="container-divs">
                    <h4>Otros</h4>

                    <CrearRadio p={"Actividades en el exterior"} name={"actividadesexterior"} />

                    <CrearRadio p={"Capacitación"} name={"capacitacion"} />

                    <CrearRadio p={"Consultoría"} name={"consultoria"} />
                </div>                
                
                {
                    formLimpio ||
                    <div className="filter-container-buttons">
                        <button onClick={limpiar} type="reset">Limpiar</button>
                    </div>
                }
            </form>
        </section>
    )
};

export default Filter;
