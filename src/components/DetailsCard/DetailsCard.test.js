import React from "react"
import { render } from "enzyme"
import DetailsCard from "./DetailsCard"

describe("DetailsCard", () => {
    it("DetailsCard Snapshot", () => {
        const tree = render(<DetailsCard />)
        expect(tree).toMatchSnapshot()
    })
})