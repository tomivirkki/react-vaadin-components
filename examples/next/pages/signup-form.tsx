import React from "react";
import type { ReactElement } from "react";
import {
  TextField,
  EmailField,
  Button,
  Checkbox,
  Notification,
  PasswordField,
  CustomField,
  Upload,
} from "react-vaadin-components";
import Layout from "../components/Layout";
import styles from "../styles/SignupForm.module.css";

function Page() {
  const [, updateState] = React.useState({});
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const form = React.useRef<HTMLFormElement>(null);

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [userHandle, setUserHandle] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [allowMarketing, setAllowMarketing] = React.useState(false);
  const [validatePassword, setValidatePassword] = React.useState(false);

  const passwordsEqual = password === passwordConfirm;
  const passwordErrorMessage =
    password.length < 5
      ? "Password must be at least 5 characters long"
      : "Both password fields must include the same value! Check that you have typed them correctly.";

  return (
    <section className={`max-w-screen-sm mx-auto px-l ${styles.form}`}>
      <h2 className="text-3xl">Signup</h2>

      <section>
        <form ref={form}>
          <div className={`grid grid-cols-2 gap-x-m ${styles.grid}`}>
            <TextField
              label="First Name"
              required
              value={firstName}
              onValueChanged={(e) => setFirstName(e.detail.value)}
            />

            <TextField
              required
              label="Last Name"
              value={lastName}
              onValueChanged={(e) => setLastName(e.detail.value)}
            />

            <TextField
              label="User handle"
              minlength={4}
              errorMessage="Handle can't be shorter than 4 characters"
              required
              value={userHandle}
              onValueChanged={(e) => setUserHandle(e.detail.value)}
            />
          </div>

          <EmailField
            required
            label="Email address"
            helperText="We will only contact you via email, never by phone or SMS"
            className="w-full"
            value={email}
            onValueChanged={(e) => setEmail(e.detail.value)}
          />

          <CustomField label="Avatar image" className="w-full">
            <Upload maxFiles={1} accept="image/*" />
          </CustomField>

          <CustomField
            className="w-full"
            invalid={validatePassword && !passwordsEqual}
            errorMessage={passwordErrorMessage}
          >
            <div className={`grid grid-cols-2 gap-x-m ${styles.grid}`}>
              <PasswordField
                label="Password"
                required
                minlength={5}
                value={password}
                onValueChanged={(e) => setPassword(e.detail.value)}
              />

              <PasswordField
                label="Password again"
                required
                minlength={5}
                value={passwordConfirm}
                onValueChanged={(e) => setPasswordConfirm(e.detail.value)}
              />
            </div>
          </CustomField>
        </form>

        <Checkbox
          label="Allow Marketing"
          onCheckedChanged={(e) => setAllowMarketing(e.detail.value)}
        />
      </section>

      <Button
        className="w-full mt-xl"
        theme="primary"
        onClick={() => {
          if (form.current?.reportValidity()) {
            // The form is valid, manually check if the passwords are equal
            if (passwordsEqual) {
              /* eslint-disable no-console */
              console.log("Registration data", {
                firstName,
                lastName,
                userHandle,
                email,
                password,
                allowMarketing,
              });

              Notification.show(
                `Registration successful! Check your email (${email}) for a confirmation link.`,
                {
                  theme: "success",
                }
              );
            } else {
              setValidatePassword(true);

              // It's possible the above alone doesn't trigger a re-render, so force it
              forceUpdate();
            }
          }
        }}
      >
        Join the community
      </Button>
    </section>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
