import { convexAuth } from "@convex-dev/auth/server";
import Google from "@auth/core/providers/google"
import { Password } from "@convex-dev/auth/providers/Password";
import GitHub from "@auth/core/providers/github";

export const { auth, signIn, signOut, store } = convexAuth({
  providers: [GitHub, Google, Password],
});
