import React from "react"
import { render } from "enzyme"
import Menu from "./Menu"

describe("RestaurantCard", () => {
    it("RestaurantCard Snapshot", () => {
        const tree = render(<Menu />)
        expect(tree).toMatchSnapshot()
    })
})