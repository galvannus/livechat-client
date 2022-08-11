

const FormMessage = () => {

    return(
        <div className="send_message">
            <form>
                <input type="text" placeholder="Type a message" className="input_message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
}

export default FormMessage;