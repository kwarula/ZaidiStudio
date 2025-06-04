import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

function CTA() {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate('/express#pricing-section')}
      className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg text-lg hover:bg-blue-100 transition-colors duration-300"
    >
      GET EXPRESS PACKAGE
    </Button>
  );
}

export default CTA;