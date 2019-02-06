
import './button.scss';

const Button = ({
    click,
    cls,
    val,
    type,
    children
}) => {
    return (
        <button type={type} onClick={click} className={cls}>
            {children && children}{val}
        </button>
    );
}

export default Button;