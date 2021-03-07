import './index.css';

const Modal = (props) => {
    const { visible, children } = props;

    if (visible){
        return (
            <div className="landing-modal--container">
                <div className="landing-modal">
                    <div className="landing-modal--close-icon"></div>
                    {children}
                </div>
                <div className="landing-modal--overlay"></div>
            </div>
        );
    }
    return null;
}


export default Modal;




// return visible ? (
//     <div className="landing-modal--container">
//         <div className="landing-modal">
//             <div className="landing-modal--close-icon"></div>
//         </div>
//         <div className="landing-modal--overlay"></div>
//     </div>
// );
// null;
// }