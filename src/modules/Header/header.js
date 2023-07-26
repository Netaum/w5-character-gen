import { useTranslation } from 'react-i18next';
import Input from '../Input/input';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './header.css';

function Header() {
    const { t } = useTranslation();

    return (
        <Container className='inner-frame'>
            <Row className='header-text'>
                <Col md={2}>{t('header:name')}: </Col>
                <Col md={4}>
                    <Input name={t('header:name')} size={300} />
                </Col>
                <Col md={2}>{t('header:concept')}: </Col>
                <Col md={4}>
                    <Input name={t('header:name')} size={300} />
                </Col>
            </Row>
            <Row className='header-text'>
                <Col md={2}>{t('header:patron')}: </Col>
                <Col md={4}>
                    <Input name={t('header:name')} size={300} />
                </Col>
                <Col md={2}>{t('header:chronicle')}: </Col>
                <Col md={4}>
                    <Input name={t('header:name')} size={300} />
                </Col>
            </Row>
            <Row className='header-text'>
                <Col md={2}>{t('header:auspice')}: </Col>
                <Col md={4}>
                    <Input name={t('header:name')} size={300} />
                </Col>
                <Col md={2}>{t('header:tribe')}: </Col>
                <Col md={4}>
                    <Input name={t('header:name')} size={300} />
                </Col>
            </Row>
        </Container>
    );
}

export default Header;