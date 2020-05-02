import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

function Example(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <p style={{textAlign :"left", marginTop:"15px", fontSize:"2.5vmin", cursor:"pointer"}} variant="primary" onClick={handleShow}>
      <u>Consulta términos y condiciones</u>
      </p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Términos y Condiciones</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p style={{textAlign :"left",fontSize:"2.5vmin"}}>Para llevar a cabo las finalidades descritas en el presente Aviso de Privacidad, utilizaremos datos personales de identificación, contacto y laborales. Los datos personales que AtomicLabs recaba de usted, serán utilizados para las siguientes finalidades que son necesarias para ofrecer nuestros servicios:</p>
        <p style={{textAlign :"left",fontSize:"2.5vmin"}}> ● AtomicLabs requiere utilizar sus datos personales para incluirlo en la base de datos que utilizamos para prestar los servicios de reclutamiento, selección de personal, administración de nómina y prestación de servicios. AtomicLabs utilizará sus datos personales para evaluar si es posible colocarlo en las vacantes de empleo de la compañía o de los clientes de AtomicLabs y para conocer sus aptitudes, antecedentes y referencias laborales. En este sentido, AtomicLabs utilizará sus datos personales para ponerse en contacto con usted en relación a las vacantes para las cuales podría ser candidato.</p>
        <p style={{textAlign :"left",fontSize:"2.5vmin"}}>● AtomicLabs podría utilizar sus datos con fines de sondeo de satisfacción (en caso de ser cliente), estadístico (para conocer el origen de las visitas a nuestro sitio web) o de marketing por parte de nuestra empresa (en caso de suscribirse a alguno de nuestros avisos, newsletter o blog). </p>
        <p style={{textAlign :"left",fontSize:"2.5vmin"}}>● AtomicLabs no compartirá sus datos personales con terceros sin su previa autorización. </p>
        <p style={{textAlign :"left",fontSize:"2.5vmin"}}>● AtomicLabs podrá modificar, cambiar o actualizar el presente Aviso de Privacidad derivado de nuevos requerimientos legales, de nuestras propias necesidades por los servicios que ofrecemos, de nuestras prácticas de privacidad, de cambios a nuestro modelo de negocio o por otras causas. AtomicLabs se compromete a mantenerlo informado sobre los cambios, modificaciones o actualizaciones al Aviso de Privacidad.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
