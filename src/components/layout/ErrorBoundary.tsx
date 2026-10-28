import { Component, type ErrorInfo, type ReactNode } from "react";
import { Link } from "react-router-dom";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Aangan page error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container-narrow py-20 text-center sm:py-28">
          <p className="eyebrow text-espresso/45">Something went quiet</p>
          <h1 className="display-md mt-4">This page could not be shown.</h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-espresso/65">
            An unexpected error occurred. Return to the home page and try again.
          </p>
          <Link
            to="/"
            onClick={() => this.setState({ hasError: false })}
            className="btn btn-primary btn-sm mt-7"
          >
            Return home
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}
