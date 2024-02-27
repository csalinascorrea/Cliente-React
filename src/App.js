
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyDataTable from "./MyDataTable";

const React = require('react');
const { useState, useEffect } = require('react');

const elementosPorPagina = 4;

const App = () => {
    const [datos, setDatos] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);

    useEffect(() => {
        // Simulando una llamada a una API en localhost
        fetch('http://localhost:8080')
            .then(response => response.json())
            .then(data => setDatos(data))
            .catch(error => console.error('Error al obtener datos desde la API:', error));
    }, []);

    const totalPaginas = Math.ceil(datos.length / elementosPorPagina);

    const handlePaginaCambio = (pagina) => {
        setPaginaActual(pagina);
    };
    const handlePaginaAnterior = () => {
        setPaginaActual(prevPagina => Math.max(prevPagina - 1, 1));
    };

    const handlePaginaSiguiente = () => {
        setPaginaActual(prevPagina => Math.min(prevPagina + 1, totalPaginas));
    };

    return (
        <Container className="mt-4">
            <h2><center> TÍTULO</center></h2>
            <MyDataTable datos={datos} paginaActual={paginaActual} elementosPorPagina={elementosPorPagina} />
            <Pagination className="justify-content-center">
                <Pagination.Prev onClick={handlePaginaAnterior} disabled={paginaActual === 1} />
                {[...Array(totalPaginas)].map((_, index) => (
                    <Pagination.Item
                        key={index + 1}
                        active={index + 1 === paginaActual}
                        onClick={() => handlePaginaCambio(index + 1)}
                    >
                        {index + 1}
                    </Pagination.Item>
                ))}
                <Pagination.Next onClick={handlePaginaSiguiente} disabled={paginaActual === totalPaginas} />
            </Pagination>
        </Container>
    );
};

export default App;