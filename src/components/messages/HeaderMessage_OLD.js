import { Fragment } from 'react';

const HeaderMessage = () => {

    return(
        <Fragment>
            <div className="header_chat">
                <div className="data_chat">
                    <h1>BENITO JUAREZ</h1>
                </div>
                <div className="message">
                    <p>Message from Benito Juarez</p>
                </div>
            </div>
        </Fragment>
    );
}

export default HeaderMessage;