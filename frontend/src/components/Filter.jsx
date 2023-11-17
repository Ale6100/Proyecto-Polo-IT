import { useEffect, useState } from "react";
import "./Filter.css";

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

const Filter = ({ setQueryParams, setPage }) => {
    const [formValues, setFormValues] = useState(estructuraFormLimpio)

    const [formLimpio, setFormLimpio] = useState(true);

    useEffect(() => {
        if (JSON.stringify(formValues) === JSON.stringify(estructuraFormLimpio)) {
            setFormLimpio(true);
        } else {
            setFormLimpio(false);
        }
    }, [formValues]);

    const filtrar = e => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
    
        let query = "";
    
        formData.forEach((value, key) => { // Construimos la variable query para luego pasarla al backend
            if (value !== "indistinto") {
                query += `&${key}=${value}`;
            }
            setFormValues(prev => {
                return {...prev, [key]: value }
            });
        });

        setPage(1);
        setQueryParams(query);
    };

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
        setPage(1);
        setQueryParams("");
    }

    return (
        <section className="container-filter">
            <h2>Categorías</h2>
                
            <form onSubmit={filtrar}>
                <h3>Filtros</h3>

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

                <div className="filter-container-buttons">
                    <button type="submit">Filtrar</button>
                    {
                        formLimpio || <button onClick={limpiar} type="reset">Limpiar</button>
                    }
                </div>
            </form>
        </section>
    )
};

export default Filter;
