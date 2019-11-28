import axios from "axios";

export const createUserAction = (name,email,cpf,password) => async (dispatch) => {
	console.log(name,email,cpf,password)
	const token = ""
    const dados = {
		name,
		email,
		cpf,
		password,
	}
	const response = await axios.post(
        'https://us-central1-missao-newton.cloudfunctions.net/futureEats/signup', dados,
		{
			headers: {auth:token}
		}
	)

}