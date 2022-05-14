import { Component, ReactNode, ErrorInfo } from "react";

interface IProps {
  children: ReactNode | ReactNode[];
}

interface IState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: IState["error"], errorInfo: IState["errorInfo"]): void {
    this.setState({
      error,
      errorInfo,
    });
  }

  render(): ReactNode {
    const { error, errorInfo } = this.state;
    const { children } = this.props;

    if (errorInfo) {
      return (
        <div role="alert">
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>{error && error.toString()}</details>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
