export class Component<T> {
  private props: T;

  constructor(props: T) {
    this.props = props;
  }

  getProps = () => this.props;
}

const component = new Component({ a: 1, b: 2, c: 3 });

const result = component.getProps();
