
      change = event=> {
        this.props.onChange({ [event.target.name]: event.target.value });
        this.setState({
          [event.target.name]: event.target.value
        });
      };
   
      validate = () => {
        let isError = false;
        const errors = {
          nameError: "",

        };
    
        if (this.state.name.length < 5) {
          isError = true;
          errors.nameError = "pelo menos 5 caracteres!";
        }
    
        this.setState({
          ...this.state,
          ...errors
        });
    
        return isError;
      };
