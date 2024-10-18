import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

const PaymentDialog = ({ open, onOpenChange, onPaymentVerified }) => {
  const [mpesaCode, setMpesaCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const { toast } = useToast();

  const handleVerifyPayment = async (e) => {
    e.preventDefault();
    if (!mpesaCode) {
      toast({
        title: "Error",
        description: "Please enter the Mpesa code.",
        variant: "destructive",
      });
      return;
    }
    
    setIsVerifying(true);
    
    // Simulate payment verification
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsVerifying(false);
    
    // Here you would typically verify the payment with your backend
    console.log("Verifying payment with Mpesa code:", mpesaCode);

    const wittyMessages = [
      "Great news! Your payment's been accepted faster than an AI can say 'Hello, World!'",
      "Cha-ching! Your transaction just flew through our digital pipes!",
      "Success! Your payment went through smoother than a robot's dance moves.",
      "Bingo! Your payment just got the green light faster than you can say 'artificial intelligence'.",
      "Woohoo! Your payment just got processed quicker than an AI can solve a Rubik's cube!"
    ];

    const randomWittyMessage = wittyMessages[Math.floor(Math.random() * wittyMessages.length)];

    toast({
      title: randomWittyMessage,
      description: "Check your email in the next 5 minutes for your template. It's probably racing through the internet as we speak!",
      duration: 6000,
    });

    onPaymentVerified();
    onOpenChange(false);
    setMpesaCode('');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Payment Instructions</DialogTitle>
          <DialogDescription>
            Please send KES 1,000 to Mpesa Till: 5476447
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleVerifyPayment} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="mpesaCode">Mpesa Code</Label>
            <Input
              id="mpesaCode"
              value={mpesaCode}
              onChange={(e) => setMpesaCode(e.target.value)}
              placeholder="Enter Mpesa code"
              required
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isVerifying}>
              {isVerifying ? 'Verifying...' : 'Verify Payment'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;