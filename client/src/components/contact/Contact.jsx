import {motion} from 'framer-motion';
import ContactCard from './ContactCard';


const Contact = ()=>{

    const option = {
        initial:{
            x: "-100%",
            opacity: 0
        },
        whileInView:{
            x: 0,
            opacity: 1
        }
    }

    return(
        <>
            <div className="home flex contact">
                <motion.span {...option} className='ms-5 bg-light p-4 rounded contact_form'>
                    <ContactCard />
                </motion.span>
            </div>
        </>
    );
}

export default Contact;