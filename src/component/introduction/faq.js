
import Button from '../base_component/button.js';
const Faq = ({title, click, faq, children, id}) => {
    return (
        <div>
            <Button val="" type="button" cls="button faq_button" click={() => click()}>
                <div>
                    <p>{title}</p>
                    <i className={faq == id ? 'bi bi-dash' : 'bi bi-plus'}></i>
                </div>
                {
                    faq != 0 &&
                        children
                }
            </Button>
            
        </div>
    );
}

export default Faq;