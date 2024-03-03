import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

const ContactForm = () => {
  const { pending, data } = useFormStatus();

  return (
    <Button type="submit" className="w-full">
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
};

export default ContactForm;
