import React from 'react';
import { render, screen } from "@testing-library/react";
import ContactForm from './ContactForm.js';
import userEvent from '@testing-library/user-event';

test('renders without errors', ()=>{
    //Arrange: render our App component
    render(<ContactForm />);
    //Act: Get firstName, lastName, Email, and Message
    const firstNameInput = screen.getByLabelText(/firstName/i);
    const lastNameInput = screen.getByLabelText(/lastName/i)
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    //Type values into our input values
    userEvent.type(firstNameInput, "Edd");
    userEvent.type(lastNameInput, "Burke");
    userEvent.type(emailInput, "bluebill1049@hotmail.com");
    userEvent.type(messageInput, "Ed, Edd, and Eddy");
    //Push the Submit button 
    const button = screen.getByRole('button');
    userEvent.click(button);

    const newUser = screen.findByText("Eddy");
    // newUser 
    // .then(()=>{
        expect(newUser).toBeInTheDocument();
    });
})