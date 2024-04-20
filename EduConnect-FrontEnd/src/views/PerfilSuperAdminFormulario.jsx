import AlertIngresoDatos from '../components/AlertIngresoDatos'
import Aside from '../components/Aside'
import FormularioColegio from '../components/FormularioColegio'
import { Container, Col, Row } from 'react-bootstrap'

function PerfilSuperAdminFormulario () {
  return (
    <Container fluid lg={12} className='p-0'>
      <Row>
        <Col xs={3}>
          <Aside/>
        </Col>
        <Col xs={6}>
          <FormularioColegio />
        </Col>
        <Col xs={3}>
          <AlertIngresoDatos/>
        </Col>
      </Row>
    </Container>
  )
}

export default PerfilSuperAdminFormulario
