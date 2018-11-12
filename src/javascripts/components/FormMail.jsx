import React from "react";
import PropTypes from "prop-types";

export default class FormMail extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { suffix, handleSubmit } = this.props;
    event.preventDefault();
    handleSubmit(`${this.state.value}${suffix}`);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { suffix } = this.props;

    return (
      <form className="form-mail" onSubmit={this.handleSubmit}>
        <div className="form-mail__input-group">
          <input
            className="form-mail__input-group__text"
            placeholder="john.doe"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <span className="form-mail__input-group__suffix">{suffix}</span>
        </div>
        <input
          className="form-mail__input-submit"
          type="submit"
          value="Submit"
          disabled={!this.state.value}
        />
      </form>
    );
  }
}

FormMail.propTypes = {
  suffix: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
};
