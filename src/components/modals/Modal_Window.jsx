import ModalCloseButton from './modal_close_button';
import './Modal_Window.scss';


function ModalWindow({children}) {
    return (
        <>
            <div className="modal-wrapper" aria-modal="true"
                role="dialog" tabIndex="-1">
                <div className="inner">
                    <ModalCloseButton/>
                        {children}
                </div>
            </div>
        </>
    )
}

export default ModalWindow
