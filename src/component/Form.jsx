import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            country: ''
        }
        this.onChangeValue = this.onChangeValue.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChangeValue(event) {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    submitForm(e) {
        e.preventDefault();
        const data = {
            city: this.state.city,
            country: this.state.country
        }
        this.props.loadWeather(e, data);
    }

    render() {
        return (
            this.formSubmit()
        );
    }

    formSubmit = () => {
        return (
            <div className="form myform">
                <div>{this.props.error ? error() : null}</div>
                <div className="row">
                    <div className="col-md-3">
                        <span className="label label-success mr-20">City</span>
                        <input type="text" className="form-control" name="city" placeholder="City" autoComplete="off" onChange={this.onChangeValue} />
                    </div>
                    <div className="col-md-3">
                        <span className="label label-success mr-20">Country</span>
                        <input type="text" className="form-control" name="country" placeholder="Country" autoComplete="off" onChange={this.onChangeValue} />
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-warning mr-10" onClick={this.submitForm} >Get Weather</button>
                    </div>
                </div>
            </div>
        )
    }
}

function error() {
        return (
            <div className="alert alert-warning error" role="alert">
                Please Enter City And Country
            </div>
        )
}
export default Form;