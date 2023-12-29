//generics in type arguments in arguments problem

export class Component<T> {
  private props: T;

  constructor(props: T) {
    this.props = props;
  }

  getProps = () => this.props;
}

const cloneComponent = <T>(component: Component<T>) => {
  return new Component(component.getProps());
};

const component = new Component({ a: 1, b: 2, c: 3, d: 22 });

const clonedComponent = cloneComponent(component);

const result = component.getProps();
