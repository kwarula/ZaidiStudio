
import React, { useEffect, useState } from 'react';
import { getCalApi } from "@calcom/embed-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const CTA = () => {
  const [isInviteDialogOpen, setIsInviteDialogOpen] = useState(false);
  const [inviteCode, setInviteCode] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"20-minute-consulting-call"});
      cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  const checkTemplateDownloads = () => {
    const downloads = localStorage.getItem('templateDownloads');
    return downloads ? JSON.parse(downloads).length > 0 : false;
  };

  const handleJoinDojo = () => {
    setIsInviteDialogOpen(true);
  };

  const handleInviteSubmit = (e) => {
    e.preventDefault();
    
    // Valid invite codes (you can modify these)
    const validCodes = ['DOJO2024', 'AIDOJO', 'ZAIDI2024', 'PREMIUM'];
    
    if (validCodes.includes(inviteCode.toUpperCase())) {
      // Valid invite code
      localStorage.setItem('dojoAccess', 'true');
      window.location.href = '/dojo';
    } else {
      // Invalid invite code - check if user has downloaded templates
      const hasDownloads = checkTemplateDownloads();
      
      if (hasDownloads) {
        toast({
          title: "Invalid Invite Code",
          description: "The invite code you entered is not valid. Please check and try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "No Access Yet",
          description: "You need to download at least one template from our Templates page before you can join the AI Dojo.",
          variant: "destructive",
        });
        
        // Redirect to templates page after a short delay
        setTimeout(() => {
          window.location.href = '/templates';
        }, 3000);
      }
    }
    
    setInviteCode('');
    setIsInviteDialogOpen(false);
  };

  return (
    <section className="py-20 px-6 md:px-12 text-center bg-blue-600 text-white">
      <h2 className="text-3xl font-bold mb-6">Ready to Crush Your Targets?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Stop letting outdated processes hold you back. Leverage the power of AI to automate, scale, and dominate your market.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <button
          data-cal-namespace="20-minute-consulting-call"
          data-cal-link="vincent-omondi/20-minute-consulting-call"
          data-cal-config='{"layout":"month_view"}'
          className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg text-lg hover:bg-blue-100 transition-colors duration-300"
        >
          Free 30-Minute Strategy
        </button>
        <button
          onClick={handleJoinDojo}
          className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-orange-600 transition-colors duration-300"
        >
          Join the AI Dojo
        </button>
      </div>
      <p className="mt-8 text-sm opacity-90">
        ZaidiStudio: Where businesses go from "just getting by" to crushing their targets every single day.
      </p>
      
      <Dialog open={isInviteDialogOpen} onOpenChange={setIsInviteDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>
            <DialogTitle>Join the AI Dojo</DialogTitle>
            <DialogDescription>
              Please enter your invite code to access the AI Dojo. Don't have one? Download a template first to become eligible!
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleInviteSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="inviteCode">Invite Code</Label>
              <Input
                id="inviteCode"
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value)}
                placeholder="Enter your invite code"
                required
              />
            </div>
            <DialogFooter className="flex gap-2">
              <Button type="button" variant="outline" onClick={() => setIsInviteDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                Join Dojo
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CTA;
