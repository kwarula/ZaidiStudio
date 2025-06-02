import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const FlutterwavePayment = ({ 
  amount, 
  customerEmail, 
  customerPhone,
  customerName,
  onSuccess,
  onFailure,
  className
}) => {
  const { toast } = useToast();
  
  const config = {
    public_key: import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now().toString(),
    amount: amount,
    currency: 'KES',
    payment_options: 'card,mpesa,mobilemoney',
    customer: {
      email: customerEmail,
      phone_number: customerPhone,
      name: customerName,
    },
    customizations: {
      title: 'ZaidiStudio Payment',
      description: 'Payment for services',
      logo: '/logos/ZaidiStudio_icon.png',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const handlePayment = () => {
    handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        closePaymentModal();
        
        if (response.status === "successful") {
          toast({
            title: "Payment Successful! 🎉",
            description: "Thank you for your payment. Your transaction has been completed.",
          });
          onSuccess?.(response);
        } else {
          toast({
            title: "Payment Failed",
            description: "There was an issue processing your payment. Please try again.",
            variant: "destructive",
          });
          onFailure?.(response);
        }
      },
      onClose: () => {
        toast({
          title: "Payment Cancelled",
          description: "You've cancelled the payment. Feel free to try again when you're ready.",
        });
      },
    });
  };

  return (
    <Button 
      onClick={handlePayment}
      className={className}
    >
      Pay Now with Flutterwave
    </Button>
  );
};

export default FlutterwavePayment;