import React from "react"
import {render} from "enzyme"
import {RestaurantCard} from "./restaurantCard"

describe("RestaurantCard", () =>{
    it("RestaurantCard Snapshot", () =>{
        const tree = render(<RestaurantCard/>)
        expect(tree).toMatchSnapshot()
    })
})