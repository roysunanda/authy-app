// // "use client";

// import { signIn } from "@/../auth";
// import { Button } from "./ui/button";

// export function LoginForm() {
//   return (
//     <form
//       action={async (formData) => {
//         "use server";
//         await signIn("credentials", formData);
//       }}>
//       <label>
//         Username
//         <input name='username' type='text' />
//       </label>
//       <label>
//         Password
//         <input name='password' type='password' />
//       </label>

//       <Button>Sign In</Button>
//     </form>
//   );
// }

"use client";
import { signIn } from "next-auth/react";

export function LoginForm() {
  const credentialsAction = (formData: FormData) => {
    signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
    });
  };

  return (
    <form action={credentialsAction}>
      <label htmlFor='username'>
        Username
        <input type='username' id='username' name='username' />
      </label>
      <label htmlFor='password'>
        Password
        <input type='password' id='password' name='password' />
      </label>
      <input type='submit' value='Sign In' />
    </form>
  );
}
