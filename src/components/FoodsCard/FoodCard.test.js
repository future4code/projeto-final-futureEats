import React from "react"
import { render } from "enzyme"
import { FoodsCard } from "./FoodsCard"

describe("FoodsCard", () => {
    it("FoodsCard Snapshot", () => {
        const tree = render(<FoodsCard />)
        expect(tree).toMatchSnapshot()
    })
})