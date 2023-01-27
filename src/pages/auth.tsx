import { GetServerSideProps } from "next";
import { getServerAuthSession } from "server/auth";

import { AuthenticationButton } from "components/auth/button";

const Auth = () => {
  return (
    <div className="px-4">
      <div>Login</div>
      <AuthenticationButton
        authenticationProviderBgColor="#7289DA"
        authenticationProviderTextColor="#FFF"
        authenticationProviderLabel="Discord"
        authenticationProviderName="discord"
      />
    </div>
  );
};

export default Auth;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);

  if (session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return {
    props: {},
  };
};
