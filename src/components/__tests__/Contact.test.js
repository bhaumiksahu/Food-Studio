import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

test("contact load",()=>{
    render(<Contact/>);
    const heading = screen.getAllByRole("heading");
    expect(heading.length).toBe(2);
});