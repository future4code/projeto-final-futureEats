import {
    setError,
    setUser,
    createAddress,
} from './addressForm';

const mockUser = {
    "id": "De8UACSFgFySnKdXm5hI",
    "name": "Astrodev",
    "email": "astrodev@future4.com",
    "cpf": "111.111.111-11",
    "hasAddress": false
}

const user = {}

const error = {}

describe("AddressForm Action-creators", () => {

    test("Set User", () => {

        const expectedResult = {
            type: "SET_USER",
            payload:
            {
                user: { mockUser }
            }
        };

        const result = setUser(user);
        expect(expectedResult).toMatchObject(result);

    });

    test("Set Error", () => {

        const expectedResult = {
            type: "SET_ERROR",
            payload: error
        };

        const result = setError(error);
        expect(expectedResult).toMatchObject(result);
    });

});