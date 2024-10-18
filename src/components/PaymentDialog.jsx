import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

const PaymentDialog = ({ open, onOpenChange, onPaymentVerified }) => {
  const [mpesaCode, setMpesaCode] = useState('');
  const { toast } = useToast();

  const handleVerifyPayment = (e) => {
    e.preventDefault();
    if (!mpesaCode) {
      toast({
        title: "Error",
        description: "Please enter the Mpesa code.",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically verify the payment with your backend
    console.log("Verifying payment with Mpesa code:", mpesaCode);

    toast({
      title: "Success!",
      description: "Payment verified. Your template is being downloaded.",
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
            <Button type="submit">Verify Payment</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;