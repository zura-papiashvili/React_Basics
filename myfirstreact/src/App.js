import React from "react";
import "./index.css";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: "",
      data: false,
    };
  }

  componentDidMount() {
    let uri = "/users/6";
    // let uri = "https://api.chucknorris.io/jokes/random";
    fetch(uri, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((result) => {
      result.json().then((resp) => {
        this.setState({ data: resp });
      });
    });
  }

  render() {
    const data = this.state.data;

    return (
      <div>
        {data ? (
          <div className="profile">
            <img src={data.avatar} alt="Logo" width="500px" />
            <p>{data.username}</p>
            <p>{data.email}</p>
          </div>
        ) : (
          <p>please wait</p>
        )}
      </div>
    );
  }
}

export default MyComponent;
