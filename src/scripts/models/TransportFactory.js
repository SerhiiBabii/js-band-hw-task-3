import Ship from './Ship';
import Truck from './Truck';

class TransportFactory {
  create(type, ...args) {
    let transport = null;

    if (type === 'ship') {
      transport = new Ship(...args);
    } else if (type === 'truck') {
      transport = new Truck(...args);
    }
    return transport;
  }
}

export default TransportFactory;
