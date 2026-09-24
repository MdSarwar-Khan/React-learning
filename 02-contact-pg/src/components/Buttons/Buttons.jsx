import { MdMessage } from 'react-icons/md'
import styles from './Buttons.module.css'

console.log(styles);

const Buttons = (props) => {
    return (
        <button className={styles.primary_btn}>
             {props.Icon && <props.Icon />}
             {props.text}
        </button>
    )
}

export default Buttons;