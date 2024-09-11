import router from 'next/router';
import React, { Component, ErrorInfo } from 'react';
import { Button } from './Button';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
 
    // Define a state variable to track whether is an error or not
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
 
    return { hasError: true }
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can use your own error logging service here
    console.log('ErrorBoundary caught an error ',{ error, errorInfo })
  }

  
  render() {
    const backHome = async() => {
      await router.push('/')
      await this.setState({ hasError: false })
    }

    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h2>Oops, something went wrong</h2>
          <Button bgColor="blue"
            type="button"
            onClick={backHome}
          >
            Try again?
          </Button>
        </div>
      )
    }
 
    // Return children components in case of no error
 
    return this.props.children
  }
}
 
export default ErrorBoundary

