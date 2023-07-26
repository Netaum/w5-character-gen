import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Fill from '../Fill/fill';
import './skill.css';

function Skill() {
    const { t } = useTranslation();

    return (
        <Container className='inner-frame'>
            <hr />
            <Row className='skill-fill'>
                <Col md={2} className='skill-label'>{t('skills:athletics')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="ath" shape="circle" /></Col>
                <Col md={2} className='skill-label'>{t('skills:animalKen')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="ake" shape="circle" /></Col>
                <Col md={2} className='skill-label'>{t('skills:academics')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="aca" shape="circle" /></Col>
            </Row>
            <Row className='skill-fill'>
                <Col md={2} className='skill-label'>{t('skills:brawl')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="bra" shape="circle" /></Col>
                <Col md={2} className='skill-label'>{t('skills:etiquette')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="eti" shape="circle" /></Col>
                <Col md={2} className='skill-label'>{t('skills:awareness')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="awa" shape="circle" /></Col>
            </Row>
            <Row className='skill-fill'>
                <Col md={2} className='skill-label'>{t('skills:craft')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="cra" shape="circle" /></Col>
                <Col md={2} className='skill-label'>{t('skills:insight')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="ins" shape="circle" /></Col>
                <Col md={2} className='skill-label'>{t('skills:finance')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="fin" shape="circle" /></Col>
            </Row>
            <Row className='skill-fill'>
                <Col md={2} className='skill-label'>{t('skills:driving')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="dri" shape="circle" /></Col>
                <Col md={2} className='skill-label'>{t('skills:intimidation')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="int" shape="circle" /></Col>
                <Col md={2} className='skill-label'>{t('skills:investigation')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="inv" shape="circle" /></Col>
            </Row>
            <Row className='skill-fill'>
                <Col md={2} className='skill-label'>{t('skills:firearms')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="fir" shape="circle" /></Col>
                <Col md={2} className='skill-label'>{t('skills:leadership')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="lea" shape="circle" /></Col>
                <Col md={2} className='skill-label'>{t('skills:medicine')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="med" shape="circle" /></Col>
            </Row>
            <Row className='skill-fill'>
                <Col md={2} className='skill-label'>{t('skills:larceny')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="lar" shape="circle" /></Col>
                <Col md={2} className='skill-label'>{t('skills:performance')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="per" shape="circle" /></Col>
                <Col md={2} className='skill-label'>{t('skills:occult')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="occ" shape="circle" /></Col>
            </Row>
            <Row className='skill-fill'>
                <Col md={2} className='skill-label'>{t('skills:melee')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="mel" shape="circle" /></Col>
                <Col md={2} className='skill-label'>{t('skills:persuasion')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="pes" shape="circle" /></Col>
                <Col md={2} className='skill-label'>{t('skills:politics')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="pol" shape="circle" /></Col>
            </Row>
            <Row className='skill-fill'>
                <Col md={2} className='skill-label'>{t('skills:stealth')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="ste" shape="circle" /></Col>
                <Col md={2} className='skill-label'>{t('skills:streetwise')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="str" shape="circle" /></Col>
                <Col md={2} className='skill-label'>{t('skills:science')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="sci" shape="circle" /></Col>
            </Row>
            <Row className='skill-fill'>
                <Col md={2} className='skill-label'>{t('skills:survival')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="sur" shape="circle" /></Col>
                <Col md={2} className='skill-label'>{t('skills:subterfuge')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="sub" shape="circle" /></Col>
                <Col md={2} className='skill-label'>{t('skills:technology')}</Col>
                <Col md={2} className='skill-fill-value'><Fill type='skills' traitId="tec" shape="circle" /></Col>
            </Row>
            
        </Container>
    );
}

export default Skill;

