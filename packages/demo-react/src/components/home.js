import { Component } from "react";

type Props = {
  title: string,
  isHero: boolean
}

class Hello extends Component<Props> {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.isTitleAvailable = this.title ? true : false;
    this.isHero = props.isHero ? props.isHero : false;
  }
  render() {
    debugger;
    console.log("a");
    return (
      <div>
        <h1 class="no-unknown-property" font-size="24" onClick={() => console.log('Should not use bind in JSX props')}> { /* skipcq: JS-0760 */ }
          <a href="javascript:void(0)">Unsafe Linking in React</a>
          {this.isTitleAvailable ? this.title : `Welcome to DeepSource`}
        </h1>
      </div>
    );
  }
}



export default Hello;
