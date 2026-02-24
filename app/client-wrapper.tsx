import { useState } from "react";
import dynamic from "next/dynamic";

const ContactFormDialog = dynamic(
  () => import("@/components/contact/contact-form-dialog").then(m => m.ContactFormDialog),
  { ssr: false }
);

export default function ClientWrapper() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
  );
}
