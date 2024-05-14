import {useState} from "react";
import styles from './promptform.modules.css';

export default function promptform(onSubmit) {

    const [prompt, setPrompt] = useState("");
    return(
        <form onSubmit={(e) => {
            e.preventDefault();

            if (prompt === ""){
                return;
            }

            onSubmit(prompt);
            setPrompt("");
            

        }}>
            <label>Question</label>
            <input className={styles.input} type ="text" value={prompt}  onChange={e => {
                setPrompt(e.target.value)
            }}/>
            <input className={styles.submitButton} type ="submit" disabled={isLoading}/>
            </form>
    );
}