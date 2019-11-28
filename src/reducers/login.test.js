import setTools from './login'

const mockUser = {
    "id": "De8UACSFgFySnKdXm5hI",
    "name": "Astrodev",
    "email": "astrodev@future4.com",
    "cpf": "111.111.111-11",
    "hasAddress": false
}

const user = {}

const error ={}

describe("Login Reducer", () => {
    test("Set User ", () => {

        const testAction = {

            type: "SET_USER",
            payload:
            {
                user: { mockUser }
            }
        }

        const newState = setTools(undefined, testAction);
        expect(newState.allLogins).toHaveLegth(1);
        expect(newState.allLogins[0].text).toMatchObject(user)
    });

    test("Set Error", () => {

        const expectedResult = {
            type: "SET_ERROR",
            payload: error
        };

        const newState = setError(error);
        expect(expectedResult).toMatchObject(result);
    });
});
