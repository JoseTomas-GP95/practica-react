import React from "react";

class FetchClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          data: data
        })
      );
  }

  render() {
    let guardar = this.state.data;
    console.log(guardar, "DATAAA");
    return (
      <div>
        {guardar.map((e) => e.name)}
        <br />
      </div>
    );
  }
}

export default FetchClass;
