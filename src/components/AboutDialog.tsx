"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Github, Twitter } from "lucide-react";

type AboutDialogProps = {
  label: string;
  text: string;
};

const AboutDialog = ({ label, text }: AboutDialogProps) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size={"sm"}
          className="border-2 border-white text-white"
        >
          About
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[825px]">
        <DialogHeader>
          <DialogTitle className="flex gap-2 items-center">
            {label}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
            </svg>
          </DialogTitle>
          {/* <DialogDescription>
            Texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
          </DialogDescription> */}
        </DialogHeader>
        <ScrollArea className="h-[200px] w-full rounded-md border p-4">
          <p className="mt-2 leading-7">{text}</p>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default AboutDialog;
