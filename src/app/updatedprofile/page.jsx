"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    console.log({ name, image });
    await authClient.updateUser({
      image,
      name
    });
    alert("Profile updated successfully!");
  };
 
  return (
    <Card className="shadow-md mx-auto w-125 py-5 mt-10 bg-slate-200">
      <h1 className="text-center text-2xl font-bold">Sign Up</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4 space-y-3" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Image URL" />
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit" variant="primary">
            <Check />
            Update
          </Button>
          <Button type="reset" variant="primary">
            Reset
          </Button>
        </div>
      </Form>
    </Card>
  );
};
export default SignUpPage;
