import React from 'react';
import { Table } from 'react-bootstrap';
import './App.css';

const MyDataTable = ({ datos, paginaActual, elementosPorPagina }) => {
    const indiceInicial = (paginaActual - 1) * elementosPorPagina;
    const datosPagina = datos.slice(indiceInicial, indiceInicial + elementosPorPagina);

    return (
        <Table  responsive striped bordered hover>
            <thead>
            <tr>
                <th>OC</th>
                <th>POS</th>
                <th>FECHA DOCUMENTO</th>
                <th>PROVEEDOR</th>
                <th>MATERIAL</th>
                <th>TEXTO BREVE</th>
                <th>CANTIDAD PEDIDO</th>
                <th>UM</th>
                <th>POR ENTREGAR (Cantidad)</th>
                <th>FECHA DE ENTREGA</th>
                <th>COMPRADOR</th>
                <th>UNIDAD MINERA</th>
                <th>STATUS</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>4200015680</td>
                <td>10</td>
                <td>29-09-2023</td>
                <td>SOLTRAK S.A.</td>
                <td>3073234</td>
                <td>LLANTA;27.00R49;RH-4A;223B;GOODYEAR</td>
                <td>6</td>
                <td>PZA</td>
                <td>6</td>
                <td>31-12-2023</td>
                <td>Dennis Castillo</td>
                <td>Minsur Pucamarca</td>
                <td>EN SEGUIMIENTO</td>
            </tr>

            <tr>
                <td>4200015680</td>
                <td>10</td>
                <td>29-09-2023</td>
                <td>SOLTRAK S.A.</td>
                <td>3073234</td>
                <td>LLANTA;27.00R49;RH-4A;223B;GOODYEAR</td>
                <td>6</td>
                <td>PZA</td>
                <td>6</td>
                <td>31-12-2023</td>
                <td>Dennis Castillo</td>
                <td>Minsur Pucamarca</td>
                <td>EN SEGUIMIENTO</td>
            </tr>

            <tr>
                <td>4200015680</td>
                <td>10</td>
                <td>29-09-2023</td>
                <td>SOLTRAK S.A.</td>
                <td>3073234</td>
                <td>LLANTA;27.00R49;RH-4A;223B;GOODYEAR</td>
                <td>6</td>
                <td>PZA</td>
                <td>6</td>
                <td>31-12-2023</td>
                <td>Dennis Castillo</td>
                <td>Minsur Pucamarca</td>
                <td>EN SEGUIMIENTO</td>
            </tr>

            <tr>
                <td>4200015680</td>
                <td>10</td>
                <td>29-09-2023</td>
                <td>SOLTRAK S.A.</td>
                <td>3073234</td>
                <td>LLANTA;27.00R49;RH-4A;223B;GOODYEAR</td>
                <td>6</td>
                <td>PZA</td>
                <td>6</td>
                <td>31-12-2023</td>
                <td>Dennis Castillo</td>
                <td>Minsur Pucamarca</td>
                <td>EN SEGUIMIENTO</td>
            </tr>
            <tr>
                <td>4200015680</td>
                <td>10</td>
                <td>29-09-2023</td>
                <td>SOLTRAK S.A.</td>
                <td>3073234</td>
                <td>LLANTA;27.00R49;RH-4A;223B;GOODYEAR</td>
                <td>6</td>
                <td>PZA</td>
                <td>6</td>
                <td>31-12-2023</td>
                <td>Dennis Castillo</td>
                <td>Minsur Pucamarca</td>
                <td>EN SEGUIMIENTO</td>
            </tr>

            {datosPagina.map(({id, name}) => (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};

export default MyDataTable;
