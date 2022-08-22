import React from "react";
import type { ReactElement } from "react";
import {
  TextField,
  EmailField,
  Button,
  SplitLayout,
  HorizontalLayout,
  Grid,
  GridSortColumn,
  DatePicker,
  GridElement,
} from "react-vaadin-components";
import Layout from "../components/Layout";
import { users, User } from "../data/users";

function clone(user: User) {
  return { ...user, name: { ...user.name } };
}

function Page() {
  const [items, setItems] = React.useState<User[]>(users);

  const [editedItem, setEditedItem] = React.useState<User | null>(null);

  const activeItemChangedListener = ({
    detail,
  }: GridElement.GridActiveItemChangedEvent<User>) => {
    setEditedItem(detail.value ? clone(detail.value) : null);
  };

  return (
    <SplitLayout className="h-full">
      <div
        className="h-full"
        style={{ width: "calc(100% - 300px)" }}
        slot="primary"
      >
        <Grid
          className="h-full"
          items={items}
          itemIdPath="id"
          selectedItems={[editedItem]}
          onActiveItemChanged={activeItemChangedListener}
        >
          <GridSortColumn path="name.first" header="First name" width="140px" />

          <GridSortColumn path="name.last" header="Last name" width="140px" />

          <GridSortColumn path="email" width="270px" />

          <GridSortColumn path="phone" width="180px" />

          <GridSortColumn path="username" width="180px" />

          <GridSortColumn path="birthday" width="180px" />
        </Grid>
      </div>

      <div
        className="editor-layout flex flex-col"
        style={{ width: "300px" }}
        slot="secondary"
      >
        <div className="editor flex-grow p-l">
          <div className="flex flex-wrap gap-x-m">
            <TextField
              disabled={!editedItem}
              label="First Name"
              className="flex-grow"
              value={editedItem?.name?.first || ""}
              onValueChanged={(e) => {
                if (editedItem) editedItem.name.first = e.detail.value;
              }}
            />

            <TextField
              disabled={!editedItem}
              label="Last Name"
              className="flex-grow"
              value={editedItem?.name?.last || ""}
              onValueChanged={(e) => {
                if (editedItem) editedItem.name.last = e.detail.value;
              }}
            />
          </div>

          <div className="flex flex-wrap gap-x-m">
            <EmailField
              disabled={!editedItem}
              label="Email address"
              className="flex-grow"
              value={editedItem?.email || ""}
              onValueChanged={(e) => {
                if (editedItem) editedItem.email = e.detail.value;
              }}
            />

            <TextField
              disabled={!editedItem}
              label="Phone number"
              allowedCharPattern="[\d \-\+]"
              className="flex-grow"
              value={editedItem?.phone || ""}
              onValueChanged={(e) => {
                if (editedItem) editedItem.phone = e.detail.value;
              }}
            />
          </div>

          <div className="flex flex-wrap gap-x-m">
            <TextField
              disabled={!editedItem}
              label="User name"
              className="flex-grow"
              value={editedItem?.username || ""}
              onValueChanged={(e) => {
                if (editedItem) editedItem.username = e.detail.value;
              }}
            />

            <DatePicker
              disabled={!editedItem}
              label="Date of birth"
              className="flex-grow"
              value={editedItem?.birthday || ""}
              onValueChanged={(e) => {
                if (editedItem) editedItem.birthday = e.detail.value;
              }}
            />
          </div>
        </div>

        <HorizontalLayout theme="spacing padding" className="bg-contrast-5">
          <Button
            disabled={!editedItem}
            theme="primary"
            onClick={() => {
              setItems(
                items.map((item) =>
                  item.id === editedItem!.id ? clone(editedItem!) : item
                )
              );

              setEditedItem(null);
            }}
          >
            Save
          </Button>

          <Button
            disabled={!editedItem}
            theme="tertiary"
            onClick={() => setEditedItem(null)}
          >
            Cancel
          </Button>
        </HorizontalLayout>
      </div>
    </SplitLayout>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
