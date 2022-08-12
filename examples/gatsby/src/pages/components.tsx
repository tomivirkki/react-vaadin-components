import React from "react";
import {
  TextField,
  ComboBox,
  TextArea,
  Checkbox,
  VaadinIconset,
} from "react-vaadin-components";
import { countries } from "../data/countries";

export default function Page() {
  return (
    <section className="grid gap-xl items-start justify-center max-w-screen-md mx-auto pb-l px-l">
      <VaadinIconset />

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
    </section>
  );
}
