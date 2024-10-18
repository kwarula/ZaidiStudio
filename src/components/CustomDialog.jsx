import React from 'react';
import { Dialog as ShadcnDialog } from "@/components/ui/dialog";

const CustomDialog = ({ children, ...props }) => {
  return (
    <>
      {props.open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" aria-hidden="true" />
      )}
      <ShadcnDialog {...props}>
        {children}
      </ShadcnDialog>
    </>
  );
};

export default CustomDialog;