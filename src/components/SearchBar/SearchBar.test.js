import React from "react"
import { render } from "enzyme"
import SearchBar from "./SearchBar"

describe("SearchBar", () => {
    it("SearchBar Snapshot", () => {
        const tree = render(<SearchBar />)
        expect(tree).toMatchSnapshot()
    })
})