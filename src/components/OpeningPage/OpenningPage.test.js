import React from "react"
import { render } from "enzyme"
import {OpeningPage} from "./OpeningPage"

describe("OpeningPage", () => {
    it("OpeningPage Snapshot", () => {
        const tree = render(<OpeningPage />)
        expect(tree).toMatchSnapshot()
    })
})