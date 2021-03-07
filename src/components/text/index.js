import './index.css';

const Text = (props) => {
    const { text, color, fontSize, letterSpacing} = props;
    return (
        <p style= {{ color, fontSize, letterSpacing}} className='text'> 
        {text}</p>
    );
}

export default Text;