"use client";
import { useState } from "react";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { toast } from "react-toastify";

const BookingForm = () => {
  const [bookingData, setBookingData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.fullName.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;

    const data = {
      name,
      email,
      phone,
      address,
    };

    setBookingData(data);

    toast.success("Booking submitted successfully!", {
        position: "top-center",
    });
    e.target.reset();
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-4"
        render={(props) => (
          <form {...props} data-custom="foo" className="w-full" />
        )}
      >
        <TextField isRequired className="w-full" name="fullName">
          <Label>Full Name</Label>
          <Input className="w-full" placeholder="John Doe" />
          <Description>This field is required</Description>
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          className="w-full"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input className="w-full" placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField name="phone" type="tel" className="w-full">
          <Label>Phone</Label>
          <Input className="w-full" placeholder="+880 16434-35243" />
        </TextField>

        <TextField name="address" type="text" className="w-full">
          <Label>Address</Label>
          <Input className="w-full" placeholder="Enter your address" />
        </TextField>

        <div className="flex gap-2 w-full mt-4">
          <Button type="submit">
            <Check />
            Book Now
          </Button>
         
        </div>
      </Form>
    </>
  );
};

export default BookingForm;
