import React from "react"
import { render } from "enzyme"
import HistoryCard from "."

describe("HistoryCard", () => {
    it("HistoryCard Snapshot", () => {
        const tree = render(<HistoryCard />)
        expect(tree).toMatchSnapshot()
    })
})