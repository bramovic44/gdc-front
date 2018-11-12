import React from "react";
import _ from "lodash";

import Section from "../components/Section";
import FormMail from "../components/FormMail";
import ResultList from "../components/ResultList";

const apiPartnerId = "test";
const apiPartnerSecret = "a9d131217a7c3ab9f9c2b7d43457d4a3";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultList: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(value) {
    if (!_.isEmpty(value)) {
      const uri = `https://gensdeconfiance.fr/api/member/check.json?apiPartnerId=${apiPartnerId}&apiPartnerSecret=${apiPartnerSecret}&query=${value}`;

      fetch(uri)
        .then(res => res.json())
        .then(
          result => {
            if (!_.isUndefined(result.success)) {
              const { resultList } = this.state;
              const item = {
                email: result.request.email,
                success: result.response.status === "member"
              };

              this.setState({ resultList: [item, ...resultList] });
            }
          },
          error => {
            console.log(error);
          }
        );
    }
  }

  render() {
    return (
      <main>
        <Section title="Enter Your Email Address" classname="section-form">
          <FormMail suffix="@gmail.com" handleSubmit={this.handleSubmit} />
          <div className="separator">or</div>
          <FormMail
            suffix="@gensdeconfiance.fr"
            handleSubmit={this.handleSubmit}
          />
        </Section>

        <Section title="Results" classname="section-result">
          <ResultList list={this.state.resultList} />
        </Section>
      </main>
    );
  }
}
