import client1 from '../../assets/images/Clients/client-1.png';
import client2 from '../../assets/images/Clients/client-2.png';
import client3 from '../../assets/images/Clients/client-3.png';
import client4 from '../../assets/images/Clients/client-4.png';
import client5 from '../../assets/images/Clients/client-5.png';
import client6 from '../../assets/images/Clients/client-6.png';
import client7 from '../../assets/images/Clients/client-7.png';
import client8 from '../../assets/images/Clients/client-8.png';

const Clients = () => {

    return (
        <section className="clients">
            <div className="clients__image"><img src={client1} alt="clients" /></div>
            <div className="clients__image"><img src={client2} alt="clients" /></div>
            <div className="clients__image"><img src={client3} alt="clients" /></div>
            <div className="clients__image"><img src={client4} alt="clients" /></div>
            <div className="clients__image"><img src={client5} alt="clients" /></div>
            <div className="clients__image"><img src={client6} alt="clients" /></div>
            <div className="clients__image"><img src={client7} alt="clients" /></div>
            <div className="clients__image"><img src={client8} alt="clients" /></div>
        </section>
    )
}

export default Clients;

