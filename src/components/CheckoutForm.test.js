import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";
import {screen} from '@testing-library/react';

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />)
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm />)

    const fName = screen.getByLabelText(/First Name:/i);
    const lName = screen.getByLabelText(/Last Name:/i);
    const addr = screen.getByLabelText(/Address:/i);
    const city = screen.getByLabelText(/City:/i);
    const state = screen.getByLabelText(/State:/i);
    const zipCode = screen.getByLabelText(/Zip:/i);
    const checkout = screen.getByRole("button");
    userEvent.type(fName, "Hamza");
    userEvent.type(lName, "Sajid");
    userEvent.type(addr, "123 Stone Dr");
    userEvent.type(city, "Miami");
    userEvent.type(state, "FL");
    userEvent.type(zipCode, "11111");
    userEvent.click(checkout);

    const checkoutMessage = screen.getByTestId('successMessage');
    expect(checkoutMessage).toBeInTheDocument();



});
