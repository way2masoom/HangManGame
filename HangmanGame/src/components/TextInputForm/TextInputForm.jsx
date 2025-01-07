// Text Input Form

import Button from "../button/button";
import TextInput from "../TextInput/TextInput";

function TextInputForm() {
    return (
        <form>
            <div> <TextInput
                label={"Enter Word or Phase"}
                placeholder={"Enter your Word or Phase here ..."}

            /> </div>

            <div>
                <Button
                    styleType={"bg-warning"}
                    text={"Show/Hide"}
                />
            </div>

            <div>
                <Button
                    type={"submit"}
                    styleType={"primary"}
                    text={"Submit"}

                />
            </div>
        </form>
    )
}

export default TextInputForm;