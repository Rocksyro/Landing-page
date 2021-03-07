import './index.css';
import Button from './../button';
import Title from './../title';
import Text from './../text';
import Modal from '../modal';

const ContentContainer = (props) => {
    return (
        <div className="content-container">
            <div className="content-container--title">
                <Title title="PRÓXIMA MENTE" color="black" fontSize="90px" letterSpacing="15px" />
                <Text text="¡Vamos a celebrar el lanzamiento de nuestro nuevo sitio!" color="black" fontSize="15px" letterSpacing="2px" />
                <Button buttonText="Notificarme"/>
                <Modal visible="true" />
            </div>
            
        </div>
    );
}

export default ContentContainer;
