import React from "react"
import {render} from "enzyme"
import {RestaurantCard} from "./RestaurantCard"

describe("RestaurantCard", () =>{
    it("RestaurantCard Snapshot", () =>{
        const tree = render(<RestaurantCard/>)
        expect(tree).toMatchSnapshot()
    })
})