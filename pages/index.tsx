import Head from "next/head";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 2rem;
  width: 35%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
`;

const Input = styled.input`
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
  padding: 0.5rem;
  font-size: 1rem;
  margin-top: 0.25rem;
  width: 100%;
`;

const TextArea = styled.textarea`
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
  padding: 0.5rem;
  font-size: 1rem;
  margin-top: 0.25rem;
  width: 100%;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: #0d6efd;
  color: #fff;
  font-size: 1.25rem;
  font-weight: bold;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#0d6efd" : "#0c5eaf")};
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const EmailHelp = styled.div`
  font-size: 0.875rem;
  color: #6c757d;
`;

const PhoneHelp = styled.div`
  font-size: 0.875rem;
  color: #6c757d;
`;

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(name !== "" && email !== "" && message !== "");
  }, [name, email, message]);

  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <div>
          <div>
            <Form
              action="https://formsubmit.co/d06175677431cf5afa46137c84f92ce6"
              method="POST"
            >
              <FormGroup>
                <Label htmlFor="name">Full name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email address</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <EmailHelp>
                  We&apos;ll never share your email with anyone else.
                </EmailHelp>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="phone">Phone number</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <PhoneHelp>
                  We&apos;ll never share your phone number with anyone else.
                </PhoneHelp>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <TextArea
                  id="message"
                  name="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormGroup>

              <SubmitButton type="submit" disabled={!isValid}>
                Submit
              </SubmitButton>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
}
