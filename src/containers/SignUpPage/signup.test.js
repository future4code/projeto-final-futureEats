import React from "react"
import { render, shallow } from "enzyme"
import SignUpPage from "./index"



describe("SignUpPage", () => {
     //const wrapper = render(<SignUpPage />);
     test('Shows error message when input search is empty.', () => {
        const wrapper = render(<SignUpPage />);
        expect(wrapper.find(TextField).props().value).to.equal('');
      });
}) 

