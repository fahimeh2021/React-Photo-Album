import React from "react"
import { render, screen } from "@testing-library/react"
import Photos from "./photos"
import "@testing-library/jest-dom/extend-expect"
import userEvent from "@testing-library/user-event"

describe("<Photos />", () => {
    
    test("header render", () => {
        render (<Photos />);
        const headerEl = screen.getByTestId("header");
        expect(headerEl.textContent).toBe("album");
    });
    
    test("input render", () => {
        render (<Photos />);
    const inputEl = screen.getByTestId("searchBar");
    userEvent.type(inputEl, "test");
    
    expect(screen.getByTestId("searchBar")).toHaveValue("test");
    });
});


