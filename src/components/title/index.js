import './index.css';

const Title = (props) => {
    const { title, color, fontSize, letterSpacing } = props;
    return (
        <h1 style= {{ color, fontSize, letterSpacing}} className="title"> {title} </h1>
    );
}

export default Title;