import { LoginForm } from "@/components/login-form";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className='min-h-screen'>
      <div className='overflow-hidden mx-auto w-full max-w-7xl'>
        <h1>Welcome to Authy!</h1>
        <p>This is a public page accessible to everyone.</p>
      </div>
    </div>
  );
}
