import React from "react";
import type { ReactElement } from "react";
import {
  TextField,
  EmailField,
  Button,
  ComboBox,
  TextArea,
  Checkbox,
  Select,
  Icon,
  PasswordField,
  VaadinIconset,
} from "react-vaadin-components";
import Layout from "../components/Layout";
import styles from "../styles/CheckoutForm.module.css";
import { countries } from "../data/countries";

function Page() {
  return (
    <section
      className={`grid gap-xl items-start justify-center max-w-screen-md mx-auto pb-l px-l ${styles.main}`}
    >
      <VaadinIconset />

      <section className="flex flex-col flex-grow">
        <h2 className="mb-0 mt-xl text-3xl">Checkout</h2>

        <p className="mb-xl mt-0 text-secondary">
          All fields are required unless otherwise noted
        </p>

        <section className="flex flex-col mb-xl mt-m">
          <p className="m-0 text-s text-secondary">Checkout 1/3</p>

          <h3 className="mb-m mt-s text-2xl">Personal details</h3>

          <TextField className="mb-s" label="Name" required />

          <EmailField className="mb-s" label="Email address" />

          <TextField
            className="mb-s"
            label="Phone number"
            pattern="[\d \-\+]+"
          />

          <Checkbox
            className="mt-s"
            label="Remember personal details for next time"
          />
        </section>

        <section className="flex flex-col mb-xl mt-m">
          <p className="m-0 text-s text-secondary">Checkout 2/3</p>

          <h3 className="mb-m mt-s text-2xl">Shipping address</h3>

          <ComboBox className="mb-s" label="Country" items={countries} />

          <TextArea
            className="mb-s"
            id="address"
            label="Street address"
            maxlength={200}
          />

          <div className="flex flex-wrap gap-m">
            <TextField
              className="mb-s"
              label="Postal code"
              maxlength={10}
              pattern="[\d \p{L}]*"
            />

            <TextField className="flex-grow mb-s" label="City" />
          </div>

          <Checkbox
            className="mt-s"
            label="Billing address is the same as shipping address"
          />

          <Checkbox label="Remember address for next time" />
        </section>

        <section className="flex flex-col mb-xl mt-m">
          <p className="m-0 text-s text-secondary">Checkout 3/3</p>

          <h3 className="mb-m mt-s text-2xl">Payment information</h3>

          <TextField
            className="self-stretch"
            label="Cardholder name"
            pattern="[\p{L} \-]+"
          />

          <div className="flex flex-wrap gap-m">
            <TextField
              className="flex-grow"
              label="Card number"
              pattern="[\d ]{12,23}"
            />

            <PasswordField
              label="Security code"
              maxlength={3}
              allowedCharPattern="[0-9]"
              helperText="What is this?"
            />
          </div>

          <div className="flex flex-wrap gap-m">
            <Select
              label="Expiration month"
              items={[...Array(12)].map((_, index) => ({
                label: `${index + 1}`,
                value: `${index + 1}`,
              }))}
            />

            <Select
              label="Expiration year"
              items={[...Array(6)].map((_, index) => ({
                label: `${new Date().getFullYear() + index}`,
                value: `${new Date().getFullYear() + index}`,
              }))}
            />
          </div>
        </section>

        <hr className="mb-xs mt-s mx-0" />

        <footer className="flex items-center justify-between my-m">
          <Button theme="tertiary-inline">Cancel order</Button>

          <Button theme="primary success">
            <Icon icon="vaadin:lock" slot="prefix" />
            Pay securely
          </Button>
        </footer>
      </section>

      <aside
        className={`bg-contrast-5 box-border p-l rounded-l sticky ${styles.aside}`}
      >
        <header className="flex items-center justify-between mb-m">
          <h3 className="m-0">Order</h3>

          <Button theme="tertiary-inline">Edit</Button>
        </header>

        <ul className="list-none m-0 p-0 flex flex-col gap-m">
          <li className="flex justify-between">
            <div className="flex flex-col">
              <span>Vanilla cracker</span>
              <span className="text-s text-secondary">
                With wholemeal flour
              </span>
            </div>

            <span>$7.00</span>
          </li>

          <li className="flex justify-between">
            <div className="flex flex-col">
              <span>Vanilla blueberry cake</span>
              <span className="text-s text-secondary">With blueberry jam</span>
            </div>

            <span>$8.00</span>
          </li>

          <li className="flex justify-between">
            <div className="flex flex-col">
              <span>Vanilla pastry</span>
              <span className="text-s text-secondary">
                With wholemeal flour
              </span>
            </div>

            <span>$5.00</span>
          </li>

          <li className="flex justify-between">
            <div className="flex flex-col">
              <span>Blueberry cheese cake</span>
              <span className="text-s text-secondary">With blueberry jam</span>
            </div>

            <span>$7.00</span>
          </li>
        </ul>
      </aside>
    </section>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
